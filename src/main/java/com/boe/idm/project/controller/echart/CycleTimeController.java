package com.boe.idm.project.controller.echart;

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

import com.boe.idm.project.model.YieldParam;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.echart.EchartCycleTimeService;
import com.boe.utils.json.JsonUtils;

@RestController
@RequestMapping(value="/api/echart/cycletime")
public class CycleTimeController extends JsonUtils{

	private static final Logger log = LoggerFactory.getLogger(CycleTimeController.class);
	
	@Autowired
	private EchartCycleTimeService cycleTimeService;
	
	@Autowired
	private EchartService echartService;
	
	@RequestMapping(value="getCycleTimeProductCategory")
	public @ResponseBody List<String> getCycleTimeProductCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="shopName",required=true) String shopName,
			@RequestParam(value="productionType",required=true) String productionType) throws Exception {
		List<Map<String, Object>> list = cycleTimeService.getCycleTimeProductCategory(shopName, productionType);	
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

	@RequestMapping(value="/getCycleTime")
	public void getCycleTime(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam param) throws Exception {
		String FactoryName = param.getShopName();
		String ProductionType = param.getProductionType();
		String ProductcateGory = param.getProductCategory();
		String deviceType = param.getDeviceType();
		
		List<Map<String, Object>> listlegend = cycleTimeService.CycleTimeForLegendData(FactoryName,ProductionType,ProductcateGory);
		List<Map<String, Object>> listData = cycleTimeService.CycleTimeForAllData(FactoryName,ProductionType,ProductcateGory);
		List<Map<String, Object>> listxData = cycleTimeService.getmonthweekdaytimedata();
		
		//legendData
		String[] legend = new String[listlegend.size()];
		StringBuffer legenddata = new StringBuffer();
		legenddata.append("['SHOP',");
		for(int i =0;i<listlegend.size();i++){
			if(listlegend.get(i).get("CTDATAGROUP").toString().equals("SHOP")){	
				legend[i]=listlegend.get(i).get("CTDATAGROUP").toString();
			}else{
				legend[i]=listlegend.get(i).get("CTDATAGROUP").toString();
			legenddata.append("'"+listlegend.get(i).get("CTDATAGROUP").toString()+"',");
			
			}
		}
		legenddata.append("]");
		
		//xData
		StringBuffer xdata = new StringBuffer();
		String[] xdataforcheck = new String[16];
		String[] xdataType = {"MONTH","MONTH","MONTH","","WEEK","WEEK","WEEK","WEEK","","DAY","DAY","DAY","DAY","DAY","DAY","DAY",};
		int m = 0; //for xdataforcheck
		xdata.append("[");
		    //getmonth
		for(int i = 2;i>=0;i--){
			xdata.append("'"+listxData.get(i).get("DATEMONTH").toString().substring(4,6)+"M',");
			xdataforcheck[m] = listxData.get(i).get("DATEMONTH").toString();
			m+=1;
		}
		xdata.append("'',");
		m += 1;
		//getweek
		for(int i = 3;i>=0;i--){
			xdata.append("'"+listxData.get(i).get("DATEWEEK").toString().substring(4,6)+"W',");
			xdataforcheck[m] = listxData.get(i).get("DATEWEEK").toString();
			m+=1;
		}
		xdata.append("'',");
		m += 1;
		//getday
		for(int i =7;i>=1;i--){
			xdata.append("'"+listxData.get(i).get("DATETIME").toString().substring(4,6)+"/"+listxData.get(i).get("DATETIME").toString().substring(6,8)+"',");
			xdataforcheck[m] = listxData.get(i).get("DATETIME").toString();
			m+=1;
		}
		xdata.append("]");
		//seriesdata
		StringBuffer series = new StringBuffer();
		series.append("[");	
		if (listData.size() != 0) {
			for(int i = 0;i<legend.length;i++){
				
				if(!legend[i].equals("SHOP")){
				series.append("{name:'");
				series.append(legend[i]+"',");
				series.append("type:'bar',stack: '1',barWidth:'50%',data:[");
				for(int k =0;k<listData.size();k++){
				   if(legend[i].equals(listData.get(k).get("CTDATAGROUP").toString())){
				      for(int j = 0;j<xdataforcheck.length;j++){
				    	  if(j == 3||j == 8){
				    		  
				    	  }
				    	  else if(xdataforcheck[j].equals(listData.get(k).get("DATETIME").toString()) && xdataType[j].equals(listData.get(k).get("DATETYPE").toString())&&listData.get(k).get("CTDATAGROUP").toString().equals(legend[i])){
				    		     series.append("["+j+",");  
							     series.append("'"+listData.get(k).get("CYCLETIME").toString()+"',");
							     series.append("'"+xdataforcheck[j]+"'");
							     series.append("],");
				    	  } 
				   }
				}
			  }
				series.append("]},");
		    }
		   else{
			//SHOP
			   if (deviceType.equals("tv")) {
					series.append("{name:'SHOP',type:'line',color:'red',yAxisIndex:0,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + ''},fontWeight:'bold',}},data:[");
			} else if (deviceType.equals("monitor")) {
				series.append("{name:'SHOP',type:'line',color:'red',yAxisIndex:0,symbol:'circle',symbolSize:6,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '85%',formatter: function(obj) {var value = obj.value;return value[1] + ''},fontWeight:'bold',}},data:[");
			}		   
				for(int i1 = 0;i1<xdataforcheck.length;i1++){
					boolean Die = true;
					if(i1==3||i1==8){
					series.append("["+i1+","+",,,"+"],");
					i1 += 1;
					}
					for(int j=0;j<listData.size();j++){
				     	if(xdataforcheck[i1].equals(listData.get(j).get("DATETIME").toString())&&xdataType[i1].equals(listData.get(j).get("DATETYPE").toString())&&listData.get(j).get("CTDATAGROUP").toString().equals("SHOP")){
						     series.append("[");
						     series.append(i1+","+listData.get(j).get("CYCLETIME").toString()+",");
						     series.append("'"+xdataforcheck[i1]+"'");
						     series.append("],");
						     Die = false;
						     break;
					       }
					}
					if(Die){
						series.append("["+i1+",,,"+"],");
					}
				}
				
				series.append("]},");
			  }
			}
		}
		series.append("]");
		
		List<Map<String, Object>> listDate = echartService.getProductionDate();
		String todayDate=listDate.get(0).get("TODAY_5M").toString();
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("series", series.toString());
		result.put("xdata", xdata.toString());
		result.put("legenddata", legenddata.toString());			
		result.put("todaydate", todayDate);

		
		try{
			writeJSON(response, result);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
}
