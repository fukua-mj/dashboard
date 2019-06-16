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

import com.boe.idm.project.model.YieldParam;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.echart.EchartCycleTimeService;
import com.boe.idm.project.service.echart.EchartEngineerDataService;
import com.boe.utils.json.JsonUtils;

@RestController
@RequestMapping(value="/api/echart/engineerdata")
public class EngineerDataController extends JsonUtils{

	private static final Logger log = LoggerFactory.getLogger(EngineerDataController.class);
	
	@Autowired
	private EchartEngineerDataService engineerDataService;
	
	@Autowired
	private EchartService echartService;
	
	@RequestMapping(value="getProductCategory")
	public @ResponseBody List<String> getProductCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="shopName",required=true) String shopName,
			@RequestParam(value="layerItem",required=true) String layerItem,
			@RequestParam(value="layerName",required=true) String layerNameALL) throws Exception {
		String layerName = layerNameALL.substring(0,layerNameALL.indexOf('-'));
		String itemName = layerNameALL.substring(layerNameALL.indexOf('-')+1);
		List<Map<String, Object>> list = engineerDataService.getProductCategory(shopName, layerItem, layerName, itemName);	
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

	@RequestMapping(value="/getEngineerData")
	public void getEngineerData(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam param) throws Exception {
		String deviceType = param.getDeviceType();
		String shopName = param.getShopName();
		String layerItem = param.getProcesstype();
		String layerNameALL = param.getDatatype();
		String layerName = layerNameALL.substring(0,layerNameALL.indexOf('-'));
		String itemName = layerNameALL.substring(layerNameALL.indexOf('-')+1);
		String productCategory = param.getProductCategory();
		List<Map<String, Object>> list = engineerDataService.getengineeringData(shopName,layerItem,layerName,productCategory,itemName);
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
		StringBuffer legendData = new StringBuffer().append("['USL','LSL','UCL','LCL','SL','Xbar','Cpk','Unif','Unif_Spec']");
		
		//series
		String[] DateType=new String[]{"MONTH","MONTH","MONTH","MONTH","WEEK","WEEK","WEEK","WEEK","WEEK","DAY","DAY","DAY","DAY","DAY","DAY","DAY"};
		StringBuffer series=new StringBuffer();
		series.append("[");
		StringBuffer seriesItem=new StringBuffer();
		
		seriesItem.append("{name:'0sigma',type:'line',yAxisIndex: 0,xAxisIndex: 0,stack:'sigma',color:'#F0A431',symbol:'circle',symbolSize:0,smooth:false,data: [");
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<list.size();m++){
				if (list.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(list.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(list.get(m).get("LCL_RESULT")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(list.get(m).get("LCL_RESULT").toString());
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
		
		seriesItem.append("{name:'1sigma',type:'line',yAxisIndex: 0,xAxisIndex: 0,stack:'sigma',color:'#E66B1A',areaStyle: {normal: {origin:'end'}},symbol:'circle',symbolSize:0,smooth:false,data: [");
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<list.size();m++){
				if (list.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(list.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(list.get(m).get("SIGMA")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(list.get(m).get("SIGMA").toString());
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
		
		seriesItem.append("{name:'2sigma',type:'line',yAxisIndex: 0,xAxisIndex: 0,stack:'sigma',color:'#E7E708',areaStyle: {normal: {origin:'end'}},symbol:'circle',symbolSize:0,smooth:false,data: [");
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<list.size();m++){
				if (list.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(list.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(list.get(m).get("SIGMA")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(list.get(m).get("SIGMA").toString());
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
		
		seriesItem.append("{name:'3sigma',type:'line',yAxisIndex: 0,xAxisIndex: 0,stack:'sigma',color:'#8FEE00',areaStyle: {normal: {origin:'end'}},symbol:'circle',symbolSize:0,smooth:false,data: [");
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<list.size();m++){
				if (list.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(list.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(list.get(m).get("SIGMA")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(list.get(m).get("SIGMA").toString());
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
		
		seriesItem.append("{name:'4sigma',type:'line',yAxisIndex: 0,xAxisIndex: 0,stack:'sigma',color:'#8FEE00',areaStyle: {normal: {origin:'end'}},symbol:'circle',symbolSize:0,smooth:false,data: [");
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<list.size();m++){
				if (list.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(list.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(list.get(m).get("SIGMA")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(list.get(m).get("SIGMA").toString());
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
		
		seriesItem.append("{name:'5sigma',type:'line',yAxisIndex: 0,xAxisIndex: 0,stack:'sigma',color:'#E7E708',areaStyle: {normal: {origin:'end'}},symbol:'circle',symbolSize:0,smooth:false,data: [");
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<list.size();m++){
				if (list.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(list.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(list.get(m).get("SIGMA")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(list.get(m).get("SIGMA").toString());
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
		
		seriesItem.append("{name:'6sigma',type:'line',yAxisIndex: 0,xAxisIndex: 0,stack:'sigma',color:'#E66B1A',areaStyle: {normal: {origin:'end'}},symbol:'circle',symbolSize:0,smooth:false,data: [");
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<list.size();m++){
				if (list.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(list.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(list.get(m).get("SIGMA")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(list.get(m).get("SIGMA").toString());
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
		
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'LSL',type:'line',yAxisIndex: 0,xAxisIndex: 0,color:'#6423AA',symbol:'circle',symbolSize:5,smooth:false,label: {normal: {show:true,position:'bottom',fontSize:'80%',formatter: function(obj) {var value = obj.value;return value[1] + ''},fontWeight: 'bold',}},data: [");
		} else {
			seriesItem.append("{name:'LSL',type:'line',yAxisIndex: 0,xAxisIndex: 0,color:'#6423AA',symbol:'circle',symbolSize:4,smooth:false,label: {normal: {show:true,position:'bottom',fontSize:'70%',formatter: function(obj) {var value = obj.value;return value[1] + ''},fontWeight: 'bold',}},data: [");
		}
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<list.size();m++){
				if (list.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(list.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(list.get(m).get("LSL_RESULT")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(list.get(m).get("LSL_RESULT").toString());
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
		
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'LCL',type:'line',yAxisIndex: 0,xAxisIndex: 0,color:'#749F83',symbol:'circle',symbolSize:5,smooth:false,label: {normal: {show:true,position:'bottom',fontSize:'80%',formatter: function(obj) {var value = obj.value;return value[1] + ''},fontWeight: 'bold',}},data: [");
		} else {
			seriesItem.append("{name:'LCL',type:'line',yAxisIndex: 0,xAxisIndex: 0,color:'#749F83',symbol:'circle',symbolSize:4,smooth:false,label: {normal: {show:true,position:'bottom',fontSize:'70%',formatter: function(obj) {var value = obj.value;return value[1] + ''},fontWeight: 'bold',}},data: [");
		}
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<list.size();m++){
				if (list.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(list.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(list.get(m).get("LCL_RESULT")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(list.get(m).get("LCL_RESULT").toString());
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
		
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'UCL',type:'line',yAxisIndex: 0,xAxisIndex: 0,color:'#749F83',symbol:'circle',symbolSize:5,smooth:false,label: {normal: {show:true,position:'top',fontSize:'80%',formatter: function(obj) {var value = obj.value;return value[1] + ''},fontWeight: 'bold',}},data: [");
		} else {
			seriesItem.append("{name:'UCL',type:'line',yAxisIndex: 0,xAxisIndex: 0,color:'#749F83',symbol:'circle',symbolSize:4,smooth:false,label: {normal: {show:true,position:'top',fontSize:'70%',formatter: function(obj) {var value = obj.value;return value[1] + ''},fontWeight: 'bold',}},data: [");
		}
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<list.size();m++){
				if (list.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(list.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(list.get(m).get("UCL_RESULT")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(list.get(m).get("UCL_RESULT").toString());
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
		
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'USL',type:'line',yAxisIndex: 0,xAxisIndex: 0,color:'#6423AA',symbol:'circle',symbolSize:5,smooth:false,label: {normal: {show:true,position:'top',fontSize:'80%',formatter: function(obj) {var value = obj.value;return value[1] + ''},fontWeight: 'bold',}},data: [");
		} else {
			seriesItem.append("{name:'USL',type:'line',yAxisIndex: 0,xAxisIndex: 0,color:'#6423AA',symbol:'circle',symbolSize:4,smooth:false,label: {normal: {show:true,position:'top',fontSize:'70%',formatter: function(obj) {var value = obj.value;return value[1] + ''},fontWeight: 'bold',}},data: [");
		}
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<list.size();m++){
				if (list.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(list.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(list.get(m).get("USL_RESULT")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(list.get(m).get("USL_RESULT").toString());
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
		

		
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'Unif',type:'line',yAxisIndex: 1,xAxisIndex: 1,symbol:'circle',symbolSize:10,smooth:false,label: {normal: {show:true,position:'bottom',fontSize:'100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		} else {
			seriesItem.append("{name:'Unif',type:'line',yAxisIndex: 1,xAxisIndex: 1,symbol:'circle',symbolSize:5,smooth:false,label: {normal: {show:true,position:'bottom',fontSize:'75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		}
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<list.size();m++){
				if (list.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(list.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(list.get(m).get("UNIFORMITY")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(list.get(m).get("UNIFORMITY").toString());
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
		
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'Xbar',type:'line',yAxisIndex: 0,xAxisIndex: 0,symbol:'circle',symbolSize:10,smooth:false,label: {normal: {show:true,position:'bottom',fontSize:'100%',formatter: function(obj) {var value = obj.value;return value[1]},fontWeight: 'bold',}},data: [");
		} else {
			seriesItem.append("{name:'Xbar',type:'line',yAxisIndex: 0,xAxisIndex: 0,symbol:'circle',symbolSize:5,smooth:false,label: {normal: {show:true,position:'bottom',fontSize:'75%',formatter: function(obj) {var value = obj.value;return value[1]},fontWeight: 'bold',}},data: [");
		}
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<list.size();m++){
				if (list.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(list.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(list.get(m).get("AVG_RESULT")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(list.get(m).get("AVG_RESULT").toString());
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
		
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'Cpk',type:'line',yAxisIndex: 2,xAxisIndex: 1,symbol:'circle',symbolSize:10,smooth:false,label: {normal: {show:true,position:'bottom',fontSize:'100%',formatter: function(obj) {var value = obj.value;return value[1]},fontWeight: 'bold',}},data: [");
		} else {
			seriesItem.append("{name:'Cpk',type:'line',yAxisIndex: 2,xAxisIndex: 1,symbol:'circle',symbolSize:5,smooth:false,label: {normal: {show:true,position:'bottom',fontSize:'75%',formatter: function(obj) {var value = obj.value;return value[1]},fontWeight: 'bold',}},data: [");
		}
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<list.size();m++){
				if (list.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(list.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(list.get(m).get("CPK_RESULT")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(list.get(m).get("CPK_RESULT").toString());
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
}
