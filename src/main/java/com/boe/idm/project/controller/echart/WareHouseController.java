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
import com.boe.idm.project.service.echart.EchartWareHouseService;
import com.boe.utils.json.JsonUtils;
import com.boe.utils.special.MDLMachineOrder;

@RestController
@RequestMapping(value="/api/echart/warehouse")
public class WareHouseController extends JsonUtils{

	private static final Logger log = LoggerFactory.getLogger(WareHouseController.class);
	
	@Autowired
	private EchartWareHouseService wareHouseService;
	
	@Autowired
	private EchartService echartService;
	
	@RequestMapping("total")
	public void total(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception{
		String shopName = yieldParam.getShopName();
		List<Map<String, Object>> list=wareHouseService.getwarehouse(shopName);
		List<Map<String, Object>> listDate = echartService.getProductionDate();
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		
		StringBuffer xData=new StringBuffer();
		String[] productCategory=new String[list.size()];
		StringBuffer legendData=new StringBuffer();
		String firstcategory=new String();
		legendData.append("[");
		xData.append("[");
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("PRODUCTCATEGORY")!=null){
				if (i==0) {
					firstcategory=list.get(i).get("PRODUCTCATEGORY").toString();
				}
				xData.append("'");
				xData.append(list.get(i).get("PRODUCTCATEGORY").toString());
				productCategory[i]=list.get(i).get("PRODUCTCATEGORY").toString();
				legendData.append("'");
				legendData.append(list.get(i).get("PRODUCTCATEGORY").toString());
				legendData.append("'");
				legendData.append(",");
				xData.append("'");
				xData.append(",");
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
			series.append(productCategory[m]);
			series.append("',stack:1,type:'bar',barWidth:'50%',label: {normal: {show: true,position: 'top'}},data:[");
			for(int i=0;i<list.size();i++){
				if(productCategory[i]!=null){
					//if(!totalData.toString().equals("[")){}
					if(i==m){
						totalData.append(list.get(i).get("TOTAL"));
					}
					totalData.append(",");
				}
			}
			series.append(totalData.toString());
			series.append("],},");
		}
		series.append("]");
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("series",series.toString());
		result.put("legenddata", legendData);
		result.put("todaydate", todayDate);				
		result.put("firstcategory", firstcategory);
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
					
	}

	@RequestMapping("Grade")
	public void Grade(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception{
		String shopName = yieldParam.getShopName();
		String productCategory = yieldParam.getProductCategory();
		List<Map<String, Object>> list=wareHouseService.getwarehouseGrade(shopName,productCategory);
		
		String[] grade=new String[]{"S_QTY","A_QTY","T_QTY","F_QTY"};
		String[] gradesub=new String[]{"S","A","T","F"};
		StringBuffer pieData1=new StringBuffer();
		pieData1.append("[");
		for(int i=0;i<4;i++){
			pieData1.append("{value:");
			pieData1.append(list.get(0).get(grade[i]).toString());
			pieData1.append(",name:'");
			pieData1.append(gradesub[i]);
			pieData1.append("'},");			
		}
		pieData1.append("]");
		
		String[] time=new String[]{"STOCKINDAY30","STOCKINDAY60","STOCKINDAY90","STOCKINDAY90O"};
		String[] timesub=new String[]{"<30","30<x<60","60<x<90",">90"};
		StringBuffer pieData2=new StringBuffer();
		pieData2.append("[");
		for(int i=0;i<4;i++){
			pieData2.append("{value:");
			pieData2.append(list.get(0).get(time[i]).toString());
			pieData2.append(",name:'");
			pieData2.append(timesub[i]);
			pieData2.append("'},");			
		}
		pieData2.append("]");
		
		String subTitle="'"+productCategory+"'";
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("piedata1", pieData1.toString());
		result.put("piedata2", pieData2.toString());
		result.put("subTitle", subTitle);		
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
					
	}

	@RequestMapping(value="getdefaultProductCategory")
	public void getdefaultProductCategory(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String shopName = yieldParam.getShopName();
		List<Map<String, Object>> list=wareHouseService.getwarehouse(shopName);

		String productCategory = "";
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("PRODUCTCATEGORY")!=null){
				productCategory=list.get(i).get("PRODUCTCATEGORY").toString();
				break;
			}
		}
		
		Map<String, Object> result = new HashMap<String, Object>();	
		result.put("productCategory", productCategory);
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
