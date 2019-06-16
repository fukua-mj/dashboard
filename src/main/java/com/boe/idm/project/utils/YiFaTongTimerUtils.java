package com.boe.idm.project.utils;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.PostConstruct;
/*import javax.mail.BodyPart;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMessage.RecipientType;
import javax.mail.internet.MimeMultipart;*/

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.boe.idm.project.service.impl.echart.*;

//30分钟跑一次，存在异发通往表里插，然后判断的时候会跟表里对比，存在的就不发了，还需要写一个定时任务删数据库里面的数据，以上

@Component
public class YiFaTongTimerUtils {

	/*@Autowired
	private EchartYiFaTongServiceImpl EchartYiFaTongServiceImpl;
	// 创建一个工具类对象
	private static YiFaTongTimerUtils yiFaTongTimerUtils;// 关键点1 静态初使化 一个工具类 这样是为了在spring初使化之前

	// 给Service类对象赋值，赋值为本类
	public void setyiFaTongTimerUtils(EchartYiFaTongServiceImpl EchartYiFaTongServiceImpl) {
		this.EchartYiFaTongServiceImpl = EchartYiFaTongServiceImpl;
	}

	@PostConstruct // 关键二 通过@PostConstruct 和 @PreDestroy 方法 实现初始化和销毁bean之前进行的操作
	@Scheduled(cron = "0 0/30 * * * ?")
	public void checkYiFaTongExit() throws Exception {
		yiFaTongTimerUtils = this;
		yiFaTongTimerUtils.EchartYiFaTongServiceImpl = this.EchartYiFaTongServiceImpl;// 初使化时将已静态化的testService实例化(未见过这种实例化方式，很新奇，未理解)

		int YiFaTong = 0;
		// 不确定长度所以使用了List
		List<String> ALLlistNowYield = new ArrayList<String>();
		List<String> ALLlistNowQTY = new ArrayList<String>();
		List<String> ALLlistStanderYield = new ArrayList<String>();
		List<String> ALLlistStanderQTY = new ArrayList<String>();
		List<String> ALLlistFactory = new ArrayList<String>();
		List<String> ALLlistDefectCode = new ArrayList<String>();
		List<String> ALLlistLocation = new ArrayList<String>();
		List<String> ALLlistProductionCategory = new ArrayList<String>();
		List<String> ALLlistProductionType = new ArrayList<String>();

		String[] ProductinType = { "Production", "TPCN", "PV" };
		String[] Oper_Desc = { "CUT", "Aging", "EAPP", "AET" };

		// List<Map<String, Object>> listdate =
		// yiFaTongTimerUtils.EchartYiFaTongServiceImpl.getmonthweekdaytimedata();

		// Get Time For Today or Yestoday
		String TodayDate = CheckTimeForYiFaTongMailFunction();// listdate.get(0).get("DATETIME").toString();

		// 判断，因为区分站点，所以使用了一个局部变量和一个全局变量
		for (int i = 0; i < Oper_Desc.length; i++) {// AET Special ， so -1
			// 不确定长度所以使用了List
			List<String> listNowYield = new ArrayList<String>();
			List<String> listNowQTY = new ArrayList<String>();
			List<String> listStanderYield = new ArrayList<String>();
			List<String> listStanderQTY = new ArrayList<String>();
			List<String> listFactory = new ArrayList<String>();
			List<String> listDefectCode = new ArrayList<String>();
			List<String> listLocation = new ArrayList<String>();
			List<String> listProductionCategory = new ArrayList<String>();
			List<String> listProductionType = new ArrayList<String>();

			int YiFaTongsub = 0;
			for (int j = 0; j < ProductinType.length; j++) {
				List<Map<String, Object>> listcategory = yiFaTongTimerUtils.EchartYiFaTongServiceImpl
						.getYiFaTongCategoryData("易发通", ProductinType[j], TodayDate, Oper_Desc[i]);
				for (int m = 0; m < listcategory.size(); m++) {

					String ProductCategory = listcategory.get(m).get("PRODUCTCATEGORY").toString();
					if (ProductCategory.equals("5.99QHD")) {
						break;
					}

					List<Map<String, Object>> list = yiFaTongTimerUtils.EchartYiFaTongServiceImpl
							.getYiFaTongGirdData("易发通", ProductinType[j], TodayDate, Oper_Desc[i], ProductCategory);
					List<Map<String, Object>> listQdata = yiFaTongTimerUtils.EchartYiFaTongServiceImpl
							.selectfromYIFATONG(Oper_Desc[i], ProductCategory);
					// 取值结束，进行比较
					for (int q = 0; q < list.size(); q++) {
						boolean isExit = false;
					   if(list.get(q).get("DESCRIPTION").toString().equals("亮点")||list.get(q).get("DESCRIPTION").toString().equals("多亮点(亮点≥2)")) {
							isExit = true;
						}else {
						    for (int p = 0; p < listQdata.size(); p++) {
							   if (list.get(q).get("DESCRIPTION").toString()
									.equals(listQdata.get(p).get("DEFECTCODE").toString())) {
								isExit = true;
								// 找到值了，进行对比 不良率和不良数
								// 实时不良率和不良数
								double NowYield = Double.parseDouble(list.get(q).get("DYIELD").toString()) * 100;
								double NowQTY = Double.parseDouble(list.get(q).get("TOTALQTY").toString());

								double StanderYield = Double
										.parseDouble(listQdata.get(p).get("NOTYIELD_NOW_Q").toString());
								double StanderQTY = Double
										.parseDouble(listQdata.get(p).get("NOTYIELD_QTY_Q").toString());

								// 基准不良率和不良数,未导入的产品类型会出现空值,所以直接取默认值上

								if (NowYield > StanderYield && NowQTY > StanderQTY) {

									// 判断是否在数据库中存在的DefectCode
									String FactoryName = listQdata.get(p).get("FACTORYNAME").toString();
									String DefectCode = list.get(q).get("DESCRIPTION").toString();
									List<Map<String, Object>> listCheck = yiFaTongTimerUtils.EchartYiFaTongServiceImpl
											.GetYiFaTongMailCheckDoNotSendData(Oper_Desc[i], FactoryName, DefectCode,
													ProductinType[j], ProductCategory, TodayDate);
									// >0 即存在了，所以不往List中添加
									if (listCheck.size() > 0) {

									} else {
										// 不存在即插入即可
										yiFaTongTimerUtils.EchartYiFaTongServiceImpl.insertintoYiFaTongMailHappendData(
												Oper_Desc[i], FactoryName, DefectCode, ProductinType[j],
												ProductCategory, TodayDate);
										// 异发通发生了，哈哈哈
										YiFaTong += 1;
										YiFaTongsub += 1;

										String NowYield1 = String.format("%.2f", NowYield);
										listNowYield.add(NowYield1);
										listNowQTY.add(Double.toString(NowQTY));
										listStanderYield.add(Double.toString(StanderYield));
										listStanderQTY.add(Double.toString(StanderQTY));
										listFactory.add(listQdata.get(p).get("FACTORYNAME").toString());
										listDefectCode.add(list.get(q).get("DESCRIPTION").toString());
										listLocation.add(Oper_Desc[i]);
										listProductionCategory.add(ProductCategory);
										listProductionType.add(ProductinType[j]);

										// 所有的List
										ALLlistNowYield.add(NowYield1);
										ALLlistNowQTY.add(Double.toString(NowQTY));
										ALLlistStanderYield.add(Double.toString(StanderYield));
										ALLlistStanderQTY.add(Double.toString(StanderQTY));
										ALLlistFactory.add(listQdata.get(p).get("FACTORYNAME").toString());
										ALLlistDefectCode.add(list.get(q).get("DESCRIPTION").toString());
										ALLlistLocation.add(Oper_Desc[i]);
										ALLlistProductionCategory.add(ProductCategory);
										ALLlistProductionType.add(ProductinType[j]);
									}
								}
								break;
							}
						}
					}
						if (!isExit) {
							double NowYield = Double.parseDouble(list.get(q).get("DYIELD").toString()) * 100;
							double NowQTY = Double.parseDouble(list.get(q).get("TOTALQTY").toString());

							double StanderYield = 0.5;
							double StanderQTY = 0;
							if (listQdata == null || listQdata.size() == 0) {
								StanderQTY = 2000;
							} else {
								StanderQTY = Double.parseDouble(listQdata.get(0).get("NOTYIELD_QTY_Q").toString());
							}

							if (NowYield > StanderYield && NowQTY > StanderQTY) {

								// 判断是否在数据库中存在的DefectCode
								String FactoryName = "DBNotExit";
								String DefectCode = list.get(q).get("DESCRIPTION").toString();
								List<Map<String, Object>> listCheck = yiFaTongTimerUtils.EchartYiFaTongServiceImpl
										.GetYiFaTongMailCheckDoNotSendData(Oper_Desc[i], FactoryName, DefectCode,
												ProductinType[j], ProductCategory, TodayDate);
								if (listCheck.size() > 0) {

								} else {
									// 不存在即插入即可
									yiFaTongTimerUtils.EchartYiFaTongServiceImpl.insertintoYiFaTongMailHappendData(
											Oper_Desc[i], FactoryName, DefectCode, ProductinType[j], ProductCategory,
											TodayDate);
									// 异发通发生了，哈哈哈
									YiFaTong += 1;
									YiFaTongsub += 1;
									String NowYield1 = String.format("%.2f", NowYield);

									listNowYield.add(NowYield1);
									listNowQTY.add(Double.toString(NowQTY));
									listStanderYield.add(Double.toString(StanderYield));
									listStanderQTY.add(Double.toString(StanderQTY));
									listFactory.add("未导入，取默认值(0.5%,2000)");
									listDefectCode.add(list.get(q).get("DESCRIPTION").toString());
									listLocation.add(Oper_Desc[i]);
									listProductionCategory.add(ProductCategory);
									listProductionType.add(ProductinType[j]);
									// 所有的List
									ALLlistNowYield.add(NowYield1);
									ALLlistNowQTY.add(Double.toString(NowQTY));
									ALLlistStanderYield.add(Double.toString(StanderYield));
									ALLlistStanderQTY.add(Double.toString(StanderQTY));
									ALLlistFactory.add("未导入，取默认值(0.5%,2000)");
									ALLlistDefectCode.add(list.get(q).get("DESCRIPTION").toString());
									ALLlistLocation.add(Oper_Desc[i]);
									ALLlistProductionCategory.add(ProductCategory);
									ALLlistProductionType.add(ProductinType[j]);
								}
							}
						}
					}
				}
			}
			// 转化为数组方便操作
			String[] NowYield = listNowYield.toArray(new String[listNowYield.size()]);
			String[] NowQTY = listNowQTY.toArray(new String[listNowQTY.size()]);
			String[] StanderYield = listStanderYield.toArray(new String[listStanderYield.size()]);
			String[] StanderQTY = listStanderQTY.toArray(new String[listStanderQTY.size()]);
			String[] Factory = listFactory.toArray(new String[listFactory.size()]);
			String[] DefectCode = listDefectCode.toArray(new String[listDefectCode.size()]);
			String[] Location = listLocation.toArray(new String[listLocation.size()]);
			String[] ProductCategory = listProductionCategory.toArray(new String[listProductionCategory.size()]);
			String[] ProductType = listProductionType.toArray(new String[listProductionType.size()]);

			if (YiFaTongsub > 0) {
				String Title = "异发通发生告知邮件";
				YiFaTongSendMail(Title, NowYield, NowQTY, StanderYield, StanderQTY, Factory, DefectCode, Location,
						Oper_Desc[i], TodayDate, ProductCategory, ProductType);
			} else {

			}

		}
		// 总和所有
		// 转化为数组方便操作,
		String[] NowYield = ALLlistNowYield.toArray(new String[ALLlistNowYield.size()]);
		String[] NowQTY = ALLlistNowQTY.toArray(new String[ALLlistNowQTY.size()]);
		String[] StanderYield = ALLlistStanderYield.toArray(new String[ALLlistStanderYield.size()]);
		String[] StanderQTY = ALLlistStanderQTY.toArray(new String[ALLlistStanderQTY.size()]);
		String[] Factory = ALLlistFactory.toArray(new String[ALLlistFactory.size()]);
		String[] DefectCode = ALLlistDefectCode.toArray(new String[ALLlistDefectCode.size()]);
		String[] Location = ALLlistLocation.toArray(new String[ALLlistLocation.size()]);
		String[] ProductCategory = ALLlistProductionCategory.toArray(new String[ALLlistProductionCategory.size()]);
		String[] ProductType = ALLlistProductionType.toArray(new String[ALLlistProductionType.size()]);

		if (YiFaTong > 0) {
			String Title = "异发通发生告知邮件";
			YiFaTongSendMail(Title, NowYield, NowQTY, StanderYield, StanderQTY, Factory, DefectCode, Location, "ALL",
					TodayDate, ProductCategory, ProductType);
		}
	}

	// 简单的时间判断，在今天8点之后认为是20点
	public String CheckTimeForYiFaTongMailFunction() {

		Date NowTime = new Date();
		Calendar calendar = Calendar.getInstance();

		int Hour = NowTime.getHours();
		String Time = "";
		// 当天时间八点
		Time = Integer.toString(calendar.get(Calendar.YEAR));
		//月份
		if (Integer.toString(calendar.get(Calendar.MONTH) + 1).length() < 2) {
			Time += "0" + Integer.toString(calendar.get(Calendar.MONTH) + 1);
		} else {
			Time += Integer.toString(calendar.get(Calendar.MONTH) + 1);
		}
		//日
		if (Integer.toString(calendar.get(Calendar.DAY_OF_MONTH)).length() < 2) {
			Time += "0" + Integer.toString(calendar.get(Calendar.DAY_OF_MONTH));
		} else {
			Time += Integer.toString(calendar.get(Calendar.DAY_OF_MONTH));
		}
		
		 * //当前时间在8点之后，20点，08~20 if(Hour>8) { Time =
		 * Integer.toString(calendar.get(Calendar.YEAR)); Time +=
		 * Integer.toString(calendar.get(Calendar.MONTH)+1);
		 * if(Integer.toString(calendar.get(Calendar.DAY_OF_MONTH)).length()<2) { Time
		 * += "0"+ Integer.toString(calendar.get(Calendar.DAY_OF_MONTH)); }else { Time
		 * += Integer.toString(calendar.get(Calendar.DAY_OF_MONTH)); } }else {//昨天20~08
		 * calendar.add(Calendar.DAY_OF_MONTH, -1);//时间减一天 Time =
		 * Integer.toString(calendar.get(Calendar.YEAR)); Time +=
		 * Integer.toString(calendar.get(Calendar.MONTH)+1);
		 * if(Integer.toString(calendar.get(Calendar.DAY_OF_MONTH)).length()<2) { Time
		 * += "0"+ Integer.toString(calendar.get(Calendar.DAY_OF_MONTH)); }else { Time
		 * += Integer.toString(calendar.get(Calendar.DAY_OF_MONTH)); } }
		 
		return Time;
	}

	// 邮件功能，传入 String[]进行调用
	public void YiFaTongSendMail(String title, String[] nowYield, String[] nowQTY, String[] standerYield,
			String[] standerQTY, String[] factory, String[] defectCode, String[] location, String Oper_Desc,
			String HappenedTime, String[] productCategory, String[] productType) throws Exception {

		String fromMail = "";
		String mail_smtp_host = "";
		String mail_smtp_portbeforechange = "";
		int mail_smtp_port = 25;
		String mailUser = "";
		String mailPass = "";
		String toMail = "";
		String toMailName = "";
		// String mail_for_DefaultBackMail = "";
		// String mail_for_DefaultBackName = "";

		List<Map<String, Object>> list = yiFaTongTimerUtils.EchartYiFaTongServiceImpl.getyifatongmaildata(Oper_Desc);

		StringBuffer tomail = new StringBuffer();
		StringBuffer tomailName = new StringBuffer();

		for (int i = 0; i < list.size(); i++) {
			tomail.append(list.get(i).get("MAILADDRESS").toString());
			tomail.append(";");
			tomailName.append(list.get(i).get("NAME"));
			tomailName.append(";");
		}
		
		 * tomail.append("huangyuhangcd@boe.com.cn;") ; tomailName.append("黄宇航;") ;
		 

		fromMail = "huangyuhangcd@boe.com.cn";
		toMail = tomail.toString();
		toMailName = tomailName.toString();
		mailUser = "huangyuhangcd@boe.com.cn";
		mailPass = "442894955hyh";
		mail_smtp_host = "smtp.boe.com.cn";
		mail_smtp_portbeforechange = Integer.toString(mail_smtp_port);
		mail_smtp_port = Integer.parseInt(mail_smtp_portbeforechange);

		Properties Prop = new Properties();
		// 配置邮件信息Prop
		Prop.setProperty("mail_smtp_host", mail_smtp_host);
		Prop.setProperty("mail_smtp_port", mail_smtp_portbeforechange);
		// 是否要求身份验证
		Prop.setProperty("mail.smtp.auth", "true");
		// 是否开启Debugge
		Prop.setProperty("mail.debug", "false");
		Prop.setProperty("mail.transport.protocol", "smtp");
		// 进入SendMail方法
		// SendMail(Prop);

		Session session = Session.getDefaultInstance(Prop);
		MimeMessage message = new MimeMessage(session);
		// 发件人
		message.setFrom(new InternetAddress(fromMail, "管理员", "utf-8"));
		// 邮件主题
		message.setSubject("异发通发生情况告知");
		// 邮件正文
		// message.setText("我是小沈阳啊，长的可爱又迷人，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦");
		// 收件人
		// 对多人邮件使用List划分后进行传输
		List<InternetAddress> list1 = new ArrayList<InternetAddress>();
		String toMailPerson[] = toMail.split(";");
		// 获得中文字符Name
		String Name[] = toMailName.split(";");
		for (int i = 0; i < toMailPerson.length; i++) {
			list1.add(new InternetAddress(toMailPerson[i], Name[i], "utf-8"));
		}
		InternetAddress[] addresses = list1.toArray(new InternetAddress[list1.size()]);

		message.setRecipients(RecipientType.TO, addresses);
		// 发送时间
		message.setSentDate(new Date());

		// 生成表格内容
		StringBuffer girddata = new StringBuffer();
		for (int i = 0; i < nowYield.length; i++) {
			// 转换一下产品类别
			String ProductionType = "";
			if (productType[i].equals("Production")) {
				ProductionType = "正式量产";
			} else if (productType[i].equals("Develop")) {
				ProductionType = "客户送样";
			} else if (productType[i].equals("Engineer")) {
				ProductionType = "工程验证";
			} else {
				ProductionType = productType[i];
			}

			girddata.append("<tr>");

			girddata.append("<td align='center'>");
			girddata.append(location[i].toString());
			girddata.append("</td>");
			girddata.append("<td align='center'>");
			girddata.append(factory[i].toString());
			girddata.append("</td>");
			girddata.append("<td align='center'>");
			girddata.append(ProductionType.toString());
			girddata.append("</td>");
			girddata.append("<td align='center'>");
			girddata.append(productCategory[i].toString());
			girddata.append("</td>");
			girddata.append("<td align='center'>");
			girddata.append(defectCode[i].toString());
			girddata.append("</td>");
			girddata.append("<td align='center'>");
			girddata.append(nowYield[i].toString() + "%");
			girddata.append("</td>");
			girddata.append("<td align='center'>");
			girddata.append(nowQTY[i].toString());
			girddata.append("</td>");
			girddata.append("<td align='center'>");
			girddata.append(standerYield[i].toString() + "%");
			girddata.append("</td>");
			girddata.append("<td align='center'>");
			girddata.append(standerQTY[i].toString());
			girddata.append("</td>");

			girddata.append("</tr>");

		}

		BodyPart messageBodyPart = new MimeBodyPart();

		HappenedTime = HappenedTime.substring(0, 4) + "年" + HappenedTime.substring(4, 6) + "月"
				+ HappenedTime.substring(6, 8) + "日";
		// 消息
		messageBodyPart.setContent("<p>异发通发生情况:</p>" +
		// "<h>发送时间："+new Date()+"</h>"+
				"<h>异发通发生时间：" + HappenedTime + "</h>" + "<table border='1'>" + "<tr>"
				+ "<th align='center'>站点</th><th align='center'>工厂</th><th align='center'>产品类型</th><th align='center'>产品型号</th><th align='center'>不良名</th><th align='center'>不良实时发生率</th><th align='center'>产品实时投入母数</th><th align='center'>基准不良率</th><th align='center'>基准投入母数</th>"
				+ "</tr>" + girddata.toString() + "</table>" + "<p>以上是系统通知邮件，请勿回复</p>" + "<p>以上，祝好！</p>",
				"text/html;charset=gbk");

		// 创建多重消息
		Multipart multipart = new MimeMultipart();

		// 设置文本消息部分
		// multipart.addBodyPart(messageBodyPart);

		// 附件部分
		// messageBodyPart = new MimeBodyPart();
		// String filename = "异发通发生告知.xlsx";
		// DataSource source = new FileDataSource("D:/异发通不良基准和不良母数信息模板.xlsx");
		// messageBodyPart.setDataHandler(new DataHandler(source));
		// messageBodyPart.setFileName(MimeUtility.encodeText(filename));
		multipart.addBodyPart(messageBodyPart);

		message.setContent(multipart);

		// 设置回复人(收件人回复此邮件时,默认收件人) ,设置后变邮件收条
		// message.setReplyTo(InternetAddress.parse("\"" + MimeUtility.encodeText("黄宇航")
		// + "\" <huangyuhangcd@boe.com.cn>"));
		// 设置优先级(1:紧急 3:普通 5:低)
		message.setHeader("X-Priority", "3");
		// 要求阅读回执(收件人阅读邮件时会提示回复发件人,表明邮件已收到,并已阅读)
		// message.setHeader("Disposition-Notification-To", fromMail);
		// 保存最终的邮件
		message.saveChanges();

		// 获得Transport实例对象
		Transport transport = session.getTransport();
		// 打开连接
		transport.connect(mail_smtp_host, mail_smtp_port, mailUser, mailPass);

		// 将message对象传递给transport对象，将邮件发送出去
		transport.sendMessage(message, message.getAllRecipients());
		// 关闭Transport对象
		transport.close();
	}

	@PostConstruct // 关键二 通过@PostConstruct 和 @PreDestroy 方法 实现初始化和销毁bean之前进行的操作
    @Scheduled(cron = " 0 0 8 ? * MON") // 每周一上午八点执行
	public void DeleteYiFaTongCheck() {
		yiFaTongTimerUtils = this;
		yiFaTongTimerUtils.EchartYiFaTongServiceImpl = this.EchartYiFaTongServiceImpl;// 初使化时将已静态化的testService实例化(未见过这种实例化方式，很新奇，未理解)

		String TodayDate = CheckTimeForYiFaTongMailFunction();
		yiFaTongTimerUtils.EchartYiFaTongServiceImpl.DeleteCheckYiFaTongHapendData(TodayDate);

	}*/

}
