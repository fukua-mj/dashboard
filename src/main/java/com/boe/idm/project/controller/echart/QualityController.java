package com.boe.idm.project.controller.echart;

import java.io.IOException;
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
import com.boe.idm.project.model.YieldParam;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.echart.EchartQualityService;
import com.boe.utils.json.JsonUtils;
import com.boe.utils.special.MDLMachineOrder;

@RestController
@RequestMapping(value="/api/echart/quality")
public class QualityController extends JsonUtils{

	private static final Logger log = LoggerFactory.getLogger(QualityController.class);
	
	@Autowired
	private EchartQualityService echartQualityService;
	
	@Autowired
	private EchartService echartService;
	
	@RequestMapping(value="/cumCategory")
	public @ResponseBody List<String> cumCategory(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName,
			@RequestParam(value = "processType",required = true)String operationName,
			@RequestParam(value = "productionType",required = true)String productionType,
			@RequestParam(value = "dataType",required = true)String dailyCum) throws IOException{

		List<Map<String, Object>> list = echartQualityService.getqualityCategory(operationName,dailyCum,productionType);
		//取默认值
		String defaultshopName="";
		if (shopName.equals("EAC1")||shopName.equals("EAC2")) {
			defaultshopName="EAC";
		}else{
			defaultshopName=shopName;
		}
		List<Map<String, Object>> listDefaultCategory = echartService.getDefaultCategory(defaultshopName);		
		String defaultCategory="";
		if (listDefaultCategory.size()==1) {
			defaultCategory=listDefaultCategory.get(0).get("PRODUCTCATEGORY").toString();
		}else {
			for(int i=0;i<listDefaultCategory.size();i++){
				if (listDefaultCategory.get(i).get("DAILY_PLAN_FALG").toString().equals("Y")) {
					defaultCategory=listDefaultCategory.get(i).get("PRODUCTCATEGORY").toString();
				}
			}
		}
		
		List<String> listCategory = new ArrayList<String>();
		for(int i=0;i<list.size();i++){
			listCategory.add(list.get(i).get("PRODUCTCATEGORY").toString());
		}
		boolean isExist = false;
		for(int i=0;i<listCategory.size();i++){
			if (listCategory.get(i).equals(defaultCategory)) {
				listCategory.remove(i);
				isExist = true;
				break;
			}
		}
		if(isExist){
			listCategory.add(0, defaultCategory);
		}
		
		return listCategory;
	}		

	@RequestMapping(value="/cum")
	public void cum(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String operationName = yieldParam.getProcesstype();
		String dailyCum = yieldParam.getDatatype();
		String productCategory = yieldParam.getProductCategory();
		String productionType = yieldParam.getProductionType();
		String deviceType = yieldParam.getDeviceType();
		List<Map<String, Object>> list = echartQualityService.getquality(operationName,dailyCum,productCategory,productionType);		
		String operationName1 = "";
		if (operationName.equals("M72000N")) {
			operationName1 = "OQA_APP";
		} else if (operationName.equals("M71000N")) {
			operationName1 = "OQA_ET";
		}
		List<Map<String, Object>> listAll = echartQualityService.getqualityAllProd(operationName1,productCategory, productionType);
		List<Map<String, Object>> listDate=echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		List<Map<String, Object>> listDateFactory = echartService.getDateFactory();//和四层良率表日期一致
		
		//xData
		String[] arrXdataColumn=new String[]{"MONTH_2","MONTH_1","MONTH_0","","WEEK_3","WEEK_2","WEEK_1","WEEK_0","","DAY_6","DAY_5","DAY_4","DAY_3","DAY_2","DAY_1","DAY_0"};
		String[] arrxData=new String[arrXdataColumn.length];
		StringBuffer xData=new StringBuffer().append("[");
		for (int i = 0; i < arrxData.length; i++) {
			if (!arrXdataColumn[i].equals("")) {
				arrxData[i]=listDate.get(0).get(arrXdataColumn[i]).toString();
				xData.append("'"+listDate.get(0).get(arrXdataColumn[i]).toString()+"'");
			}else {
				xData.append("''");
			}
			xData.append(",");
		}
		xData.append("]");
		
		//legendData
		ArrayList<String> listLegendData = new ArrayList<String>();
		listLegendData.add("LRR");
		StringBuffer legendData=new StringBuffer().append("['LRR',");
		for (int i = 0; i < list.size(); i++) {
			if (!list.get(i).get("DESCRIPTION").toString().equals("LRR")) {
				if (!list.get(i).get("DESCRIPTION").toString().equals("DEFECTTOTAL")) {  
					listLegendData.add(list.get(i).get("DESCRIPTION").toString());
					legendData.append("'"+list.get(i).get("DESCRIPTION").toString()+"',");
				}
			}
		}
		legendData.append("]");
		
		//series
		StringBuffer series=new StringBuffer().append("[");
		for (int i = 0; i < list.size(); i++) {
			StringBuffer seriesItem=new StringBuffer();
			if (list.get(i).get("DESCRIPTION").toString().equals("LRR")) {
				if (deviceType.equals("tv")) {
					seriesItem.append("{name:'LRR',type:'line',color:'red',yAxisIndex:1,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");				
				} else {
					seriesItem.append("{name:'LRR',type:'line',color:'red',yAxisIndex:1,symbol:'circle',symbolSize:6,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");				
				}
			} else if (list.get(i).get("DESCRIPTION").toString().equals("DEFECTTOTAL")) {
				if (deviceType.equals("tv")) {
					seriesItem.append("{name:'DEFECTTOTAL',type:'scatter',symbolSize: 8,color:'#1a778d',yAxisIndex:0,label: {normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1]},fontWeight:'bold',}},data:["); 
				} else {
					seriesItem.append("{name:'DEFECTTOTAL',type:'scatter',symbolSize: 5,color:'#1a778d',yAxisIndex:0,label: {normal: {show: true,position: 'top',fontSize: '75%',formatter: function(obj) {var value = obj.value;return value[1]},fontWeight:'bold',}},data:["); 
				}
			} else {
				seriesItem.append("{name:'");
				seriesItem.append(list.get(i).get("DESCRIPTION").toString());
				seriesItem.append("',type:'bar',stack: '1',barWidth:'50%',data:[");
			}
			for (int j = 0; j < arrXdataColumn.length; j++) {
				if (!arrXdataColumn[j].equals("")) {
					seriesItem.append("["+String.valueOf(j)+",");
					if (list.get(i).get("DESCRIPTION").toString().equals("LRR")) {
						if (!list.get(i).get(arrXdataColumn[j]).toString().equals("0")) {
							Double dd=Double.parseDouble(list.get(i).get(arrXdataColumn[j]).toString());
							dd=dd/10000;
							seriesItem.append(String.format("%.0f", dd));
						}
					}else{
						seriesItem.append(String.format("%.0f",Double.parseDouble(list.get(i).get(arrXdataColumn[j]).toString())));
					}
					seriesItem.append(",'"+arrxData[j]+"',");
					seriesItem.append("0,0],");
				}else
				{
					seriesItem.append(",");
				}
			}
			seriesItem.append("]},");
			series.append(seriesItem.toString());
		}
		
		if (deviceType.equals("tv")) {
			series.append("{name:'总量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color:'#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '80%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:["); 
		} else {
			series.append("{name:'总量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color:'#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '70%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");                 
		}
		String[] DateType=new String[]{"MONTH","MONTH","MONTH","MONTH","WEEK","WEEK","WEEK","WEEK","WEEK","DAY","DAY","DAY","DAY","DAY","DAY","DAY"};
		String[] arrXdataFactory = new String[arrXdataColumn.length];
		for (int i=0; i<arrXdataColumn.length; i++) {
			if (!arrXdataColumn[i].equals("")) {
				arrXdataFactory[i] = listDateFactory.get(0).get(arrXdataColumn[i]).toString(); 
			} else {
				arrXdataFactory[i] = "";
			}
		}
		for(int i=0;i<arrXdataFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<listAll.size();m++){
				if (listAll.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(listAll.get(m).get("DATETIME").toString().equals(arrXdataFactory[i])){
						isExist=true;
						if(listAll.get(m).get("OQAOUTQTY")!=null){
							series.append("[");
							series.append(String.valueOf(i));
							if(arrxData[i].equals("")){
								series.append(",0,''");
							}else {
								series.append(",1,"+listAll.get(m).get("OQAOUTQTY").toString());
							}							
							series.append("],");
							break;
						}
					}
				}				
			}
			if(!isExist){
				series.append("[");
				series.append(String.valueOf(i));
				if(arrXdataColumn[i].equals("")){
					series.append(",0,'',");
				}
				else{
					series.append(",1,0,");
				}
				series.append("],");
			}
		}		
		series.append("]},");
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
	
	@RequestMapping(value="/dailyCategory")
	public @ResponseBody List<String> dailyCategory(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName,
			@RequestParam(value = "processType",required = true)String operationName,
			@RequestParam(value = "productionType",required = true)String productionType,
			@RequestParam(value = "dataType",required = true)String dailyCum) throws IOException{

		List<Map<String, Object>> list = echartQualityService.getDailyQualityCategory(operationName,dailyCum,productionType);
		//取默认值
		String defaultshopName="";
		if (shopName.equals("EAC1")||shopName.equals("EAC2")) {
			defaultshopName="EAC";
		}else{
			defaultshopName=shopName;
		}
		List<Map<String, Object>> listDefaultCategory = echartService.getDefaultCategory(defaultshopName);		
		String defaultCategory="";
		if (listDefaultCategory.size()==1) {
			defaultCategory=listDefaultCategory.get(0).get("PRODUCTCATEGORY").toString();
		}else {
			for(int i=0;i<listDefaultCategory.size();i++){
				if (listDefaultCategory.get(i).get("DAILY_PLAN_FALG").toString().equals("Y")) {
					defaultCategory=listDefaultCategory.get(i).get("PRODUCTCATEGORY").toString();
				}
			}
		}
		
		List<String> listCategory = new ArrayList<String>();
		for(int i=0;i<list.size();i++){
			listCategory.add(list.get(i).get("PRODUCTCATEGORY").toString());
		}
		boolean isExist = false;
		for(int i=0;i<listCategory.size();i++){
			if (listCategory.get(i).equals(defaultCategory)) {
				listCategory.remove(i);
				isExist = true;
				break;
			}
		}
		if(isExist){
			listCategory.add(0, defaultCategory);
		}
		
		return listCategory;
	}		

	@RequestMapping(value="/daily")
	public void daily(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String operationName = yieldParam.getProcesstype();
		String productionType = yieldParam.getProductionType();		
		String productCategory = yieldParam.getProductCategory();
		String deviceType = yieldParam.getDeviceType();
		List<Map<String, Object>> list = new ArrayList<>();
		try {
			list = echartQualityService.getqualityDaily(operationName,productCategory,productionType);
		} catch (Exception e) {
			// TODO: handle exception
			log.debug(e.getMessage());
		}
	
		StringBuffer xData=new StringBuffer();
		StringBuffer legendData=new StringBuffer();
		String[] defectCategory=new String[list.size()];
		legendData.append("[");
		xData.append("[");
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("DESCRIPTION")!=null){
				xData.append("'");
				legendData.append("'");
				xData.append(list.get(i).get("DESCRIPTION").toString());
				legendData.append(list.get(i).get("DESCRIPTION").toString());
				defectCategory[i]=list.get(i).get("DESCRIPTION").toString();
				xData.append("',");
				legendData.append("',");
			}
		}
		xData.append("]");
		legendData.append("]");
		
		StringBuffer series=new StringBuffer();
		//totalData.append("[");
		series.append("[");
		for(int m=0;m<list.size();m++){
			StringBuffer totalData=new StringBuffer();
			series.append("{name:'");
			series.append(defectCategory[m]);
			if (deviceType.equals("tv")) {
				series.append("',stack:1,type:'bar',barWidth:'50%',barMaxWidth: '100%',label: {normal:{show:true,fontSize: '90%'}},data:[");
			} else {
				series.append("',stack:1,type:'bar',barWidth:'50%',barMaxWidth: '100%',label: {normal:{show:true,fontSize: '70%'}},data:[");
			}
			for(int i=0;i<list.size();i++){
				if(defectCategory[i]!=null){
					//if(!totalData.toString().equals("[")){}
					if(i==m){
						//totalData.append(list.get(i).get("TOTAL"));
/*						double dayOut=Double.parseDouble(list.get(i).get("DAY_0_OUT").toString());
						double dayIn=Double.parseDouble(list.get(i).get("DAY_0_IN").toString());
						totalData.append(String.format("%.0f",dayOut / dayIn*1000000).toString());*/
						totalData.append(list.get(i).get("DAY_0").toString());
					}
					totalData.append(",");
				}
			}
			series.append(totalData.toString());
			series.append("],},");
		}
		series.append("]");
					
		Map<String, Object> result = new HashMap<String, Object>();
		
		result.put("series", series.toString());
		result.put("xdata", xData.toString());
		result.put("legenddata", legendData.toString());
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping("dailyTable")
	public @ResponseBody List<DailyInfo> dailyTable(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "productCategory",required = true)String productCategory,
			@RequestParam(value = "productionType",required = true)String productionType,
			@RequestParam(value = "processType",required = true)String operationName) throws IOException{
		List<Map<String, Object>> list = echartQualityService.getqualityDailyTable(operationName,productionType,productCategory);
		List<DailyInfo> result = new ArrayList<>();
		for (int i = 0; i < list.size(); i++) {
			DailyInfo dailyInfo = new DailyInfo();
			dailyInfo.setDescription(list.get(i).get("DESCRIPTION").toString());
			dailyInfo.setProductcategory(list.get(i).get("PRODUCTCATEGORY").toString());
			dailyInfo.setProductiontype(list.get(i).get("PRODUCTIONTYPE").toString());
			dailyInfo.setIn(list.get(i).get("DAY_0_IN").toString());
			dailyInfo.setOut(list.get(i).get("DAY_0_OUT").toString());
			result.add(dailyInfo);
		}
		return result;
	}		

	@RequestMapping(value = "/getOpt_OperatorDefectCategory")
	public @ResponseBody List<String> getOpt_OperatorDefectCategory(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName,
			@RequestParam(value = "processType",required = true)String operationName,
			@RequestParam(value = "productionType",required = true)String productionType,
			@RequestParam(value = "dataType",required = true)String showType) throws IOException{
		
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		if (showType.equals("OPERATOR")) {
			list = echartQualityService.getOperatorDefectCategory(shopName,operationName,productionType);
		} else if (showType.equals("MACHINE")) {
			list = echartQualityService.getOperatorDefectCategoryByLine(shopName,operationName,productionType);
		}		
	
		//取默认值
		String defaultshopName="";
		if (shopName.equals("EAC1")||shopName.equals("EAC2")) {
			defaultshopName="EAC";
		}else{
			defaultshopName=shopName;
		}
		List<Map<String, Object>> listDefaultCategory = echartService.getDefaultCategory(defaultshopName);		
		String defaultCategory="";
		if (listDefaultCategory.size()==1) {
			defaultCategory=listDefaultCategory.get(0).get("PRODUCTCATEGORY").toString();
		}else {
			for(int i=0;i<listDefaultCategory.size();i++){
				if (listDefaultCategory.get(i).get("DAILY_PLAN_FALG").toString().equals("Y")) {
					defaultCategory=listDefaultCategory.get(i).get("PRODUCTCATEGORY").toString();
				}
			}
		}
		
		List<String> listCategory = new ArrayList<String>();
		for(int i=0;i<list.size();i++){
			listCategory.add(list.get(i).get("PRODUCTCATEGORY").toString());
		}
		boolean isExist = false;
		for(int i=0;i<listCategory.size();i++){
			if (listCategory.get(i).equals(defaultCategory)) {
				listCategory.remove(i);
				isExist = true;
				break;
			}
		}
		if(isExist){
			listCategory.add(0, defaultCategory);
		}
		
		return listCategory;
	}		

	@RequestMapping(value="/getOpt_OperatorDefectMDLRENYUANBIEOQA")
	public void getOpt_OperatorDefectMDLRENYUANBIEOQA(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String deviceType = yieldParam.getDeviceType();
		String shopName = yieldParam.getShopName();
		String operationName = yieldParam.getProcesstype();
		String productCategory = yieldParam.getProductCategory();
		String productionType = yieldParam.getProductionType();
		String startTime_ = yieldParam.getStarttime();
		String startTime = startTime_.substring(0,4)+startTime_.substring(5,7)+startTime_.substring(8,10)+startTime_.substring(11,13);
		String endTime_ = yieldParam.getEndtime();
		String endTime = endTime_.substring(0,4)+endTime_.substring(5,7)+endTime_.substring(8,10)+endTime_.substring(11,13);
		
		List<Map<String, Object>> list = echartQualityService.getOperatorMDLRENYUANBIETotal(shopName,operationName,productionType,productCategory,startTime,endTime);
		List<Map<String, Object>> listOperator = echartQualityService.getOperatorIdList(shopName,operationName,productionType,productCategory,startTime,endTime);
		List<Map<String, Object>> listDefectDescription = echartQualityService.getOperatorMDLRENYUANBIEDefectDescription(shopName,operationName,productionType,productCategory,startTime,endTime);
		List<Map<String, Object>> listAVG = echartQualityService.getOperatorMDLRENYUANBIETotalAVG(shopName,operationName,productionType,productCategory,startTime,endTime);
		List<Map<String, Object>> listAVGForPassQTY = echartQualityService.getOperatorDefectAVG(shopName,operationName,productionType,productCategory,"All",startTime,endTime);
		List<Map<String, Object>> listForPassQTY = echartQualityService.getOperatorDefect(shopName,operationName,productionType,productCategory,"All",startTime,endTime);
		
		List<Map<String, Object>> listYield = echartQualityService.getOperatorYield(shopName,operationName,productionType,productCategory,"OPERATOR",startTime,endTime);
		List<Map<String, Object>> listYieldAVG = echartQualityService.getOperatorYieldAVG(shopName,operationName,productionType,productCategory,"OPERATOR",startTime,endTime);
		                                                            
		List<Map<String, Object>> listDate=echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
			
		StringBuffer xData = new StringBuffer().append("['AVG',");
		String[] arrxData = new String[listOperator.size()+1];
		arrxData[0] = "AVG";
		for (int i = 0; i < listOperator.size(); i++) {
			xData.append("'"+listOperator.get(i).get("OPERATORID").toString()+"',");
			arrxData[i+1] = listOperator.get(i).get("OPERATORID").toString();
		}
		xData.append("]");
		
		StringBuffer legendData = new StringBuffer().append("['Defect Ratio','OK',");
		String[] arrlegendData = new String[listDefectDescription.size()+2];
		arrlegendData[0] = "Defect Ratio";
		arrlegendData[1] = "OK";
		for (int i = 0; i < listDefectDescription.size(); i++) {
			legendData.append("'"+listDefectDescription.get(i).get("DESCRIPTION").toString()+"',");
			arrlegendData[i+2] = listDefectDescription.get(i).get("DESCRIPTION").toString();
		}
		legendData.append("]");

		
		StringBuffer series = new StringBuffer().append("[");
		StringBuffer seriesItem = new StringBuffer();
		
		if (deviceType.equals("tv")) {
			seriesItem.append("{name: 'Defect Ratio',type: 'line',yAxisIndex: 1,symbol: 'circle',symbolSize: 10,smooth: true,label: {normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		} else {
			seriesItem.append("{name: 'Defect Ratio',type: 'line',yAxisIndex: 1,symbol: 'circle',symbolSize: 5,smooth: true,label: {normal: {show: true,position: 'top',fontSize: '75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		}
		
		Double avgDefectRatio = 100-Double.parseDouble(listYieldAVG.size() != 0?listYieldAVG.get(0).get("YIELDRATIO").toString():"0");
		try {
			seriesItem.append("[0,"+String.format("%.2f", avgDefectRatio)+","+listYieldAVG.get(0).get("PRODUCTOKQTY")+",'AVG'],");
			for (int i = 1; i < arrxData.length; i++) {
				for (int j = 0; j < listYield.size(); j++) {
					if (listYield.get(j).get("EVENTUSER").toString().equals(arrxData[i])) {
						seriesItem.append("[");
						seriesItem.append(String.valueOf(i)+",");
						Double defectRatio = 100 - Double.parseDouble(listYield.get(j).get("YIELDRATIO").toString());
						seriesItem.append(String.format("%.2f", defectRatio)+",");
						seriesItem.append(listYield.get(j).get("PRODUCTOKQTY").toString()+",");
						seriesItem.append("'"+arrxData[i]+"'");
						seriesItem.append("],");
						break;
					}
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
			log.debug(e.getMessage());
		}
		seriesItem.append("]},");
		//get 人员产出
		for (int i = 1; i < arrlegendData.length; i++) {
			if (arrlegendData[i].equals("OK")) {
				seriesItem.append("{name:'"+arrlegendData[i]+"',type:'bar',stack:'1',barWidth:'50%',label: {normal: {show: true,position: 'inside'}},data:[");
			} else {
				seriesItem.append("{name:'"+arrlegendData[i]+"',type:'bar',stack:'1',barWidth:'50%',data:[");
			}
			for (int j = 0; j < listAVG.size(); j++) {
				if (listAVG.get(j).get("DESCRIPTION").toString().equals(arrlegendData[i])) {
					seriesItem.append("[");
					seriesItem.append("0,");
					Double outAvg = Double.parseDouble(listAVG.get(j).get("DEFECTQTY").toString())/(arrxData.length-1);
					seriesItem.append(String.format("%.0f", outAvg)+",");
					seriesItem.append("'AVG',");
					seriesItem.append("],");
					break;
				}
			}						
			for (int j = 1; j < arrxData.length; j++) {
				for (int p = 0; p < list.size(); p++) {
					if (list.get(p).get("OPERATORID").toString().equals(arrxData[j])) {
						if (list.get(p).get("DESCRIPTION").toString().equals(arrlegendData[i])) {
							seriesItem.append("[");
							seriesItem.append(String.valueOf(j)+",");
							seriesItem.append(list.get(p).get("DEFECTQTY").toString()+",");
							seriesItem.append("'"+arrxData[j]+"',");
							seriesItem.append(list.get(p).get("OUTQTY").toString()+",");
							Double defectRatio = Double.parseDouble(list.get(p).get("DEFECTQTY").toString())/Double.parseDouble(list.get(p).get("OUTQTY").toString())*100;
							seriesItem.append(String.format("%.2f", defectRatio));
							seriesItem.append("],");
							break;
						}
					}
				}
			}
			seriesItem.append("]},");
		}
      
		//get 过货量        
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'过货量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color: '#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '80%',color: 'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		} else {
			seriesItem.append("{name:'过货量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color: '#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '65%',color: 'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		}
		try {
			if (listAVGForPassQTY.size()!=0) {
				for (int i = 0; i < arrxData.length; i++) {
					seriesItem.append("["+String.valueOf(i)+",1,");
					if (i==0) {
						seriesItem.append(listAVGForPassQTY.get(0).get("OUTQTY_1").toString());
					}else {
						for (int k = 0; k < listForPassQTY.size(); k++) {
								if (listForPassQTY.get(k).get("OPERATORID").toString().equals(arrxData[i])) {
									seriesItem.append(listForPassQTY.get(k).get("OUTQTY_1").toString());
									break;
								}
						}
					}
					seriesItem.append("],");
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
			log.debug(e.getMessage());
		}
		seriesItem.append("]},");
		
	
        
		
		series.append(seriesItem.toString());
		series.append("]");
		
		String totolOut = "";
		int totolOutInt = 0;
		for (int i = 0; i < listOperator.size(); i++) {
			totolOutInt += Integer.parseInt(listOperator.get(i).get("OUTQTY").toString());
		}
		totolOut = String.valueOf(totolOutInt);
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("todaydate", todayDate);
		result.put("series", series.toString());
		result.put("legenddata", legendData.toString()); 
		result.put("totolOut", totolOut);
		
		try { 
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping("getOpt_OperatorDefectMDLRENYUANBIEOneOQA")
	public void getOpt_OperatorDefectMDLRENYUANBIEOneOQA(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String shopName = yieldParam.getShopName();
		String operationName = yieldParam.getProcesstype();
		String productCategory = yieldParam.getProductCategory();
		String productionType = yieldParam.getProductionType();
		String startTime_ = yieldParam.getStarttime();
		String startTime = startTime_.substring(0,4)+startTime_.substring(5,7)+startTime_.substring(8,10)+startTime_.substring(11,13);
		String endTime_ = yieldParam.getEndtime();	
		String endTime = endTime_.substring(0,4)+endTime_.substring(5,7)+endTime_.substring(8,10)+endTime_.substring(11,13);
		String opNameId = yieldParam.getDatatype();
		String opName = "";
		String deviceType = yieldParam.getDeviceType();
		List<Map<String, Object>> listOpRealName = echartQualityService.getlistOpRealName(opNameId);
		if (listOpRealName.size()!=0) {
			opName = listOpRealName.get(0).get("OPERATORID").toString();
		}else {
			opName = opNameId;
		}
		
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listYield = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listDefectDescription = new ArrayList<Map<String,Object>>();
		if (!opName.equals("AVG")) {
			list = echartQualityService.getOperatorMDLRENYUANBIEOne(shopName,opName,operationName,productionType,productCategory,startTime,endTime);		
			listYield = echartQualityService.getOperatorYieldOne(shopName,opName,operationName,productionType,productCategory,"Operator",startTime,endTime);
			listDefectDescription = echartQualityService.getOperatorDefectDescription(shopName,opName,operationName,productionType,productCategory,startTime,endTime);

		}else {
			list = echartQualityService.getOperatorMDLRENYUANBIEOneAVG(shopName,opName,operationName,productionType,productCategory,startTime,endTime);		
			listYield = echartQualityService.getOperatorYieldOneAVG(shopName,opName,operationName,productionType,productCategory,"Operator",startTime,endTime);
			listDefectDescription = echartQualityService.getOperatorDefectDescription(shopName,opName,operationName,productionType,productCategory,startTime,endTime);
		}
		
		List<Map<String, Object>> listDate=echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();
			
		SimpleDateFormat sFormat = new SimpleDateFormat("yyyyMMddHH");
		StringBuffer xData = new StringBuffer().append("[");
		List<String> listxDataCol = new ArrayList<String>();
		try {
			Date startTime1 = sFormat.parse(startTime);
			Date endTime1 = sFormat.parse(endTime);
			Calendar tempStart = Calendar.getInstance();
			tempStart.setTime(endTime1);
			while (startTime1.getTime() <= endTime1.getTime()) {
				listxDataCol.add(sFormat.format(endTime1));
				tempStart.add(Calendar.HOUR_OF_DAY, -1);
				endTime1 = tempStart.getTime();
			}
		} catch (Exception e) {
			// TODO: handle exception
			log.error(e.getMessage());
		}
		String[] arrxDatacol = new String[listxDataCol.size()-1];
		String[] arrxDatacolend = new String[listxDataCol.size()-1];
		for (int i = 0; i < arrxDatacol.length; i++) {
			arrxDatacol[i] = listxDataCol.get(listxDataCol.size()-1-i);
			arrxDatacolend[i] = listxDataCol.get(listxDataCol.size()-2-i);
		}


		
		String[] arrxData = new String[arrxDatacol.length];
		for (int i = 0; i < arrxDatacol.length; i++) {
			xData.append("'"+arrxDatacol[i].substring(8)+"~"+arrxDatacolend[i].substring(8)+"',");
			arrxData[i] = arrxDatacol[i].substring(8)+"~"+arrxDatacolend[i].substring(8);
		}
		xData.append("]");

		StringBuffer legendData = new StringBuffer().append("['Defect Ratio','OK',");
		String[] arrlegendData = new String[listDefectDescription.size()+2];
		arrlegendData[0] = "Defect Ratio";
		arrlegendData[1] = "OK";
		for (int i = 0; i < listDefectDescription.size(); i++) {
			legendData.append("'"+listDefectDescription.get(i).get("DESCRIPTION").toString()+"',");
			arrlegendData[i+2] = listDefectDescription.get(i).get("DESCRIPTION").toString();
		}
		legendData.append("]");
		
		StringBuffer series = new StringBuffer().append("[");
		StringBuffer seriesItem = new StringBuffer();
		
		if (deviceType.equals("tv")) {
			seriesItem.append("{name: 'Defect Ratio',type: 'line',yAxisIndex: 1,symbol: 'circle',symbolSize: 10,smooth: true,label: {normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		} else {
			seriesItem.append("{name: 'Defect Ratio',type: 'line',yAxisIndex: 1,symbol: 'circle',symbolSize: 5,smooth: true,label: {normal: {show: true,position: 'top',fontSize: '70%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		}
		
		for (int i = 0; i < arrxData.length; i++) {
			boolean isExist = false;
			for (int j = 0; j < listYield.size(); j++) {
				if (listYield.get(j).get("TIMEHH").toString().equals(arrxDatacol[i])) {
					seriesItem.append("[");
					seriesItem.append(String.valueOf(i)+",");
					Double defectRatio = 100 - Double.parseDouble(listYield.get(j).get("YIELDRATIO").toString());
					seriesItem.append(String.format("%.2f", defectRatio)+",");
					seriesItem.append(listYield.get(j).get("PRODUCTOKQTY").toString()+",");
					seriesItem.append("'"+arrxData[i]+"'");
					seriesItem.append("],");
					isExist = true;
					break;
				}
			}
			if (!isExist) {
				seriesItem.append("[");
				seriesItem.append(String.valueOf(i)+",");
				seriesItem.append(",");
				seriesItem.append("'"+arrxData[i]+"'");
				seriesItem.append("],");
			}
		}
		seriesItem.append("]},");
		//get 人员产出
		for (int i = 1; i < arrlegendData.length; i++) {
			if (arrlegendData[i].equals("OK")) {
				seriesItem.append("{name:'"+arrlegendData[i]+"',type:'bar',stack:'1',barWidth:'50%',label: {normal: {show: true,position: 'inside'}},data:[");
			} else {
				seriesItem.append("{name:'"+arrlegendData[i]+"',type:'bar',stack:'1',barWidth:'50%',data:[");
			}						
			for (int j = 0; j < arrxData.length; j++) {
				for (int p = 0; p < list.size(); p++) {
					if (list.get(p).get("TIMEHH").toString().equals(arrxDatacol[j])) {
						if (list.get(p).get("DESCRIPTION").toString().equals(arrlegendData[i])) {
							seriesItem.append("[");
							seriesItem.append(String.valueOf(j)+",");
							seriesItem.append(list.get(p).get("DEFECTQTY").toString()+",");
							seriesItem.append("'"+arrxData[j]+"',");
							seriesItem.append(list.get(p).get("OUTQTY").toString()+",");
							Double defectRatio = Double.parseDouble(list.get(p).get("DEFECTQTY").toString())/Double.parseDouble(list.get(p).get("OUTQTY").toString())*100;
							seriesItem.append(String.format("%.2f", defectRatio));
							seriesItem.append("],");
							break;
						}
					}
				}
			}
			seriesItem.append("]},");
		}
		
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

	@RequestMapping("getOpt_OperatorDefectMDLRENYUANBIEdefaultopName")
	public void getOpt_OperatorDefectMDLRENYUANBIEdefaultopName(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String shopName = yieldParam.getShopName();
		String operationName = yieldParam.getProcesstype();
		String productCategory = yieldParam.getProductCategory();
		String productionType = yieldParam.getProductionType();
		String startTime_ = yieldParam.getStarttime();
		String startTime = startTime_.substring(0,4)+startTime_.substring(5,7)+startTime_.substring(8,10)+startTime_.substring(11,13);
		String endTime_ = yieldParam.getEndtime();	
		String endTime = endTime_.substring(0,4)+endTime_.substring(5,7)+endTime_.substring(8,10)+endTime_.substring(11,13);		
		
		List<Map<String, Object>> list = echartQualityService.getOperatorMDLCHANNENGTotal(shopName,"",operationName,productionType,productCategory,startTime,endTime);
		String defaultopName = "";
		if (list.size()!=0) {
			defaultopName = list.get(0).get("OPERATORID").toString();
		}

		Map<String, Object> result = new HashMap<String, Object>();
		result.put("defaultopName", defaultopName);
		
		try { 
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value="/getMdlByLineCategory")
	public @ResponseBody List<String> getMdlByLineCategory(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName,
			@RequestParam(value = "processType",required = true)String operationName,
			@RequestParam(value = "productionType",required = true)String productionType,
			@RequestParam(value = "lineName",required = true)String lineName) throws IOException{	
		
		Map<String, Object> result= new HashMap<String, Object>();
		List<Map<String, Object>> list = echartQualityService.getmdloqappbylineproductcategory(lineName,productionType,operationName,shopName);
		//取默认值
		String defaultshopName="";
		if (shopName.equals("EAC1")||shopName.equals("EAC2")) {
			defaultshopName="EAC";
		}else{
			defaultshopName=shopName;
		}
		List<Map<String, Object>> listDefaultCategory = echartService.getDefaultCategory(defaultshopName);		
		String defaultCategory="";
		if (listDefaultCategory.size()==1) {
			defaultCategory=listDefaultCategory.get(0).get("PRODUCTCATEGORY").toString();
		}else {
			for(int i=0;i<listDefaultCategory.size();i++){
				if (listDefaultCategory.get(i).get("DAILY_PLAN_FALG").toString().equals("Y")) {
					defaultCategory=listDefaultCategory.get(i).get("PRODUCTCATEGORY").toString();
				}
			}
		}
		
		List<String> listCategory = new ArrayList<String>();
		for(int i=0;i<list.size();i++){
			listCategory.add(list.get(i).get("PRODUCTCATEGORY").toString());
		}
		boolean isExist = false;
		for(int i=0;i<listCategory.size();i++){
			if (listCategory.get(i).equals(defaultCategory)) {
				listCategory.remove(i);
				isExist = true;
				break;
			}
		}
		if(isExist){
			listCategory.add(0, defaultCategory);
		}
		
		return listCategory;
	}		

	@RequestMapping(value="/getOption_QaByLine")
	public void getOption_QaByLine(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String lineName = yieldParam.getLinename();
		String operationName = yieldParam.getProcesstype();
		String productionType = yieldParam.getProductionType();
		String shopName = yieldParam.getShopName();
		String productCategory = yieldParam.getProductCategory();
		String deviceType = yieldParam.getDeviceType();
		
		Map<String, Object> result =new HashMap<String, Object>();
		
		String[] datetimeforgetdata = new String[16];
		String[] datetimeformat = new String[16];
		int datetimelegenth=0;
		
		//LEGENDDATA(EASY TO TELL)
		List<Map<String, Object>> listlegenddata = echartQualityService.getmdloqappbylinelegenddata(lineName,productionType,operationName,shopName,productCategory);
		String[] legend = new String[listlegenddata.size()];
		StringBuffer legenddata = new StringBuffer();
		legenddata.append("['LRR',");
		for(int i=0;i<listlegenddata.size();i++){
			legenddata.append("'");
			legenddata.append(listlegenddata.get(i).get("DESCRIPTION").toString());
			legenddata.append("',");
			legend[i] = listlegenddata.get(i).get("DESCRIPTION").toString();
		}
		legenddata.append("]");
		
		result.put("legenddata", legenddata);
		//xdata
		
		List<Map<String, Object>> listxdata = echartQualityService.getmonthweekdaytimedata();
		StringBuffer xdata = new StringBuffer();
		xdata.append("[");
		//获得月份
		for(int i =0;i<3;i++){
			xdata.append("'");
			xdata.append(listxdata.get(2-i).get("DATEMONTH").toString().substring(4,6));
			xdata.append("M',");
			datetimeforgetdata[datetimelegenth] = listxdata.get(2-i).get("DATEMONTH").toString();
			datetimeformat[datetimelegenth] = listxdata.get(2-i).get("DATEMONTH").toString().substring(4,6)+"M";
			datetimelegenth+=1;
		}
		datetimeforgetdata[datetimelegenth]="";
		datetimeformat[datetimelegenth]="";
		datetimelegenth+=1;
		xdata.append("'',");
		//获得周数
		for(int i = 0;i<4;i++){
			xdata.append("'");
			xdata.append(listxdata.get(3-i).get("DATEWEEK").toString().substring(4,6));
			xdata.append("W',");
			datetimeforgetdata[datetimelegenth] = listxdata.get(3-i).get("DATEWEEK").toString();
			datetimeformat[datetimelegenth] = listxdata.get(3-i).get("DATEWEEK").toString().substring(4,6)+"W";
			datetimelegenth+=1;
		}
		xdata.append("'',");
		datetimeforgetdata[datetimelegenth]="";
		datetimeformat[datetimelegenth]="";
		datetimelegenth+=1;
		//获得天数
		for(int i = 0 ;i<7;i++){
			xdata.append("'");
			xdata.append(listxdata.get(6-i).get("DATETIME").toString().substring(4,6));
			xdata.append("/");
			xdata.append(listxdata.get(6-i).get("DATETIME").toString().substring(6,8));
			xdata.append("',");
			datetimeforgetdata[datetimelegenth] = listxdata.get(6-i).get("DATETIME").toString();
			datetimeformat[datetimelegenth] = listxdata.get(6-i).get("DATETIME").toString().substring(4,6)+"/"+listxdata.get(6-i).get("DATETIME").toString().substring(6,8);
			datetimelegenth+=1;
		}
		xdata.append("]");
		
		result.put("xdata", xdata);
		
		
		List<Map<String, Object>> listall = echartQualityService.getmdloqappbylinealldata(lineName,productionType,operationName,shopName,productCategory);
		List<Map<String, Object>> listallother = echartQualityService.getmdloqappbylinealldataother(lineName,productionType,operationName,shopName,productCategory);
		
		//取数据还需要将XDATA单独取成一个String[]用于比较
		StringBuffer series = new StringBuffer();
		series.append("[");
		//for line only
		if (deviceType.equals("tv")) {
			series.append("{name:'LRR',type:'line',color:'red',yAxisIndex:1,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
		} else {
			series.append("{name:'LRR',type:'line',color:'red',yAxisIndex:1,symbol:'circle',symbolSize:6,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
		}
		for(int i = 0; i<datetimelegenth;i++){
			if(i==3 || i==8){
				series.append("[");
				series.append(i+",");
				series.append(",");
				series.append("'"+datetimeformat[i]+"',");
				series.append("],");
			}else{
			for (int ListAllLegenth = 0;ListAllLegenth<listallother.size();ListAllLegenth++){
				if(listallother.get(ListAllLegenth).get("DATETIME").toString().equals(datetimeforgetdata[i])){
					series.append("[");
					/*
					Yield = new BigDecimal(Yield).setScale(1,BigDecimal.ROUND_HALF_UP).doubleValue();*/
					series.append(i+",");
					/*if(listallother.get(ListAllLegenth).get("LRRRESULT").toString().equals("0")){ 去掉Line中为0的值
						series.append(",");
					}else{*/
					Double LRRReuslt = Double.parseDouble(listallother.get(ListAllLegenth).get("LRRRESULT").toString())*100;
					String LRR = String.format("%.2f", LRRReuslt);	
					series.append(LRR+",");
			//		}
					series.append("'"+datetimeformat[i]+"',");
					series.append("],");
					break;
				}else if(ListAllLegenth >= listallother.size()-1){
					series.append("[");
					series.append(i+",");
					series.append(",");
					series.append("'"+datetimeformat[i]+"',");
					series.append("],");
				}
			}		
		  }
		}		
		series.append("]");
		series.append("},");
		
		//bar data coming hahaha
		for(int i = 0;i<legend.length;i++){	
			//最大的循环为Legend长度
			series.append("{name:'");
			series.append(legend[i]+"',");
			series.append("type:'bar',stack: '1',barWidth:'50%',data:[");
			
			
		    for(int j = 0;j<listall.size();j++ ){  
		    	//寻找 legend 相等
	            if(listall.get(j).get("DESCRIPTION").toString().equals(legend[i])){
	            	//legend 相等情况下 找 时间相等,有Legend 情况下必然存在时间，找时间即可
	            	 for(int m=0;m<datetimelegenth;m++){
	            	   if( m==3 || m==8) {
	           		     
	           	       }else {
	            	     if(listall.get(j).get("DATETIME").toString().equals(datetimeforgetdata[m])){
	            	        series.append("[");
	            	        series.append(m+",");
	            	        if(listall.get(j).get("DPPMRESULT") == null || listall.get(j).get("DPPMRESULT").equals("")){
	            	        	series.append(",");
	            	        }else{
	            	        series.append(listall.get(j).get("DPPMRESULT").toString()+",");
	            	        }
	            	        series.append("'"+datetimeformat[m]+"',");
	            	        series.append("],");
	            	     }
	           	       }
	            	}        	
	            }
	           
		    } 
		    series.append("]");
		    series.append("},"); 
		   
		}
		//顶点显示总和，通过散点图实现，数值与左轴数值一致
		if (deviceType.equals("tv")) {
			series.append("{name:'总和', type: 'scatter',yAxisIndex:0,symbolSize: 8,label: {normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1]},fontWeight:'bold',}},data:[");
		} else {
			series.append("{name:'总和', type: 'scatter',yAxisIndex:0,symbolSize: 5,label: {normal: {show: true,position: 'top',fontSize: '75%',formatter: function(obj) {var value = obj.value;return value[1]},fontWeight:'bold',}},data:[");
		}
		for (int i = 0;i < datetimeforgetdata.length;i++){
			Double DPPMRTOTOAL = (double) 0;
			for(int m=0;m<listall.size();m++){
			     if(listall.get(m).get("DATETIME").toString().equals(datetimeforgetdata[i])){
			    	 if( listall.get(m).get("DPPMRESULT") == null || listall.get(m).get("DPPMRESULT").equals("")){
			    		 DPPMRTOTOAL += 0;
			    	 }else{
			    		 DPPMRTOTOAL += Double.parseDouble(listall.get(m).get("DPPMRESULT").toString());
			    	 }
			      }if(m>=listall.size()-1){
			    	  String DPPMRTOTAL = String.format("%.0f", DPPMRTOTOAL);
			    	  series.append("["+i+","+DPPMRTOTAL+"],");
			      }
		  	}
			
		}
		series.append("]},");	
		
		
		//added
		if (deviceType.equals("tv")) {
			series.append("{name:'总量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color:'#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '80%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		} else {
			series.append("{name:'总量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color:'#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '70%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		}
	 	    for(int i = 0 ;i<datetimelegenth;i++){
		    	if(i==3||i==8){
		    		
		    	}else {
		    	     for(int j = 0;j<listallother.size();j++){
		    		     if(listallother.get(j).get("DATETIME").toString().equals(datetimeforgetdata[i])){
		    			     series.append("[");
		    		    	 series.append(i+",");
		    			     series.append(1+",");
		    			     series.append(listallother.get(j).get("TOTALPANELQTY").toString()+",");
		    			     series.append("],");
		    			     break;
		    		       }else if(j>=listallother.size()-1){
		    		    	 series.append("[");
			    		     series.append(i+",");
			    			 series.append(1+",");
			    			 series.append(0+",");
			    			 series.append("],");
		    		       }
		    	     }
		         }
		    }
		series.append("]}");
		series.append("]");	
		result.put("series",series);


		List<Map<String, Object>> listDate=echartService.getProductionDate();
		String todayDate=listDate.get(0).get("TODAY_5M").toString();
	
		result.put("todaydate", todayDate);
		
		try{
			writeJSON(response, result);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

	@RequestMapping(value="/getOpt_AMCData")
	public void getOpt_AMCData(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String itemName = yieldParam.getDatatype();		
		String deviceType = yieldParam.getDeviceType();
		List<Map<String, Object>> list=echartQualityService.getAMCData(itemName);
		List<Map<String, Object>> listDate=echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		
		List<Map<String, Object>> listDateFactory = echartService.getDateFactory();//和四层良率表日期一致
		
		//xData from Calendar
		StringBuffer xData =new StringBuffer();
		xData.append("[");
		String[] arrXdataColumn=new String[]{"MONTH_2","MONTH_1","MONTH_0","","WEEK_3","WEEK_2","WEEK_1","WEEK_0","","DAY_6","DAY_5","DAY_4","DAY_3","DAY_2","DAY_1","DAY_0"};
		String[] arrxData=new String[arrXdataColumn.length];
		String[] arrDateFactory=new String[arrXdataColumn.length];
		for(int i=0;i<arrXdataColumn.length;i++){
			xData.append("'");
			if(!arrXdataColumn[i].equals("")){
/*				if (i<=8) {
					xData.append("\\n"+listDate.get(0).get(arrXdataColumn[i]).toString());
				}else {
					xData.append(listDate.get(0).get(arrXdataColumn[i]).toString().substring(0, 2)+"\\n"+listDate.get(0).get(arrXdataColumn[i]).toString().substring(2));
				}*/	
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
		
		StringBuffer legendData=new StringBuffer().append("[");
		legendData.append("'2F',");
		legendData.append("'4F',");
		legendData.append("]");
		String[] arrlegendData={"2F","4F"};				
		
		//series
		String[] DateType=new String[]{"MONTH","MONTH","MONTH","MONTH","WEEK","WEEK","WEEK","WEEK","WEEK","DAY","DAY","DAY","DAY","DAY","DAY","DAY"};
		StringBuffer series=new StringBuffer();
		series.append("[");
		StringBuffer seriesItem=new StringBuffer();		
				
		
		for(int i=0;i<arrlegendData.length;i++){
			boolean isLegendExist=false;
			if (deviceType.equals("tv")) {
				seriesItem.append("{name:'"+arrlegendData[i]+"',type:'line',symbol:'circle',symbolSize:10,smooth: true,label: {normal:{show:true,position:'top',fontSize: '80%',formatter: function(obj){var value =obj.value;return value[1]},fontWeight:'bold',}},data:[");
			} else {
				seriesItem.append("{name:'"+arrlegendData[i]+"',type:'line',symbol:'circle',symbolSize:6,smooth: true,label: {normal:{show:true,position:'top',fontSize: '70%',formatter: function(obj){var value =obj.value;return value[1]},fontWeight:'bold',}},data:[");
			}
			for(int m=0;m<arrDateFactory.length;m++){
				boolean isDateExist=false;
				for(int p=0;p<list.size();p++){
					if (list.get(p).get("FABFLOOR").toString().equals(arrlegendData[i])) {
						isLegendExist=true;
						if(list.get(p).get("DATETYPE").toString().equals(DateType[m])){
							if(list.get(p).get("FACTORYDATE").toString().equals(arrDateFactory[m])){
								isDateExist=true;
								seriesItem.append("[");
								seriesItem.append(String.valueOf(m));
								seriesItem.append(",");								
								seriesItem.append(list.get(p).get("ITEMVALUE"));
								if (itemName.equals("HCL")) {
									seriesItem.append(",1.0,'");
								}else if (itemName.equals("HF")) {
									seriesItem.append(",1.0,'");
								}else if (itemName.equals("NH3")) {
									seriesItem.append(",10.0,'");
								}else if (itemName.equals("NO")) {
									seriesItem.append(",0,'");
								}else if (itemName.equals("NO2")) {
									seriesItem.append(",12.0,'");
								}else if (itemName.equals("TS")) {
									seriesItem.append(",10.0,'");
								}
								seriesItem.append(arrxData[m]);
								if (itemName.equals("HCL")) {
									seriesItem.append("',1.0],");
								}else if (itemName.equals("HF")) {
									seriesItem.append("',1.0],");
								}else if (itemName.equals("NH3")) {
									seriesItem.append("',10.0],");
								}else if (itemName.equals("NO")) {
									seriesItem.append("',0],");
								}else if (itemName.equals("NO2")) {
									seriesItem.append("',15.0],");
								}else if (itemName.equals("TS")) {
									seriesItem.append("',10.0],");
								}
								break;
							}
						}
						
					}
				}
				if(!isDateExist){
					seriesItem.append("[");
					seriesItem.append(String.valueOf(m));
					seriesItem.append(",");
					seriesItem.append(",,'");
					seriesItem.append(arrxData[m]);
					seriesItem.append("',],");
				}
			}
			seriesItem.append("],");
			if (deviceType.equals("tv")) {
				if (itemName.equals("HCL")) {
					seriesItem.append("markLine:{data:[{yAxis: 1},],label: {show: true,position: 'middle',fontSize: '80%',formatter: function(obj) {var value = obj.value;return 'SPEC:1ppbv'},fontWeight: 'bold',},}");
				}else if (itemName.equals("HF")) {
					seriesItem.append("markLine:{data:[{yAxis: 1},],label: {show: true,position: 'middle',fontSize: '80%',formatter: function(obj) {var value = obj.value;return 'SPEC:1ppbv'},fontWeight: 'bold',},}");
				}else if (itemName.equals("NH3")) {
					seriesItem.append("markLine:{data:[{yAxis: 10},],label: {show: true,position: 'middle',fontSize: '80%',formatter: function(obj) {var value = obj.value;return 'SPEC:10ppbv'},fontWeight: 'bold',},}");
				}else if (itemName.equals("NO")) {
					seriesItem.append("");
				}else if (itemName.equals("NO2")) {
					seriesItem.append("markLine:{data:[{name: '2F Spec',yAxis: 15},{name: '4F Spec',yAxis: 20},],label: {show: true,position: 'middle',fontSize: '80%',formatter: '{b}: {c}'+'ppbv',fontWeight: 'bold',},}");
				}else if (itemName.equals("TS")) {
					seriesItem.append("markLine:{data:[{name: '2F Spec',yAxis: 15},{name: '4F Spec',yAxis: 20},],label: {show: true,position: 'middle',fontSize: '80%',formatter: '{b}: {c}'+'ppbv',fontWeight: 'bold',},}");
				}
			} else {
				if (itemName.equals("HCL")) {
					seriesItem.append("markLine:{data:[{yAxis: 1},],label: {show: true,position: 'middle',fontSize: '70%',formatter: function(obj) {var value = obj.value;return 'SPEC:1ppbv'},fontWeight: 'bold',},}");
				}else if (itemName.equals("HF")) {
					seriesItem.append("markLine:{data:[{yAxis: 1},],label: {show: true,position: 'middle',fontSize: '70%',formatter: function(obj) {var value = obj.value;return 'SPEC:1ppbv'},fontWeight: 'bold',},}");
				}else if (itemName.equals("NH3")) {
					seriesItem.append("markLine:{data:[{yAxis: 10},],label: {show: true,position: 'middle',fontSize: '70%',formatter: function(obj) {var value = obj.value;return 'SPEC:10ppbv'},fontWeight: 'bold',},}");
				}else if (itemName.equals("NO")) {
					seriesItem.append("");
				}else if (itemName.equals("NO2")) {
					seriesItem.append("markLine:{data:[{name: '2F Spec',yAxis: 15},{name: '4F Spec',yAxis: 20},],label: {show: true,position: 'middle',fontSize: '70%',formatter: '{b}: {c}'+'ppbv',fontWeight: 'bold',},}");
				}else if (itemName.equals("TS")) {
					seriesItem.append("markLine:{data:[{name: '2F Spec',yAxis: 15},{name: '4F Spec',yAxis: 20},],label: {show: true,position: 'middle',fontSize: '70%',formatter: '{b}: {c}'+'ppbv',fontWeight: 'bold',},}");
				}
			}

			seriesItem.append("},");
		}		
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

	@RequestMapping(value="/CGWipCategory")	
	public @ResponseBody List<String> CGWipCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName) throws Exception{
		List<Map<String, Object>> listDate = echartService.getProductionDate();
		String currentDay = listDate.get(0).get("CURRENTDAY").toString();
		List<Map<String, Object>> list = echartQualityService.getSQEWIPProductCategory(currentDay);
		
		//取默认值
		String defaultshopName="";
		if (shopName.equals("EAC1")||shopName.equals("EAC2")) {
			defaultshopName="EAC";
		}else{
			defaultshopName=shopName;
		}
		List<Map<String, Object>> listDefaultCategory = echartService.getDefaultCategory(defaultshopName);		
		String defaultCategory="";
		if (listDefaultCategory.size()==1) {
			defaultCategory=listDefaultCategory.get(0).get("PRODUCTCATEGORY").toString();
		}else {
			for(int i=0;i<listDefaultCategory.size();i++){
				if (listDefaultCategory.get(i).get("DAILY_PLAN_FALG").toString().equals("Y")) {
					defaultCategory=listDefaultCategory.get(i).get("PRODUCTCATEGORY").toString();
				}
			}
		}
		
		List<String> listCategory = new ArrayList<String>();
		for(int i=0;i<list.size();i++){
			listCategory.add(list.get(i).get("MATERIALSPECNAME").toString());
		}
		boolean isExist = false;
		for(int i=0;i<listCategory.size();i++){
			if (listCategory.get(i).equals(defaultCategory)) {
				listCategory.remove(i);
				isExist = true;
				break;
			}
		}
		if(isExist){
			listCategory.add(0, defaultCategory);
		}
		
		return listCategory;

	}

	@RequestMapping(value="/CumYieldCategory")
	public @ResponseBody List<String> CumYieldCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName) throws IOException {
		List<Map<String, Object>> list = echartQualityService.getSQECUMYieldProductCategory(shopName);
	
		//取默认值
		String defaultshopName="";
		if (shopName.equals("EAC1")||shopName.equals("EAC2")) {
			defaultshopName="EAC";
		}else{
			defaultshopName=shopName;
		}
		List<Map<String, Object>> listDefaultCategory = echartService.getDefaultCategory(defaultshopName);		
		String defaultCategory="";
		if (listDefaultCategory.size()==1) {
			defaultCategory=listDefaultCategory.get(0).get("PRODUCTCATEGORY").toString();
		}else {
			for(int i=0;i<listDefaultCategory.size();i++){
				if (listDefaultCategory.get(i).get("DAILY_PLAN_FALG").toString().equals("Y")) {
					defaultCategory=listDefaultCategory.get(i).get("PRODUCTCATEGORY").toString();
				}
			}
		}
		
		List<String> listCategory = new ArrayList<String>();
		for(int i=0;i<list.size();i++){
			listCategory.add(list.get(i).get("PRODUCTCATEGORY").toString());
		}
		boolean isExist = false;
		for(int i=0;i<listCategory.size();i++){
			if (listCategory.get(i).equals(defaultCategory)) {
				listCategory.remove(i);
				isExist = true;
				break;
			}
		}
		if(isExist){
			listCategory.add(0, defaultCategory);
		}

		return listCategory;
	
	}

	@RequestMapping("DppmLrrCategory")
	public @ResponseBody List<String> DppmLrrCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName) throws Exception {
		String operationName = "IQC抽检";
		List<Map<String, Object>> listDate = echartService.getProductionDate();
		String currentDay = listDate.get(0).get("CURRENTDAY").toString();
		List<Map<String, Object>> list = echartQualityService.getSQEYieldProductCategory(operationName);
		
		//取默认值
		String defaultshopName="";
		if (shopName.equals("EAC1")||shopName.equals("EAC2")) {
			defaultshopName="EAC";
		}else{
			defaultshopName=shopName;
		}
		List<Map<String, Object>> listDefaultCategory = echartService.getDefaultCategory(defaultshopName);		
		String defaultCategory="";
		if (listDefaultCategory.size()==1) {
			defaultCategory=listDefaultCategory.get(0).get("PRODUCTCATEGORY").toString();
		}else {
			for(int i=0;i<listDefaultCategory.size();i++){
				if (listDefaultCategory.get(i).get("DAILY_PLAN_FALG").toString().equals("Y")) {
					defaultCategory=listDefaultCategory.get(i).get("PRODUCTCATEGORY").toString();
				}
			}
		}
		
		List<String> listCategory = new ArrayList<String>();
		for(int i=0;i<list.size();i++){
			listCategory.add(list.get(i).get("MATERIALSPECNAME").toString());
		}
		boolean isExist = false;
		for(int i=0;i<listCategory.size();i++){
			if (listCategory.get(i).equals(defaultCategory)) {
				listCategory.remove(i);
				isExist = true;
				break;
			}
		}
		if(isExist){
			listCategory.add(0, defaultCategory);
		}
		
		return listCategory;
	}

	@RequestMapping("InputOutputCategory")
	public @ResponseBody List<String> InputOutputCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName) throws IOException {
		List<Map<String, Object>> list = echartQualityService.SQEINPUTOUTPUTProductCategory();
		
		//取默认值
		String defaultshopName="";
		if (shopName.equals("EAC1")||shopName.equals("EAC2")) {
			defaultshopName="EAC";
		}else{
			defaultshopName=shopName;
		}
		List<Map<String, Object>> listDefaultCategory = echartService.getDefaultCategory(defaultshopName);		
		String defaultCategory="";
		if (listDefaultCategory.size()==1) {
			defaultCategory=listDefaultCategory.get(0).get("PRODUCTCATEGORY").toString();
		}else {
			for(int i=0;i<listDefaultCategory.size();i++){
				if (listDefaultCategory.get(i).get("DAILY_PLAN_FALG").toString().equals("Y")) {
					defaultCategory=listDefaultCategory.get(i).get("PRODUCTCATEGORY").toString();
				}
			}
		}
		
		List<String> listCategory = new ArrayList<String>();
		for(int i=0;i<list.size();i++){
			listCategory.add(list.get(i).get("MATERIALSPECNAME").toString());
		}
		boolean isExist = false;
		for(int i=0;i<listCategory.size();i++){
			if (listCategory.get(i).equals(defaultCategory)) {
				listCategory.remove(i);
				isExist = true;
				break;
			}
		}
		if(isExist){
			listCategory.add(0, defaultCategory);
		}
		
		return listCategory;
	}

	@RequestMapping(value="/CGWipMove")
	public void CGWipMove(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String productCategory = yieldParam.getProductCategory();
		String deviceType = yieldParam.getDeviceType();
		List<Map<String, Object>> listDate = echartService.getProductionDate();
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		String currentDay = listDate.get(0).get("CURRENTDAY").toString();
		List<Map<String, Object>> list = echartQualityService.getSQEWIPMove(currentDay,productCategory);
		List<Map<String, Object>> listWareHouseWIP = echartQualityService.getSQEWareHouseMove(currentDay,productCategory);
		//获得产品对应的工序
		StringBuffer xData=new StringBuffer();
		xData.append("[");
		String[] operationID=new String[list.size()];
		for(int i=0;i<list.size();i++){
			operationID[i]=list.get(i).get("DESCRIPTION").toString();
			xData.append("'");
			xData.append(operationID[i]);
			xData.append("',");
		}
		xData.append("]");
		//获得产品每个工序对应的WIP
		StringBuffer WIPData=new StringBuffer();
		int wipCount = 0;
		WIPData.append('[');
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("DESCRIPTION").toString().equals(operationID[i])){
				WIPData.append(list.get(i).get("WIPMATERIALCOUNT").toString());
				wipCount +=Integer.parseInt(list.get(i).get("WIPMATERIALCOUNT").toString());
				WIPData.append(",");
			}
		}
		WIPData.append(']');
		
		//获得产品每个工序对应的Move
		StringBuffer MoveData=new StringBuffer();
		MoveData.append('[');
		for(int i=0;i<operationID.length;i++){
			for(int m=0;m<list.size();m++){
				if(operationID[i].equals(list.get(m).get("DESCRIPTION").toString())){
					MoveData.append(list.get(m).get("MOVEMENTMATERIALCOUNT").toString());
					MoveData.append(",");
					break;
				}
			}
		}
		MoveData.append(']');	
		
		//WIP Total
		String wipTotal = String.valueOf(wipCount);
		String warehouseWIP = "";
		if (listWareHouseWIP.size()!= 0) {
			warehouseWIP = listWareHouseWIP.get(0).get("WIPMATERIALCOUNT").toString();
		} else {
			warehouseWIP = "0";
		}
										
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("wipdata", WIPData.toString());
		result.put("movedata", MoveData.toString());
		result.put("wiptotal", wipTotal);
		result.put("today", todayDate);		
		result.put("warehouseWIP", warehouseWIP);
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@RequestMapping(value="/CumYield")
	public void CumYield(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String productCategory = yieldParam.getProductCategory();
		String deviceType = yieldParam.getDeviceType();
		List<Map<String, Object>> listYield = echartQualityService.getyieldSQECUM(productCategory);
		List<Map<String, Object>> listDate=echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		List<Map<String, Object>> listDateFactory = echartService.getDateFactory();//和四层良率表日期一致
		
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
		StringBuffer legendData=new StringBuffer().append("['Yield']");
		String[] arrlegendData={"Yield"};
		
		//series
		String[] DateType=new String[]{"MONTH","MONTH","MONTH","MONTH","WEEK","WEEK","WEEK","WEEK","WEEK","DAY","DAY","DAY","DAY","DAY","DAY","DAY"};
		StringBuffer series=new StringBuffer();
		series.append("[");
		StringBuffer seriesItem=new StringBuffer();
		//get Yield
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'Yield',type:'line',yAxisIndex: 0,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show:true,position:'bottom',fontSize:'100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		} else {
			seriesItem.append("{name:'Yield',type:'line',yAxisIndex: 0,symbol:'circle',symbolSize:6,smooth:true,label: {normal: {show:true,position:'bottom',fontSize:'75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		}
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
							seriesItem.append(String.format("%.2f", Double.parseDouble(listYield.get(m).get("YIELD").toString())*100));
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
				seriesItem.append(",,'");
				seriesItem.append(arrxData[i]);
				seriesItem.append("',],");
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
	
	@RequestMapping(value="/DppmLrr")
	public void DppmLrr(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String operationName = "IQC抽检";
		String productCategory = yieldParam.getProductCategory();
		String deviceType = yieldParam.getDeviceType();
		List<Map<String, Object>> listYield = echartQualityService.getyieldSQE(operationName,productCategory);
		List<Map<String, Object>> listDefect = echartQualityService.getdefectSQE(operationName,productCategory);	
		List<Map<String, Object>> listDefectCategory = echartQualityService.getdefectSQEDefectList(operationName,productCategory);	
		List<Map<String, Object>> listDate=echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		List<Map<String, Object>> listDateFactory = echartService.getDateFactory();//和四层良率表日期一致
		
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
		String[] arrlegendData=new String[listDefectCategory.size()];
		legendData.append("['LRR',");
		for(int m=0;m<listDefectCategory.size();m++){
			if(listDefectCategory.get(m).get("DEFECTCODE")!=null){
				legendData.append("'");
				legendData.append(listDefectCategory.get(m).get("DEFECTCODE").toString());
				legendData.append("',");
				arrlegendData[m]=listDefectCategory.get(m).get("DEFECTCODE").toString();
			}
		}
		legendData.append("]");
		
		//series
		String[] DateType=new String[]{"MONTH","MONTH","MONTH","MONTH","WEEK","WEEK","WEEK","WEEK","WEEK","DAY","DAY","DAY","DAY","DAY","DAY","DAY"};
		StringBuffer series=new StringBuffer();
		series.append("[");
		StringBuffer seriesItem=new StringBuffer();
		//get Yield
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'LRR',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show:true,position:'bottom',fontSize:'100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		} else {
			seriesItem.append("{name:'LRR',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:6,smooth:true,label: {normal: {show:true,position:'bottom',fontSize:'75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		}
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<listYield.size();m++){
				if (listYield.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(listYield.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(listYield.get(m).get("LRR")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(listYield.get(m).get("LRR").toString());
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
				seriesItem.append(",,'");
				seriesItem.append(arrxData[i]);
				seriesItem.append("',],");
			}
		}		
		seriesItem.append("]},");
		
		String[] arrDefectCategory=new String[listDefectCategory.size()];
		for(int i=0;i<listDefectCategory.size();i++){
			arrDefectCategory[i]=listDefectCategory.get(i).get("DEFECTCODE").toString();
		}
				
		//get Defect
		for(int i=0;i<arrDefectCategory.length;i++){
			boolean isDefectExist=false;
			seriesItem.append("{name:'"+arrDefectCategory[i]+"',type:'bar',stack:'1',barWidth:'50%',data:[");
			for(int m=0;m<arrDateFactory.length;m++){
				boolean isDateExist=false;
				for(int p=0;p<listDefect.size();p++){
					if (listDefect.get(p).get("DEFECTCODE").toString().equals(arrDefectCategory[i])) {
						isDefectExist=true;
						if(listDefect.get(p).get("DATETYPE").toString().equals(DateType[m])){
							if(listDefect.get(p).get("DATETIME").toString().equals(arrDateFactory[m])){
								isDateExist=true;
								seriesItem.append("[");
								seriesItem.append(String.valueOf(m));
								seriesItem.append(",");
								double dd = 0;
								if (listDefect.get(p).get("DPPM")!=null) {
									dd=Double.parseDouble(listDefect.get(p).get("DPPM").toString());
								}
								seriesItem.append(String.format("%.2f", dd).toString());
								seriesItem.append(",");
								if (listDefect.get(m).get("OUTPUTOKMATERIALCOUNT")!=null) {
									seriesItem.append(listDefect.get(m).get("OUTPUTOKMATERIALCOUNT").toString());
								} else {
									seriesItem.append("0");
								}								
								seriesItem.append(",'");
								seriesItem.append(arrxData[m]);
								seriesItem.append("',");
								if (listDefect.get(p).get("NGMATERIALCOUNT")!=null) {
									seriesItem.append(listDefect.get(p).get("NGMATERIALCOUNT").toString());
								} else {
									seriesItem.append("0");
								}								
								seriesItem.append("],");
								break;
							}
						}
						
					}
				}
				if(!isDateExist){
					seriesItem.append("[");
					seriesItem.append(String.valueOf(m));
					seriesItem.append(",");
					seriesItem.append(",,'");
					seriesItem.append(arrxData[m]);
					seriesItem.append("',],");
				}
			}
			seriesItem.append("]},");
		}
		
		//过货量
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'过货量',type:'bar',yAxisIndex:2,xAxisIndex:1,color:'#C4C4C4',barWidth:'85%',label:{normal:{show: true,position:'inside',fontSize:'80%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		} else {
			seriesItem.append("{name:'过货量',type:'bar',yAxisIndex:2,xAxisIndex:1,color:'#C4C4C4',barWidth:'85%',label:{normal:{show: true,position:'inside',fontSize:'70%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		}
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<listDefect.size();m++){
				if (listDefect.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(listDefect.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(listDefect.get(m).get("OUTPUTOKMATERIALCOUNT")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							if(arrxData[i].equals("")){
								seriesItem.append(",0,''");
							}else {
								seriesItem.append(",1,"+listDefect.get(m).get("OUTPUTOKMATERIALCOUNT").toString());
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
	
	@RequestMapping(value="/InputOutput")
	public void InputOutput(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String productCategory = yieldParam.getProductCategory();
		List<Map<String, Object>> listDaily = new ArrayList<>();
		List<Map<String, Object>> listCUM = new ArrayList<>();
		try {
			listDaily = echartQualityService.getSQEInputOutputDaily(productCategory);
			listCUM = echartQualityService.getSQEInputOutputCUM(productCategory);
		} catch (Exception e) {
			// TODO: handle exception
			log.debug(e.getMessage());
		}
		
		List<Map<String, Object>> listDate = echartService.getProductionDate();
		int todayDay = Integer.parseInt(listDate.get(0).get("CURRENTDAY").toString().substring(6));
		String todayDate=listDate.get(0).get("TODAY_30M").toString();//get today date
		
		List<Map<String, Object>> dayCount = echartService.getThisMonthDayCount();
		Integer dayCountNum = Integer.parseInt(dayCount.get(0).get("COUNT").toString());
		
		//横坐标
		String[] colName=new String[]{"01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"};
		String xData="[";
		for(int i=1;i<dayCountNum+1;i++){
			xData=xData+"'"+String.valueOf(i)+"',";
		}
		xData=xData+"]";
		
		//get data
		StringBuffer data_dailyIn=new StringBuffer();
		StringBuffer data_dailyOut=new StringBuffer();
		StringBuffer data_cumIn=new StringBuffer();								
		StringBuffer data_cumOut=new StringBuffer();
		String[] arrCUMIn = new String[colName.length];
		String[] arrCUMOut = new String[colName.length];
		data_dailyIn.append("[");
		data_dailyOut.append("[");
		data_cumIn.append("[");
		data_cumOut.append("[");
		for (int i = 0; i < colName.length; i++) {
			boolean cumIsExist = false;
			boolean dailyIsExist = false;
			for (int j = 0; j < listDaily.size(); j++) {
				if (listDaily.get(j).get("DATETIME").toString().substring(6).equals(colName[i])) {
					data_dailyIn.append(listDaily.get(j).get("IN_QTY").toString());
					data_dailyOut.append(listDaily.get(j).get("OUT_QTY").toString());
					dailyIsExist=true;
					break;
				}
			}
			for (int j = 0; j < listCUM.size(); j++) {
				if (listCUM.get(j).get("DATETIME").toString().substring(6).equals(colName[i])) {
					data_cumIn.append(listCUM.get(j).get("IN_QTY").toString());
					data_cumOut.append(listCUM.get(j).get("OUT_QTY").toString());
					arrCUMIn[i] = listCUM.get(j).get("IN_QTY").toString();
					arrCUMOut[i] = listCUM.get(j).get("OUT_QTY").toString();
					cumIsExist=true;
					break;
				}
			}
			if (i>0&&i<todayDay) {
				if (!arrCUMIn[i-1].equals("0")) {
					if (!cumIsExist) {
						arrCUMIn[i]=arrCUMIn[i-1];
					}
				} else {
					if (!cumIsExist) {
						arrCUMIn[i]="0";
					}
				}
				if (!arrCUMOut[i-1].equals("0")) {
					if (!cumIsExist) {
						arrCUMOut[i]=arrCUMOut[i-1];
					}
				} else {
					if (!cumIsExist) {
						arrCUMOut[i] = "0";
					}
				}
			}else if(i == 0) {
				if (!cumIsExist) {
					arrCUMIn[i]="0";
					arrCUMOut[i]="0";
				}
			}else if (i>=todayDay) {
				arrCUMIn[i]="";
				arrCUMOut[i]="";
			}
			if (!cumIsExist) {
				data_cumIn.append(arrCUMIn[i]);
				data_cumOut.append(arrCUMOut[i]);
			}
			if (!dailyIsExist) {
				data_dailyIn.append("0");
				data_dailyOut.append("0");
			}
/*		    if (!cumIsExist) {
				data_cumIn.append("0");
				data_cumOut.append("0");
			}*/
			data_dailyIn.append(",");
			data_dailyOut.append(",");
			data_cumIn.append(",");
			data_cumOut.append(",");
		}
		
		data_dailyIn.append("]");
		data_dailyOut.append("]");
		data_cumIn.append("]");
		data_cumOut.append("]");
						
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("lastUpdatetime", todayDate);
		result.put("data_dailyIn", data_dailyIn.toString());
		result.put("data_dailyOut", data_dailyOut.toString());
		result.put("data_cumIn", data_cumIn.toString());
		result.put("data_cumOut", data_cumOut.toString());
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}	
	}

	@RequestMapping(value="/yieldCategory")	
	public @ResponseBody List<String> yieldCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName,
			@RequestParam(value = "productionType",required = true)String operationName) throws Exception{
		List<Map<String, Object>> listDate = echartService.getProductionDate();
		String currentDay = listDate.get(0).get("CURRENTDAY").toString();
		List<Map<String, Object>> list = echartQualityService.getSQEYieldProductCategory(operationName);
		
		//取默认值
		String defaultshopName="";
		if (shopName.equals("EAC1")||shopName.equals("EAC2")) {
			defaultshopName="EAC";
		}else{
			defaultshopName=shopName;
		}
		List<Map<String, Object>> listDefaultCategory = echartService.getDefaultCategory(defaultshopName);		
		String defaultCategory="";
		if (listDefaultCategory.size()==1) {
			defaultCategory=listDefaultCategory.get(0).get("PRODUCTCATEGORY").toString();
		}else {
			for(int i=0;i<listDefaultCategory.size();i++){
				if (listDefaultCategory.get(i).get("DAILY_PLAN_FALG").toString().equals("Y")) {
					defaultCategory=listDefaultCategory.get(i).get("PRODUCTCATEGORY").toString();
				}
			}
		}
		
		List<String> listCategory = new ArrayList<String>();
		for(int i=0;i<list.size();i++){
			listCategory.add(list.get(i).get("MATERIALSPECNAME").toString());
		}
		boolean isExist = false;
		for(int i=0;i<listCategory.size();i++){
			if (listCategory.get(i).equals(defaultCategory)) {
				listCategory.remove(i);
				isExist = true;
				break;
			}
		}
		if(isExist){
			listCategory.add(0, defaultCategory);
		}
		
		return listCategory;
	}

	@RequestMapping(value="/ActPlanCategory")
	public @ResponseBody List<String> ActPlanCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName,
			@RequestParam(value = "productionType",required = true)String productionType) throws Exception{

		List<Map<String, Object>> list = echartQualityService.SQEINPUTOUTPUTProductCategory();
		
		//取默认值
		String defaultshopName="";
		if (shopName.equals("EAC1")||shopName.equals("EAC2")) {
			defaultshopName="EAC";
		}else{
			defaultshopName=shopName;
		}
		List<Map<String, Object>> listDefaultCategory = echartService.getDefaultCategory(defaultshopName);		
		String defaultCategory="";
		if (listDefaultCategory.size()==1) {
			defaultCategory=listDefaultCategory.get(0).get("PRODUCTCATEGORY").toString();
		}else {
			for(int i=0;i<listDefaultCategory.size();i++){
				if (listDefaultCategory.get(i).get("DAILY_PLAN_FALG").toString().equals("Y")) {
					defaultCategory=listDefaultCategory.get(i).get("PRODUCTCATEGORY").toString();
				}
			}
		}
		
		List<String> listCategory = new ArrayList<String>();
		for(int i=0;i<list.size();i++){
			listCategory.add(list.get(i).get("MATERIALSPECNAME").toString());
		}
		boolean isExist = false;
		for(int i=0;i<listCategory.size();i++){
			if (listCategory.get(i).equals(defaultCategory)) {
				listCategory.remove(i);
				isExist = true;
				break;
			}
		}
		if(isExist){
			listCategory.add(0, defaultCategory);
		}
		
		return listCategory;
	}

	@RequestMapping(value="/yield")
	public void yield(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String operationName = yieldParam.getProductionType();
		String productCategory = yieldParam.getProductCategory();
		String deviceType = yieldParam.getDeviceType();
		List<Map<String, Object>> listYield = echartQualityService.getyieldSQE(operationName,productCategory);
		List<Map<String, Object>> listDefect = echartQualityService.getdefectSQE(operationName,productCategory);	
		List<Map<String, Object>> listDefectCategory = echartQualityService.getdefectSQEDefectList(operationName,productCategory);	
		List<Map<String, Object>> listDate=echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		List<Map<String, Object>> listDateFactory = echartService.getDateFactory();//和四层良率表日期一致
		
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
			if(listDefectCategory.get(m).get("DEFECTCODE")!=null){
				legendData.append("'");
				legendData.append(listDefectCategory.get(m).get("DEFECTCODE").toString());
				legendData.append("',");
				arrlegendData[m+1]=listDefectCategory.get(m).get("DEFECTCODE").toString();
			}
		}
		legendData.append("]");
		
		//series
		String[] DateType=new String[]{"MONTH","MONTH","MONTH","MONTH","WEEK","WEEK","WEEK","WEEK","WEEK","DAY","DAY","DAY","DAY","DAY","DAY","DAY"};
		StringBuffer series=new StringBuffer();
		series.append("[");
		StringBuffer seriesItem=new StringBuffer();
		//get Yield
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'Yield',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show:true,position:'bottom',fontSize:'100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		} else {
			seriesItem.append("{name:'Yield',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:6,smooth:true,label: {normal: {show:true,position:'bottom',fontSize:'75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		}
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
				seriesItem.append(",,'");
				seriesItem.append(arrxData[i]);
				seriesItem.append("',],");
			}
		}		
		seriesItem.append("]},");
		
		String[] arrDefectCategory=new String[listDefectCategory.size()];
		for(int i=0;i<listDefectCategory.size();i++){
			arrDefectCategory[i]=listDefectCategory.get(i).get("DEFECTCODE").toString();
		}
				
		//get Defect
		for(int i=0;i<arrDefectCategory.length;i++){
			boolean isDefectExist=false;
			seriesItem.append("{name:'"+arrDefectCategory[i]+"',type:'bar',stack:'1',barWidth:'50%',data:[");
			for(int m=0;m<arrDateFactory.length;m++){
				boolean isDateExist=false;
				for(int p=0;p<listDefect.size();p++){
					if (listDefect.get(p).get("DEFECTCODE").toString().equals(arrDefectCategory[i])) {
						isDefectExist=true;
						if(listDefect.get(p).get("DATETYPE").toString().equals(DateType[m])){
							if(listDefect.get(p).get("DATETIME").toString().equals(arrDateFactory[m])){
								isDateExist=true;
								seriesItem.append("[");
								seriesItem.append(String.valueOf(m));
								seriesItem.append(",");
								double dd = 0;
								if (listDefect.get(p).get("DEFECTRATIO")!=null) {
									dd=Double.parseDouble(listDefect.get(p).get("DEFECTRATIO").toString());
								}								
								seriesItem.append(String.format("%.2f", dd).toString());
								seriesItem.append(",");
								if (listDefect.get(m).get("OUTPUTOKMATERIALCOUNT")!=null) {
									seriesItem.append(listDefect.get(m).get("OUTPUTOKMATERIALCOUNT").toString());
								} else {
									seriesItem.append("0");
								}								
								seriesItem.append(",'");
								seriesItem.append(arrxData[m]);
								seriesItem.append("',");
								if (listDefect.get(p).get("NGMATERIALCOUNT")!=null) {
									seriesItem.append(listDefect.get(p).get("NGMATERIALCOUNT").toString());
								} else {
									seriesItem.append("0");
								}								
								seriesItem.append("],");
								break;
							}
						}
						
					}
				}
				if(!isDateExist){
					seriesItem.append("[");
					seriesItem.append(String.valueOf(m));
					seriesItem.append(",");
					seriesItem.append(",,'");
					seriesItem.append(arrxData[m]);
					seriesItem.append("',],");
				}
			}
			seriesItem.append("]},");
		}
		
		//过货量
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'过货量',type:'bar',yAxisIndex:2,xAxisIndex:1,color:'#C4C4C4',barWidth:'85%',label:{normal:{show: true,position:'inside',fontSize:'80%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		} else {
			seriesItem.append("{name:'过货量',type:'bar',yAxisIndex:2,xAxisIndex:1,color:'#C4C4C4',barWidth:'85%',label:{normal:{show: true,position:'inside',fontSize:'70%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		}
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<listYield.size();m++){
				if (listYield.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(listYield.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(listYield.get(m).get("OUTPUTOKMATERIALCOUNT")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							if(arrxData[i].equals("")){
								seriesItem.append(",0,''");
							}else {
								seriesItem.append(",1,"+listYield.get(m).get("OUTPUTOKMATERIALCOUNT").toString());
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
	
	@RequestMapping(value="/ActPlan")
	public void ActPlan(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String inoutType = yieldParam.getProductionType();
		String productCategory = yieldParam.getProductCategory();
		List<Map<String, Object>> listActDaily = new ArrayList<>();
		List<Map<String, Object>> listActCUM = new ArrayList<>();
		List<Map<String, Object>> listPlan = new ArrayList<>();
		
		try {
			listActDaily = echartQualityService.getSQEInputOutputDaily(productCategory);
			listActCUM = echartQualityService.getSQEInputOutputCUM(productCategory);
			listPlan = echartQualityService.getCGPlan(inoutType,productCategory);
		} catch (Exception e) {
			// TODO: handle exception
			log.debug(e.getMessage());
		}
		
		List<Map<String, Object>> listDate = echartService.getProductionDate();
		int todayDay = Integer.parseInt(listDate.get(0).get("CURRENTDAY").toString().substring(6));
		String todayDate=listDate.get(0).get("TODAY_30M").toString();//get today date
		
		List<Map<String, Object>> dayCount = echartService.getThisMonthDayCount();
		Integer dayCountNum = Integer.parseInt(dayCount.get(0).get("COUNT").toString());
		
		//横坐标
		String[] colName=new String[]{"01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"};
		String[] colName1=new String[]{"DAY_01","DAY_02","DAY_03","DAY_04","DAY_05","DAY_06","DAY_07","DAY_08","DAY_09","DAY_10","DAY_11","DAY_12","DAY_13","DAY_14","DAY_15","DAY_16","DAY_17","DAY_18","DAY_19","DAY_20","DAY_21","DAY_22","DAY_23","DAY_24","DAY_25","DAY_26","DAY_27","DAY_28","DAY_29","DAY_30","DAY_31"};

		String xData="[";
		for(int i=1;i<dayCountNum+1;i++){
			xData=xData+"'"+String.valueOf(i)+"',";
		}
		xData=xData+"]";
		
		//get data
		StringBuffer data_dailyplan=new StringBuffer();
		StringBuffer data_dailyact=new StringBuffer();
		StringBuffer data_cumplan=new StringBuffer();								
		StringBuffer data_cumact=new StringBuffer();
		String[] arrCUMAct = new String[colName.length];
		data_dailyplan.append("[");
		data_dailyact.append("[");
		data_cumplan.append("[");
		data_cumact.append("[");
		for (int i = 0; i < dayCountNum; i++) {
			boolean cumIsExist = false;
			boolean dailyIsExist = false;
			for (int j = 0; j < listActDaily.size(); j++) {
				if (listActDaily.get(j).get("DATETIME").toString().substring(6).equals(colName[i])) {
					if (inoutType.equals("IN")) {
						data_dailyact.append(listActDaily.get(j).get("IN_QTY").toString());
					}else {
						data_dailyact.append(listActDaily.get(j).get("OUT_QTY").toString());	
					}
					dailyIsExist=true;
					break;
				}
			}
			for (int j = 0; j < listActCUM.size(); j++) {
				if (listActCUM.get(j).get("DATETIME").toString().substring(6).equals(colName[i])) {
					if (inoutType.equals("IN")) {
						data_cumact.append(listActCUM.get(j).get("IN_QTY").toString());
						arrCUMAct[i] = listActCUM.get(j).get("IN_QTY").toString();
					}else {
						data_cumact.append(listActCUM.get(j).get("OUT_QTY").toString());
						arrCUMAct[i] = listActCUM.get(j).get("OUT_QTY").toString();
					}
					cumIsExist=true;
					break;
				}
			}
			if (i>0&&i<todayDay) {
				if (!arrCUMAct[i-1].equals("0")) {
					if (!cumIsExist) {
						arrCUMAct[i]=arrCUMAct[i-1];
					}
				} else {
					if (!cumIsExist) {
						arrCUMAct[i]="0";
					}
				}
			}else if(i == 0) {
				if (!cumIsExist) {
					arrCUMAct[i]="0";
				}
			}else if (i>=todayDay) {
				arrCUMAct[i]="";
			}
			if (!cumIsExist) {
				data_cumact.append(arrCUMAct[i]);
			}
			if (!dailyIsExist) {
				data_dailyact.append("0");
			}

			data_dailyact.append(",");
			data_cumact.append(",");

		}	
		for(int i=0;i<dayCountNum;i++) {
			for(int j = 0;j < listPlan.size();j++) {
				if (listPlan.get(j).get("CATEGORY").toString().equals("DAILY PLAN")) {
					data_dailyplan.append(listPlan.get(j).get(colName1[i]).toString());
					data_dailyplan.append(",");
				} else if (listPlan.get(j).get("CATEGORY").toString().equals("CUM PLAN")) {
					data_cumplan.append(listPlan.get(j).get(colName1[i]).toString());
					data_cumplan.append(",");
				}
			}
		}
		data_dailyact.append("]");
		data_cumact.append("]");
		data_dailyplan.append("]");
		data_cumplan.append("]");
						
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("lastUpdatetime", todayDate);
		result.put("data_dailyplan", data_dailyplan.toString());
		result.put("data_dailyact", data_dailyact.toString());
		result.put("data_cumplan", data_cumplan.toString());
		result.put("data_cumact", data_cumact.toString());
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
}
