package com.boe.idm.project.controller.echart;

import java.io.IOException;
import java.util.ArrayList;
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

import com.boe.idm.project.model.ScrapEntity;
import com.boe.idm.project.model.YieldParam;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.echart.EchartProductionService;
import com.boe.idm.project.utils.StringUtils;
import com.boe.utils.json.JsonUtils;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@RestController
@RequestMapping(value="/api/echart/production")
public class ProductionController extends JsonUtils{

	private static final Logger log = LoggerFactory.getLogger(ProductionController.class);

	@Autowired
	private EchartProductionService echartProductionService;
	
	@Autowired
	private EchartService echartService;
	
	@RequestMapping(value="test")
	public String getTest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String keyIn = "666";
		return keyIn;
	}

	@RequestMapping("getProductionInputOutput")
	public void getProductionInputOutput(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception{
		String shopName=yieldParam.getShopName();
		String deviceType = yieldParam.getDeviceType();
		List<Map<String, Object>> list = echartProductionService.getProduction(shopName);	
		List<Map<String, Object>> listDate = echartService.getProductionDate(shopName);
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
			if (deviceType.equals("tv")) {
				seriesData.append(String.format("{name:'%s', type:'bar',label: {normal: {show: true,position: 'inside',fontSize:12}},stack:'in',data:%s},",productCategory[i], inData));
				seriesData.append(String.format("{name:'%s', type:'bar',label: {normal: {show: true,position: 'inside',fontSize:12}},stack:'Out',data:%s},",productCategory[i], outData));
			} else {
				seriesData.append(String.format("{name:'%s', type:'bar',label: {normal: {show: true,position: 'inside',fontSize:9}},stack:'in',data:%s},",productCategory[i], inData));
				seriesData.append(String.format("{name:'%s', type:'bar',label: {normal: {show: true,position: 'inside',fontSize:9}},stack:'Out',data:%s},",productCategory[i], outData));
			}
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

	@RequestMapping(value="/actplanCategory")
	public @ResponseBody List<String> actplanCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="shopName",required=false) String shopName) throws Exception{
		List<Map<String, Object>> list = echartProductionService.getactplanCategory(shopName);
		//取默认值
		List<Map<String, Object>> listDefaultCategory = echartService.getDefaultCategory(shopName);		
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
		boolean isExist=false;
		for(int i=0;i<listCategory.size();i++){
			if (listCategory.get(i).equals(defaultCategory)) {
				listCategory.remove(i);
				isExist=true;
				break;
			}
		}
		if (isExist) {
			listCategory.add(0, defaultCategory);
		}
	
		return listCategory;
	}
	
	@RequestMapping(value="/rtCategory")
	public @ResponseBody List<String> rtCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="shopName",required=false) String shopName) throws Exception{
		List<Map<String, Object>> list = echartProductionService.getRtCategory(shopName);
		//取默认值
		List<Map<String, Object>> listDefaultCategory = echartService.getDefaultCategory(shopName);		
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
		boolean isExist=false;
		for(int i=0;i<listCategory.size();i++){
			if (listCategory.get(i).equals(defaultCategory)) {
				listCategory.remove(i);
				isExist=true;
				break;
			}
		}
		if (isExist) {
			listCategory.add(0, defaultCategory);
		}
	
		return listCategory;
	}

	@RequestMapping("actplan")
	public void actplan(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String shopName = yieldParam.getShopName();
		String productCategory = yieldParam.getProductCategory();	
		String in_out = yieldParam.getDatatype();
		List<Map<String, Object>> list = echartProductionService.getActplan(shopName,productCategory,in_out);
		List<Map<String, Object>> producttype = echartProductionService.getProduction(shopName);
		List<Map<String, Object>> listDate = echartService.getProductionDate(shopName);
		List<Map<String, Object>> dayCount = echartService.getThisMonthDayCount();
		String todayDate=listDate.get(0).get("TODAY_30M").toString();//get today date

		Integer dayCountnum = Integer.parseInt(dayCount.get(0).get("COUNT").toString());
		//横坐标
		String[] colName=new String[]{"DAY_01","DAY_02","DAY_03","DAY_04","DAY_05","DAY_06","DAY_07","DAY_08","DAY_09","DAY_10","DAY_11","DAY_12","DAY_13","DAY_14","DAY_15","DAY_16","DAY_17","DAY_18","DAY_19","DAY_20","DAY_21","DAY_22","DAY_23","DAY_24","DAY_25","DAY_26","DAY_27","DAY_28","DAY_29","DAY_30","DAY_31"};
		String xData="[";
		for(int i=1;i<dayCountnum+1;i++){
			xData=xData+"'"+String.valueOf(i)+"',";
		}
		xData=xData+"]";
		
		//get data
		StringBuffer data_dailyplan=new StringBuffer();
		StringBuffer data_dailyact=new StringBuffer();
		StringBuffer data_cumplan=new StringBuffer();								
		StringBuffer data_cumact=new StringBuffer();
		StringBuffer data_productiontype= new StringBuffer();
		StringBuffer count=new StringBuffer();
		//data_productiontype.append("{fieldLabel:'产品型号',width:100,name : 'size',id   : 'radio',items:[");
		data_dailyplan.append("[");
		data_dailyact.append("[");
		data_cumplan.append("[");
		data_cumact.append("[");
		count.append(producttype.size());
		//获取producttype
		for(int j=0;j<producttype.size();j++){
			
			data_productiontype.append(producttype.get(j).get("PRODUCTCATEGORY"));
			
				if (j!=producttype.size()-1) {
					data_productiontype.append(",");
				}
		}

		for(int i=0;i<list.size();i++){
			if(list.get(i).get("CATEGORY").toString().equals("CUM ACT")){
				for(int j=0;j<colName.length;j++){
					if(list.get(i).get(colName[j])!=null){
						if(!list.get(i).get(colName[j]).toString().equals("0")){
							data_cumact.append(list.get(i).get(colName[j]).toString());
						}
					}
					data_cumact.append(",");
				}
			}
			if(list.get(i).get("CATEGORY").toString().equals("CUM PLAN")){
				for(int j=0;j<colName.length;j++){
					if(list.get(i).get(colName[j])!=null){
						data_cumplan.append(list.get(i).get(colName[j]).toString());
					}
					data_cumplan.append(",");
				}
			}
			if(list.get(i).get("CATEGORY").toString().equals("DAILY ACT")){
				for(int j=0;j<colName.length;j++){
					if(list.get(i).get(colName[j])!=null){
						if(!list.get(i).get(colName[j]).toString().equals("0")){
							data_dailyact.append(list.get(i).get(colName[j]).toString());
						}
					}
					data_dailyact.append(",");
				}
			}
			if(list.get(i).get("CATEGORY").toString().equals("DAILY PLAN")){
				for(int j=0;j<colName.length;j++){
					if(list.get(i).get(colName[j])!=null){
						data_dailyplan.append(list.get(i).get(colName[j]).toString());
					}
					data_dailyplan.append(",");
				}
			}
		}
		data_dailyplan.append("]");
		data_dailyact.append("]");
		data_cumplan.append("]");
		data_cumact.append("]");

		String todayDateSub = listDate.get(0).get("STARTTIME").toString().substring(6,8); 
		int todayDateNumber = Integer.parseInt(todayDateSub);
				
		String actCUM = "";
		String planCUM = "";
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).get("CATEGORY").toString().equals("CUM ACT")) {
				actCUM = list.get(i).get(colName[todayDateNumber-1]).toString();
			}
			if (list.get(i).get("CATEGORY").toString().equals("CUM PLAN")) {
				if (list.get(i).get("DAY_31") != null) {
					planCUM = list.get(i).get("DAY_31").toString();
				}else {
					if (list.get(i).get("DAY_30") != null) {
						planCUM = list.get(i).get("DAY_30").toString();
					}else {
						if (list.get(i).get("DAY_29") != null) {
							planCUM = list.get(i).get("DAY_29").toString();
						}else {
							planCUM = list.get(i).get("DAY_28").toString();
						}
					}
				}
			}
		}
		
		Double cumRatio = Double.parseDouble(actCUM)/Double.parseDouble(planCUM);
		String cumRatioStr = String.format("%.2f", cumRatio*100)+"%";
		StringBuffer tableHtmlStr = new StringBuffer();
		tableHtmlStr.append("本月计划：");
		if (shopName.equals("MODULE")||shopName.equals("EAC")) {
			tableHtmlStr.append(String.format("%.2f", Double.parseDouble(planCUM)/1000)+"K");
		}else if (shopName.equals("BP")||shopName.equals("EVEN")) {
			tableHtmlStr.append(planCUM);
		}
		tableHtmlStr.append("    本月实绩：");
		if (shopName.equals("MODULE")||shopName.equals("EAC")) {
			tableHtmlStr.append(String.format("%.2f", Double.parseDouble(actCUM)/1000)+"K");
		}else if (shopName.equals("BP")||shopName.equals("EVEN")) {
			tableHtmlStr.append(actCUM);
		}
		tableHtmlStr.append("    达成率：");
		tableHtmlStr.append(cumRatioStr);
		tableHtmlStr.append("");		
						
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("lastUpdatetime", todayDate);
		result.put("data_dailyplan", data_dailyplan.toString());
		result.put("data_dailyact", data_dailyact.toString());
		result.put("data_cumplan", data_cumplan.toString());
		result.put("data_cumact", data_cumact.toString());
		result.put("productiontype", data_productiontype.toString());
		result.put("count",count.toString() );
		result.put("actplanRatio", tableHtmlStr.toString());
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	
	@RequestMapping("rt")
	public void rt(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String shopName = yieldParam.getShopName();
		String productCategory = yieldParam.getProductCategory();	
		List<Map<String, Object>> list = echartProductionService.getRt(shopName,productCategory);
		List<Map<String, Object>> listActPlan = echartProductionService.getActplan(shopName, productCategory, "OUT");
		List<Map<String, Object>> producttype = echartProductionService.getProduction(shopName);
		List<Map<String, Object>> listDate = echartService.getProductionDate(shopName);
		List<Map<String, Object>> dayCount = echartService.getThisMonthDayCount();
		String todayDate=listDate.get(0).get("TODAY_30M").toString();//get today date

		Integer dayCountnum = Integer.parseInt(dayCount.get(0).get("COUNT").toString());
		//横坐标
		String[] colName=new String[]{"DAY_01","DAY_02","DAY_03","DAY_04","DAY_05","DAY_06","DAY_07","DAY_08","DAY_09","DAY_10","DAY_11","DAY_12","DAY_13","DAY_14","DAY_15","DAY_16","DAY_17","DAY_18","DAY_19","DAY_20","DAY_21","DAY_22","DAY_23","DAY_24","DAY_25","DAY_26","DAY_27","DAY_28","DAY_29","DAY_30","DAY_31"};
		String xData="[";
		for(int i=1;i<dayCountnum+1;i++){
			xData=xData+"'"+String.valueOf(i)+"',";
		}
		xData=xData+"]";
		
		//get data
		StringBuffer data_dailyplan=new StringBuffer();
		StringBuffer data_dailyact=new StringBuffer();
		StringBuffer data_cumplan=new StringBuffer();								
		StringBuffer data_cumact=new StringBuffer();
		StringBuffer data_productiontype= new StringBuffer();
		StringBuffer count=new StringBuffer();
		//data_productiontype.append("{fieldLabel:'产品型号',width:100,name : 'size',id   : 'radio',items:[");
		data_dailyplan.append("[");
		data_dailyact.append("[");
		data_cumplan.append("[");
		data_cumact.append("[");
		count.append(producttype.size());
		//获取producttype
		for(int j=0;j<producttype.size();j++){
			
			data_productiontype.append(producttype.get(j).get("PRODUCTCATEGORY"));
			
				if (j!=producttype.size()-1) {
					data_productiontype.append(",");
				}
		}

		for(int i=0;i<list.size();i++){
			if(list.get(i).get("CATEGORY").toString().equals("RT CUM ACT")){
				for(int j=0;j<colName.length;j++){
					if(list.get(i).get(colName[j])!=null){
						if(!list.get(i).get(colName[j]).toString().equals("0")){
							data_cumact.append(list.get(i).get(colName[j]).toString());
						}
					}
					data_cumact.append(",");
				}
			}
			if(list.get(i).get("CATEGORY").toString().equals("STOCK IN CUM ACT")){
				for(int j=0;j<colName.length;j++){
					if(list.get(i).get(colName[j])!=null){
						if(!list.get(i).get(colName[j]).toString().equals("0")){
							data_cumplan.append(list.get(i).get(colName[j]).toString());
						}
					}
					data_cumplan.append(",");
				}
			}
			if(list.get(i).get("CATEGORY").toString().equals("RT DAILY ACT")){
				for(int j=0;j<colName.length;j++){
					if(list.get(i).get(colName[j])!=null){
						if(!list.get(i).get(colName[j]).toString().equals("0")){
							data_dailyact.append(list.get(i).get(colName[j]).toString());
						}
					}
					data_dailyact.append(",");
				}
			}
			if(list.get(i).get("CATEGORY").toString().equals("STOCK IN DAILY ACT")){
				for(int j=0;j<colName.length;j++){
					if(list.get(i).get(colName[j])!=null){
						data_dailyplan.append(list.get(i).get(colName[j]).toString());
					}
					data_dailyplan.append(",");
				}
			}
		}
		data_dailyplan.append("]");
		data_dailyact.append("]");
		data_cumplan.append("]");
		data_cumact.append("]");

		String todayDateSub = listDate.get(0).get("STARTTIME").toString().substring(6,8); 
		int todayDateNumber = Integer.parseInt(todayDateSub);
				
		String actCUM = "";
		String planCUM = "";
		for (int i = 0; i < listActPlan.size(); i++) {
			if (listActPlan.get(i).get("CATEGORY").toString().equals("CUM ACT")) {
				actCUM = listActPlan.get(i).get(colName[todayDateNumber-1]).toString();
			}
			if (listActPlan.get(i).get("CATEGORY").toString().equals("CUM PLAN")) {
				if (listActPlan.get(i).get("DAY_31") != null) {
					planCUM = listActPlan.get(i).get("DAY_31").toString();
				}else {
					if (listActPlan.get(i).get("DAY_30") != null) {
						planCUM = listActPlan.get(i).get("DAY_30").toString();
					}else {
						if (listActPlan.get(i).get("DAY_29") != null) {
							planCUM = listActPlan.get(i).get("DAY_29").toString();
						}else {
							planCUM = listActPlan.get(i).get("DAY_28").toString();
						}
					}
				}
			}
		}
		
		Double cumRatio = Double.parseDouble(actCUM)/Double.parseDouble(planCUM);
		String cumRatioStr = String.format("%.2f", cumRatio*100)+"%";
		StringBuffer tableHtmlStr = new StringBuffer();
		tableHtmlStr.append("本月计划：");
		if (shopName.equals("MODULE")||shopName.equals("EAC")) {
			tableHtmlStr.append(String.format("%.2f", Double.parseDouble(planCUM)/1000)+"K");
		}else if (shopName.equals("BP")||shopName.equals("EVEN")) {
			tableHtmlStr.append(planCUM);
		}
		tableHtmlStr.append("    本月实绩：");
		if (shopName.equals("MODULE")||shopName.equals("EAC")) {
			tableHtmlStr.append(String.format("%.2f", Double.parseDouble(actCUM)/1000)+"K");
		}else if (shopName.equals("BP")||shopName.equals("EVEN")) {
			tableHtmlStr.append(actCUM);
		}
		tableHtmlStr.append("    达成率：");
		tableHtmlStr.append(cumRatioStr);
		tableHtmlStr.append("");		
						
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("lastUpdatetime", todayDate);
		result.put("data_dailyplan", data_dailyplan.toString());
		result.put("data_dailyact", data_dailyact.toString());
		result.put("data_cumplan", data_cumplan.toString());
		result.put("data_cumact", data_cumact.toString());
		result.put("productiontype", data_productiontype.toString());
		result.put("count",count.toString() );
		result.put("actplanRatio", tableHtmlStr.toString());
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value="wipMoveCategory")
	public @ResponseBody List<String> wipMoveCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value = "shopName",required = true) String shopName,
			@RequestParam(value = "productionType",required= false)String productionType,
			@RequestParam(value = "dataType",required = true)String dataType) throws Exception {
		List<Map<String, Object>> list = echartProductionService.getwipMoveCategory(shopName,productionType,dataType);
		//取默认值
		List<Map<String, Object>> listDefaultCategory = echartService.getDefaultCategory(shopName);		
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
		boolean isExist=false;
		for(int i=0;i<listCategory.size();i++){
			if (listCategory.get(i).equals(defaultCategory)) {
				listCategory.remove(i);
				isExist=true;
				break;
			}
		}
		if (isExist) {
			listCategory.add(0, defaultCategory);
		}
	
		return listCategory;
	}

	@RequestMapping(value="/wipMove")
	public void wipMove(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String shopName = yieldParam.getShopName();
		String productCategory = yieldParam.getProductCategory();
		String productionType = yieldParam.getProductionType();
		String dataType = yieldParam.getDatatype();
		
		List<Map<String, Object>> listWIP = echartProductionService.getWipNew(shopName, dataType, productCategory, productionType);	
		List<Map<String, Object>> listWIPTotal = echartProductionService.getWIPTotalNew(shopName,dataType, productionType,productCategory);
		List<Map<String, Object>> listMove = echartProductionService.getMoveNew(shopName,dataType,productCategory,productionType);
		List<Map<String, Object>> listOKMove = echartProductionService.getMoveNew(shopName, "MDLMAIN OK", productCategory,productionType);
		List<Map<String, Object>> listOperationName = echartProductionService.getOperationNameNew(shopName, dataType,productCategory, productionType);
		
/*		List<Map<String, Object>> listWIP = echartProductionService.getWIP(shopName,productionType,productCategory);	
		List<Map<String, Object>> listWIPTotal = echartProductionService.getWIPTotal(shopName, productionType,productCategory);
		List<Map<String, Object>> listMove = echartProductionService.getMove(shopName,productionType,productCategory);
		List<Map<String, Object>> listOKMove = echartProductionService.getOKMovement(shopName, productionType, productCategory);*/						
		List<Map<String, Object>> listDate = echartService.getProductionDate(shopName);
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		
		//获得产品对应的工序
		StringBuffer xData=new StringBuffer();
		xData.append("[");
		String[] operationID=new String[listOperationName.size()];
		for(int i=0;i<listOperationName.size();i++){
			operationID[i]=listOperationName.get(i).get("PROCESSOPERATIONNAME").toString();
			xData.append("'");
			xData.append(operationID[i]);
			xData.append("',");
		}
		xData.append("]");
		//获得产品每个工序对应的WIP
		StringBuffer WIPData=new StringBuffer();
		WIPData.append('[');
		try {
			for(int i=0;i<operationID.length;i++){
				boolean isExist = false;
				for(int m=0;m<listWIP.size();m++){
					if(operationID[i].equals(listWIP.get(m).get("PROCESSOPERATIONNAME").toString())){
						isExist = true;
						WIPData.append(listWIP.get(m).get("WIPQTY").toString());
						WIPData.append(",");
						break;
					}
				}
				if (!isExist) {
					WIPData.append("0,");
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
			log.debug(e.getMessage());
		}
		WIPData.append(']');
		
		//获得产品每个工序对应的Move
		StringBuffer MoveData=new StringBuffer();
		MoveData.append('[');
		try {
			for(int i=0;i<operationID.length;i++){
				boolean isExist = false;
				for(int m=0;m<listMove.size();m++){
					if(operationID[i].equals(listMove.get(m).get("PROCESSOPERATIONNAME").toString())){
						isExist = true;
						MoveData.append(listMove.get(m).get("MOVEMENTQTY").toString());
						MoveData.append(",");
						break;
					}
				}
				if (!isExist) {
					MoveData.append("0,");
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
			log.debug(e.getMessage());
		}
		MoveData.append(']');	
		
		StringBuffer OkMoveData = new StringBuffer();
		OkMoveData.append("[");
		if (shopName.equals("MODULE")) {
			for(int i=0;i<operationID.length;i++){
				boolean isExist = false;
				for(int m=0;m<listOKMove.size();m++){
					if(operationID[i].equals(listOKMove.get(m).get("PROCESSOPERATIONNAME").toString())){
						isExist = true;
						OkMoveData.append(listOKMove.get(m).get("MOVEMENTQTY").toString());
						OkMoveData.append(",");
						break;
					}
				}
				if (!isExist) {
					OkMoveData.append("0,");
				}
			}	
		}
		OkMoveData.append("]");
		
		//WIP Total
		String wipTotal;
		if (listWIPTotal.size()!=0) {
			wipTotal = listWIPTotal.get(0).get("TOTALQTY").toString();
		}else {
			wipTotal = "0";
		}		
										
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("wipdata", WIPData.toString());
		result.put("movedata", MoveData.toString());
		result.put("okmovedata", OkMoveData.toString());
		result.put("wiptotal", wipTotal);
		result.put("today", todayDate);		
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value="cutLineProductCategory")
	public @ResponseBody List<String> cutLineProductCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="shopName",required=true) String shopName,@RequestParam(value="processType",required=true) String processType) throws Exception {
		List<Map<String, Object>> list=echartProductionService.eacCutproductioncategory(shopName);	
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

	@RequestMapping(value="cutLineFPY")
	public void cutLineFPY(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		
		String productCategory = yieldParam.getProductCategory();
		String machineType = yieldParam.getProcesstype();
		List<Map<String, Object>> list = echartProductionService.geteacCutproduction(machineType,productCategory);	
		List<Map<String, Object>> listDate=echartService.getProductionDate("nameStr");	
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		StringBuffer xData=new StringBuffer();
		String[] dateTime=new String[7];
		xData.append("[''");
		for(int m=0;m<listDate.size();m++){
			String date=null;
			if(listDate.get(m).get("DAY_6")!=null){
				date=listDate.get(m).get("DAY_6").toString();
				dateTime[0]=listDate.get(m).get("DAY_6").toString();
			}
			if(!xData.toString().equals("[")){
				xData.append(",");
			}
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			
			if(listDate.get(m).get("DAY_5")!=null){
				date=listDate.get(m).get("DAY_5").toString();
				dateTime[1]=listDate.get(m).get("DAY_5").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_4")!=null){
				date=listDate.get(m).get("DAY_4").toString();
				dateTime[2]=listDate.get(m).get("DAY_4").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_3")!=null){
				date=listDate.get(m).get("DAY_3").toString();
				dateTime[3]=listDate.get(m).get("DAY_3").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_2")!=null){
				date=listDate.get(m).get("DAY_2").toString();
				dateTime[4]=listDate.get(m).get("DAY_2").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_1")!=null){
				date=listDate.get(m).get("DAY_1").toString();
				dateTime[5]=listDate.get(m).get("DAY_1").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_0")!=null){
				date=listDate.get(m).get("DAY_0").toString();
				dateTime[6]=listDate.get(m).get("DAY_0").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("',");
		}
		xData.append("'']");
		
		StringBuffer legendData=new StringBuffer();
		legendData.append("[");		
		String[] eqpID=new String[list.size()];
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("LINENAME")!=null){
				eqpID[i]=list.get(i).get("LINENAME").toString();
				legendData.append("'");
				legendData.append(list.get(i).get("LINENAME").toString());
				legendData.append("',");
			}
		}
		legendData.append("]");
		String[] outPro={"DAY_6_OUT","DAY_5_OUT","DAY_4_OUT","DAY_3_OUT","DAY_2_OUT","DAY_1_OUT","DAY_0_OUT"};
		String[] strMaxmin=new String[list.size()*7];
		for(int i=0;i<list.size();i++){
			for(int m=0;m<7;m++){
				if(list.get(i).get(outPro[m])!=null){
					strMaxmin[(i*7)+m]=list.get(i).get(outPro[m]).toString();
				}
			}
		}
		String max=strMaxmin[0];
		String min=strMaxmin[0];
		for(int i=0;i<list.size()*7;i++){
			if(Double.parseDouble(strMaxmin[i])>Double.parseDouble(max)){
				max=strMaxmin[i];
			}
			if(Double.parseDouble(strMaxmin[i])<Double.parseDouble(min)){
				min=strMaxmin[i];
			}
		}
		
		String[][] itemName={{"DAY_6_YLD","DAY_6_G","DAY_6_OUT"},{"DAY_5_YLD","DAY_5_G","DAY_5_OUT"},{"DAY_4_YLD","DAY_4_G","DAY_4_OUT"},{"DAY_3_YLD","DAY_3_G","DAY_3_OUT"},{"DAY_2_YLD","DAY_2_G","DAY_2_OUT"},{"DAY_1_YLD","DAY_1_G","DAY_1_OUT"},{"DAY_0_YLD","DAY_0_G","DAY_0_OUT"}};
		StringBuffer series=new StringBuffer();
		series.append("[");
		for(int i=0;i<list.size();i++){
			StringBuffer seriesItem=new StringBuffer();
			seriesItem.append("{name:'");
			seriesItem.append(list.get(i).get("LINENAME").toString());
			seriesItem.append("',type: 'scatter',data: [");//itemStyle: itemStyle,
			for(int m=0;m<7;m++){
				StringBuffer itemData=new StringBuffer();
				itemData.append("[");
				itemData.append(String.valueOf(m+1));
				itemData.append(",");
				if(!list.get(i).get(itemName[m][0]).toString().equals("0")){
					itemData.append(list.get(i).get(itemName[m][0]).toString());
				}
				itemData.append(",");
				if(!list.get(i).get(itemName[m][0]).toString().equals("0")){
					itemData.append(list.get(i).get(itemName[m][1]).toString());
				}
				itemData.append(",");
				if(!list.get(i).get(itemName[m][0]).toString().equals("0")){
					itemData.append(list.get(i).get(itemName[m][2]).toString());
				}
				itemData.append(",'");
				itemData.append(dateTime[m]);
				itemData.append("'],");
				seriesItem.append(itemData);
			}
			series.append(seriesItem);
			series.append("]},");
			
		}
		series.append("]");
										
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("legenddata", legendData.toString());
		result.put("series", series.toString());
		result.put("today", todayDate);		
		result.put("max", max);
		result.put("min", min);
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value="wipMoveByLine")
	public void wipMoveByLine(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String lineName = yieldParam.getLinename();
		String shopName = yieldParam.getShopName();		
		String lineType = yieldParam.getLinetype();
		String deviceType = yieldParam.getDeviceType();
		List<Map<String, Object>> listWIP = echartProductionService.getWIPMDLByLineNew(shopName,lineName);	
		List<Map<String, Object>> listWIPTotal = echartProductionService.getWIPTotalMDLByLineNew(shopName, lineName, lineType);
		List<Map<String, Object>> listMove=echartProductionService.getMoveMDLByLineNew(shopName,lineName);
		List<Map<String, Object>> listProductCategory = echartProductionService.WIPMDLByLineProductCategoryNew(shopName,lineName);
		String productCategory = "";
		if (listProductCategory.size() != 0) {
			productCategory = listProductCategory.get(0).get("PRODUCTCATEGORY").toString();
		}
		List<Map<String, Object>> OQAAPPList = echartProductionService.getOQAAPPListNew(productCategory);	
		List<Map<String, Object>> listOperationName = echartProductionService.getMDLAllOperationNameNew(productCategory, lineType);
/*		if (OQAAPPList.size()!=0) {
			listOperationName = echartProductionService.getMDLAllOperationName(productCategory,lineType);
		}else {
			listOperationName = echartProductionService.getMDLAllOperationName1(productCategory,lineType);
		}*/
					
		List<Map<String, Object>> listDate = echartService.getProductionDate(shopName);
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		
		//get legendData
		StringBuffer legendData = new StringBuffer().append("[");
		String[] arrlegendData = new String[listProductCategory.size()+1];
		for (int i = 0; i < listProductCategory.size(); i++) {
			legendData.append("'WIP-"+listProductCategory.get(i).get("PRODUCTCATEGORY").toString()+"',");
			arrlegendData[i] = "WIP-"+listProductCategory.get(i).get("PRODUCTCATEGORY").toString();
		}
		legendData.append("'MOVEMENT','MOVEMENT_OK']");
		arrlegendData[listProductCategory.size()]="MOVEMENT";
		
		//获得产品对应的工序
		StringBuffer xData=new StringBuffer();
		xData.append("[");
		String[] operationID=new String[listOperationName.size()];
		for(int i=0;i<listOperationName.size();i++){
			operationID[i]=listOperationName.get(i).get("PROCESSOPERATIONNAME").toString();
			xData.append("'");
			xData.append(operationID[i]);
			xData.append("',");
		}
		xData.append("]");
		
		StringBuffer series = new StringBuffer().append("[");
		//获得产品每个工序对应的WIP
		StringBuffer WIPData=new StringBuffer();
		for (int j = 0; j < listProductCategory.size(); j++) {
			WIPData.append("{name:'"+arrlegendData[j]+"',type:'bar',stack:'wip',label:{normal:{show:true,}},barWidth:'50%',data:");
			WIPData.append('[');
			for(int i=0;i<listOperationName.size();i++){
				boolean isExist = false;
				for (int k = 0; k < listWIP.size(); k++) {
					if (listWIP.get(k).get("PRODUCTCATEGORY").toString().equals(listProductCategory.get(j).get("PRODUCTCATEGORY").toString())) {
						if(listWIP.get(k).get("PROCESSOPERATIONNAME").toString().equals(operationID[i])){
							isExist = true;
							WIPData.append(listWIP.get(k).get("WIPQTY").toString());
							break;
						}
					}
				}
/*				if (!isExist) {
					WIPData.append("0");
				}*/
				WIPData.append(",");
			}
			WIPData.append("]},");
		}
		series.append(WIPData.toString());
		
		//获得产品每个工序对应的Move
		StringBuffer MoveData=new StringBuffer();
		for (int j = 0; j < listProductCategory.size(); j++) {
			if (deviceType.equals("tv")) {
				MoveData.append("{name:'MOVEMENT',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:10,label:{normal:{show:true,}},data:");
			} else {
				MoveData.append("{name:'MOVEMENT',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:6,label:{normal:{show:true,}},data:");
			}
			MoveData.append('[');
			for(int i=0;i<operationID.length;i++){ 
				boolean isExist = false;
				for(int m=0;m<listMove.size();m++){
					if(operationID[i].equals(listMove.get(m).get("PROCESSOPERATIONNAME").toString())){
						isExist = true;
						MoveData.append(listMove.get(m).get("MOVEMENTQTY").toString());			
						break;
					}
				}
				if (!isExist) {
					MoveData.append("0");
				}
				MoveData.append(",");	
			}
			MoveData.append("]},");
		}

		series.append(MoveData.toString());	
		
		//MoveMentOkDataAdd
	      String LineNameforMovementOk = yieldParam.getLinename();
	      StringBuffer MoveDataOK=new StringBuffer();
		  List<Map<String, Object>> listMoveMentOkQTY=echartProductionService.getWIPMovementOKQTY(shopName,LineNameforMovementOk);
	      for (int j = 0; j < listProductCategory.size(); j++) {
			    
	    	  MoveDataOK.append("{name:'MOVEMENT_OK',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:10,label:{normal:{show:true,}},data:[");
	    	  for(int i=0;i<operationID.length;i++){ 
	    		  boolean isExist = false;
	    		  for(int m=0;m<listMoveMentOkQTY.size();m++){
	    			  if(operationID[i].equals(listMoveMentOkQTY.get(m).get("PROCESSOPERATIONNAME").toString())){
	  					isExist = true;
	  					MoveDataOK.append(listMoveMentOkQTY.get(m).get("MOVEMENTQTY").toString());
	  					break;
	  				}
	   
	    		  }	  
	    	      if (!isExist) {
	    	    	  MoveDataOK.append("0");
					} 
	    	      MoveDataOK.append(",");
	    	  }
	    	  MoveDataOK.append("]},");
	      }
		series.append(MoveDataOK.toString());
		
		series.append("]");
		
		//WIP Total
		String wipTotal;
		if (listWIPTotal.size()!=0) {
			wipTotal = listWIPTotal.get(0).get("WIPQTY").toString();
		}else {
			wipTotal = "0";
		}
										
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("legendData", legendData.toString());
		result.put("series", series.toString());
		result.put("wiptotal", wipTotal);
		result.put("today", todayDate);		
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value="/getDailyReportCategory")
	public @ResponseBody List<String> getDailyReportCategory(HttpServletRequest request,HttpServletResponse response) {
		List<Map<String, Object>> list = echartProductionService.getDailyReportCategory();
		List<String> result = new ArrayList<>();
		// result.add("ALL");
		for (int i = 0; i < list.size(); i++) {
			result.add(list.get(i).get("PRODUCTCATEGORY").toString());
		}
		
		return result;
	}
	
	@RequestMapping(value="/dailyReportValue")
	public void dailyReportValue(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam param) throws Exception {
		String deviceType = param.getDeviceType();
		String[] productCategory = param.getProductCategorys();
		List<String> productCategoryList = new ArrayList<>();
		for (int i = 0; i < productCategory.length; i++) {
			productCategoryList.add(productCategory[i]);
		}
		List<JSONArray> resultList = new ArrayList<>();
		String[] colItem = {"FACTORYNAME","PRODUCTCATEGORY","IN_OUT","MONTH_PLAN_QTY","CUM_PLAN_QTY","DAILY_PLAN_QTY","CUM_ACT_QTY",
				"DAILY_ACT_QTY","CUM_BALANCE","DAILY_BALANCE","ACCESSRATIO","CUM_SCRAP_QTY","DAILY_SCRAP_QTY","CUM_YIELD"};
		
		List<Map<String, Object>> list = echartProductionService.getDailyReportList(productCategoryList);
		String shopNameCompare = "";
		String productCategoryCompare = "";
		for (int i = 0; i < list.size(); i++) {
			JSONArray jsonArray = new JSONArray();
			boolean isShopNameExist = false;
			boolean isProductCategoryExist = false; 
			if (shopNameCompare.equals(list.get(i).get("FACTORYNAME").toString())) {
				isShopNameExist = true;
			}else {
				shopNameCompare = list.get(i).get("FACTORYNAME").toString();
			}
			if (productCategoryCompare.equals(list.get(i).get("PRODUCTCATEGORY").toString())) {
				isProductCategoryExist = true;
			}else {
				productCategoryCompare = list.get(i).get("PRODUCTCATEGORY").toString();
			}
			for (int j = 0; j < colItem.length; j++) {
				if (j>1) {
					JSONObject jsonObject = new JSONObject();
					int itemCase = 0;
					if ((j > 2&&j < 8)||j == 11||j == 12) {
						itemCase = 1;
					}else if (j == 10||j == 13) {
						itemCase = 2;
					}else if (j >= 0&&j <= 2) {
						itemCase = 3;
					}else if (j == 8||j == 9) {
						itemCase = 4;
					}
					
					switch (itemCase) {
					case 1:
						jsonObject.element("value", StringUtils.addQianfenhao(list.get(i).get(colItem[j]).toString()));
						break;
					case 2:
						jsonObject.element("value", list.get(i).get(colItem[j]) == null ? '-':String.format("%.1f", Double.parseDouble(list.get(i).get(colItem[j]).toString()))+"%");
						break;
					case 3:
						jsonObject.element("value", list.get(i).get(colItem[j]).toString());
						break;
					case 4:
						jsonObject.element("value", StringUtils.addQianfenhao(list.get(i).get(colItem[j]).toString()));
						if (Integer.parseInt(list.get(i).get(colItem[j]).toString())<0) {
							jsonObject.element("color", "red");
						}					
						break;
					}
					if (deviceType.equals("tv")) {
						jsonObject.element("fontSize", "15px");
					} else {
						jsonObject.element("fontSize", "13px");
					}
					
					jsonArray.add(jsonObject);
				} else if (j == 0) {
					if (!isShopNameExist) {
						JSONObject jsonObject = new JSONObject();
						jsonObject.element("value", list.get(i).get(colItem[j]).toString());
						List<Map<String, Object>> shopCount = echartProductionService.getDailyReportShopCount(shopNameCompare,productCategoryList);
						jsonObject.element("rowspan", shopCount.get(0).get("COUNT"));
						if (deviceType.equals("tv")) {
							jsonObject.element("fontSize", "15px");
						} else {
							jsonObject.element("fontSize", "13px");
						}
						jsonArray.add(jsonObject);
					}
				} else if (j == 1) {
					if (!isProductCategoryExist) {
						JSONObject jsonObject = new JSONObject();
						jsonObject.element("value", list.get(i).get(colItem[j]).toString());
						List<Map<String, Object>> shopCount = echartProductionService.getDailyReportCategoryCount(shopNameCompare,productCategoryCompare,productCategoryList);
						jsonObject.element("rowspan", shopCount.get(0).get("COUNT"));
						jsonObject.element("lineheight", "");
						if (deviceType.equals("tv")) {
							jsonObject.element("fontSize", "15px");
						} else {
							jsonObject.element("fontSize", "13px");
						}
						jsonArray.add(jsonObject);
					}
				}
			}
			resultList.add(jsonArray);
		}
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("value", resultList);	
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value="getScrapProductCategory")
	public @ResponseBody List<String> getScrapProductCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="shopName",required=true) String shopName) throws Exception {
		List<Map<String, Object>> list = echartProductionService.getScrapProductionCategory(shopName);	
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

	@RequestMapping(value="/getScrapGridValue")
	public @ResponseBody List<ScrapEntity> getScrapGridValue(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="shopName",required=true) String shopName,
			@RequestParam(value="productCategory",required=true) String productCategory) throws Exception {
		return echartProductionService.getScrapGridValue(shopName, productCategory);		
	}
	
	@RequestMapping(value="/dayScrapValue")
	public void dayScrapValue(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam param) throws Exception {
		String shopName = param.getShopName();
		String productCategory = param.getProductCategory();

		List<Map<String, Object>> listScrap = echartProductionService.getyieldScrap(shopName,productCategory);
		List<Map<String, Object>> listDate=echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();
		List<Map<String, Object>> listDateFactory = echartService.getDateFactory();
		
		//xData from Calendar
		StringBuffer xData =new StringBuffer();
		xData.append("[");
		String[] arrXdataColumn=new String[]{"DAY_6","DAY_5","DAY_4","DAY_3","DAY_2","DAY_1","DAY_0"};
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
		StringBuffer legendData=new StringBuffer().append("['Total','Spec',");		
		List<String> listlegendData=new ArrayList<String>();
		listlegendData.add("Total");
		listlegendData.add("Spec");
		for(int i=0;i<listScrap.size();i++){
			boolean isExist=false;
			//判断是否有重复的CauseDepartment
			for(int m=0;m<listlegendData.size();m++){
				if(listScrap.get(i).get("CAUSEDEPARTMENT").toString().equals(listlegendData.get(m))){
					isExist=true;
				}
			}
			if(!isExist){
				listlegendData.add(listScrap.get(i).get("CAUSEDEPARTMENT").toString());
				legendData.append("'"+listScrap.get(i).get("CAUSEDEPARTMENT").toString()+"',");
				
			}			
		}
		legendData.append("]");						
		
		//series
		String[] DateType=new String[]{"DAY","DAY","DAY","DAY","DAY","DAY","DAY"};
		StringBuffer series=new StringBuffer();
		series.append("[");
		StringBuffer seriesItem=new StringBuffer();		
				
		//get Scarp
		for(int i=2;i<listlegendData.size();i++){
			boolean isDefectExist=false;
			seriesItem.append("{name:'"+listlegendData.get(i)+"',type:'bar',stack:'1',barWidth:'50%',data:[");
			for(int m=0;m<arrDateFactory.length;m++){
				boolean isDateExist=false;
				for(int p=0;p<listScrap.size();p++){
					if (listScrap.get(p).get("CAUSEDEPARTMENT").toString().equals(listlegendData.get(i))) {
						isDefectExist=true;
						if(listScrap.get(p).get("DATETYPE").toString().equals(DateType[m])){
							if(listScrap.get(p).get("FACTORYDATE").toString().equals(arrDateFactory[m])){
								isDateExist=true;
								seriesItem.append("[");
								seriesItem.append(String.valueOf(m));
								seriesItem.append(",");		
								double dd = 0;
								if (!listScrap.get(p).get("TOTALSCRAP").toString().equals("0")) {
									dd = Double.parseDouble(listScrap.get(p).get("SCRAPQTY").toString());
								}
								seriesItem.append((String.format("%.2f",dd).toString()));								
								seriesItem.append(","+listScrap.get(p).get("OUTQTY")+",'");
								seriesItem.append(arrxData[m]);
								seriesItem.append("',"+listScrap.get(p).get("SCRAPQTY")+"],");
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
		
		//报废总量
		seriesItem.append("{name:'报废总量',type:'bar',yAxisIndex:2,xAxisIndex:1,color:'#C4C4C4',barWidth:'85%',label:{normal:{show: true,position:'inside',fontSize:'80%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			double totalOutQty=0;
			for(int m=0;m<listScrap.size();m++){
				if (listScrap.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(listScrap.get(m).get("FACTORYDATE").toString().equals(arrDateFactory[i])){
						isExist=true;
						totalOutQty=totalOutQty+Double.parseDouble(listScrap.get(m).get("SCRAPQTY").toString());						
					}
				}			
			}
			if(!isExist){
				seriesItem.append("[");
				seriesItem.append(String.valueOf(i));
				if(arrxData[i].equals("")){
					seriesItem.append(",,,");
				}
				else{
					seriesItem.append(",1,0,");
				}
				seriesItem.append("],");
			}
			else{
				seriesItem.append("[");
				seriesItem.append(String.valueOf(i));
				seriesItem.append(",1,"+String.valueOf(totalOutQty));
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

	@RequestMapping(value="/detailScrapValue")
	public void detailScrapValue(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam param) throws Exception {
		String shopName = param.getShopName();
		String productCategory = param.getProductCategory();
		String date = param.getDate();
		String dateType = param.getDatatype();
		List<Map<String, Object>> list = echartProductionService.getdetailScrapValue(shopName,productCategory,date,dateType);
		
		StringBuffer legendData = new StringBuffer().append("[");
		StringBuffer series = new StringBuffer().append("[");
		for (int i = 0; i < list.size(); i++) {
			legendData.append("'");
			legendData.append(list.get(i).get("CAUSEDEPARTMENT").toString());
			legendData.append("',");
			series.append("{value:");
			series.append(list.get(i).get("SCRAPQTY").toString());
			series.append(",name:'");
			series.append(list.get(i).get("CAUSEDEPARTMENT").toString());
			series.append("'},");
		}
		legendData.append("]");
		series.append("]");
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("series", series.toString());
		result.put("legenddata", legendData.toString());
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value="wipMoveByOperationTypeCategory")
	public @ResponseBody List<String> wipMoveByOperationTypeCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="shopName",required = true) String shopName,
			@RequestParam(value = "productionType",required= true)String productionType,
			@RequestParam(value = "dataType",required= true)String dataType) throws Exception {
		
		List<Map<String, Object>> list = echartProductionService.getWIPMoveProductCategoryByOPerationType(shopName,dataType,productionType);

		
		//取默认值
		List<Map<String, Object>> listDefaultCategory = echartService.getDefaultCategory(shopName);		
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
		boolean isExist=false;
		for(int i=0;i<listCategory.size();i++){
			if (listCategory.get(i).equals(defaultCategory)) {
				listCategory.remove(i);
				isExist=true;
				break;
			}
		}
		if (isExist) {
			listCategory.add(0, defaultCategory);
		}
		
		return listCategory;
	}

	@RequestMapping(value="/wipMoveByOperationType")
	public void wipMoveByOperationType(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String productCategory = yieldParam.getProductCategory();
		String productionType = yieldParam.getProductionType();
		String shopName = yieldParam.getShopName();	
		String lineType = yieldParam.getDatatype();
		List<Map<String, Object>> listWIP = echartProductionService.getWipNew(shopName,"MAIN",productCategory,productionType);
		List<Map<String, Object>> listMove = echartProductionService.getMoveNew(shopName, "MAIN", productCategory, productionType);		
		
		List<Map<String, Object>> OQAAPPList = echartProductionService.getOQAAPPList(productCategory);	
		List<Map<String, Object>> listOperationName = new ArrayList<Map<String,Object>>();
		listOperationName = echartProductionService.getMDLAllOperationNameNew(productCategory,lineType);
/*		if (OQAAPPList.size()!=0) {
			listOperationName = echartReportService.getMDLAllOperationName(productCategory,lineType);
		}else {
			listOperationName = echartReportService.getMDLAllOperationName1(productCategory,lineType);
		}*/
		
		List<Map<String, Object>> listDate = echartService.getProductionDate();
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		
		//获得产品对应的工序
		StringBuffer xData=new StringBuffer();
		xData.append("[");
		String[] operationID=new String[listOperationName.size()];
		for(int i=0;i<listOperationName.size();i++){
			operationID[i]=listOperationName.get(i).get("PROCESSOPERATIONNAME").toString();
			xData.append("'");
			xData.append(operationID[i]);
			xData.append("',");
		}
		xData.append("]");
		//获得产品每个工序对应的WIP
		StringBuffer WIPData=new StringBuffer();
		//WIP Total
		String wipTotal = "";
		Integer wipTatalInt = 0;
		WIPData.append('[');
		for (int j = 0; j < operationID.length; j++) {
			boolean isExist = false;
			for(int i=0;i<listWIP.size();i++){
				if(listWIP.get(i).get("PROCESSOPERATIONNAME").toString().equals(operationID[j])){
					isExist = true;
					WIPData.append(listWIP.get(i).get("WIPQTY").toString());
					wipTatalInt += Integer.parseInt(listWIP.get(i).get("WIPQTY").toString());
					break;
				}
			}
			WIPData.append(",");
		}

		WIPData.append(']');
		wipTotal = String.valueOf(wipTatalInt);
		
		//获得产品每个工序对应的Move
		StringBuffer MoveData=new StringBuffer();
		MoveData.append('[');
		for(int i=0;i<operationID.length;i++){
			boolean isExist = false;
			for(int m=0;m<listMove.size();m++){
				if(operationID[i].equals(listMove.get(m).get("PROCESSOPERATIONNAME").toString())){
					isExist = true;
					MoveData.append(listMove.get(m).get("MOVEMENTQTY").toString());
					break;
				}
			}
			if (!isExist) {
				MoveData.append("0");
			}
			MoveData.append(",");
		}
		MoveData.append(']');			
										
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("wipdata", WIPData.toString());
		result.put("movedata", MoveData.toString());
		result.put("wiptotal", wipTotal);
		result.put("today", todayDate);		
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value="getDummyOption")
	public void getDummyOption(HttpServletRequest request, HttpServletResponse response,@RequestBody YieldParam chartParam) throws Exception {
		String shopName = chartParam.getShopName();
		String deviceType = chartParam.getDeviceType();
		List<Map<String, Object>> list = echartProductionService.getDummyDetail(shopName);
		List<String> listLegend = echartProductionService.getDummyDepartment(shopName);
		List<Map<String, Object>> listDate = echartService.getProductionDate();	
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
		
		StringBuffer legend = new StringBuffer().append("[");
		for (int i = 0; i < listLegend.size(); i++) {
			legend.append("'");
			legend.append(listLegend.get(i));
			legend.append("',");
		}
		legend.append("]");
		
		StringBuffer series = new StringBuffer().append("[");
		String[] DateType=new String[]{"MONTH","MONTH","MONTH","MONTH","WEEK","WEEK","WEEK","WEEK","WEEK","DAY","DAY","DAY","DAY","DAY","DAY","DAY"};		
		for(int i=0;i<listLegend.size();i++){
			boolean isDefectExist=false;
			series.append("{name:'"+listLegend.get(i)+"',type:'bar',stack:'1',barWidth:'50%',data:[");
			for(int m=0;m<arrDateFactory.length;m++){
				boolean isDateExist=false;
				for(int p=0;p<list.size();p++){
					if (list.get(p).get("DEPARTMENT").toString().equals(listLegend.get(i))) {
						isDefectExist=true;
						if(list.get(p).get("DATETYPE").toString().equals(DateType[m])){
							if(list.get(p).get("DATETIME").toString().equals(arrDateFactory[m])){
								isDateExist=true;
								series.append("[");
								series.append(String.valueOf(m));
								series.append(","+list.get(p).get("GLASSQTY"));
								series.append(",'"+arrxData[m]+"'],");
								break;
							}
						}						
					}
				}
				if(!isDateExist){
					series.append("[");
					series.append(String.valueOf(m));
					series.append(",,'");
					series.append(arrxData[m]);
					series.append("'],");
				}
			}
			series.append("]},");
		}
		series.append("]");				
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("todaydate", todayDate);
		result.put("series", series.toString());
		result.put("legenddata", legend.toString());
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
}
