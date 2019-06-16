package com.boe.idm.project.controller;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.EchartParam;
import com.boe.idm.project.model.YieldParam;
import com.boe.idm.project.service.EchartService;
import com.boe.utils.json.JsonUtils;
import com.boe.utils.special.MDLMachineOrder;

@RestController
@RequestMapping(value="/api/echart")
public class EchartController extends JsonUtils{

	private static final Logger log = LoggerFactory.getLogger(EchartController.class);
	
	@Autowired
	private EchartService echartReportService;
	
	@RequestMapping(value="/getyield")
	public void getyield(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam
			) throws Exception{
		List<Map<String, Object>> listYield = echartReportService.getYield(yieldParam.getShopName(), yieldParam.getOperationName(), yieldParam.getProductionType(), yieldParam.getProductCategory());
		List<Map<String, Object>> listDefect = echartReportService.getDefect(yieldParam.getShopName(), yieldParam.getOperationName(), yieldParam.getProductionType(),yieldParam.getProductCategory());
		List<Map<String, Object>> listDefectCategory = echartReportService.getDefectListByLine(yieldParam.getShopName(), yieldParam.getOperationName(), yieldParam.getProductionType(),yieldParam.getProductCategory());	
		List<Map<String, Object>> listDate=echartReportService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();
		List<Map<String, Object>> listDateFactory = echartReportService.getDateFactory();
		
		//xData from Calendar
		StringBuffer xData =new StringBuffer();
		xData.append("[");
		String[] arrXdataColumn=new String[]{"MONTH_2","MONTH_1","MONTH_0","","WEEK_3","WEEK_2","WEEK_1","WEEK_0","","DAY_6","DAY_5","DAY_4","DAY_3","DAY_2","DAY_1","DAY_0"};
		String[] arrxData=new String[arrXdataColumn.length];
		String[] arrDateFactory=new String[arrXdataColumn.length];
		for(int i=0;i<arrXdataColumn.length;i++){
			xData.append("'");
			if(!arrXdataColumn[i].equals("")){
				xData.append(listDate.get(0).get(arrXdataColumn[i]).toString());
				arrxData[i]=listDate.get(0).get(arrXdataColumn[i]).toString();
				arrDateFactory[i]=listDateFactory.get(0).get(arrXdataColumn[i]).toString();
			}
			else{
				xData.append("");
				arrxData[i]="";
				arrDateFactory[i]="";
			}
			xData.append("',");

		}
		xData.append("]");				
		
		//legendData
		StringBuffer legendData=new StringBuffer();
		String[] arrlegendData=new String[listDefectCategory.size()+1];
		legendData.append("['Yield',");
		arrlegendData[0]="Yield";
		for(int m=0;m<listDefectCategory.size();m++){
			if(listDefectCategory.get(m).get("DESCRIPTION")!=null){
				legendData.append("'");
				legendData.append(listDefectCategory.get(m).get("DESCRIPTION").toString());
				legendData.append("',");
				arrlegendData[m+1]=listDefectCategory.get(m).get("DESCRIPTION").toString();
			}
		}
		legendData.append("]");
		
		//series
		String[] DateType=new String[]{"MONTH","MONTH","MONTH","MONTH","WEEK","WEEK","WEEK","WEEK","WEEK","DAY","DAY","DAY","DAY","DAY","DAY","DAY"};
		StringBuffer series=new StringBuffer();
		series.append("[");
		StringBuffer seriesItem=new StringBuffer();
		//良率 SA SAT,好烦，之后再出个ST，S良率就恶心了
		//get SA Yield
		seriesItem.append("{name:'Yield',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show:true,position:'bottom',fontSize:'100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<listYield.size();m++){
				if (listYield.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(listYield.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(listYield.get(m).get("YIELD")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(listYield.get(m).get("YIELD").toString());
							seriesItem.append(",,'");
							seriesItem.append(arrxData[i]);
							seriesItem.append("',],");
							break;
						}
					}
				}				
			}
			if(!isExist){
				seriesItem.append("[");
				seriesItem.append(String.valueOf(i));
				seriesItem.append(",");
				//seriesItem.append(listYield.get(m).get("SA_YIELD").toString());
				seriesItem.append(",,'");
				seriesItem.append(arrxData[i]);
				seriesItem.append("',],");
			}
		}		
		seriesItem.append("]},");
		
		String[] arrDefectCategory=new String[listDefectCategory.size()];
		for(int i=0;i<listDefectCategory.size();i++){
			arrDefectCategory[i]=listDefectCategory.get(i).get("DESCRIPTION").toString();
		}
				
		//get Defect
		for(int i=0;i<arrDefectCategory.length;i++){
			boolean isDefectExist=false;
			seriesItem.append("{name:'"+arrDefectCategory[i]+"',type:'bar',stack:'1',barWidth:'50%',data:[");
			for(int m=0;m<arrDateFactory.length;m++){
				boolean isDateExist=false;
				for(int p=0;p<listDefect.size();p++){
					if (listDefect.get(p).get("DESCRIPTION").toString().equals(arrDefectCategory[i])) {
						isDefectExist=true;
						if(listDefect.get(p).get("DATETYPE").toString().equals(DateType[m])){
							if(listDefect.get(p).get("DATETIME").toString().equals(arrDateFactory[m])){
								isDateExist=true;
								seriesItem.append("[");
								seriesItem.append(String.valueOf(m));
								seriesItem.append(",");
								double dd=Double.parseDouble(listDefect.get(p).get("DEFECTRATIO").toString());
								seriesItem.append(String.format("%.2f", dd).toString());
								seriesItem.append(","+listDefect.get(p).get("TOTALQTY")+",'");
								seriesItem.append(arrxData[m]);
								seriesItem.append("',"+listDefect.get(p).get("DEFECTQTY")+"],");
								break;
							}
						}
						
					}
				}
				if(!isDateExist){
					seriesItem.append("[");
					seriesItem.append(String.valueOf(m));
					seriesItem.append(",");
					//seriesItem.append(listYield.get(m).get("SA_YIELD").toString());
					seriesItem.append(",,'");
					seriesItem.append(arrxData[m]);
					seriesItem.append("',],");
				}
			}
			seriesItem.append("]},");
		}
		
		//过货量
		seriesItem.append("{name:'过货量',type:'bar',yAxisIndex:2,xAxisIndex:1,color:'#C4C4C4',barWidth:'85%',label:{normal:{show: true,position:'inside',fontSize:'80%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<listYield.size();m++){
				if (listYield.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(listYield.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(listYield.get(m).get("IN_QTY")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							if(arrxData[i].equals("")){
								seriesItem.append(",0,''");
							}else {
								seriesItem.append(",1,"+listYield.get(m).get("IN_QTY").toString());
							}							
							seriesItem.append("],");
							break;
						}
					}
				}				
			}
			if(!isExist){
				seriesItem.append("[");
				seriesItem.append(String.valueOf(i));
				if(arrxData[i].equals("")){
					seriesItem.append(",0,'',");
				}
				else{
					seriesItem.append(",1,0,");
				}
				seriesItem.append("],");
			}
		}		
		seriesItem.append("]},");
				
		
		series.append(seriesItem.toString());
		series.append("]");
		
		
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("todaydate", todayDate);
		result.put("series", series.toString());
		result.put("legenddata", legendData.toString());
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}

	@RequestMapping(value="/getyieldProductCategory")
	public void getyieldProductCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		
	}	
	
	@RequestMapping("getOpt_productionInputOutput")
	public void getOpt_productionInputOutput(HttpServletRequest request, HttpServletResponse response) throws Exception{
		String shopName="BP";
		List<Map<String, Object>> list = echartReportService.getProduction(shopName);	
		List<Map<String, Object>> listDate = echartReportService.getProductionDate(shopName);
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		double currentDay = Double.parseDouble(listDate.get(0).get("CURRENTDAY").toString().substring(6));
		
		//xData
		StringBuffer xData=new StringBuffer();
		String xDataLabel = "'In  Out\\n";
		xData.append("[");
		for(int m=0;m<listDate.size();m++){
			String date=null;
			if(listDate.get(m).get("MONTH_2")!=null){
				date=listDate.get(m).get("MONTH_2").toString();
			}
			if(!xData.toString().equals("[")){
				xData.append(",");
			}
			xData.append(xDataLabel);
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("MONTH_1")!=null){
				date=listDate.get(m).get("MONTH_1").toString();
			}
			xData.append(",");
			xData.append(xDataLabel);
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("MONTH_0")!=null){
				date=listDate.get(m).get("MONTH_0").toString();
			}
			xData.append(",");
			xData.append(xDataLabel);
			xData.append(date);		
			xData.append("'");
			xData.append(",''");
			if(listDate.get(m).get("WEEK_3")!=null){
				date=listDate.get(m).get("WEEK_3").toString();
			}
			xData.append(",");
			xData.append(xDataLabel);
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("WEEK_2")!=null){
				date=listDate.get(m).get("WEEK_2").toString();
			}
			xData.append(",");
			xData.append(xDataLabel);
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("WEEK_1")!=null){
				date=listDate.get(m).get("WEEK_1").toString();
			}
			xData.append(",");
			xData.append(xDataLabel);
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("WEEK_0")!=null){
				date=listDate.get(m).get("WEEK_0").toString();
			}
			xData.append(",");
			xData.append(xDataLabel);
			xData.append(date);		
			xData.append("'");
			xData.append(",''");
			if(listDate.get(m).get("DAY_6")!=null){
				date=listDate.get(m).get("DAY_6").toString();
			}
			xData.append(",");
			xData.append(xDataLabel);
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_5")!=null){
				date=listDate.get(m).get("DAY_5").toString();
			}
			xData.append(",");
			xData.append(xDataLabel);
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_4")!=null){
				date=listDate.get(m).get("DAY_4").toString();
			}
			xData.append(",");
			xData.append(xDataLabel);
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_3")!=null){
				date=listDate.get(m).get("DAY_3").toString();
			}
			xData.append(",");
			xData.append(xDataLabel);
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_2")!=null){
				date=listDate.get(m).get("DAY_2").toString();
			}
			xData.append(",");
			xData.append(xDataLabel);
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_1")!=null){
				date=listDate.get(m).get("DAY_1").toString();
			}
			xData.append(",");
			xData.append(xDataLabel);
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_0")!=null){
				date=listDate.get(m).get("DAY_0").toString();
			}
			xData.append(",");
			xData.append(xDataLabel);
			xData.append(date);		
			xData.append("'");
		}
		xData.append("]");
		
		StringBuffer legendData=new StringBuffer();
		String[] productCategory=new String[list.size()];
		legendData.append("[");
		for(int i=0;i<list.size();i++){
			legendData.append("'");
			legendData.append(list.get(i).get("PRODUCTCATEGORY").toString());
			legendData.append("',");
			productCategory[i]=list.get(i).get("PRODUCTCATEGORY").toString();
		}
		legendData.append("]");
		String[] colIn=new String[]{"MONTH_2_IN","MONTH_1_IN","MONTH_0_IN","","WEEK_3_IN","WEEK_2_IN","WEEK_1_IN","WEEK_0_IN","","DAY_6_IN","DAY_5_IN","DAY_4_IN","DAY_3_IN","DAY_2_IN","DAY_1_IN","DAY_0_IN"};
		String[] colOut=new String[]{"MONTH_2_OUT","MONTH_1_OUT","MONTH_0_OUT","","WEEK_3_OUT","WEEK_2_OUT","WEEK_1_OUT","WEEK_0_OUT","","DAY_6_OUT","DAY_5_OUT","DAY_4_OUT","DAY_3_OUT","DAY_2_OUT","DAY_1_OUT","DAY_0_OUT"};
		StringBuffer seriesData=new StringBuffer();
		seriesData.append("[");
		//String itemIn="";
		//String itemOut="";
		for(int i=0;i<list.size();i++){
			StringBuffer inData=new StringBuffer();
			inData.append("[");
			StringBuffer outData=new StringBuffer();
			outData.append("[");
			if(list.get(i).get("PRODUCTCATEGORY").equals(productCategory[i])){
				for(int m=0;m<colIn.length;m++){
					if(colIn[m].equals("")){
						inData.append(",");
					}
					else{
						if(list.get(i).get(colIn[m]).toString().equals("0"))
						{
							inData.append(",");
						}
						else
						{
							if (m==2) {
								double week_0 = Double.parseDouble(list.get(i).get(colIn[m]).toString())/currentDay;
								inData.append(String.format("%.0f", week_0));
							} else {
								inData.append(list.get(i).get(colIn[m]).toString());
							}
							inData.append(",");
						}
					}
				}
				for(int m=0;m<colOut.length;m++){
					if(colOut[m].equals("")){
						outData.append(",");
					}
					else {
						if(list.get(i).get(colOut[m]).toString().equals("0"))
						{
							outData.append(",");
						}
						else
						{

							if (m==2) {
								double week_0 = Double.parseDouble(list.get(i).get(colOut[m]).toString())/currentDay;
								outData.append(String.format("%.0f", week_0));
							} else {
								outData.append(list.get(i).get(colOut[m]).toString());
							}
							outData.append(",");
						}
					}
				}
			}
			inData.append("]");
			outData.append("]");
			seriesData.append(String.format("{name:'%s', type:'bar',label: {normal: {show: true,position: 'inside'}},stack:'in',data:%s},",productCategory[i], inData));
			seriesData.append(String.format("{name:'%s', type:'bar',label: {normal: {show: true,position: 'inside'}},stack:'Out',data:%s},",productCategory[i], outData));
		}
		seriesData.append("]");
		
		String userName=new String();
		String userInfo=new String();
		try{
			if(request.getParameter("username")!=null){
				userName=request.getParameter("username");
				//userInfo=getUserinfo(userName);
				userInfo="BOECD Confidential@XX/n"+todayDate;
			}
		}catch (Exception e) {
			userInfo="BOECD Confidential@XX/n"+todayDate;
		}
				
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("productCount", String.valueOf(list.size()));
		//result.put("productIn", list_in.toString());
		//result.put("productOut", list_out.toString());
		result.put("legend", legendData.toString());
		result.put("xdata", xData.toString());
		result.put("today", todayDate);
		result.put("series", seriesData.toString());
		result.put("userinfo", userInfo);
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}

	}
	
	/**
	 * getUserInfo
	 * @throws Exception 
	 */
	public String getUserinfo(String userName) throws Exception{
		List<Map<String, Object>> userList = echartReportService.getUserinfo(userName);
		StringBuffer userInfo=new StringBuffer();
		userInfo.append("'BOECD Confidential@");
		userInfo.append(userName);
		userInfo.append("\\n");
		//if(userList.get(0).get("DESCRIPTION")!=null){
		//	userInfo.append(userList.get(0).get("DESCRIPTION").toString());
		//}
		
		List<Map<String, Object>> listDate=echartReportService.getProductionDate("nameStr");		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		userInfo.append(todayDate);
		userInfo.append("'");
		return userInfo.toString();
	}

	
	@RequestMapping("getOpt_eqpstateMonitor7days")	
	public void getOpt_eqpstateMonitor7days(HttpServletRequest request, HttpServletResponse response,
			@RequestBody EchartParam echartParam) throws Exception{
	
		String processType=echartParam.getProcessType();
		String lineName="";
		String lineName1 = "";
		if (!echartParam.getLineName().equals("ALL")) {
			if (processType.equals("MCU")||processType.equals("MBB")||processType.equals("MBP")||processType.equals("MPP")||processType.equals("MAP")) {
				lineName = echartParam.getLineName();
			}else if(!processType.equals("A_LAMI")){
				lineName = "LINE"+echartParam.getLineName().substring(3);
			}else {
				lineName = "LINE"+echartParam.getLineName().substring(6);
			}
		}else {
			lineName = "ALL";
			if (processType.equals("OCA")) {
				lineName1 = "7MOCA%";
			}else if (processType.equals("ASSY")) {
				lineName1 = "SCF%";
			}else if (processType.equals("A_LAMI")) {
				lineName1 = "7MOAL%";
			}else {
				lineName1 = processType+"%";
			}			
		}
		//String todayflag = request.getParameter("date");
		String date = echartParam.getDateTime();
		List<Map<String, Object>> listDate=echartReportService.getProductionDate("nameStr");
		String dateMin = date+"060000";
		String dateMax = "";
		if (dateMin.equals(listDate.get(0).get("STARTTIME").toString())) {
			dateMax = listDate.get(0).get("ENDTIME").toString();
		}else {
			String dateTemp = String.valueOf((Integer.parseInt(dateMin.substring(6, 8))+1));
			if (dateTemp.length()==1) {
				dateTemp="0"+dateTemp;
			}
			dateMax = dateMin.substring(0,6)+dateTemp+dateMin.substring(8);
		}
		List<Map<String, Object>> listDateyesterday = echartReportService.getDateFactory();
		
		/*List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();*/
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		List<Map<String, Object>> listMachine = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listState = new ArrayList<Map<String,Object>>();
		
		if (dateMin.substring(0, 8).equals(listDate.get(0).get("CURRENTDAY").toString())) {//今天
			list=echartReportService.geteqpStateMonitor2days(processType,lineName,lineName1,"Today",dateMin);
			listMachine=echartReportService.geteqpStateMonitorMachineList(processType,lineName,lineName1);	
			listState=echartReportService.geteqpStateMonitorStateList2days(processType,lineName,lineName1,"Today",dateMin);
		}else {//不是今天
			list=echartReportService.geteqpStateMonitor7days(processType,lineName,lineName1,dateMin,dateMax);
			listMachine=echartReportService.geteqpStateMonitorMachineList(processType,lineName,lineName1);	
			listState=echartReportService.geteqpStateMonitorStateList7days(processType,lineName,lineName1,dateMin,dateMax);
		}
		

		
		
		//Mahine List排序
		ArrayList<String> listMachineSorted = new ArrayList<String>();
		MDLMachineOrder machineTypeOrder = new MDLMachineOrder();
		String[] machineOrder = machineTypeOrder.getMDLMachineOrder(processType);
		if (!lineName.equals("ALL")&&!processType.equals("OCA")&&!processType.equals("MAP")) {
			for (int i = 0; i < machineOrder.length; i++) {
				for (int j = 0; j < listMachine.size(); j++) {
					if (listMachine.get(j).get("MACHINENAME").toString().contains(machineOrder[i])) {
						listMachineSorted.add(listMachine.get(j).get("MACHINENAME").toString());
						break;
					}
				}
			}
		} else {
			for (int i = 0; i < listMachine.size(); i++) {
				listMachineSorted.add(listMachine.get(i).get("MACHINENAME").toString());
			}
		}


		
		//时间稼动率
		String machineName=new String();
		String runRatio="时间稼动率：";
		if (!lineName.equals("ALL")) {
			if(processType.equals("OCA")||processType.equals("A_LAMI")){				
				for(int i=0;i<listMachineSorted.size();i++){
					machineName=listMachineSorted.get(i);
					List<Map<String, Object>> listRunRatio=new ArrayList<Map<String,Object>>();
					if (dateMin.substring(0, 8).equals(listDate.get(0).get("CURRENTDAY").toString())) {
						listRunRatio=echartReportService.geteqpStateMonitorRunRatio(machineName);
					}else {
						listRunRatio=echartReportService.geteqpStateMonitorRunRatio7day(machineName,date);
					}
					
					if(listRunRatio.size()!=0){
						runRatio=runRatio+machineName+"："+String.valueOf(Double.parseDouble(listRunRatio.get(0).get("RATIO").toString()))+"% ;";
					}
				}					
			}else {
				for(int i=0;i<listMachineSorted.size();i++){
					machineName=listMachineSorted.get(i);
					List<Map<String, Object>> listRunRatio=new ArrayList<Map<String,Object>>();
					if (dateMin.substring(0, 8).equals(listDate.get(0).get("CURRENTDAY").toString())) {
						listRunRatio=echartReportService.geteqpStateMonitorRunRatio(echartParam.getLineName());
					}else {
						listRunRatio=echartReportService.geteqpStateMonitorRunRatio7day(echartParam.getLineName(),date);
					}
					
					if(listRunRatio.size()!=0){
						runRatio=runRatio+String.valueOf(Double.parseDouble(listRunRatio.get(0).get("RATIO").toString()))+"%";
						break;
					}
				}
			}	
		}else {
			double runRatioTotal = 0;
			for (int i = 0; i < listMachine.size(); i++) {
				List<Map<String, Object>> listRunRatio = new ArrayList<Map<String,Object>>();
				if (dateMin.substring(0, 8).equals(listDate.get(0).get("CURRENTDAY").toString())) {
					listRunRatio = echartReportService.geteqpStateMonitorRunRatio(listMachine.get(i).get("MACHINENAME").toString());
				}else {
					listRunRatio=echartReportService.geteqpStateMonitorRunRatio7day(listMachine.get(i).get("MACHINENAME").toString(),date);
				}
				if (listRunRatio.size()!=0) {
					runRatioTotal +=Double.parseDouble(listRunRatio.get(0).get("RATIO").toString());
				}
			}
			runRatioTotal=runRatioTotal/listMachine.size();
			runRatio=runRatio+String.format("%.2f", runRatioTotal)+"%" ;
		}
	
		if(runRatio.equals("时间稼动率：")){
			runRatio="时间稼动率：0%";
		}
		
		//get yData
		StringBuffer yData=new StringBuffer();
		String[] arryData=new String[listMachineSorted.size()];
		yData.append("[");
		for(int i=0;i<listMachineSorted.size();i++){
			if(listMachineSorted.get(i)!=null){
				yData.append("'"+listMachineSorted.get(i)+"',");
				arryData[i]=listMachineSorted.get(i);
			}
		}
		yData.append("]");
		
		//get LegendData
		StringBuffer legendData=new StringBuffer().append("[");
		for(int i=0;i<listState.size();i++){
			if(listState.get(i).get("MACHINESTATENAME")!=null){
				legendData.append("'"+listState.get(i).get("MACHINESTATENAME").toString()+"',");
			}
		}
		legendData.append("]");
		
		//get 横坐标时间起始值
		String yesterdayDate = listDateyesterday.get(0).get("DAY_1").toString();
		String todayDate=listDate.get(0).get("CURRENTDAY").toString();
		String tomorrowDate=listDate.get(0).get("ENDTIME").toString().substring(0, 8);
		StringBuffer startTime=new StringBuffer();
		StringBuffer endTime=new StringBuffer();
		startTime.append("new Date(\""+dateMin.substring(0,4)+"/"+dateMin.substring(4,6)+"/"+dateMin.substring(6,8)+"/06:00:00\")");
		endTime.append("new Date(\""+dateMax.substring(0,4)+"/"+dateMax.substring(4,6)+"/"+dateMax.substring(6,8)+"/06:00:00\")");
		
		//get series
		ArrayList<String>[] stateListAll=new ArrayList[listMachineSorted.size()];
		ArrayList<String>[] timeListAll=new ArrayList[listMachineSorted.size()];//结束时间
		ArrayList<String>[] timeListAllStart=new ArrayList[listMachineSorted.size()];//开始时间
		ArrayList<String>[] timeListAllDifference=new ArrayList[listMachineSorted.size()];
		ArrayList<String>[] reasonCodeListAll=new ArrayList[listMachineSorted.size()];
		ArrayList<String>[] machineStateCommentListAll=new ArrayList[listMachineSorted.size()];
		int[] stateCount=new int[listMachineSorted.size()];		
		for(int i=0;i<listMachineSorted.size();i++){
			StringBuffer seriesData=new StringBuffer();
			ArrayList<String> stateList=new ArrayList<String>();
			ArrayList<String> timeListStart=new ArrayList<String>();
			ArrayList<String> timeListEnd=new ArrayList<String>();
			ArrayList<String> timeListDifference=new ArrayList<String>();
			ArrayList<String> reasonCodeList=new ArrayList<String>();
			ArrayList<String> machineStateComment = new ArrayList<String>();
			SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
			SimpleDateFormat sDateFormat=new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
			for(int p=0;p<listMachineSorted.size();p++){
				seriesData.append(",");
			}
			for(int m=0;m<list.size();m++){
				if(list.get(m).get("MACHINENAME").toString().equals(arryData[i])){
					stateList.add(list.get(m).get("MACHINESTATENAME").toString());
					timeListStart.add(list.get(m).get("EVENTTIME").toString());
					if (list.get(m).get("REASONCODE")!=null) {
						reasonCodeList.add(list.get(m).get("REASONCODE").toString());
					} else {
						reasonCodeList.add("null");
					}
					if (list.get(m).get("MACHINESTATECOMMENT")!=null) {
						machineStateComment.add(list.get(m).get("MACHINESTATECOMMENT").toString());
					} else {
						machineStateComment.add("null");
					}
				}
			}
			if (dateMin.substring(0, 8).equals(listDate.get(0).get("CURRENTDAY").toString())) {//今天
				timeListEnd.add(listDate.get(0).get("LAST_UPDATE_DATE").toString());//表中的设备状态和时间其实是错位了的
			}else {//不是今天
				timeListEnd.add(dateMax.substring(0,4)+"-"+dateMax.substring(4,6)+"-"+dateMax.substring(6,8)+" 06:00:00.0");
			}
			
			for(int p=0;p<timeListStart.size()-1;p++){
				timeListEnd.add(timeListStart.get(p));
			}			
			for(int q=0;q<timeListStart.size();q++){
				Date dateStart=null;
				Date dateEnd=null;
				try {
					dateStart=simpleDateFormat.parse(timeListStart.get(q));
					dateEnd=simpleDateFormat.parse(timeListEnd.get(q));
					long diff=dateEnd.getTime()-dateStart.getTime();//获取微秒差值
					long days=diff/(1000*60*60*24);
					long hours=(diff-days*(1000*60*60*24))/(1000*60*60);
					long minutes=(diff-days*(1000 * 60 * 60 * 24)-hours*(1000* 60 * 60))/(1000* 60);
					long seconds=(diff-days*(1000 * 60 * 60 * 24)-hours*(1000* 60 * 60)-minutes*(1000*60))/(1000);
					String timeDifference=String.valueOf(hours)+"小时"+String.valueOf(minutes)+"分钟"+String.valueOf(seconds)+"秒";
					timeListDifference.add(timeDifference);
				} catch (Exception e) {
					// TODO: handle exception
				}
			}

			
			stateCount[i]=stateList.size();
			timeListAll[i]=timeListEnd;
			timeListAllStart[i]=timeListStart;
			stateListAll[i]=stateList;
			timeListAllDifference[i]=timeListDifference;
			reasonCodeListAll[i]=reasonCodeList;
			machineStateCommentListAll[i] = machineStateComment;
		}
								
		StringBuffer series =new StringBuffer().append("[");		
		for(int i=0;i<listMachineSorted.size();i++){
			StringBuffer seriesData=new StringBuffer();
			for(int p=0;p<listMachineSorted.size();p++){
				seriesData.append("[,"+String.valueOf(p)+",,,,],");
			}
			
			//加这行的原因是Echart在绘制第一个数据的时候会出现只有tooltip没有柱子的情况。所以在前面默认加上了6点的一个值
			series.append("{name:'echartReserved',type:'bar',stack:'A',barWidth:'50%',data:[");
			if (i>9) {
				series.append(seriesData.toString().substring(0,1+9*10+(i-10)*10)+"new Date(\""+dateMin.substring(0,4)+"/"+dateMin.substring(4,6)+"/"+dateMin.substring(6,8)+"/06:00:00"+"\")"+seriesData.toString().substring(1+9*10+(i-10)*10));
			}else {
				series.append(seriesData.toString().substring(0,1+9*i)+"new Date(\""+dateMin.substring(0,4)+"/"+dateMin.substring(4,6)+"/"+dateMin.substring(6,8)+"/06:00:00"+"\")"+seriesData.toString().substring(1+9*i));
			}
			series.append("]},");
			
			for(int m=0;m<stateCount[i];m++){					
				series.append("{name:'"+stateListAll[i].get(m)+"',type:'bar',stack:'A',barWidth:'50%',");
				if(stateListAll[i].get(m).equals("RUN")){
					series.append("color:'#00b050',");
				}
				if(stateListAll[i].get(m).equals("EN")){
					series.append("color:'#c3d69b',");
				}
				if(stateListAll[i].get(m).equals("IDLE")){
					series.append("color:'#ff0',");
				}
				if(stateListAll[i].get(m).equals("设备Down")){
					series.append("color:'#ff0000',");
				}
				if(stateListAll[i].get(m).equals("工艺Down")){
					series.append("color:'#e46c0a',");
				}
				if(stateListAll[i].get(m).equals("其它Down")){
					series.append("color:'#fac090',");
				}
				if(stateListAll[i].get(m).equals("PM")){
					series.append("color:'#06f',");
				}
				if(stateListAll[i].get(m).equals("Holiday")){
					series.append("color:'#fc0',");
				}
				if(stateListAll[i].get(m).equals("J/C")){
					series.append("color:'#9fc',");
				}
				if(stateListAll[i].get(m).equals("M/C")){
					series.append("color:'#cff',");
				}
				if(stateListAll[i].get(m).equals("设备CM")){
					series.append("color:'#ccccff',");
				}
				series.append("data:[");
 				if (i>9) {
 					series.append(seriesData.toString().substring(0,1+9*10+(i-10)*10)+"new Date(\""+timeListAll[i].get(m)+"\")"+seriesData.toString().substring(1+9*10+(i-10)*10,5+9*10+(i-10)*10)+"new Date(\""+timeListAllStart[i].get(m)+"\")"+seriesData.toString().substring(5+9*10+(i-10)*10,6+9*10+(i-10)*10)+"'"+timeListAllDifference[i].get(m)+"'"+seriesData.toString().substring(6+9*10+(i-10)*10,7+9*10+(i-10)*10)+"'"+reasonCodeListAll[i].get(m)+"'"+seriesData.toString().substring(7+9*10+(i-10)*10,8+9*10+(i-10)*10)+"'"+machineStateCommentListAll[i].get(m)+"'"+seriesData.toString().substring(8+9*10+(i-10)*10));
				}else {
					series.append(seriesData.toString().substring(0,1+9*i)+"new Date(\""+timeListAll[i].get(m)+"\")"+seriesData.toString().substring(1+9*i,4+9*i)+"new Date(\""+timeListAllStart[i].get(m)+"\")"+seriesData.toString().substring(4+9*i,5+9*i)+"'"+timeListAllDifference[i].get(m)+"'"+seriesData.toString().substring(5+9*i,6+9*i)+"'"+reasonCodeListAll[i].get(m)+"'"+seriesData.toString().substring(6+9*i,7+9*i)+"'"+machineStateCommentListAll[i].get(m)+"'"+seriesData.toString().substring(7+9*i));
				}				
				series.append("]},");
			}
		}
		series.append("]");
												
		String userName=new String();
		String userInfo="BOECD Confidential@XX/n"+todayDate;
/*		try{
			if(request.getParameter("username")!=null){
				userName=request.getParameter("username");
				//userInfo=getUserinfo(userName);
				userInfo="BOECD Confidential@XX/n"+todayDate;
			}
		}catch (Exception e) {
			userInfo="BOECD Confidential@XX/n"+todayDate;
		}*/
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("ydata", yData.toString());
		result.put("todaydate", todayDate);
		result.put("starttime", startTime.toString());
		result.put("endtime", endTime.toString());
		result.put("userinfo", userInfo);
		result.put("series", series.toString());
		result.put("legenddata", legendData.toString());
		result.put("runratio", runRatio);
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
					
	}


	
}
