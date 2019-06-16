package com.boe.idm.project.controller.echart;

import java.io.IOException;
import java.lang.reflect.Field;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.DailyInfo;
import com.boe.idm.project.model.EchartParam;
import com.boe.idm.project.model.OutQty;
import com.boe.idm.project.model.YieldParam;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.echart.EchartOeeService;
import com.boe.idm.project.service.echart.EchartQualityService;
import com.boe.idm.project.service.echart.EchartStatesMonitorService;
import com.boe.idm.project.service.echart.EchartWareHouseService;
import com.boe.idm.project.utils.DateUtils;
import com.boe.utils.json.JsonUtils;
import com.boe.utils.special.MDLMachineOrder;


@RestController
@RequestMapping(value="/api/echart/statesmonitor")
public class StatesMonitorController extends JsonUtils{

	private static final Logger log = LoggerFactory.getLogger(StatesMonitorController.class);
	
	@Autowired
	private EchartStatesMonitorService statesMonitorService;
	
	@Autowired
	private EchartService echartService;
	
	@RequestMapping("getMachineName")	
	public @ResponseBody List<String> getMachineName(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="processType",required=true) String machineType) throws Exception{

		List<Map<String, Object>> list = statesMonitorService.geteqpstateMonitorEQPID(machineType);
		
		List<String> listCategory = new ArrayList<>();
		listCategory.add("ALL");
		for (int i = 0; i < list.size(); i++) {
			listCategory.add(list.get(i).get("MACHINENAME").toString());
		}
		
		return listCategory;
	}

	@RequestMapping(value="/statesmonitor")
	public void statesmonitor(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String processType = yieldParam.getProcesstype();
		String lineName = yieldParam.getLinename();
		String todayflag = yieldParam.getDate();
		String dayDate = "";
		if (todayflag.equals("Today")) {
			dayDate = DateUtils.toString(new Date(), "yyyyMMdd");
		}else if (todayflag.equals("Yesterday")) {
			Calendar calendar = Calendar.getInstance();
			calendar.add(Calendar.DATE, -1);
			Date time = calendar.getTime();
			dayDate = DateUtils.toString(time, "yyyyMMdd");
		}else if(todayflag.equals("Day Before Yesterday")) {
			Calendar calendar = Calendar.getInstance();
			calendar.add(Calendar.DATE, -2);
			Date time = calendar.getTime();
			dayDate = DateUtils.toString(time, "yyyyMMdd");
		}
		List<Map<String, Object>> listDate = echartService.getProductionDate();
		String date = listDate.get(0).get("STARTTIME").toString().substring(0,10);
		List<Map<String, Object>> listDateyesterday = echartService.getDateFactory();
		
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listMachine = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listState = new ArrayList<Map<String,Object>>();
		
		list =  statesMonitorService.getEqpStateMonitorNew(processType, lineName, dayDate);
		listMachine = statesMonitorService.geteqpStateMonitorMachineListNew(processType, lineName);
		listState = statesMonitorService.geteqpStateMonitorStateListNew(processType, lineName, dayDate);
		
/*		if (todayflag.equals("Today")) {
			list=statesMonitorService.geteqpStateMonitor2daysEAC(processType,lineName);
			listMachine=statesMonitorService.geteqpStateMonitorMachineListEAC(processType,lineName);	
			listState=statesMonitorService.geteqpStateMonitorStateList2daysEAC(processType,lineName);
		} else if (todayflag.equals("Yesterday")) {
			list=statesMonitorService.geteqpStateMonitor2daysEACYesterday(processType,lineName);
			listMachine=statesMonitorService.geteqpStateMonitorMachineListEACYesterday(processType,lineName);	
			listState=statesMonitorService.geteqpStateMonitorStateList2daysEACYesterday(processType,lineName);
		}*/

		
		//时间稼动率
		String machineName=new String();
		String runRatio="时间稼动率：";
		if (!lineName.equals("ALL")) {
			if(processType.equals("OCA")||processType.equals("A_LAMI")){				
				for(int i=0;i<listMachine.size();i++){
					machineName=listMachine.get(i).get("MACHINENAME").toString();
					List<Map<String, Object>> listRunRatio=new ArrayList<Map<String,Object>>();
					//if (todayflag.equals("Today")) {
						listRunRatio=statesMonitorService.geteqpStateMonitorRunRatio(machineName, dayDate);
/*					}else if (todayflag.equals("Yesterday")) {
						listRunRatio=statesMonitorService.geteqpStateMonitorRunRatioYesterday(machineName);
					}*/
					
					if(listRunRatio.size()!=0){
						runRatio=runRatio+machineName+"："+String.valueOf(Double.parseDouble(listRunRatio.get(0).get("RATIO").toString()))+"% ;";
					}
				}					
			}else {
				for(int i=0;i<listMachine.size();i++){
					machineName=listMachine.get(i).get("MACHINENAME").toString();
					List<Map<String, Object>> listRunRatio=new ArrayList<Map<String,Object>>();
					//if (todayflag.equals("Today")) {
						listRunRatio=statesMonitorService.geteqpStateMonitorRunRatio(lineName, dayDate);
/*					}else if (todayflag.equals("Yesterday")) {
						listRunRatio=statesMonitorService.geteqpStateMonitorRunRatioYesterday(lineName);
					}*/
					
					if(listRunRatio.size()!=0){
						runRatio=runRatio+String.valueOf(Double.parseDouble(listRunRatio.get(0).get("RATIO").toString()))+"%";
						break;
					}
				}
			}	
		}else {
			double runRatioTotal = 0;
			for (int i = 0; i < listMachine.size(); i++) {
				List<Map<String, Object>> listRunRatio = statesMonitorService.geteqpStateMonitorRunRatio(listMachine.get(i).get("MACHINENAME").toString(), dayDate);
				if (listRunRatio.size()!=0) {
					runRatioTotal +=Double.parseDouble(listRunRatio.get(0).get("RATIO").toString());
				}
			}
			runRatioTotal=runRatioTotal/listMachine.size();
			runRatio=runRatio+String.format("%.2f", runRatioTotal)+"%" ;
		}
		
		//get yData
		StringBuffer yData=new StringBuffer();
		String[] arryData=new String[listMachine.size()];
		yData.append("[");
		for(int i=0;i<listMachine.size();i++){
			if(listMachine.get(i).get("MACHINENAME")!=null){
				yData.append("'"+listMachine.get(i).get("MACHINENAME").toString()+"',");
				arryData[i]=listMachine.get(i).get("MACHINENAME").toString();
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
		if (todayflag.equals("Today")) {
			startTime.append("new Date(\""+todayDate.substring(0,4)+"/"+todayDate.substring(4,6)+"/"+todayDate.substring(6)+"/06:00:00\")");
			endTime.append("new Date(\""+tomorrowDate.substring(0,4)+"/"+tomorrowDate.substring(4,6)+"/"+tomorrowDate.substring(6)+"/06:00:00\")");
		}else if (todayflag.equals("Yesterday")) {
			startTime.append("new Date(\""+yesterdayDate.substring(0,4)+"/"+yesterdayDate.substring(4,6)+"/"+yesterdayDate.substring(6)+"/06:00:00\")");
			endTime.append("new Date(\""+todayDate.substring(0,4)+"/"+todayDate.substring(4,6)+"/"+todayDate.substring(6)+"/06:00:00\")");
		}

		//get series
		ArrayList<String>[] stateListAll=new ArrayList[listMachine.size()];
		ArrayList<String>[] timeListAll=new ArrayList[listMachine.size()];//结束时间
		ArrayList<String>[] timeListAllStart=new ArrayList[listMachine.size()];//开始时间
		ArrayList<String>[] timeListAllDifference=new ArrayList[listMachine.size()];
		ArrayList<String>[] reasonCodeListAll=new ArrayList[listMachine.size()];
		int[] stateCount=new int[listMachine.size()];		
		for(int i=0;i<listMachine.size();i++){
			StringBuffer seriesData=new StringBuffer();
			ArrayList<String> stateList=new ArrayList<String>();
			ArrayList<String> timeListStart=new ArrayList<String>();
			ArrayList<String> timeListEnd=new ArrayList<String>();
			ArrayList<String> timeListDifference=new ArrayList<String>();
			ArrayList<String> reasonCodeList=new ArrayList<String>();
			SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
			SimpleDateFormat sDateFormat=new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
			for(int p=0;p<listMachine.size();p++){
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
				}
			}
			if (todayflag.equals("Today")) {
				timeListEnd.add(listDate.get(0).get("LAST_UPDATE_DATE").toString());//表中的设备状态和时间其实是错位了的
			}else if (todayflag.equals("Yesterday")) {
				String endend = listDate.get(0).get("CURRENTDAY").toString();
				timeListEnd.add(endend.substring(0,4)+"-"+endend.substring(4,6)+"-"+endend.substring(6)+" 06:00:00.0");
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
		}
								
		StringBuffer series =new StringBuffer().append("[");		
		for(int i=0;i<listMachine.size();i++){
			StringBuffer seriesData=new StringBuffer();
			for(int p=0;p<listMachine.size();p++){
				seriesData.append("[,"+String.valueOf(p)+",,,],");
			}
			
			//加这行的原因是Echart在绘制第一个数据的时候会出现只有tooltip没有柱子的情况。所以在前面默认加上了6点的一个值
			if (todayflag.equals("Today")) {
				series.append("{name:'echartReserved',type:'bar',stack:'A',barWidth:'50%',data:[");
				if (i>9) {
					series.append(seriesData.toString().substring(0,1+8*10+(i-10)*9)+"new Date(\""+todayDate.substring(0,4)+"/"+todayDate.substring(4,6)+"/"+todayDate.substring(6)+"/06:00:00"+"\")"+seriesData.toString().substring(1+8*10+(i-10)*9));
				}else {
					series.append(seriesData.toString().substring(0,1+8*i)+"new Date(\""+todayDate.substring(0,4)+"/"+todayDate.substring(4,6)+"/"+todayDate.substring(6)+"/06:00:00"+"\")"+seriesData.toString().substring(1+8*i));
				}
				series.append("]},");
			}else if (todayflag.equals("Yesterday")) {
				series.append("{name:'echartReserved',type:'bar',stack:'A',barWidth:'50%',data:[");
				if (i>9) {
					series.append(seriesData.toString().substring(0,1+8*10+(i-10)*9)+"new Date(\""+yesterdayDate.substring(0,4)+"/"+yesterdayDate.substring(4,6)+"/"+yesterdayDate.substring(6)+"/06:00:00"+"\")"+seriesData.toString().substring(1+8*10+(i-10)*9));
				}else {
					series.append(seriesData.toString().substring(0,1+8*i)+"new Date(\""+yesterdayDate.substring(0,4)+"/"+yesterdayDate.substring(4,6)+"/"+yesterdayDate.substring(6)+"/06:00:00"+"\")"+seriesData.toString().substring(1+8*i));
				}
				series.append("]},");
			}

			
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
 					series.append(seriesData.toString().substring(0,1+8*10+(i-10)*9)+"new Date(\""+timeListAll[i].get(m)+"\")"+seriesData.toString().substring(1+8*10+(i-10)*9,5+8*10+(i-10)*9)+"new Date(\""+timeListAllStart[i].get(m)+"\")"+seriesData.toString().substring(5+8*10+(i-10)*9,6+8*10+(i-10)*9)+"'"+timeListAllDifference[i].get(m)+"'"+seriesData.toString().substring(6+8*10+(i-10)*9,7+8*10+(i-10)*9)+"'"+reasonCodeListAll[i].get(m)+"'"+seriesData.toString().substring(7+8*10+(i-10)*9));
				}else {
					series.append(seriesData.toString().substring(0,1+8*i)+"new Date(\""+timeListAll[i].get(m)+"\")"+seriesData.toString().substring(1+8*i,4+8*i)+"new Date(\""+timeListAllStart[i].get(m)+"\")"+seriesData.toString().substring(4+8*i,5+8*i)+"'"+timeListAllDifference[i].get(m)+"'"+seriesData.toString().substring(5+8*i,6+8*i)+"'"+reasonCodeListAll[i].get(m)+"'"+seriesData.toString().substring(6+8*i));
				}				
				series.append("]},");
			}
		}
		series.append("]");
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("ydata", yData.toString());
		result.put("todaydate", todayDate);
		result.put("starttime", startTime.toString());
		result.put("endtime", endTime.toString());
		result.put("series", series.toString());
		result.put("legenddata", legendData.toString());
		result.put("runratio", runRatio);
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value="/getQutQty")
	public @ResponseBody List<OutQty> getQutQty(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="shopName",required=true) String shopName,
			@RequestParam(value="processType",required=true) String processType,
			@RequestParam(value="date",required=true) String date_,
			@RequestParam(value="lineName",required=true) String lineName) throws Exception{

		List<Map<String, Object>> listDateFactory = echartService.getDateFactory();
		String date = "";
		if (date_.equals("Today")) {
			date = listDateFactory.get(0).get("DAY_0").toString();
		}else if(date_.equals("Yesterday")) {
			date = listDateFactory.get(0).get("DAY_1").toString();
		}else if (date_.equals("DayBeforeYesterday")) {
			date = listDateFactory.get(0).get("DAY_2").toString();
		}else {
			date = date_;
		}
		String[] machineName = lineName.split(",");
		List<String> machineNames = new ArrayList<String>();
		if (processType.equals("OCA")) {
			for (int i = 0; i < machineName.length; i++) {
				Integer lineNumber = Integer.parseInt(machineName[i].substring(3));
				String machineNumber = String.valueOf(lineNumber * 2);
				String machineNumber1 = String.valueOf(lineNumber * 2-1);
				if (machineNumber.length() == 1) {
					machineNumber = "0" + machineNumber;
				}
				if (machineNumber1.length() == 1) {
					machineNumber1 = "0" + machineNumber1;
				}
				machineNames.add("7MOCA" + machineNumber);
				machineNames.add("7MOCA" + machineNumber1);
			}

		}else if (processType.equals("A_LAMI")) {
			for (int i = 0; i < machineName.length; i++) {
				machineNames.add("7MOAL" + machineName[i].substring(6));
			}
		}else {
			for (int i=0;i<machineName.length;i++) {
				machineNames.add(machineName[i]);
			}
		}

		List<Map<String, Object>> listDate=echartService.getProductionDate();
		List<Map<String, Object>> list = statesMonitorService.eqpstateMonitorProductTable(machineNames,date);
		
		String todayDate = listDate.get(0).get("TODAY_5M").toString();//get today date	
			
		String[] timeData=new String[]{"h_06","h_07","h_08","h_09","h_10","h_11","h_12","h_13","h_14","h_15","h_16","h_17","h_18","h_19","h_20","h_21","h_22","h_23","h_00","h_01","h_02","h_03","h_04","h_05"};
		List<OutQty> result = new ArrayList<>();
		OutQty outQty = new OutQty();
		outQty.setTime("Out");
		for (int i = 0; i < timeData.length; i++) {
			Field field = outQty.getClass().getDeclaredField(timeData[i]);
			field.setAccessible(true);
			boolean isExist = false;
			for (int j = 0; j < list.size(); j++) {
				if (list.get(j).get("TIMEHH").toString().substring(8).equals(timeData[i].substring(2))) {
					isExist = true;
					field.set(outQty, list.get(j).get("OUTQTY").toString());
					break;
				}
			}
			if (!isExist) {
				field.set(outQty, "0");
			}
		}
		result.add(outQty);
		return result;		
	}

	@RequestMapping("getMachineNameMdl")	
	public @ResponseBody List<String> getMachineNameMdl(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="processType",required=true) String machineType) throws Exception{
		
		List<Map<String, Object>> list = statesMonitorService.geteqpstateMonitorLineName(machineType);
		List<String> lineName = new ArrayList<>();
		for(int i=0;i<list.size();i++){
			if(list.get(i)!=null){
				if(list.get(i).get("LINENAME")!=null){
					if(!machineType.equals("ASSY")){
						lineName.add(machineType+list.get(i).get("LINENAME").toString().substring(4));
					}else {
						lineName.add("ASY"+list.get(i).get("LINENAME").toString().substring(4));
					}
				}
			}
		}
		
		return lineName;		
	}

	@RequestMapping(value="/statesmonitorMdl")
	public void statesmonitorMdl(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String processType = yieldParam.getProcesstype();
		String[] arrLineName = yieldParam.getLineNames();
		String lineName="";
		String lineName1 = "";
		if (arrLineName.length == 1) {
			if (processType.equals("MCU")||processType.equals("MBB")||processType.equals("MBP")||processType.equals("MPP")||processType.equals("MAP")) {
				lineName = arrLineName[0];
			}else if(!processType.equals("A_LAMI")){
				lineName = "LINE"+arrLineName[0].substring(3);
			}else {
				lineName = "LINE"+arrLineName[0].substring(6);
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

		String date_ = yieldParam.getDate();
		List<Map<String, Object>> listDate=echartService.getProductionDate();
		List<Map<String, Object>> listDateFactory = echartService.getDateFactory();
		String date = "";
		if (date_.equals("Today")) {
			date = listDateFactory.get(0).get("DAY_0").toString();
		}else if(date_.equals("Yesterday")) {
			date = listDateFactory.get(0).get("DAY_1").toString();
		}else if (date_.equals("BeforeYesterday")) {
			date = listDateFactory.get(0).get("DAY_2").toString();
		}
		String dateMin = date +"060000";
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
		List<Map<String, Object>> listDateyesterday = echartService.getDateFactory();
		
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listMachine = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listState = new ArrayList<Map<String,Object>>();
		if (arrLineName.length == 1) {
			listMachine=statesMonitorService.geteqpStateMonitorMachineList(processType,lineName,lineName1);	
		} else {
			List<String> lineNames = new ArrayList<String>();
			for (int i=0;i<arrLineName.length;i++) {
				if (processType.equals("MCU")||processType.equals("MBB")||processType.equals("MBP")||processType.equals("MPP")||processType.equals("MAP")) {
					lineNames.add(arrLineName[0]);
				}else if(!processType.equals("A_LAMI")){
					lineNames.add("LINE"+arrLineName[i].substring(3));
				}else {
					lineNames.add("LINE"+arrLineName[i].substring(6));
				}
			}
			listMachine = statesMonitorService.geteqpStateMonitorMachineListByLineName(processType,lineNames,lineName1);			
		}	
		
		list = statesMonitorService.getEqpStateMonitorMDL(processType, lineName, lineName1, date);
		listState  = statesMonitorService.geteqpStateMonitorStateListMDL(processType,lineName,lineName1,date);
		
/*		if (dateMin.substring(0, 8).equals(listDate.get(0).get("CURRENTDAY").toString())) {//今天
			list=statesMonitorService.geteqpStateMonitor2days(processType,lineName,lineName1,"Today",dateMin);	
			listState=statesMonitorService.geteqpStateMonitorStateList2days(processType,lineName,lineName1,"Today",dateMin);
		}else {//不是今天
			list=statesMonitorService.geteqpStateMonitor7days(processType,lineName,lineName1,dateMin,dateMax);
			listState=statesMonitorService.geteqpStateMonitorStateList7days(processType,lineName,lineName1,dateMin,dateMax);
		}*/
						
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
		String runRatio="RUN：";
		if (!lineName.equals("ALL")) {
			if(processType.equals("OCA")||processType.equals("A_LAMI")){				
				for(int i=0;i<listMachineSorted.size();i++){
					machineName=listMachineSorted.get(i);
					List<Map<String, Object>> listRunRatio=new ArrayList<Map<String,Object>>();
					//if (dateMin.substring(0, 8).equals(listDate.get(0).get("CURRENTDAY").toString())) {
						listRunRatio=statesMonitorService.geteqpStateMonitorRunRatio(machineName,date);
/*					}else {
						listRunRatio=statesMonitorService.geteqpStateMonitorRunRatio7day(machineName,date);
					}
*/
					if(listRunRatio.size()!=0){
						runRatio=runRatio+machineName+"："+String.valueOf(Double.parseDouble(listRunRatio.get(0).get("RATIO").toString()))+"% ;";
					}
				}					
			}else {
				for(int i=0;i<listMachineSorted.size();i++){
					machineName=listMachineSorted.get(i);
					List<Map<String, Object>> listRunRatio=new ArrayList<Map<String,Object>>();
					//if (dateMin.substring(0, 8).equals(listDate.get(0).get("CURRENTDAY").toString())) {
						listRunRatio=statesMonitorService.geteqpStateMonitorRunRatio(request.getParameter("lineName"), date);
/*					}else {
						listRunRatio=statesMonitorService.geteqpStateMonitorRunRatio7day(request.getParameter("lineName"),date);
					}*/
					
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
				//if (dateMin.substring(0, 8).equals(listDate.get(0).get("CURRENTDAY").toString())) {
					listRunRatio = statesMonitorService.geteqpStateMonitorRunRatio(listMachine.get(i).get("MACHINENAME").toString(), date);
/*				}else {
					listRunRatio=statesMonitorService.geteqpStateMonitorRunRatio7day(listMachine.get(i).get("MACHINENAME").toString(),date);
				}*/
				if (listRunRatio.size()!=0) {
					runRatioTotal +=Double.parseDouble(listRunRatio.get(0).get("RATIO").toString());
				}
			}
			runRatioTotal=runRatioTotal/listMachine.size();
			runRatio=runRatio+String.format("%.2f", runRatioTotal)+"%" ;
		}
	
		if(runRatio.equals("RUN：")){
			runRatio="RUN：0%";
		}
		
		//时间稼动率后面的那一排很烦的东西
		List<Map<String, Object>> listAllRaio = new ArrayList<Map<String,Object>>();
		boolean multiFalg = true;
		if (!processType.equals("OCA")) {
			for (int i = 0; i < listMachineSorted.size(); i++) {
				if (!listMachineSorted.get(i).substring(0, 3).equals(processType)) {
					multiFalg = false;
					break;
				}
			}
			if (multiFalg) {
				listAllRaio = statesMonitorService.geteqpStateMonitorTotalRatioMulti(date,listMachineSorted);
			}else {
				String defaultMachineName = listMachineSorted.get(listMachineSorted.size()-1);
				if (defaultMachineName.substring(0, 3).equals(processType)) {
					listAllRaio = statesMonitorService.geteqpStateMonitorTotalRatioSingle(date,defaultMachineName);
				}
			}
		}
		runRatio += ";";
		StringBuffer totalRatio = new StringBuffer();
		for (int i = 0; i < listAllRaio.size(); i++) {
			totalRatio.append(listAllRaio.get(i).get("STATENAME").toString());
			totalRatio.append(" : ");
			totalRatio.append(listAllRaio.get(i).get("RATIO").toString() + "% ;");			
		}
		runRatio += totalRatio.toString();
		
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

		series.append("{name: 'Ratio',type: 'scatter',color: 'rgb(66,66,66)',symbolSize: 1,label: {normal: {show: true,position: 'right',fontSize: '60%',formatter: function(obj) {var value = obj.value;return value[2]},}},data: [");
		for (int j = 0; j < listMachineSorted.size(); j++) {
			List<Map<String, Object>> listRatio = new ArrayList<Map<String,Object>>();
			if (dateMin.substring(0, 8).equals(listDate.get(0).get("CURRENTDAY").toString())) {//今天
				listRatio = statesMonitorService.getMachineStateRatio(listMachineSorted.get(j));
			}else {//不是今天
				listRatio = statesMonitorService.getMachineStateRatio7days(listMachineSorted.get(j));
			}			

			StringBuffer machineStateRatio = new StringBuffer();
			for (int k = 0; k < listRatio.size(); k++) {
				if (listRatio.get(k).get("STATENAME").toString().equals("RUN")) {
					machineStateRatio.append("\\nRUN :" + listRatio.get(k).get("RATIO").toString() +"%");
				}
				if (listRatio.get(k).get("STATENAME").toString().equals("P_DOWN")) {
					machineStateRatio.append("\\nP_DOWN :" + listRatio.get(k).get("RATIO").toString() +"%");
				}
				if (listRatio.get(k).get("STATENAME").toString().equals("E_DOWN")) {
					machineStateRatio.append("\\nE_DOWN :" + listRatio.get(k).get("RATIO").toString() +"%");
				}
				if (listRatio.get(k).get("STATENAME").toString().equals("PM")) {
					machineStateRatio.append("\\nPM :" + listRatio.get(k).get("RATIO").toString() +"%");
				}
				if (listRatio.get(k).get("STATENAME").toString().equals("CM")) {
					machineStateRatio.append("\\nCM :" + listRatio.get(k).get("RATIO").toString() +"%");
				}
				if (listRatio.get(k).get("STATENAME").toString().equals("M/C")) {
					machineStateRatio.append("\\nCM :" + listRatio.get(k).get("RATIO").toString() +"%");
				}
				if (listRatio.get(k).get("STATENAME").toString().equals("IDLE")) {
					machineStateRatio.append("\\nIDLE :" + listRatio.get(k).get("RATIO").toString() +"%");
				}
			}
			StringBuffer currentTime = new StringBuffer();
			currentTime.append("new Date('");
			currentTime.append(listDate.get(0).get("LAST_UPDATE_DATE"));
			currentTime.append("')");
			series.append("[");
			series.append(currentTime + ",");
			series.append(String.valueOf(j) + ",'");
			series.append(machineStateRatio);
			series.append("'],");
		}
		series.append("]},");
		series.append("]");
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("ydata", yData.toString());
		result.put("todaydate", todayDate);
		result.put("starttime", startTime.toString());
		result.put("endtime", endTime.toString());
		result.put("series", series.toString());
		result.put("legenddata", legendData.toString());
		result.put("runratio", runRatio);
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
					
	}

	@RequestMapping(value="statesmonitormdlTotal")
	public void statesmonitormdlTotal(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String lineName = yieldParam.getLinename();
		String date_ = yieldParam.getDate();
		List<Map<String, Object>> listDate = echartService.getProductionDate();
		List<Map<String, Object>> listDateFactory = echartService.getDateFactory();
		String date = "";
		if (date_.equals("Today")) {
			date = listDateFactory.get(0).get("DAY_0").toString();
		}else if(date_.equals("Yesterday")) {
			date = listDateFactory.get(0).get("DAY_1").toString();
		}else if (date_.equals("Day Before Yesterday")) {
			date = listDateFactory.get(0).get("DAY_2").toString();
		}else {
			date = date_;
		}
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
		
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listMachine = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listState = new ArrayList<Map<String,Object>>();
		list = statesMonitorService.geteqpStateMonitorMDLTOTAL(lineName, date);
		listMachine = statesMonitorService.geteqpStateMonitorMachineListMDLTOTAL(lineName);
		listState = statesMonitorService.geteqpStateMonitorStateListMDLTOTAL(lineName, date);
		
/*		if (dateMin.substring(0, 8).equals(listDate.get(0).get("CURRENTDAY").toString())) {
			list = statesMonitorService.geteqpStateMonitor2daysMDLTOTAL(lineName);
			listMachine = statesMonitorService.geteqpStateMonitorMachineListMDLTOTAL(lineName);	
			listState = statesMonitorService.geteqpStateMonitorStateList2daysMDLTOTAL(lineName);
		}else {
			list = statesMonitorService.geteqpStateMonitor7daysMDLTOTAL(lineName,dateMin,dateMax);
			listMachine = statesMonitorService.geteqpStateMonitorMachineListMDLTOTAL(lineName);	
			listState = statesMonitorService.geteqpStateMonitorStateList7daysMDLTOTAL(lineName,dateMin,dateMax);
		}	*/	
		
		//Mahine List排序
		ArrayList<String> listMachineSorted = new ArrayList<String>();
		MDLMachineOrder machineTypeOrder = new MDLMachineOrder();
		String[] machineOrder = machineTypeOrder.getMDLLineMachineOrder(lineName);
		for (int i = 0; i < machineOrder.length; i++) {
			String tempMachineNumber = "";
			if (i==4) {//OCA Special
				tempMachineNumber = String.valueOf(2*Integer.parseInt(lineName.substring(4))-1);
				if (2*Integer.parseInt(lineName.substring(4))-1<10) {
					tempMachineNumber="0"+tempMachineNumber;
				}
			} else if (i==5) {
				tempMachineNumber = String.valueOf(2*Integer.parseInt(lineName.substring(4)));
				if (2*Integer.parseInt(lineName.substring(4))<10) {
					tempMachineNumber="0"+tempMachineNumber;
				}
			} else {
				tempMachineNumber=lineName.substring(4);	
			}
			listMachineSorted.add(machineOrder[i]+tempMachineNumber);
		}

		
		//时间稼动率
		String machineName=new String();
		String runRatio="时间稼动率：";
		
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
		int[] stateCount=new int[listMachineSorted.size()];		
		for(int i=0;i<listMachineSorted.size();i++){
			StringBuffer seriesData=new StringBuffer();
			ArrayList<String> stateList=new ArrayList<String>();
			ArrayList<String> timeListStart=new ArrayList<String>();
			ArrayList<String> timeListEnd=new ArrayList<String>();
			ArrayList<String> timeListDifference=new ArrayList<String>();
			ArrayList<String> reasonCodeList=new ArrayList<String>();
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
		}
								
		StringBuffer series =new StringBuffer().append("[");		
		for(int i=0;i<listMachineSorted.size();i++){
			StringBuffer seriesData=new StringBuffer();
			for(int p=0;p<listMachineSorted.size();p++){
				seriesData.append("[,"+String.valueOf(p)+",,,],");
			}
			
			//加这行的原因是Echart在绘制第一个数据的时候会出现只有tooltip没有柱子的情况。所以在前面默认加上了6点的一个值
			series.append("{name:'echartReserved',type:'bar',stack:'A',barWidth:'50%',data:[");
			if (i>9) {
				series.append(seriesData.toString().substring(0,1+8*10+(i-10)*9)+"new Date(\""+dateMin.substring(0,4)+"/"+dateMin.substring(4,6)+"/"+dateMin.substring(6,8)+"/06:00:00"+"\")"+seriesData.toString().substring(1+8*10+(i-10)*9));
			}else {
				series.append(seriesData.toString().substring(0,1+8*i)+"new Date(\""+dateMin.substring(0,4)+"/"+dateMin.substring(4,6)+"/"+dateMin.substring(6,8)+"/06:00:00"+"\")"+seriesData.toString().substring(1+8*i));
			}
			series.append("]},");
/*			if (date_.equals("Today")) {
				series.append("{name:'echartReserved',type:'bar',stack:'A',barWidth:'50%',data:[");
				if (i>9) {
					series.append(seriesData.toString().substring(0,1+8*10+(i-10)*9)+"new Date(\""+todayDate.substring(0,4)+"/"+todayDate.substring(4,6)+"/"+todayDate.substring(6)+"/06:00:00"+"\")"+seriesData.toString().substring(1+8*10+(i-10)*9));
				}else {
					series.append(seriesData.toString().substring(0,1+8*i)+"new Date(\""+todayDate.substring(0,4)+"/"+todayDate.substring(4,6)+"/"+todayDate.substring(6)+"/06:00:00"+"\")"+seriesData.toString().substring(1+8*i));
				}
				series.append("]},");
			}else if (date_.equals("Yesterday")) {
				series.append("{name:'echartReserved',type:'bar',stack:'A',barWidth:'50%',data:[");
				if (i>9) {
					series.append(seriesData.toString().substring(0,1+8*10+(i-10)*9)+"new Date(\""+yesterdayDate.substring(0,4)+"/"+yesterdayDate.substring(4,6)+"/"+yesterdayDate.substring(6)+"/06:00:00"+"\")"+seriesData.toString().substring(1+8*10+(i-10)*9));
				}else {
					series.append(seriesData.toString().substring(0,1+8*i)+"new Date(\""+yesterdayDate.substring(0,4)+"/"+yesterdayDate.substring(4,6)+"/"+yesterdayDate.substring(6)+"/06:00:00"+"\")"+seriesData.toString().substring(1+8*i));
				}
				series.append("]},");
			}*/

			
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
 					series.append(seriesData.toString().substring(0,1+8*10+(i-10)*9)+"new Date(\""+timeListAll[i].get(m)+"\")"+seriesData.toString().substring(1+8*10+(i-10)*9,5+8*10+(i-10)*9)+"new Date(\""+timeListAllStart[i].get(m)+"\")"+seriesData.toString().substring(5+8*10+(i-10)*9,6+8*10+(i-10)*9)+"'"+timeListAllDifference[i].get(m)+"'"+seriesData.toString().substring(6+8*10+(i-10)*9,7+8*10+(i-10)*9)+"'"+reasonCodeListAll[i].get(m)+"'"+seriesData.toString().substring(7+8*10+(i-10)*9));
				}else {
					series.append(seriesData.toString().substring(0,1+8*i)+"new Date(\""+timeListAll[i].get(m)+"\")"+seriesData.toString().substring(1+8*i,4+8*i)+"new Date(\""+timeListAllStart[i].get(m)+"\")"+seriesData.toString().substring(4+8*i,5+8*i)+"'"+timeListAllDifference[i].get(m)+"'"+seriesData.toString().substring(5+8*i,6+8*i)+"'"+reasonCodeListAll[i].get(m)+"'"+seriesData.toString().substring(6+8*i));
				}				
				series.append("]},");
			}
		}
		series.append("]");
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("ydata", yData.toString());
		result.put("todaydate", todayDate);
		result.put("starttime", startTime.toString());
		result.put("endtime", endTime.toString());
		result.put("series", series.toString());
		result.put("legenddata", legendData.toString());
		result.put("runratio", runRatio);
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
					
	}

	@RequestMapping(value="statesmonitormdlRadio")
	public void statesmonitormdlRadio(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String processType = yieldParam.getProcesstype();
		String lineName="";
		String lineName1 = "";
		if (!yieldParam.getLinename().equals("ALL")) {
			if (processType.equals("MCU")||processType.equals("MBB")||processType.equals("MBP")||processType.equals("MPP")||processType.equals("MAP")||processType.equals("PCK")) {
				lineName = yieldParam.getLinename();
			}else if(!processType.equals("A_LAMI")){
				lineName = "LINE" + yieldParam.getLinename().substring(3);
			}else {
				lineName = "LINE" + yieldParam.getLinename().substring(6);
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
		String date_ = yieldParam.getDate();
		List<Map<String, Object>> listDate=echartService.getProductionDate();
		List<Map<String, Object>> listDateFactory = echartService.getDateFactory();
		String date = "";
		if (date_.equals("Today")) {
			date = listDateFactory.get(0).get("DAY_0").toString();
		}else if(date_.equals("Yesterday")) {
			date = listDateFactory.get(0).get("DAY_1").toString();
		}else if (date_.equals("BeforeYesterday")) {
			date = listDateFactory.get(0).get("DAY_2").toString();
		}else {
			date = date_;
		}
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
		List<Map<String, Object>> listDateyesterday = echartService.getDateFactory();
		
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listMachine = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listState = new ArrayList<Map<String,Object>>();
		
		list = statesMonitorService.getEqpStateMonitorMDL(processType, lineName, lineName1, date);
		listMachine=statesMonitorService.geteqpStateMonitorMachineList(processType,lineName,lineName1);	
		listState  = statesMonitorService.geteqpStateMonitorStateListMDL(processType,lineName,lineName1,date);

		
/*		if (dateMin.substring(0, 8).equals(listDate.get(0).get("CURRENTDAY").toString())) {//今天
			list = statesMonitorService.geteqpStateMonitor2days(processType,lineName,lineName1,"Today",dateMin);
			listMachine = statesMonitorService.geteqpStateMonitorMachineList(processType,lineName,lineName1);	
			listState = statesMonitorService.geteqpStateMonitorStateList2days(processType,lineName,lineName1,"Today",dateMin);
		}else {//不是今天
			list = statesMonitorService.geteqpStateMonitor7days(processType,lineName,lineName1,dateMin,dateMax);
			listMachine = statesMonitorService.geteqpStateMonitorMachineList(processType,lineName,lineName1);	
			listState = statesMonitorService.geteqpStateMonitorStateList7days(processType,lineName,lineName1,dateMin,dateMax);
		}*/
				
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
					//if (dateMin.substring(0, 8).equals(listDate.get(0).get("CURRENTDAY").toString())) {
						listRunRatio=statesMonitorService.geteqpStateMonitorRunRatio(machineName, date);
/*					}else {
						listRunRatio=statesMonitorService.geteqpStateMonitorRunRatio7day(machineName,date);
					}*/
					
					if(listRunRatio.size()!=0){
						runRatio=runRatio+machineName+"："+String.valueOf(Double.parseDouble(listRunRatio.get(0).get("RATIO").toString()))+"% ;";
					}
				}					
			}else {
				for(int i=0;i<listMachineSorted.size();i++){
					machineName=listMachineSorted.get(i);
					List<Map<String, Object>> listRunRatio=new ArrayList<Map<String,Object>>();
					//if (dateMin.substring(0, 8).equals(listDate.get(0).get("CURRENTDAY").toString())) {
						listRunRatio=statesMonitorService.geteqpStateMonitorRunRatio(yieldParam.getLinename(), date);
/*					}else {
						listRunRatio=statesMonitorService.geteqpStateMonitorRunRatio7day(request.getParameter("lineName"),date);
					}*/
					
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
				//if (dateMin.substring(0, 8).equals(listDate.get(0).get("CURRENTDAY").toString())) {
					listRunRatio = statesMonitorService.geteqpStateMonitorRunRatio(listMachine.get(i).get("MACHINENAME").toString(), date);
/*				}else {
					listRunRatio=statesMonitorService.geteqpStateMonitorRunRatio7day(listMachine.get(i).get("MACHINENAME").toString(),date);
				}*/
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
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("ydata", yData.toString());
		result.put("todaydate", todayDate);
		result.put("starttime", startTime.toString());
		result.put("endtime", endTime.toString());
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
