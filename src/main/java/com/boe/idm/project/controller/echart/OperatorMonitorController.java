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

import org.jcodec.common.DictionaryCompressor.Int;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.DefectCode;
import com.boe.idm.project.model.EchartParam;
import com.boe.idm.project.model.YieldParam;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.echart.EchartCommonUseService;
import com.boe.idm.project.service.echart.EchartOperatorMonitorService;
import com.boe.idm.project.service.echart.EchartQualityService;
import com.boe.idm.project.service.echart.EchartYieldService;
import com.boe.utils.json.JsonUtils;
import com.boe.utils.special.MDLMachineOrder;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@RestController
@RequestMapping(value="/api/echart/operatormonitor")
public class OperatorMonitorController extends JsonUtils{

	private static final Logger log = LoggerFactory.getLogger(OperatorMonitorController.class);
	
	@Autowired
	private EchartOperatorMonitorService operatorMonitorService;
	
	@Autowired 
	private EchartCommonUseService echartCommonUseService;
	
	@Autowired
	private EchartService echartService;
	
	@RequestMapping("defectMonitorProductCategory")
	public @ResponseBody List<String> defectMonitorProductCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="shopName",required=false) String shopName,
			@RequestParam(value="processType",required=false) String operationName,
			@RequestParam(value="dataType",required=false) String showType,
			@RequestParam(value="productionType",required=false) String productionType)throws IOException{
		
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		if (showType.equals("OPERATOR")) {
			list = operatorMonitorService.getOperatorDefectCategory(shopName,operationName,productionType);
		} else if (showType.equals("MACHINE")) {
			list = operatorMonitorService.getOperatorDefectCategoryByLine(shopName,operationName,productionType);
		}	
	
		//取默认值
		String defaultshopName = "";
		if (shopName.equals("EAC1")||shopName.equals("EAC2")) {
			defaultshopName ="EAC";
		}else{
			defaultshopName = shopName;
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

	@RequestMapping("defectMonitorDefectCodeList")
	public @ResponseBody List<DefectCode> defectMonitorDefectCodeList(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="shopName",required=false) String shopName,
			@RequestParam(value="processType",required=false) String operationName,
			@RequestParam(value="dataType",required=false) String showType,
			@RequestParam(value="productionType",required=false) String productionType,
			@RequestParam(value="productCategory",required=false) String productCategory,
			@RequestParam(value="startTime",required=false) String startTime_,
			@RequestParam(value="endTime",required=false) String endTime_)throws IOException{
		
		String startTime = startTime_.substring(0,4)+startTime_.substring(5,7)+startTime_.substring(8,10)+startTime_.substring(11,13);
		String endTime = endTime_.substring(0,4)+endTime_.substring(5,7)+endTime_.substring(8,10)+endTime_.substring(11,13);
		
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		if (showType.equals("OPERATOR")) {
			list = operatorMonitorService.getOperatorDefectCode(shopName,operationName,productionType,productCategory,startTime,endTime);
		} else if (showType.equals("MACHINE")) {
			list = operatorMonitorService.getOperatorDefectCodeByLine(shopName,operationName,productionType,productCategory,startTime,endTime);
		}
						
		List<DefectCode> defectCode = new ArrayList<>();
		DefectCode firstDefect = new DefectCode();
		firstDefect.setName("All");
		firstDefect.setValue("All");
		defectCode.add(firstDefect);
		for (int i = 0; i < list.size(); i++) {
			DefectCode defect = new DefectCode();
			defect.setName(list.get(i).get("DESCRIPTION").toString());
			defect.setValue(list.get(i).get("DESCRIPTION").toString());
			defectCode.add(defect);
		}
		
		return defectCode;
	
	}
	
	@RequestMapping(value="/defectmonitor")
	public void defectmonitor(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String shopName = yieldParam.getShopName();
		String deviceType = yieldParam.getDeviceType();
		String operationName = yieldParam.getProcesstype();
		String productCategory = yieldParam.getProductCategory();
		String showType = yieldParam.getDatatype();
		String productionType = yieldParam.getProductionType();
		String defectCode = yieldParam.getDefectcode();
		String startTime_ = yieldParam.getStarttime();
		String startTime = startTime_.substring(0,4)+startTime_.substring(5,7)+startTime_.substring(8,10)+startTime_.substring(11,13);
		String endTime_ = yieldParam.getEndtime();
		String endTime = endTime_.substring(0,4)+endTime_.substring(5,7)+endTime_.substring(8,10)+endTime_.substring(11,13);
		
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listOperator = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listDefect = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listAVG = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listYield = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listYieldAVG = new ArrayList<Map<String,Object>>();

		
		try {
			if (showType.equals("OPERATOR")) {
				list = operatorMonitorService.getOperatorDefect(shopName,operationName,productionType,productCategory,defectCode,startTime,endTime);
				listOperator = operatorMonitorService.getOperatorList(shopName,operationName,productionType,productCategory,defectCode,startTime,endTime);
				listDefect = operatorMonitorService.getOperatorDefectCodeList(shopName,operationName,productionType,productCategory,defectCode,startTime,endTime);
				listAVG = operatorMonitorService.getOperatorDefectAVG(shopName,operationName,productionType,productCategory,defectCode,startTime,endTime);
			} else if (showType.equals("MACHINE")) {
				list = operatorMonitorService.getOperatorDefectByLine(shopName,operationName,productionType,productCategory,defectCode,startTime,endTime);
				listOperator = operatorMonitorService.getOperatorListByLine(shopName,operationName,productionType,productCategory,defectCode,startTime,endTime);
				listDefect = operatorMonitorService.getOperatorDefectCodeListByLine(shopName,operationName,productionType,productCategory,defectCode,startTime,endTime);
				listAVG = operatorMonitorService.getOperatorDefectAVGByLine(shopName,operationName,productionType,productCategory,defectCode,startTime,endTime);
			}
			
			listYield = operatorMonitorService.getOperatorYield(shopName,operationName,productionType,productCategory,showType,startTime,endTime);
			listYieldAVG = operatorMonitorService.getOperatorYieldAVG(shopName, operationName, productionType, productCategory, showType, startTime, endTime);

		} catch (Exception e) {
			// TODO: handle exception
			log.debug(e.getMessage());
		}

		
		List<Map<String, Object>> listDate=echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		
		//get xData
		StringBuffer xData = new StringBuffer().append("['AVG',");
		String[] arrxData = new String[listOperator.size()+1];
		arrxData[0]="AVG";
		for (int i = 0; i < listOperator.size(); i++) {
			if (showType.equals("OPERATOR")) {
				xData.append("'"+listOperator.get(i).get("OPERATORID").toString()+"',");
				arrxData[i+1]=listOperator.get(i).get("OPERATORID").toString();
			} else if (showType.equals("MACHINE")) {
				xData.append("'"+listOperator.get(i).get("MACHINEID").toString()+"',");
				arrxData[i+1]=listOperator.get(i).get("MACHINEID").toString();
			}
		}
		xData.append("]");
		
		//get legendData
		StringBuffer legendData = new StringBuffer().append("['Yield',");
		String[] arrxlegend = new String[listDefect.size()+1];
		arrxlegend[0] = "Yield";
		for (int i = 0; i < listDefect.size(); i++) {
			legendData.append("'"+listDefect.get(i).get("DESCRIPTION").toString()+"',");
			arrxlegend[i+1] = listDefect.get(i).get("DESCRIPTION").toString();
		}
		legendData.append("]");
		
		StringBuffer seriesItem = new StringBuffer();
		StringBuffer series = new StringBuffer().append("[");
		
		try {
			//get yield
			if (deviceType.equals("tv")) {
				seriesItem.append("{name: 'Yield',type: 'line',yAxisIndex:1,symbol:'circle',symbolSize: 10,smooth:true,label:{normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data:[");
			} else {
				seriesItem.append("{name: 'Yield',type: 'line',yAxisIndex:1,symbol:'circle',symbolSize: 6,smooth:true,label:{normal: {show: true,position: 'top',fontSize: '75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data:[");
			}
			for (int i = 0; i < arrxData.length; i++) {
				seriesItem.append("["+String.valueOf(i)+",");
				if (listYieldAVG.size()!=0) {
					if (i==0) {
						if (listYieldAVG.get(0).get("YIELDRATIO")!=null) {
							seriesItem.append(listYieldAVG.get(0).get("YIELDRATIO").toString());					
						}
					}else {
						for (int k = 0; k < listYield.size(); k++) {
							if (listYield.get(k).get("EVENTUSER")!=null) {
								if (listYield.get(k).get("EVENTUSER").toString().equals(arrxData[i])) {
									seriesItem.append(listYield.get(k).get("YIELDRATIO").toString());
									break;
								}
							}

						}
					}
				}
				seriesItem.append(",'"+arrxData[i]+"'],");
			}
			seriesItem.append("]},");			
		
		} catch (Exception e) {
			// TODO: handle exception
			log.debug(e.getMessage());
		}
		
		try {
			
			for (int i = 1; i < arrxlegend.length; i++) {
				if (arrxlegend[i].equals("E级检出率")) {
					boolean isDefectExist = false;
					if (deviceType.equals("tv")) {
						seriesItem.append("{name: 'E级检出率',type: 'line',yAxisIndex:0,symbol:'circle',symbolSize: 10,smooth:true,label:{normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data:[");
					} else {
						seriesItem.append("{name: 'E级检出率',type: 'line',yAxisIndex:0,symbol:'circle',symbolSize: 6,smooth:true,label:{normal: {show: true,position: 'top',fontSize: '75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data:[");
					}
					for (int j = 0; j < arrxData.length; j++) {
						boolean isOpExist = false;
						seriesItem.append("["+String.valueOf(j)+",");
						if (listYieldAVG.size()!=0) {
							if (j==0) {
								for (int k = 0; k < listAVG.size(); k++) {
									if (listAVG.get(k).get("DESCRIPTION").toString().equals("E级检出率")) {
										seriesItem.append(listAVG.get(k).get("DEFECTRATIO").toString());
										break;
									}
								}
							}else {
								for (int k = 0; k < list.size(); k++) {
									if (list.get(k).get("DESCRIPTION").toString().equals(arrxlegend[i])) {
										isDefectExist=true;
										if (showType.equals("OPERATOR")) {
											if (list.get(k).get("OPERATORID").toString().equals(arrxData[j])) {
												isOpExist=true;
												seriesItem.append(list.get(k).get("DEFECTRATIO").toString());
												break;
											}
										}else if (showType.equals("MACHINE")) {
											if (list.get(k).get("MACHINEID").toString().equals(arrxData[j])) {
												isOpExist=true;
												seriesItem.append(list.get(k).get("DEFECTRATIO").toString());
												break;
											}
										}
									}
								}
							}
						}
						seriesItem.append(",'"+arrxData[j]+"'],");
					}
					seriesItem.append("]},");
					
					
				} else {
					boolean isDefectExist = false;
					seriesItem.append("{name:'"+arrxlegend[i]+"',type:'bar',stack:'1',barWidth:'50%',");
					if (!defectCode.equals("All")) {
						seriesItem.append("label: {normal: {show: true,position: 'inside',formatter: function(obj){var value =obj.value;return value[1]+'%'},}},");
					}
					seriesItem.append("data:[");
					for (int j = 0; j < arrxData.length; j++) {
						boolean isOpExist = false;
						if (j==0) {
							for (int k = 0; k < listAVG.size(); k++) {
								if (listAVG.get(k).get("DESCRIPTION").toString().equals(arrxlegend[i])) {
									isDefectExist=true;
									isOpExist=true;
									seriesItem.append("[");
									seriesItem.append(String.valueOf(j));
									seriesItem.append(",");
									seriesItem.append(listAVG.get(k).get("DEFECTRATIO").toString());
									seriesItem.append(","+listAVG.get(k).get("DEFECTQTY").toString()+",");
									seriesItem.append(listAVG.get(k).get("OUTQTY_1").toString()+",'");
									seriesItem.append(arrxData[j]+"'],");
									break;
								}
							}
						}else{
							for (int k = 0; k < list.size(); k++) {
								if (list.get(k).get("DESCRIPTION").toString().equals(arrxlegend[i])) {
									isDefectExist=true;
									if (showType.equals("OPERATOR")) {
										if (list.get(k).get("OPERATORID").toString().equals(arrxData[j])) {
											isOpExist=true;
											seriesItem.append("[");
											seriesItem.append(String.valueOf(j));
											seriesItem.append(",");
											seriesItem.append(list.get(k).get("DEFECTRATIO").toString());
											seriesItem.append(","+list.get(k).get("DEFECTQTY").toString()+",");
											seriesItem.append(list.get(k).get("OUTQTY_1").toString()+",'");
											seriesItem.append(arrxData[j]+"'],");
											break;
										}
									}else if (showType.equals("MACHINE")) {
										if (list.get(k).get("MACHINEID").toString().equals(arrxData[j])) {
											isOpExist=true;
											seriesItem.append("[");
											seriesItem.append(String.valueOf(j));
											seriesItem.append(",");
											seriesItem.append(list.get(k).get("DEFECTRATIO").toString());
											seriesItem.append(","+list.get(k).get("DEFECTQTY").toString()+",");
											seriesItem.append(list.get(k).get("OUTQTY_1").toString()+",'");
											seriesItem.append(arrxData[j]+"'],");
											break;
										}
									}
								}
							}
						}

						if (!isOpExist) {
							seriesItem.append("[");
							seriesItem.append(String.valueOf(j));
							seriesItem.append(",,,,'");
							seriesItem.append(arrxData[j]+"'],");
						}
					}
					seriesItem.append("]},");
				}
			}

		} catch (Exception e) {
			// TODO: handle exception
		}
		
		try {		
			//get 过货量
			if (deviceType.equals("tv")) {
				seriesItem.append("{name:'过货量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color: '#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '80%',color: 'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
			} else {
				seriesItem.append("{name:'过货量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color: '#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '70%',color: 'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
			}

				for (int i = 0; i < arrxData.length; i++) {
					seriesItem.append("["+String.valueOf(i)+",1,");
					try {
						if (i==0) {
							seriesItem.append(listAVG.get(0).get("OUTQTY_1").toString());
						}else {
							for (int k = 0; k < list.size(); k++) {
								if (showType.equals("OPERATOR")) {
									if (list.get(k).get("OPERATORID").toString().equals(arrxData[i])) {
										seriesItem.append(list.get(k).get("OUTQTY_1").toString());
										break;
									}
								}else if (showType.equals("MACHINE")) {
									if (list.get(k).get("MACHINEID").toString().equals(arrxData[i])) {
										seriesItem.append(list.get(k).get("OUTQTY_1").toString());
										break;
									}
								}
							}
						}
					} catch (Exception e) {
						// TODO: handle exception
					}
					
					seriesItem.append("],");
				}

			seriesItem.append("]},");
		} catch (Exception e) {
			// TODO: handle exception
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
			
	@RequestMapping("detectionMissProductCategory")
	public @ResponseBody List<String> detectionMissProductCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="shopName",required=false) String shopName,
			@RequestParam(value="processType",required=false) String operationName,
			@RequestParam(value="dataType",required=false) String showType,
			@RequestParam(value="productionType",required=false) String productionType,
			@RequestParam(value="dataType1",required=false) String dataType)throws IOException{

		String dataType1 = "";
		if (dataType.equals("人员漏检")) {
			dataType1 = "漏检率";
		}else if (dataType.equals("人员过判")) {
			dataType1 = "过判率";
		}

		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		if (showType.equals("OPERATOR")) {
			list = operatorMonitorService.getOperatorDefectCategorynew(shopName,operationName,dataType,productionType);
		} else if (showType.equals("MACHINE")) {
			//list = echartReportService.getOperatorDefectCategoryByLinenew(shopName,operationName,productionType);
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

	@RequestMapping("detectionMissDefectCodeList")
	public @ResponseBody List<DefectCode> detectionMissDefectCodeList(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="shopName",required=false) String shopName,
			@RequestParam(value="processType",required=false) String operationName,
			@RequestParam(value="dataType",required=false) String showType,
			@RequestParam(value="productionType",required=false) String productionType,
			@RequestParam(value="productCategory",required=false) String productCategory,
			@RequestParam(value="startTime",required=false) String startTime_,
			@RequestParam(value="endTime",required=false) String endTime_,
			@RequestParam(value="dataType1",required=false) String dataType)throws IOException{
		
		String dataType1 = "";
		if (dataType.equals("人员漏检")) {
			dataType1 = "漏检率";
		}else if (dataType.equals("人员过判")) {
			dataType1 = "过判率";
		}
		String startTime = startTime_.substring(0,4)+startTime_.substring(5,7)+startTime_.substring(8,10)+startTime_.substring(11,13);
		String endTime = endTime_.substring(0,4)+endTime_.substring(5,7)+endTime_.substring(8,10)+endTime_.substring(11,13);
		
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		if (showType.equals("OPERATOR")) {
			list = operatorMonitorService.getOperatorDefectCodenew(shopName,operationName,dataType,productionType,productCategory,startTime,endTime,dataType1);
		} else if (showType.equals("MACHINE")) {
			//list = echartReportService.getOperatorDefectCodeByLine(shopName,operationName,productionType,productCategory,startTime,endTime);
		}
				
		
		List<DefectCode> defectCode = new ArrayList<>();
		DefectCode firstDefect = new DefectCode();
		firstDefect.setName("All");
		firstDefect.setValue("All");
		defectCode.add(firstDefect);
		for (int i = 0; i < list.size(); i++) {
			DefectCode defect = new DefectCode();
			defect.setName(list.get(i).get("DESCRIPTION").toString());
			defect.setValue(list.get(i).get("DESCRIPTION").toString());
			defectCode.add(defect);
		}
		
		return defectCode;
	}
	
	@RequestMapping(value="/detectionMiss")
	public void detectionMiss(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String deviceType = yieldParam.getDeviceType();
		String shopName = yieldParam.getShopName();
		String operationName = yieldParam.getProcesstype();
		String productCategory = yieldParam.getProductCategory();
		String dataType = yieldParam.getDatatype1();
		String dataType1 = "";
		if (dataType.equals("人员漏检")) {
			dataType1 = "漏检率";
		}else if (dataType.equals("人员过判")) {
			dataType1 = "过判率";
		}
		String showType = yieldParam.getDatatype();
		String productionType = yieldParam.getProductionType();
		String defectCode = yieldParam.getDefectcode();
		String startTime_ = yieldParam.getStarttime();
		String startTime = startTime_.substring(0,4)+startTime_.substring(5,7)+startTime_.substring(8,10)+startTime_.substring(11,13);
		String endTime_ = yieldParam.getEndtime();
		String endTime = endTime_.substring(0,4)+endTime_.substring(5,7)+endTime_.substring(8,10)+endTime_.substring(11,13);
		String yieldType = "OPERATOR";
		
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listOperator = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listDefect = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listAVG = new ArrayList<Map<String,Object>>();
		
		if (showType.equals("OPERATOR")) {
			list = operatorMonitorService.getOperatorDefectnew(shopName,operationName,dataType,productionType,productCategory,defectCode,startTime,endTime,dataType1);
			listOperator = operatorMonitorService.getOperatorListnew(shopName,operationName,dataType,productionType,productCategory,defectCode,startTime,endTime);
			listDefect = operatorMonitorService.getOperatorDefectCodeListnew(shopName,operationName,dataType,productionType,productCategory,defectCode,startTime,endTime);
			listAVG = operatorMonitorService.getOperatorDefectAVGnew(shopName,operationName,dataType,productionType,productCategory,defectCode,startTime,endTime);
		} else if (showType.equals("MACHINE")) {
			
		}

		
		List<Map<String, Object>> listYield = operatorMonitorService.getOperatorYieldnew(shopName,operationName,dataType,productionType,productCategory,defectCode,startTime,endTime,dataType1);
		List<Map<String, Object>> listYieldAVG = operatorMonitorService.getOperatorYieldAVGnew(shopName, operationName, dataType,productionType, productCategory, defectCode, startTime, endTime,dataType1);
		List<Map<String, Object>> listDate=echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		
		//get xData
		StringBuffer xData = new StringBuffer().append("['AVG',");
		String[] arrxData = new String[listOperator.size()+1];
		arrxData[0]="AVG";
		for (int i = 0; i < listOperator.size(); i++) {
			if (showType.equals("OPERATOR")) {
				xData.append("'"+listOperator.get(i).get("OPERATORID").toString()+"',");
				arrxData[i+1]=listOperator.get(i).get("OPERATORID").toString();
			} else if (showType.equals("MACHINE")) {
				xData.append("'"+listOperator.get(i).get("MACHINEID").toString()+"',");
				arrxData[i+1]=listOperator.get(i).get("MACHINEID").toString();
			}
		}
		xData.append("]");
		
		//get legendData
		StringBuffer legendData = new StringBuffer().append("['"+dataType1+"',");
		String[] arrxlegend = new String[listDefect.size()+1];
		arrxlegend[0]=dataType1;
		for (int i = 0; i < listDefect.size(); i++) {
			legendData.append("'"+listDefect.get(i).get("DESCRIPTION").toString()+"',");
			arrxlegend[i+1] = listDefect.get(i).get("DESCRIPTION").toString();
		}
		legendData.append("]");
		
		StringBuffer seriesItem = new StringBuffer();
		StringBuffer series = new StringBuffer().append("[");
		
		//get 漏检率
		if (deviceType.equals("tv")) {
			if (dataType.equals("人员漏检")) {
				seriesItem.append("{name: '"+dataType1+"',type: 'line',yAxisIndex:1,symbol:'circle',symbolSize: 10,smooth:true,label:{normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data:[");			
			}else if (dataType.equals("人员过判")) {
				seriesItem.append("{name: '"+dataType1+"',type: 'line',yAxisIndex:0,symbol:'circle',symbolSize: 10,smooth:true,label:{normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data:[");			
			}
		} else {
			if (dataType.equals("人员漏检")) {
				seriesItem.append("{name: '"+dataType1+"',type: 'line',yAxisIndex:1,symbol:'circle',symbolSize: 6,smooth:true,label:{normal: {show: true,position: 'top',fontSize: '75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data:[");			
			}else if (dataType.equals("人员过判")) {
				seriesItem.append("{name: '"+dataType1+"',type: 'line',yAxisIndex:0,symbol:'circle',symbolSize: 6,smooth:true,label:{normal: {show: true,position: 'top',fontSize: '75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data:[");			
			}
		}
		for (int i = 0; i < arrxData.length; i++) {
			seriesItem.append("["+String.valueOf(i)+",");
			if (listYieldAVG.size()!=0) {
				if (i==0) {
					if (listYieldAVG.get(0).get("DEFECTRATIO")!=null) {
						seriesItem.append(listYieldAVG.get(0).get("DEFECTRATIO").toString());					
					}
				}else {
					for (int k = 0; k < listYield.size(); k++) {
						if (listYield.get(k).get("OPERATORID")!=null) {
							if (listYield.get(k).get("OPERATORID").toString().equals(arrxData[i])) {
								seriesItem.append(listYield.get(k).get("DEFECTRATIO").toString());
								break;
							}
						}

					}
				}
			}
			seriesItem.append(",'"+arrxData[i]+"'],");
		}
		seriesItem.append("]},");
		
		
		for (int i = 1; i < arrxlegend.length; i++) {
			boolean isDefectExist = false;
			seriesItem.append("{name:'"+arrxlegend[i]+"',type:'bar',stack:'1',barWidth:'50%',");
			if (!defectCode.equals("All")) {
				seriesItem.append("label: {normal: {show: true,position: 'inside',formatter: function(obj){var value =obj.value;return value[1]+'%'},}},");
			}
			seriesItem.append("data:[");
			for (int j = 0; j < arrxData.length; j++) {
				boolean isOpExist = false;
				if (j==0) {
					for (int k = 0; k < listAVG.size(); k++) {
						if (listAVG.get(k).get("DESCRIPTION").toString().equals(arrxlegend[i])) {
							isDefectExist=true;
							isOpExist=true;
							seriesItem.append("[");
							seriesItem.append(String.valueOf(j));
							seriesItem.append(",");
							seriesItem.append(listAVG.get(k).get("DEFECTRATIO").toString());
							seriesItem.append(","+listAVG.get(k).get("DEFECTQTY").toString()+",");
							seriesItem.append(listAVG.get(k).get("OUTQTY_1").toString()+",'");
							seriesItem.append(arrxData[j]+"'],");
							break;
						}
					}
				}else{
					for (int k = 0; k < list.size(); k++) {
						if (list.get(k).get("DESCRIPTION").toString().equals(arrxlegend[i])) {
							isDefectExist=true;
							if (showType.equals("OPERATOR")) {
								if (list.get(k).get("OPERATORID").toString().equals(arrxData[j])) {
									isOpExist=true;
									seriesItem.append("[");
									seriesItem.append(String.valueOf(j));
									seriesItem.append(",");
									seriesItem.append(list.get(k).get("DEFECTRATIO").toString());
									seriesItem.append(","+list.get(k).get("DEFECTQTY").toString()+",");
									seriesItem.append(list.get(k).get("OUTQTY_1").toString()+",'");
									seriesItem.append(arrxData[j]+"'],");
									break;
								}
							}else if (showType.equals("MACHINE")) {
								if (list.get(k).get("MACHINEID").toString().equals(arrxData[j])) {
									isOpExist=true;
									seriesItem.append("[");
									seriesItem.append(String.valueOf(j));
									seriesItem.append(",");
									seriesItem.append(list.get(k).get("DEFECTRATIO").toString());
									seriesItem.append(","+list.get(k).get("DEFECTQTY").toString()+",");
									seriesItem.append(list.get(k).get("OUTQTY_1").toString()+",'");
									seriesItem.append(arrxData[j]+"'],");
									break;
								}
							}
						}
					}
				}

				if (!isOpExist) {
					seriesItem.append("[");
					seriesItem.append(String.valueOf(j));
					seriesItem.append(",,,,'");
					seriesItem.append(arrxData[j]+"'],");
				}
			}
			seriesItem.append("]},");
		}
		
		//get 过货量
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'过货量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color: '#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '80%',color: 'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		} else {
			seriesItem.append("{name:'过货量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color: '#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '70%',color: 'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		}
		for (int i = 0; i < arrxData.length; i++) {
			seriesItem.append("["+String.valueOf(i)+",1,");
			try {
				if (i==0) {
					seriesItem.append(listAVG.get(0).get("OUTQTY_1").toString());
				}else {
					for (int k = 0; k < list.size(); k++) {
						if (showType.equals("OPERATOR")) {
							if (list.get(k).get("OPERATORID").toString().equals(arrxData[i])) {
								seriesItem.append(list.get(k).get("OUTQTY_1").toString());
								break;
							}
						}else if (showType.equals("MACHINE")) {
							if (list.get(k).get("MACHINEID").toString().equals(arrxData[i])) {
								seriesItem.append(list.get(k).get("OUTQTY_1").toString());
								break;
							}
						}

					}
				}
			} catch (Exception e) {
				// TODO: handle exception
				log.debug(e.getMessage());
			}
			
			seriesItem.append("],");
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
		
		List<Map<String, Object>> list = operatorMonitorService.getOperatorMDLCHANNENGTotal(shopName,"",operationName,productionType,productCategory,startTime,endTime);
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

	@RequestMapping(value = "/getOpt_OperatorDefectCategory")
	public @ResponseBody List<String> getOpt_OperatorDefectCategory(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName,
			@RequestParam(value = "processType",required = true)String operationName,
			@RequestParam(value = "productionType",required = true)String productionType,
			@RequestParam(value = "dataType",required = true)String showType) throws IOException{
		
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		if (showType.equals("OPERATOR")) {
			list = operatorMonitorService.getOperatorDefectCategory(shopName,operationName,productionType);
		} else if (showType.equals("MACHINE")) {
			list = operatorMonitorService.getOperatorDefectCategoryByLine(shopName,operationName,productionType);
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

	@RequestMapping(value="/getOpt_OperatorDefectMDLRENYUANBIE")
	public void getOpt_OperatorDefectMDLRENYUANBIE(HttpServletRequest request,HttpServletResponse response,
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
		
		List<Map<String, Object>> list = operatorMonitorService.getOperatorMDLRENYUANBIETotal(shopName,operationName,productionType,productCategory,startTime,endTime);
		List<Map<String, Object>> listOperator = operatorMonitorService.getOperatorIdList(shopName,operationName,productionType,productCategory,startTime,endTime);
		List<Map<String, Object>> listDefectDescription = operatorMonitorService.getOperatorMDLRENYUANBIEDefectDescription(shopName,operationName,productionType,productCategory,startTime,endTime);
		List<Map<String, Object>> listAVG = operatorMonitorService.getOperatorMDLRENYUANBIETotalAVG(shopName,operationName,productionType,productCategory,startTime,endTime);
		
		List<Map<String, Object>> listYield = operatorMonitorService.getOperatorYield(shopName,operationName,productionType,productCategory,"OPERATOR",startTime,endTime);
		List<Map<String, Object>> listYieldAVG = operatorMonitorService.getOperatorYieldAVG(shopName,operationName,productionType,productCategory,"OPERATOR",startTime,endTime);
		
		List<Map<String, Object>> listDate = echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
			
		StringBuffer xData = new StringBuffer().append("['AVG',");
		String[] arrxData = new String[listOperator.size()+1];
		arrxData[0] = "AVG";
		for (int i = 0; i < listOperator.size(); i++) {
			xData.append("'"+listOperator.get(i).get("OPERATORID").toString()+"',");
			arrxData[i+1] = listOperator.get(i).get("OPERATORID").toString();
		}
		xData.append("]");
		
		StringBuffer legendData = new StringBuffer().append("['Yield','OK',");
		String[] arrlegendData = new String[listDefectDescription.size()+2];
		arrlegendData[0] = "Yield";
		arrlegendData[1] = "OK";
		for (int i = 0; i < listDefectDescription.size(); i++) {
			legendData.append("'"+listDefectDescription.get(i).get("DESCRIPTION").toString()+"',");
			arrlegendData[i+2] = listDefectDescription.get(i).get("DESCRIPTION").toString();
		}
		legendData.append("]");

		
		StringBuffer series = new StringBuffer().append("[");
		Integer okCount = 0;
		if (list.size() != 0) {
			StringBuffer seriesItem = new StringBuffer();
			if (deviceType.equals("tv")) {
				seriesItem.append("{name: 'Yield',type: 'line',yAxisIndex: 1,symbol: 'circle',symbolSize: 10,smooth: true,label: {normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
			} else {
				seriesItem.append("{name: 'Yield',type: 'line',yAxisIndex: 1,symbol: 'circle',symbolSize: 6,smooth: true,label: {normal: {show: true,position: 'top',fontSize: '75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
			}
			try {
				seriesItem.append("[0,"+listYieldAVG.get(0).get("YIELDRATIO")+","+listYieldAVG.get(0).get("PRODUCTOKQTY")+",'AVG'],");
				for (int i = 1; i < arrxData.length; i++) {
					for (int j = 0; j < listYield.size(); j++) {
						if (listYield.get(j).get("EVENTUSER").toString().equals(arrxData[i])) {
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i)+",");
							seriesItem.append(listYield.get(j).get("YIELDRATIO").toString()+",");
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
								if (arrlegendData[i].equals("OK")) {
									okCount += Integer.parseInt(list.get(p).get("DEFECTQTY").toString());
								}
								seriesItem.append("[");
								seriesItem.append(String.valueOf(j)+",");
								seriesItem.append(list.get(p).get("DEFECTQTY").toString()+",");
								seriesItem.append("'"+arrxData[j]+"',");
								seriesItem.append(list.get(p).get("OUTQTY").toString()+",");
								seriesItem.append("],");
								break;
							}
						}
					}
				}
				seriesItem.append("]},");
			}

			

			
			series.append(seriesItem.toString());
		}
		series.append("]");
		
		String totolOut = "";
		int totolOutInt = 0;
		for (int i = 0; i < listOperator.size(); i++) {
			totolOutInt += Integer.parseInt(listOperator.get(i).get("OUTQTY").toString());
		}
		totolOut = String.valueOf(totolOutInt);
		totolOut =totolOut + ";   总良品数 ："+String.valueOf(okCount);
		
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

	@RequestMapping(value="/getOpt_OperatorDefectMDLRENYUANBIEOne")
	public void getOpt_OperatorDefectMDLRENYUANBIEOne(HttpServletRequest request,HttpServletResponse response,
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
		String opNameId = yieldParam.getDatatype();
		String opName = "";
		List<Map<String, Object>> listOpRealName = operatorMonitorService.getlistOpRealName(opNameId);
		if (listOpRealName.size()!=0) {
			opName = listOpRealName.get(0).get("OPERATORID").toString();
		}else {
			opName = opNameId;
		}
		
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listYield = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> listDefectDescription = new ArrayList<Map<String,Object>>();
		if (!opName.equals("AVG")) {
			list = operatorMonitorService.getOperatorMDLRENYUANBIEOne(shopName,opName,operationName,productionType,productCategory,startTime,endTime);		
			listYield = operatorMonitorService.getOperatorYieldOne(shopName,opName,operationName,productionType,productCategory,"Operator",startTime,endTime);
			listDefectDescription = operatorMonitorService.getOperatorDefectDescription(shopName,opName,operationName,productionType,productCategory,startTime,endTime);

		}else {
			list = operatorMonitorService.getOperatorMDLRENYUANBIEOneAVG(shopName,opName,operationName,productionType,productCategory,startTime,endTime);		
			listYield = operatorMonitorService.getOperatorYieldOneAVG(shopName,opName,operationName,productionType,productCategory,"Operator",startTime,endTime);
			listDefectDescription = operatorMonitorService.getOperatorDefectDescription(shopName,opName,operationName,productionType,productCategory,startTime,endTime);
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

		StringBuffer legendData = new StringBuffer().append("['Yield','OK',");
		String[] arrlegendData = new String[listDefectDescription.size()+2];
		arrlegendData[0] = "Yield";
		arrlegendData[1] = "OK";
		for (int i = 0; i < listDefectDescription.size(); i++) {
			legendData.append("'"+listDefectDescription.get(i).get("DESCRIPTION").toString()+"',");
			arrlegendData[i+2] = listDefectDescription.get(i).get("DESCRIPTION").toString();
		}
		legendData.append("]");
		
		StringBuffer series = new StringBuffer().append("[");
		StringBuffer seriesItem = new StringBuffer();
		
		if (deviceType.equals("tv")) {
			seriesItem.append("{name: 'Yield',type: 'line',yAxisIndex: 1,symbol: 'circle',symbolSize: 10,smooth: true,label: {normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		} else {
			seriesItem.append("{name: 'Yield',type: 'line',yAxisIndex: 1,symbol: 'circle',symbolSize: 6,smooth: true,label: {normal: {show: true,position: 'top',fontSize: '75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		}
		for (int i = 0; i < arrxData.length; i++) {
			boolean isExist = false;
			for (int j = 0; j < listYield.size(); j++) {
				if (listYield.get(j).get("TIMEHH").toString().equals(arrxDatacol[i])) {
					seriesItem.append("[");
					seriesItem.append(String.valueOf(i)+",");
					seriesItem.append(listYield.get(j).get("YIELDRATIO").toString()+",");
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
	
	@RequestMapping(value="/getEacHourProductCategory")
	public @ResponseBody List<String> getEacHourProductCategory(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="shopName",required = true)String shopName,
			@RequestParam(value = "productionType",required = true)String productionType,
			@RequestParam(value = "operationName",required = true)String operationName,
			@RequestParam(value = "dataType", required = true)String dataType,
			@RequestParam(value = "startTime", required = true)String startTime_,
			@RequestParam(value = "endTime", required = true)String endTime_) throws Exception {

		String startTime = startTime_.substring(0, 4)+startTime_.substring(5, 7)+startTime_.substring(8, 10)+startTime_.substring(11, 13)+startTime_.substring(14,16);
		String endTime = endTime_.substring(0, 4)+endTime_.substring(5, 7)+endTime_.substring(8, 10)+endTime_.substring(11, 13)+endTime_.substring(14,16);

		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		if (!productionType.equals("ALL")) {
			list = operatorMonitorService.getOperatorDefectEACXIAOSHIBIECategory(shopName,productionType,operationName,dataType,startTime,endTime);
		}else {
			list = operatorMonitorService.getOperatorDefectEACXIAOSHIBIECategoryAllType(shopName,operationName,dataType,startTime,endTime);
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
		listCategory.add("ALL");
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
	
	@RequestMapping(value="/getEacHourGridValue")
	public void getEacHourGridValue(HttpServletRequest request, 
			HttpServletResponse response,@RequestBody YieldParam param) throws Exception {
		String deviceType = param.getDeviceType();
		String shopName = param.getShopName();
		String productionType = param.getProductionType();
		String productCategory = param.getProductCategory();
		String operationName = param.getOperationName();
		String dataType = param.getDatatype();
		String startTime_ = param.getStarttime();
		String startTime = startTime_.substring(0, 4)+startTime_.substring(5, 7)+startTime_.substring(8, 10)+startTime_.substring(11, 13)+startTime_.substring(14,16);
		String endTime_ = param.getEndtime();
		String endTime = endTime_.substring(0, 4)+endTime_.substring(5, 7)+endTime_.substring(8, 10)+endTime_.substring(11, 13)+endTime_.substring(14,16);
		
		//获取选择时间范围内的小时数
		SimpleDateFormat sDateFormat = new SimpleDateFormat("yyyyMMddHHmm");
		List<String> filterTimeHour = new ArrayList<String>();
		try {
			Date startTime1 = sDateFormat.parse(startTime);
			Date endTime1 = sDateFormat.parse(endTime);
			Calendar tempStart = Calendar.getInstance();
			tempStart.setTime(endTime1);
			while (startTime1.getTime() <= endTime1.getTime()) {
				filterTimeHour.add(sDateFormat.format(endTime1));
				tempStart.add(Calendar.HOUR_OF_DAY, -1);
				endTime1 = tempStart.getTime();				
			}
		} catch (Exception e) {
			// TODO: handle exception
			log.error(e.getMessage());
		}
		
		List<String> RealTimeHour = new ArrayList<String>();
		try {
			Date startTime1 = sDateFormat.parse(startTime);
			Date endTime1 = new Date();
			Calendar tempStart = Calendar.getInstance();
			tempStart.setTime(endTime1);
			while (startTime1.getTime() <= endTime1.getTime()) {
				RealTimeHour.add(sDateFormat.format(endTime1));
				tempStart.add(Calendar.HOUR_OF_DAY, -1);
				endTime1 = tempStart.getTime();				
			}
		} catch (Exception e) {
			// TODO: handle exception
			log.error(e.getMessage());
		}
		
		//获取天数
		List<String> filterTimeDay = new ArrayList<String>();
		for (int i = 0; i < filterTimeHour.size(); i++) {
			boolean isExist = false;
			for (int j = 0; j < filterTimeDay.size(); j++) {
				if (filterTimeDay.get(j).substring(0, 8).equals(filterTimeHour.get(i).substring(0, 8))) {
					isExist = true;
					break;
				}
			}
			if (!isExist) {
				filterTimeDay.add(filterTimeHour.get(i).substring(0, 8));
			}
		}
		
		List<JSONArray> headerList = new ArrayList<>();
		String[] headerCol = {"站点","姓名","当前作业数","Target","完成度","Bal","当前平均"};
		if (dataType.equals("MACHINE")) {
			headerCol[1] = "设备";
		}
		
		JSONArray header1 = new JSONArray();
		JSONArray header2 = new JSONArray(); //具体小时
		/**
		 *   header1
		 *   [
              { header: '站点', rowspan: 2 },
              { header: '姓名', rowspan: 2 },
              { header: '当前作业数', rowspan: 2 },
              { header: 'Target', rowspan: 2 },
              { header: '完成度', rowspan: 2 },
              { header: 'Bal', rowspan: 2 },
              { header: '当前平均', rowspan: 2 },
              { header: '15D', colspan: 5 },
             ]
             header2
             [
              { header: '08H' },
              { header: '09H' },
              { header: '10H' },
              { header: '11H' },
              { header: '12H' }
             ],
		 */
		for (int i = 0; i < headerCol.length; i++) {
			JSONObject json = new JSONObject();
			json.element("header", headerCol[i]);
			json.element("rowspan", 2);
			if (deviceType.equals("tv")) {
				json.element("width", "80px");
			} else {
				json.element("width", "65px");
			}
			header1.add(json);
		}
		for (int i = filterTimeDay.size()-1; i >= 0; i--) {
			JSONObject json = new JSONObject();
			JSONObject jsonHour = new JSONObject();
			json.element("header", filterTimeDay.get(i).substring(6)+"D");
			int hourCount = 0;
			for (int j = filterTimeHour.size()-1; j >= 0; j--) {
				if (filterTimeHour.get(j).contains(filterTimeDay.get(i))) {
					hourCount++;
					jsonHour.element("header", filterTimeHour.get(j).substring(8, 10));
					//jsonHour.element("width", "10px");
					header2.add(jsonHour);
				}
			}
			json.element("colspan", hourCount);
			header1.add(json);
		}
		
		headerList.add(header1);
		headerList.add(header2);		
		
		List<JSONArray> valueList = new ArrayList<>();
		List<Map<String, Object>> listStandardTarget = operatorMonitorService.getStandardTarget();
		
		//第一行Spec值
		JSONArray valueRow_01 = new JSONArray();
		//获取Target总数
		String[] arrSpecCol = {"TARGET_00H","TARGET_01H","TARGET_02H","TARGET_03H","TARGET_04H",
				"TARGET_05H","TARGET_06H","TARGET_07H","TARGET_08H","TARGET_09H","TARGET_10H","TARGET_11H",
				"TARGET_12H","TARGET_13H","TARGET_14H","TARGET_15H","TARGET_16H","TARGET_17H","TARGET_18H",
				"TARGET_19H","TARGET_20H","TARGET_21H","TARGET_22H","TARGET_23H"};
		String[] targetArr = new String[filterTimeHour.size()];
		List<Map<String, Object>> listOperatorMachine = operatorMonitorService.getOperatorDefectEACXIAOSHIBIEOperatorMachineList(shopName,productionType,productCategory,operationName,dataType,startTime,endTime);				
		String[] arrOperatorMachineList = new String[listOperatorMachine.size()];
		for (int i = 0; i < listOperatorMachine.size(); i++) {
			arrOperatorMachineList[i] = listOperatorMachine.get(i).get("OPERATORID").toString();
		}
		
		Integer line01TotalTarget = new Integer(0) ;
		for (int i = 0; i < filterTimeHour.size(); i++) {
			for (int j = 0; j < arrSpecCol.length; j++) {
				if (filterTimeHour.get(i).substring(8,10).equals(arrSpecCol[j].substring(7, 9))) {
					line01TotalTarget += Integer.parseInt(listStandardTarget.get(0).get(arrSpecCol[j]).toString());
					break;
				}
			}
		}
		for (int i = 0; i < header1.size()-filterTimeDay.size(); i++) {
			JSONObject json = new JSONObject();
			if (header1.getJSONObject(i).get("header").equals("Target")) {
				json.element("value", line01TotalTarget);
			} else {
				json.element("value", "");
			}
			if (deviceType.equals("tv")) {
				json.element("fontsize", "14px");
			} else {
				json.element("fontsize", "9px");
			}
			valueRow_01.add(json);
		}
		for (int i = filterTimeHour.size()-1; i >= 0; i--) {
			JSONObject json = new JSONObject();
			for (int j = 0; j < arrSpecCol.length; j++) {
				if (filterTimeHour.get(i).substring(8,10).equals(arrSpecCol[j].substring(7, 9))) {
					json.element("value", listStandardTarget.get(0).get(arrSpecCol[j]).toString());
					if (deviceType.equals("tv")) {
						json.element("fontsize", "14px");
					} else {
						json.element("fontsize", "9px");
					}
					targetArr[i] = listStandardTarget.get(0).get(arrSpecCol[j]).toString();
					break;
				}
			}
			valueRow_01.add(json);
		}
		valueList.add(valueRow_01);
		
		//第二行产能合计
		JSONArray valueRow_02 = new JSONArray();
		List<Map<String, Object>> listTotalByHour = new ArrayList<Map<String,Object>>();
		if (!productCategory.equals("ALL")&&!productionType.equals("ALL")) {
			listTotalByHour = operatorMonitorService.getOperatorDefectEACXIAOSHIBIETotalByHour(shopName,productionType,productCategory,operationName,dataType,startTime,endTime);
		}else if (!productCategory.equals("ALL")&&productionType.equals("ALL")) {
			listTotalByHour = operatorMonitorService.getOperatorDefectEACXIAOSHIBIETotalByHourAllType(shopName,productCategory,operationName,dataType,startTime,endTime);
		}else if (productCategory.equals("ALL")&&!productionType.equals("ALL")) {
			listTotalByHour = operatorMonitorService.getOperatorDefectEACXIAOSHIBIETotalByHourAllCategory(shopName,productionType,operationName,dataType,startTime,endTime);			
		}else if (productCategory.equals("ALL")&&productionType.equals("ALL")) {
			try {
				listTotalByHour = operatorMonitorService.getOperatorDefectEACXIAOSHIBIETotalByHourAllTypeCategory(shopName,operationName,dataType,startTime,endTime);
			} catch (Exception e) {
				// TODO: handle exception
				log.error(e.getMessage());
			}
			
		}
		Integer totalOutQty = 0;
		for (int i = 0; i < listTotalByHour.size(); i++) {
			totalOutQty += Integer.parseInt(listTotalByHour.get(i).get("OUTQTY").toString());
		}
		for (int i = 0; i < header1.size()-filterTimeDay.size(); i++) {
			JSONObject json = new JSONObject();
			if (header1.getJSONObject(i).get("header").equals("姓名")||header1.getJSONObject(i).get("header").equals("设备")) {
				json.element("value", "合计");
			}else if (header1.getJSONObject(i).get("header").equals("当前作业数")) {
				json.element("value", totalOutQty);
			}else if (header1.getJSONObject(i).get("header").equals("Target")) {
				json.element("value", line01TotalTarget*listOperatorMachine.size());
			}else if (header1.getJSONObject(i).get("header").equals("当前平均")) {
				json.element("value", totalOutQty/filterTimeHour.size());
			}else {
				json.element("value", "");
			}
			if (deviceType.equals("tv")) {
				json.element("fontsize", "14px");
			} else {
				json.element("fontsize", "9px");
			}
			valueRow_02.add(json);
		}
		for (int i = filterTimeHour.size()-1; i >= 0; i--) {
			JSONObject json = new JSONObject();
			boolean isExist = false;
			for (int j = 0; j < listTotalByHour.size(); j++) {
				if (listTotalByHour.get(j).get("TIMEHH").toString().equals(filterTimeHour.get(i).substring(0, 10))) {
					json.element("value", listTotalByHour.get(j).get("OUTQTY").toString());
					isExist = true;
					break;
				}
			}
			if (!isExist) {
				json.element("value", "");
			}
			if (deviceType.equals("tv")) {
				json.element("fontsize", "14px");
			} else {
				json.element("fontsize", "9px");
			}
			valueRow_02.add(json);
		}
		valueList.add(valueRow_02);
		
		// 以下为单个设备或人员产能数据
		Integer realTotalTarget = new Integer(0);
		for (int i = 0; i < RealTimeHour.size(); i++) {
			for (int j = 0; j < arrSpecCol.length; j++) {
				if (RealTimeHour.get(i).substring(8,10).equals(arrSpecCol[j].substring(7, 9))) {
					realTotalTarget += Integer.parseInt(listStandardTarget.get(0).get(arrSpecCol[j]).toString());
					break;
				}
			}
		}	
		for (int i = 0; i < listOperatorMachine.size(); i++) {
			JSONArray jsonArray = new JSONArray();
			List<Map<String, Object>> listByOperatorId = operatorMonitorService.getOperatorDefectEACXIAOSHIBIETableByOperatorID(shopName,productionType,productCategory,operationName,dataType,startTime,endTime,arrOperatorMachineList[i]);
			Integer oneTotalOutQty = 0;
			for (int j = 0; j < listByOperatorId.size(); j++) {
				oneTotalOutQty += Integer.parseInt(listByOperatorId.get(j).get("OUTQTY").toString());
			}
			Float completeRatio = (Float.valueOf(String.valueOf(oneTotalOutQty))/Float.valueOf(String.valueOf(line01TotalTarget)))*100;
			for (int j = 0; j < header1.size()-filterTimeDay.size(); j++) {
				JSONObject json = new JSONObject();
				if (header1.getJSONObject(j).get("header").equals("站点")) {
					json.element("value", operationName);
					//json.element("fontsize", "10px");
				}else if (header1.getJSONObject(j).get("header").equals("姓名")||header1.getJSONObject(j).get("header").equals("设备")) {
					json.element("value", arrOperatorMachineList[i]);
					//json.element("fontsize", "10px");
				}else if (header1.getJSONObject(j).get("header").equals("当前作业数")) {
					json.element("value", oneTotalOutQty);
					//.element("fontsize", "10px");
				}else if (header1.getJSONObject(j).get("header").equals("Target")) {
					json.element("value", line01TotalTarget);
				}else if (header1.getJSONObject(j).get("header").equals("完成度")) {
					json.element("value", String.format("%.2f", completeRatio)+"%");
				}else if (header1.getJSONObject(j).get("header").equals("Bal")) {
					json.element("value", oneTotalOutQty-realTotalTarget);
					if (oneTotalOutQty-realTotalTarget <= 0) {
						json.element("color", "red");
					}else {
						json.element("color", "black");
					}
				}else if (header1.getJSONObject(j).get("header").equals("当前平均")) {
					json.element("value", oneTotalOutQty/filterTimeHour.size());
				}
				if (deviceType.equals("tv")) {
					json.element("fontsize", "14px");
				} else {
					json.element("fontsize", "9px");
				}
				jsonArray.add(json);
			}
			
			for (int j = filterTimeHour.size()-1; j >= 0; j--) {
				JSONObject json = new JSONObject();
				boolean isExist = false;
				for (int p = 0; p < listByOperatorId.size(); p++) {
					if (listByOperatorId.get(p).get("TIMEHH").toString().equals(filterTimeHour.get(j).subSequence(0, 10))) {
						json.element("value", listByOperatorId.get(p).get("OUTQTY").toString());
						if (Integer.parseInt(listByOperatorId.get(p).get("OUTQTY").toString())-Integer.parseInt(targetArr[p]) <= 0) {
							json.element("color", "red");
						}else {
							json.element("color", "black");
						}
						isExist = true;
						break;
					}
				}
				if (!isExist) {
					json.element("value", "");
				}
				if (deviceType.equals("tv")) {
					json.element("fontsize", "14px");
				} else {
					json.element("fontsize", "9px");
				}
				jsonArray.add(json);
			}
			valueList.add(jsonArray);
		}
				
		Map<String, Object> result = new HashMap<String, Object>();
		
		result.put("header", headerList);
		result.put("value", valueList);
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping("getBPPrdHourMonitorLineType")
	public @ResponseBody List<String> getBPPrdHourMonitorLineType(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="shopName",required=true)String shopName,
			@RequestParam(value="datatype",required=true)String datatype,
			@RequestParam(value="date",required=true)String date) throws Exception {
		return  operatorMonitorService.getBPPrdHourMonitorLineType(shopName, datatype);
	}
	
	@RequestMapping("getBPPrdHourMonitorGridValue")
	public void getBPPrdHourMonitorGridValue(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam gridParam) throws Exception {
		String shopName = gridParam.getShopName();
		String dataType = gridParam.getDatatype();
		String date_ = gridParam.getDate();
		String lineType = gridParam.getLinetype();
		String deviceType = gridParam.getDeviceType();
		List<Map<String, Object>> listDate = echartService.getDateFactory();
		
		String date = "";
		if (date_.equals("Today")) {
			date = listDate.get(0).get("DAY_0").toString();
		} else if (date_.equals("Yesterday")) {
			date = listDate.get(0).get("DAY_1").toString();
		}if (date_.equals("DayBeforeYesterday")) {
			date = listDate.get(0).get("DAY_2").toString();
		}
		
		List<Map<String, Object>> list = operatorMonitorService.getBPPrdHourMonitorGridValue(shopName, dataType, date, lineType);
		List<String> machineList = operatorMonitorService.getBPPrdHourMonitorGridValueMachineList(shopName, dataType, date, lineType);		
		String[] headerCol = {"Hour","Sum","06H","07H","08H","09H","10H","11H","12H","13H","14H","15H","16H","17H","18H","19H","20H","21H","22H","23H","00H","01H","02H","03H","04H","05H"};
		
		List<JSONArray> resultList = new ArrayList<>();
		for (int i = 0; i < machineList.size(); i++) {
			JSONArray rowArray = new JSONArray();
			JSONObject cellMachine = new JSONObject();
			cellMachine.element("value", machineList.get(i));
			cellMachine.element("width", "100px");
			if (deviceType.equals("tv")) {
				cellMachine.element("fontsize", "13px");
			} else {
				cellMachine.element("fontsize", "1px");
			}
			rowArray.add(cellMachine);
			JSONObject cellSum = new JSONObject();
			String totalQty = operatorMonitorService.getBPPrdHourMonitorGridValueTotal(shopName, dataType, date, lineType,machineList.get(i));
			cellSum.element("value", totalQty);
			cellSum.element("width", "10px");
			if (deviceType.equals("tv")) {
				cellSum.element("fontsize", "14px");
			} else {
				cellSum.element("fontsize", "10px");
			}
			if (deviceType.equals("tv")) {
				cellMachine.element("fontsize", "13px");
			} else {
				cellMachine.element("fontsize", "5px");
			}
			rowArray.add(cellSum);
			for (int j = 2; j < headerCol.length; j++) {
				JSONObject cellValue = new JSONObject();
				boolean isExist = false;
				for (int k = 0; k < list.size(); k++) {
					if (list.get(k).get("MACHINENAME").toString().equals(machineList.get(i))) {
						if (list.get(k).get("TIMEHH").toString().substring(8).equals(headerCol[j].substring(0, 2))) {
							isExist = true;
							cellValue.element("value", list.get(k).get("OUTQTY").toString());
							if (deviceType.equals("tv")) {
								cellValue.element("fontsize", "14px");
							} else {
								cellValue.element("fontsize", "10px");
							}
							cellValue.element("width", "10px");
							if (deviceType.equals("tv")) {
								cellMachine.element("fontsize", "13px");
							} else {
								cellMachine.element("fontsize", "5px");
							}
							break;
						}
					}
				}
				if (!isExist) {
					cellValue.element("value", "");
				}
				rowArray.add(cellValue);
			}
			resultList.add(rowArray);
		}
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		result.put("value", resultList);
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	
	
	
	}

	
	@RequestMapping("/getBpTMSData")
	public void getBpTMSALLData(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false)YieldParam yieldParam) throws Exception{
		String FactoryName = yieldParam.getShopName();
		String DataType = yieldParam.getProductionType();
		String StartTime = yieldParam.getStarttime();
		String EndTime = yieldParam.getEndtime();
		
		//因为时间问题，所以对结束时间进行处理，为了实现<=，所以、减了一个小时
			String EndYear = EndTime.substring(0,4);
			String EndMonth = EndTime.substring(4,6);
			String EndDay = EndTime.substring(6,8);
			String EndHour = EndTime.substring(8,10);
			Calendar calend = Calendar.getInstance();
			calend.clear();
			calend.set(Calendar.YEAR,Integer.parseInt(EndYear));
			calend.set(Calendar.MONTH, Integer.parseInt(EndMonth)-1);
			calend.set(Calendar.DAY_OF_MONTH, Integer.parseInt(EndDay));
			calend.set(Calendar.HOUR_OF_DAY, Integer.parseInt(EndHour));
			calend .set(Calendar.MINUTE, 0);
			calend.set(Calendar.SECOND, 0);
			calend.set(Calendar.MILLISECOND, 0);
			calend.add(Calendar.HOUR_OF_DAY,-1);//减了一个小时
			SimpleDateFormat sdf = new SimpleDateFormat("YYYYMM");
			String Endtime = "";
		    Endtime = sdf.format(calend.getTime());
		    if(Integer.toString(calend.get(calend.DATE)).length() ==1){
		    	Endtime += "0"+Integer.toString(calend.get(calend.DATE));
		    }else{
		    	Endtime +=Integer.toString(calend.get(calend.DATE));
		    }
		    if(Integer.toString(calend.get(calend.HOUR_OF_DAY)).length() ==1){
		    	Endtime += "0"+Integer.toString(calend.get(calend.HOUR_OF_DAY));
		    }else{
		    	Endtime += Integer.toString(calend.get(calend.HOUR_OF_DAY));
		    }
			//处理起来极为麻烦  Endtime用于取值， EndTime用于取人员里面的X轴数据
		String Oper_Desc = yieldParam.getProductCategory();
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		List<Map<String, Object>> listOpeartor = operatorMonitorService.GetBpTMSOperatorData(FactoryName,DataType,StartTime,Endtime);
		List<Map<String, Object>> listAllData = operatorMonitorService.GetBpTMSAllData(FactoryName,DataType,StartTime,Endtime);
		List<Map<String, Object>> listLegend = operatorMonitorService.GetBpTMSLegendData(FactoryName,DataType,StartTime,Endtime);
		List<Map<String, Object>> listAVGData = operatorMonitorService.GetBpTMSAVGData(FactoryName,DataType,StartTime,Endtime);
		
		StringBuffer series = new StringBuffer();
		StringBuffer xdata = new StringBuffer();
		StringBuffer legenddata = new StringBuffer();
		
		String[] xdataForCheck = new String[listOpeartor.size()];
		String[]  legenddataForCheck = {"ACT","GA1","GA2","SDT","ELSE"};
		
		xdata.append("['AVG',");
		for(int i = 0;i<listOpeartor.size();i++){
		    xdata.append("'");
		    xdata.append(listOpeartor.get(i).get("OPERATORNAME").toString());
			xdata.append("',");
			xdataForCheck[i] = listOpeartor.get(i).get("OPERATORNAME").toString();
		}
		xdata.append("]");

		series.append("[");

		for(int j = 0 ;j<legenddataForCheck.length;j++){
			series.append("{name:'");
			series.append(legenddataForCheck[j]+"',");
			series.append("type:'bar',stack: '1',barWidth:'50%',data:[");
			
			//AVG
			for(int i =0;i<listAVGData.size();i++){
				if(legenddataForCheck[j].equals(listAVGData.get(i).get("OPER_DESC").toString())){
					double AVGData = Double.parseDouble(listAVGData.get(i).get("AVGDATA").toString());
					String AvgData = String.format("%.2f", AVGData);
					series.append("[");
					series.append(0+",");
					series.append(AvgData+",");
					series.append("],");
				}
			}
			for(int i =0;i<listAllData.size();i++){
				if(legenddataForCheck[j].equals(listAllData.get(i).get("OPER_DESC").toString())){
					for(int m = 0;m<xdataForCheck.length;m++){
						if(xdataForCheck[m].equals(listAllData.get(i).get("OPERATORNAME").toString())){
							series.append("[");
							series.append((m+1)+",");
							series.append(listAllData.get(i).get("DEFECTQTY").toString()+",");
							series.append("],");
							//break;
						}
					}
				}			
			}
		series.append("]},");	
		}
		List<Map<String, Object>> listLineData = null;
		if(Oper_Desc.equals("ALL")){
			List<Map<String, Object>> listAllLineData = operatorMonitorService.GetBpTMSLineAllData("Review Time",FactoryName,StartTime.substring(0,8),Endtime.substring(0,8));
			listLineData = 	listAllLineData;
			legenddata.append("['ALL',");
			series.append("{name:'ALL',type:'line',color:'red',yAxisIndex:1,symbol:'circle',symbolSize:7,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '70%',formatter: function(obj) {var value = obj.value;return value[1] + ' S'},fontWeight:'bold',}},data:[");
		}else{
			List<Map<String, Object>> listSingleLineData = operatorMonitorService.GetBpTMSLineSingleData("Review Time",FactoryName,StartTime.substring(0,8),Endtime.substring(0,8),Oper_Desc);
			listLineData = 	listSingleLineData;
			legenddata.append("["+"'"+Oper_Desc+"-Line',");
			series.append("{name:'"+Oper_Desc+"-Line',type:'line',color:'red',yAxisIndex:1,symbol:'circle',symbolSize:7,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '70%',formatter: function(obj) {var value = obj.value;return value[1] + ' S'},fontWeight:'bold',}},data:[");
		}
		//legenddata
		for(int i =0;i<listLegend.size();i++){
			legenddata.append("'");
			legenddata.append(listLegend.get(i).get("OPER_DESC").toString());
			legenddata.append("',");
		}
		legenddata.append("]");
		
		//AVG
		double DefectQTY = 0;
		double OUTQTY = 0 ;
		for(int i =0;i<listLineData.size();i++){
			DefectQTY += Double.parseDouble(listLineData.get(i).get("DEFECTQTY").toString());
			OUTQTY += Double.parseDouble(listLineData.get(i).get("OUTQTY").toString());
		}
		String AVG = String.format("%.1f", DefectQTY/OUTQTY);
		
		series.append("["+0+","+AVG+","+"],");
		//LineData
		for(int j = 0;j<xdataForCheck.length;j++){
			boolean isExit = false;
			for(int i = 0;i<listLineData.size();i++){
				if(xdataForCheck[j].equals(listLineData.get(i).get("OPERATORNAME").toString())){
					isExit = true;
					double defectqty = Double.parseDouble(listLineData.get(i).get("DEFECTQTY").toString());
					double outqty = Double.parseDouble(listLineData.get(i).get("OUTQTY").toString());
					double linedata = defectqty/outqty;
					String LineData = String.format("%.1f", linedata);
					series.append("[");
					series.append((j+1)+",");
					series.append(LineData+",");
					series.append("],");
					//break;
				}
			}
			if(!isExit){
				series.append("["+(j+1)+",'/',"+"],");
			}
		}
		series.append("]},");
		
		series.append("]");
		
		result.put("series", series.toString());
		result.put("xdata", xdata.toString());
		result.put("legenddata", legenddata.toString());
		result.put("OperatorID", listOpeartor.get(0).get("OPERATORNAME").toString());
		
		/*//userinfo
			List<Map<String, Object>> listDate=EchartOperatorMonitorServiceImpl.getProductionDate("nameStr");
			String todayDate=listDate.get(0).get("TODAY_5M").toString();
			String userName=new String();
			String userInfo=new String();
			try{
				if(request.getParameter("username")!=null){
					userName=request.getParameter("username");
					userInfo=getUserinfo(userName);
				}
			}catch (Exception e) {
				userInfo="BOECD Confidential@XX/n"+todayDate;
			}	
			result.put("todaydate", todayDate);
			result.put("userinfo", userInfo);*/
		
		
		try{
			writeJSON(response, result);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	@RequestMapping("/getBpTMSRepairData")
	public void getBpTMSRepairData(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false)YieldParam yieldParam) throws Exception{
		String FactoryName = yieldParam.getShopName();
		String DataType = yieldParam.getProductionType();
		String StartTime = yieldParam.getStarttime();
		String EndTime = yieldParam.getEndtime();
		//因为时间问题，所以对结束时间进行处理，为了实现<=，所以、减了一个小时
			String EndYear = EndTime.substring(0,4);
			String EndMonth = EndTime.substring(4,6);
			String EndDay = EndTime.substring(6,8);
			String EndHour = EndTime.substring(8,10);
			Calendar calend = Calendar.getInstance();
			calend.clear();
			calend.set(Calendar.YEAR,Integer.parseInt(EndYear));
			calend.set(Calendar.MONTH, Integer.parseInt(EndMonth)-1);
			calend.set(Calendar.DAY_OF_MONTH, Integer.parseInt(EndDay));
			calend.set(Calendar.HOUR_OF_DAY, Integer.parseInt(EndHour));
			calend .set(Calendar.MINUTE, 0);
			calend.set(Calendar.SECOND, 0);
			calend.set(Calendar.MILLISECOND, 0);
			calend.add(Calendar.HOUR_OF_DAY,-1);//减了一个小时
			SimpleDateFormat sdf = new SimpleDateFormat("YYYYMM");
			String Endtime = "";
		    Endtime = sdf.format(calend.getTime());
		    if(Integer.toString(calend.get(calend.DATE)).length() ==1){
		    	Endtime += "0"+Integer.toString(calend.get(calend.DATE));
		    }else{
		    	Endtime +=Integer.toString(calend.get(calend.DATE));
		    }
		    if(Integer.toString(calend.get(calend.HOUR_OF_DAY)).length() ==1){
		    	Endtime += "0"+Integer.toString(calend.get(calend.HOUR_OF_DAY));
		    }else{
		    	Endtime += Integer.toString(calend.get(calend.HOUR_OF_DAY));
		    }
			//处理起来极为麻烦
		
		String Oper_Desc = yieldParam.getProductCategory();
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		List<Map<String, Object>> listOpeartor = operatorMonitorService.GetBpTMSOperatorData(FactoryName,DataType,StartTime,Endtime);
		List<Map<String, Object>> listAllData = operatorMonitorService.GetBpTMSAllData(FactoryName,DataType,StartTime,Endtime);
		List<Map<String, Object>> listLegend = operatorMonitorService.GetBpTMSLegendData(FactoryName,DataType,StartTime,Endtime);
		List<Map<String, Object>> listAVGData = operatorMonitorService.GetBpTMSAVGData(FactoryName,DataType,StartTime,Endtime);
		
		StringBuffer series = new StringBuffer();
		StringBuffer xdata = new StringBuffer();
		StringBuffer legenddata = new StringBuffer();
		
		String[] xdataForCheck = new String[listOpeartor.size()];
		String[]  legenddataForCheck = {"ACT","GA1","GA2","SDT","ELSE","AND","CVD"};
		
		xdata.append("['AVG',");
		for(int i = 0;i<listOpeartor.size();i++){
		    xdata.append("'");
		    xdata.append(listOpeartor.get(i).get("OPERATORNAME").toString());
			xdata.append("',");
			xdataForCheck[i] = listOpeartor.get(i).get("OPERATORNAME").toString();
		}
		xdata.append("]");

		series.append("[");

		for(int j = 0 ;j<legenddataForCheck.length;j++){
			series.append("{name:'");
			series.append(legenddataForCheck[j]+"',");
			series.append("type:'bar',stack: '1',barWidth:'50%',data:[");
			
			//AVG
			for(int i =0;i<listAVGData.size();i++){
				if(legenddataForCheck[j].equals(listAVGData.get(i).get("OPER_DESC").toString())){
					double AVGData = Double.parseDouble(listAVGData.get(i).get("AVGDATA").toString());
					String AvgData = String.format("%.2f", AVGData);
					series.append("[");
					series.append(0+",");
					series.append(AvgData+",");
					series.append("],");
				}
			}
			for(int i =0;i<listAllData.size();i++){
				if(legenddataForCheck[j].equals(listAllData.get(i).get("OPER_DESC").toString())){
					for(int m = 0;m<xdataForCheck.length;m++){
						if(xdataForCheck[m].equals(listAllData.get(i).get("OPERATORNAME").toString())){
							series.append("[");
							series.append((m+1)+",");
							series.append(listAllData.get(i).get("DEFECTQTY").toString()+",");
							series.append("],");
							//break;
						}
					}
				}			
			}
		series.append("]},");	
		}
		List<Map<String, Object>> listLineData = null;
		if(Oper_Desc.equals("ALL")){
			List<Map<String, Object>> listAllLineData = operatorMonitorService.GetBpTMSLineAllData("Repair Process Time",FactoryName,StartTime.substring(0,8),Endtime.substring(0,8));
			listLineData = 	listAllLineData;
			legenddata.append("['ALL',");
			series.append("{name:'ALL',type:'line',color:'red',yAxisIndex:1,symbol:'circle',symbolSize:7,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '70%',formatter: function(obj) {var value = obj.value;return value[1] + ' S'},fontWeight:'bold',}},data:[");
		}else{
			List<Map<String, Object>> listSingleLineData = operatorMonitorService.GetBpTMSLineSingleData("Repair Process Time",FactoryName,StartTime.substring(0,8),Endtime.substring(0,8),Oper_Desc);
			listLineData = 	listSingleLineData;
			legenddata.append("["+"'"+Oper_Desc+"-Line',");
			series.append("{name:'"+Oper_Desc+"-Line',type:'line',color:'red',yAxisIndex:1,symbol:'circle',symbolSize:7,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '70%',formatter: function(obj) {var value = obj.value;return value[1] + ' S'},fontWeight:'bold',}},data:[");
		}
		//legenddata
		for(int i =0;i<listLegend.size();i++){
			legenddata.append("'");
			legenddata.append(listLegend.get(i).get("OPER_DESC").toString());
			legenddata.append("',");
		}
		//legenddata.append("'AND','CVD'");
		legenddata.append("]");
		
		//AVG
		double DefectQTY = 0;
		double OUTQTY = 0 ;
		for(int i =0;i<listLineData.size();i++){
			DefectQTY += Double.parseDouble(listLineData.get(i).get("DEFECTQTY").toString());
			OUTQTY += Double.parseDouble(listLineData.get(i).get("OUTQTY").toString());
		}
		String AVG = String.format("%.1f", DefectQTY/OUTQTY);
		
		series.append("["+0+","+AVG+","+"],");
		//LineData
		for(int j = 0;j<xdataForCheck.length;j++){
			boolean isExit = false;
			for(int i = 0;i<listLineData.size();i++){
				if(xdataForCheck[j].equals(listLineData.get(i).get("OPERATORNAME").toString())){
					isExit = true;
					double defectqty = Double.parseDouble(listLineData.get(i).get("DEFECTQTY").toString());
					double outqty = Double.parseDouble(listLineData.get(i).get("OUTQTY").toString());
					double linedata = defectqty/outqty;
					String LineData = String.format("%.1f", linedata);
					series.append("[");
					series.append((j+1)+",");
					series.append(LineData+",");
					series.append("],");
					//break;
				}
			}
			if(!isExit){
				series.append("["+(j+1)+",'/',"+"],");
			}
		}
		series.append("]},");
		
		series.append("]");
		
		result.put("series", series.toString());
		result.put("xdata", xdata.toString());
		result.put("legenddata", legenddata.toString());
		result.put("OperatorID", listOpeartor.get(0).get("OPERATORNAME").toString());
		
		/*//userinfo
			List<Map<String, Object>> listDate=EchartOperatorMonitorServiceImpl.getProductionDate("nameStr");
			String todayDate=listDate.get(0).get("TODAY_5M").toString();
			String userName=new String();
			String userInfo=new String();
			try{
				if(request.getParameter("username")!=null){
					userName=request.getParameter("username");
					userInfo=getUserinfo(userName);
				}
			}catch (Exception e) {
				userInfo="BOECD Confidential@XX/n"+todayDate;
			}	
			result.put("todaydate", todayDate);
			result.put("userinfo", userInfo);*/
		
		
		try{
			writeJSON(response, result);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

	public String[] StartEndTimeForHour(String StartTime,String EndTime){
		//截取字符串
		String StartYear = StartTime.substring(0,4);
		String StartMonth = StartTime.substring(4,6);
		String StartDay = StartTime.substring(6,8);
		String StartHour = StartTime.substring(8,10);
		
		String EndYear = EndTime.substring(0,4);
		String EndMonth = EndTime.substring(4,6);
		String EndDay = EndTime.substring(6,8);
		String EndHour = EndTime.substring(8,10);
		
		//生成比较时间
		Calendar calStart = Calendar.getInstance(); 
		calStart.clear();
		calStart.set(Calendar.YEAR,Integer.parseInt(StartYear));
		calStart.set(Calendar.MONTH, Integer.parseInt(StartMonth)-1);
		calStart.set(Calendar.DATE, Integer.parseInt(StartDay));
		calStart.set(Calendar.HOUR_OF_DAY, Integer.parseInt(StartHour));
		calStart .set(Calendar.MINUTE, 0);
		calStart.set(Calendar.SECOND, 0);
		calStart.set(Calendar.MILLISECOND, 0);	
		
		
		
		Calendar calend = Calendar.getInstance();
		calend.clear();
		calend.set(Calendar.YEAR,Integer.parseInt(EndYear));
		calend.set(Calendar.MONTH, Integer.parseInt(EndMonth)-1);
		calend.set(Calendar.DAY_OF_MONTH, Integer.parseInt(EndDay));
		calend.set(Calendar.HOUR_OF_DAY, Integer.parseInt(EndHour));
		calend .set(Calendar.MINUTE, 0);
		calend.set(Calendar.SECOND, 0);
		calend.set(Calendar.MILLISECOND, 0);
		
		SimpleDateFormat sdf = new SimpleDateFormat("YYYYMM");

		calend.add(Calendar.HOUR_OF_DAY,1); //因为要求08~09这种类型，所以加了1个小时
		List<String> time =new  ArrayList<String>();
		while(calStart.before(calend)){
			
			String timehh = sdf.format(calStart.getTime());
		    if(Integer.toString(calStart.get(calStart.DATE)).length() ==1){
			   timehh += "0"+Integer.toString(calStart.get(calStart.DATE));
		    }else{
		    	timehh +=Integer.toString(calStart.get(calStart.DATE));
		    }
		    if(Integer.toString(calStart.get(calStart.HOUR_OF_DAY)).length() ==1){
			   timehh += "0"+Integer.toString(calStart.get(calStart.HOUR_OF_DAY));
		    }else{
		    	timehh += Integer.toString(calStart.get(calStart.HOUR_OF_DAY));
		    }
			//time.add(Integer.toString(calStart.get(calStart.YEAR))+Integer.toString(calStart.get(calStart.MONTH))+Integer.toString(calStart.get(calStart.DAY_OF_MONTH))+"RI"+Integer.toString(calStart.get(calStart.DATE)));
			calStart.add(Calendar.HOUR_OF_DAY, 1);
			time.add(timehh);
		}
		
		
		String[] TimeDate = time.toArray(new String[time.size()]);
		
		return TimeDate;
	}

	@RequestMapping("/getBpTMSPeopleData")
	public void getBpTMSPeopleData(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false)YieldParam yieldParam)throws Exception{
		String FactoryName = yieldParam.getShopName();
		String DataType = yieldParam.getProductionType();
		String StartTime = yieldParam.getStarttime();
		String EndTime = yieldParam.getEndtime();
		//因为时间问题，所以对结束时间进行处理，为了实现<=，所以、减了一个小时
		String EndYear = EndTime.substring(0,4);
		String EndMonth = EndTime.substring(4,6);
		String EndDay = EndTime.substring(6,8);
		String EndHour = EndTime.substring(8,10);
		Calendar calend = Calendar.getInstance();
		calend.clear();
		calend.set(Calendar.YEAR,Integer.parseInt(EndYear));
		calend.set(Calendar.MONTH, Integer.parseInt(EndMonth)-1);
		calend.set(Calendar.DAY_OF_MONTH, Integer.parseInt(EndDay));
		calend.set(Calendar.HOUR_OF_DAY, Integer.parseInt(EndHour));
		calend .set(Calendar.MINUTE, 0);
		calend.set(Calendar.SECOND, 0);
		calend.set(Calendar.MILLISECOND, 0);
		calend.add(Calendar.HOUR_OF_DAY,-1);//减了一个小时
		SimpleDateFormat sdf = new SimpleDateFormat("YYYYMM");
		String Endtime = "";
	    Endtime = sdf.format(calend.getTime());
	    if(Integer.toString(calend.get(calend.DATE)).length() ==1){
	    	Endtime += "0"+Integer.toString(calend.get(calend.DATE));
	    }else{
	    	Endtime +=Integer.toString(calend.get(calend.DATE));
	    }
	    if(Integer.toString(calend.get(calend.HOUR_OF_DAY)).length() ==1){
	    	Endtime += "0"+Integer.toString(calend.get(calend.HOUR_OF_DAY));
	    }else{
	    	Endtime += Integer.toString(calend.get(calend.HOUR_OF_DAY));
	    }
		//处理起来极为麻烦
		
		String OperatorId = yieldParam.getOperationName();
		
	    String[]  XdataForCheck = StartEndTimeForHour(StartTime,EndTime);
	    String[]  legendForCheck = {"ACT","GA1","GA2","SDT","ELSE","AND","CVD"};
	    
	  
	    Map<String, Object> result = new HashMap<String, Object>();
	    List<Map<String, Object>> listPeopleData = operatorMonitorService.GetBpTMSOperatorIDData(FactoryName,DataType,StartTime,Endtime,OperatorId);
	   
	    StringBuffer xdata = new StringBuffer();
	    StringBuffer legenddata = new StringBuffer();
	    StringBuffer series = new StringBuffer();
	    
	   
	    //平均值单独算、
	    if(!OperatorId.equals("AVG")){
	     List<Map<String, Object>> listLegend = operatorMonitorService.GetBpTMSLegendDataOperatorID(FactoryName,DataType,StartTime,Endtime,OperatorId);
	    //xdata
	    xdata.append("[");
	    for(int i = 0;i<XdataForCheck.length-1;i++){
	    	xdata.append("'");
	    	xdata.append(XdataForCheck[i].substring(8,10)+"-"+XdataForCheck[i+1].substring(8,10));
	    	xdata.append("',");
	    }
	    xdata.append("]");
	    
	    //legenddata
	    legenddata.append("[");
	    for(int i =0;i<listLegend.size();i++){
	    	legenddata.append("'");
	    	legenddata.append(listLegend.get(i).get("OPER_DESC").toString());
	    	legenddata.append("',");
	    }
	    legenddata.append("]");    
	    
	    //series
	    series.append("[");
	    for(int i =0;i<legendForCheck.length;i++){
	    	series.append("{name:'");
			series.append(legendForCheck[i]+"',");
			series.append("type:'bar',stack: '1',barWidth:'50%',data:[");
			for(int j =0;j<listPeopleData.size();j++){
				if(legendForCheck[i].equals(listPeopleData.get(j).get("OPER_DESC").toString())){
					for(int m = 0;m<XdataForCheck.length-1;m++){
						if(XdataForCheck[m].equals(listPeopleData.get(j).get("TIMEHH").toString())){
							series.append("[");
							series.append(m+",");
							series.append(listPeopleData.get(j).get("DEFECTQTY").toString()+",");
							series.append("],");
							//break;
						}
					}
				}
			}
			series.append("]},");
	    }
	    
	    series.append("]");

	    }else{
	    	List<Map<String, Object>> listLegend = operatorMonitorService.GetBpTMSLegendData(FactoryName,DataType,StartTime,Endtime);
	        List<Map<String, Object>> listAVGData = operatorMonitorService.GetBpTMSAVGDataForPeople(FactoryName,DataType,StartTime,Endtime);
	    	
	    	//xdata
	    	    xdata.append("[");
	    	    for(int i = 0;i<XdataForCheck.length-1;i++){
	    	    	xdata.append("'");
	    	    	xdata.append(XdataForCheck[i].substring(8,10)+"-"+XdataForCheck[i+1].substring(8,10));
	    	    	xdata.append("',"); 
	    	    }
	    	    xdata.append("]");	
	    	    
	    	    //legenddata
	    	    legenddata.append("[");
	    	    for(int i =0;i<listLegend.size();i++){
	    	    	legenddata.append("'");
	    	    	legenddata.append(listLegend.get(i).get("OPER_DESC").toString());
	    	    	legenddata.append("',");
	    	    }
	    	    legenddata.append("]"); 
	    	
	    	    //series
	    	series.append("[");
	    	for(int i =0;i<legendForCheck.length;i++){
	        	series.append("{name:'");
	    		series.append(legendForCheck[i]+"',");
	    		series.append("type:'bar',stack: '1',barWidth:'50%',data:[");
	    		for(int m = 0;m<XdataForCheck.length-1;m++){
					for(int j =0;j<listAVGData.size();j++){
	    					if(legendForCheck[i].equals(listAVGData.get(j).get("OPER_DESC").toString())){
	    					    if(XdataForCheck[m].equals(listAVGData.get(j).get("TIMEHH").toString())){
	    							series.append("[");
	    							series.append(m+",");
	    							double AVGdata = Double.parseDouble(listAVGData.get(j).get("AVGDATA").toString()); 
	    							series.append(String.format("%.2f", AVGdata)+",");
	    							series.append("],");
	    					}
	    				}
	    			}
	    		}
	    		series.append("]},");
	    	}
	    	series.append("]");
	    }
	    
	    result.put("xdata", xdata.toString());
	    result.put("legenddata", legenddata.toString());
	    result.put("series", series.toString());
	 /* //userinfo
	  	List<Map<String, Object>> listDate=EchartOperatorMonitorServiceImpl.getProductionDate("nameStr");
	  	String todayDate=listDate.get(0).get("TODAY_5M").toString();
	  	String userName=new String();
	  	String userInfo=new String();
	  	try{
	  		if(request.getParameter("username")!=null){
	  			userName=request.getParameter("username");
	  			userInfo=getUserinfo(userName);
	  		}
	  	}catch (Exception e) {
	  		userInfo="BOECD Confidential@XX/n"+todayDate;
	  	}	
	  	result.put("todaydate", todayDate);
	  	result.put("userinfo", userInfo);*/
	    
	    try{
	    	writeJSON(response, result);
	    }catch(Exception e){
	    	e.printStackTrace();
	    }
	}
	
	//EAC产能，品质监控
	@RequestMapping("/getEacOkQtyCategory")
	public void getEacOkQtyCategory(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false)YieldParam yieldParam){
		String FactoryName = yieldParam.getShopName();
		String Oper_Desc = yieldParam.getOperationName();
		String ProductionType = yieldParam.getProductionType();
		String className = yieldParam.getDatatype();
		String StartTime = "";
		String EndTime = "";
		SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHH:mm:ss");
		String timeKey=df.format(new Date());
		if (Integer.parseInt(timeKey.substring(8,10))<20&&Integer.parseInt(timeKey.substring(8,10))>=8) {
			if (className.equals("THIS")) {
				StartTime = timeKey.substring(0,8)+"08";			
				EndTime = timeKey.substring(0,8)+"20";
			}else {
				Calendar rightNow = Calendar.getInstance();
		        rightNow.add(Calendar.DAY_OF_YEAR,-1);
		        Date dt1=rightNow.getTime();
				StartTime = df.format(dt1).substring(0,8)+"20";
				EndTime = timeKey.substring(0,8)+"08";
			}
		} else if (Integer.parseInt(timeKey.substring(8,10))>=20&&Integer.parseInt(timeKey.substring(8,10))<=23) {
			if (className.equals("THIS")) {
				Calendar rightNow = Calendar.getInstance();
		        rightNow.add(Calendar.DAY_OF_YEAR,1);
		        Date dt1=rightNow.getTime();
				StartTime = timeKey.substring(0,8)+"20";
				EndTime = df.format(dt1).substring(0,8)+"08";
			}else {
				StartTime = timeKey.substring(0,8)+"08";
				EndTime = timeKey.substring(0,8)+"20";
			}
		}else if (Integer.parseInt(timeKey.substring(8,10))>=0&&Integer.parseInt(timeKey.substring(8,10))<=7) {
			if (className.equals("THIS")) {
				Calendar rightNow = Calendar.getInstance();
		        rightNow.add(Calendar.DAY_OF_YEAR,-1);
		        Date dt1=rightNow.getTime();
				StartTime = df.format(dt1).substring(0,8)+"20";
				EndTime = timeKey.substring(0,8)+"08";
			}else {
				Calendar rightNow = Calendar.getInstance();
		        rightNow.add(Calendar.DAY_OF_YEAR,-1);
		        Date dt1=rightNow.getTime();
				StartTime = df.format(dt1).substring(0,8)+"08";
				EndTime = df.format(dt1).substring(0,8)+"20";
			}
		}
		
		List<Map<String, Object>>listcategory = operatorMonitorService.GetEacOkQtyCategory(FactoryName,Oper_Desc,ProductionType,StartTime,EndTime);
		
		JSONArray result = new JSONArray();
		
		for(int i =0;i<listcategory.size();i++){
			
			result.add(listcategory.get(i).get("PRODUCTCATEGORY").toString());
			
		}
		
		try{
			writeJSON(response, result);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

	@RequestMapping("/getEacOkQtyAllData")
	public void getEacOkQtyAllData(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false)YieldParam yieldParam){
		String FactoryName = yieldParam.getShopName();
		String Oper_Desc = yieldParam.getOperationName();
		String ProductionType = yieldParam.getProductionType();
		String className = yieldParam.getDatatype();
		String ProductionCategory =yieldParam.getProductCategory();
		String StartTime = "";
		String EndTime = "";
		SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHH:mm:ss");
		String timeKey=df.format(new Date());
		if (Integer.parseInt(timeKey.substring(8,10))<20&&Integer.parseInt(timeKey.substring(8,10))>=8) {
			if (className.equals("THIS")) {
				StartTime = timeKey.substring(0,8)+"08";			
				EndTime = timeKey.substring(0,8)+"20";
			}else {
				Calendar rightNow = Calendar.getInstance();
		        rightNow.add(Calendar.DAY_OF_YEAR,-1);
		        Date dt1=rightNow.getTime();
				StartTime = df.format(dt1).substring(0,8)+"20";
				EndTime = timeKey.substring(0,8)+"08";
			}
		} else if (Integer.parseInt(timeKey.substring(8,10))>=20&&Integer.parseInt(timeKey.substring(8,10))<=23) {
			if (className.equals("THIS")) {
				Calendar rightNow = Calendar.getInstance();
		        rightNow.add(Calendar.DAY_OF_YEAR,1);
		        Date dt1=rightNow.getTime();
				StartTime = timeKey.substring(0,8)+"20";
				EndTime = df.format(dt1).substring(0,8)+"08";
			}else {
				StartTime = timeKey.substring(0,8)+"08";
				EndTime = timeKey.substring(0,8)+"20";
			}
		}else if (Integer.parseInt(timeKey.substring(8,10))>=0&&Integer.parseInt(timeKey.substring(8,10))<=7) {
			if (className.equals("THIS")) {
				Calendar rightNow = Calendar.getInstance();
		        rightNow.add(Calendar.DAY_OF_YEAR,-1);
		        Date dt1=rightNow.getTime();
				StartTime = df.format(dt1).substring(0,8)+"20";
				EndTime = timeKey.substring(0,8)+"08";
			}else {
				Calendar rightNow = Calendar.getInstance();
		        rightNow.add(Calendar.DAY_OF_YEAR,-1);
		        Date dt1=rightNow.getTime();
				StartTime = df.format(dt1).substring(0,8)+"08";
				EndTime = df.format(dt1).substring(0,8)+"20";
			}
		}

		List<Map<String, Object>> listAllData = operatorMonitorService.GetEacOkQtyAllData(FactoryName,Oper_Desc,ProductionCategory,ProductionType,StartTime,EndTime);
		
		StringBuffer xdata = new StringBuffer();
		StringBuffer series = new StringBuffer();
		StringBuffer legenddata = new StringBuffer();
		
		Map<String, Object>result = new HashMap<String, Object>();
		
		String[] xdataforcheck = new String[listAllData.size()];
		
		//xdata
		xdata.append("[");
		for(int i=0;i<listAllData.size();i++){
			xdata.append("'");
			xdata.append(listAllData.get(i).get("OPERATORNAME").toString());   
			xdata.append("',");
			
			xdataforcheck[i] = listAllData.get(i).get("OPERATORNAME").toString();
		}
		xdata.append("]");
		
		//legenddata
		legenddata.append("['OK','OutQTY']");

		//series bardata
		int  Totol = 0;
		series.append("[{name:'OutQTY',type:'bar',stack: '1',color:'#1C829B',barWidth:'65%',label: {normal: {show: true,position: 'inside',fontSize: '60%',color:'white',formatter: function(obj) {var value = obj.value;return value[1]},}},data:[");
		for(int i =0;i<listAllData.size();i++){
			series.append("[");
			series.append(i+",");
			series.append(listAllData.get(i).get("OUTQTY").toString());
			series.append("],");
			
			Totol += Integer.parseInt(listAllData.get(i).get("OUTQTY").toString());
		}
		series.append("]},");
		
		//line data
		series.append("{name:'OK',type:'line',color:'red',yAxisIndex:1,symbol:'circle',symbolSize:7,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '60%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
		for(int i=0;i<listAllData.size();i++){
			series.append("[");
			double Yield = Double.parseDouble(listAllData.get(i).get("OKQTY").toString())/Double.parseDouble(listAllData.get(i).get("OUTQTY").toString());
			String YIELD = String.format("%.2f", Yield*100);
			series.append(i+",");
			series.append(YIELD+",");
			series.append(listAllData.get(i).get("OKQTY").toString()+",");
			series.append("],");
		}
		series.append("]},");
		series.append("]");
		
		result.put("xdata", xdata);
		result.put("legenddata", legenddata);
		result.put("series", series);
		result.put("Operator",listAllData.get(0).get("OPERATORNAME").toString());
		result.put("Totol", Totol);
		
		//getUsername
				/*List<Map<String, Object>> listDate=EchartOperatorMonitorServiceImpl.getProductionDate("nameStr");
				String todayDate=listDate.get(0).get("TODAY_5M").toString();
				String userName=new String();
				String userInfo=new String();
				try{
					if(request.getParameter("username")!=null){
						userName=request.getParameter("username");
						userInfo=getUserinfo(userName);
					}
				}catch (Exception e) {
					userInfo="BOECD Confidential@XX/n"+todayDate;
				}	
				result.put("todaydate", todayDate);
				result.put("userinfo", userInfo);*/
		
		try{
			writeJSON(response, result);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

	@RequestMapping("/getPeopleEacOkQty")
	public void getPeopleEacOkQty(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false)YieldParam yieldParam){
		String FactoryName = yieldParam.getShopName();
		String Oper_Desc = yieldParam.getOperationName();
		String OperatorId = yieldParam.getDatatype1();
		String ProductionType = yieldParam.getProductionType();
		String Description = "";
		if(yieldParam.getDefectcode() == null||yieldParam.getDefectcode().equals("")){
			Description="ALL";
		}else{
			Description = yieldParam.getDefectcode();
		}
		String ProductionCategory = yieldParam.getProductCategory();
		String className = yieldParam.getDatatype();
		String StartTime = "";
		String EndTime = "";
		SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHH:mm:ss");
		String timeKey=df.format(new Date());
		if (Integer.parseInt(timeKey.substring(8,10))<20&&Integer.parseInt(timeKey.substring(8,10))>=8) {
			if (className.equals("THIS")) {
				StartTime = timeKey.substring(0,8)+"08";			
				EndTime = timeKey.substring(0,8)+"20";
			}else {
				Calendar rightNow = Calendar.getInstance();
		        rightNow.add(Calendar.DAY_OF_YEAR,-1);
		        Date dt1=rightNow.getTime();
				StartTime = df.format(dt1).substring(0,8)+"20";
				EndTime = timeKey.substring(0,8)+"08";
			}
		} else if (Integer.parseInt(timeKey.substring(8,10))>=20&&Integer.parseInt(timeKey.substring(8,10))<=23) {
			if (className.equals("THIS")) {
				Calendar rightNow = Calendar.getInstance();
		        rightNow.add(Calendar.DAY_OF_YEAR,1);
		        Date dt1=rightNow.getTime();
				StartTime = timeKey.substring(0,8)+"20";
				EndTime = df.format(dt1).substring(0,8)+"08";
			}else {
				StartTime = timeKey.substring(0,8)+"08";
				EndTime = timeKey.substring(0,8)+"20";
			}
		}else if (Integer.parseInt(timeKey.substring(8,10))>=0&&Integer.parseInt(timeKey.substring(8,10))<=7) {
			if (className.equals("THIS")) {
				Calendar rightNow = Calendar.getInstance();
		        rightNow.add(Calendar.DAY_OF_YEAR,-1);
		        Date dt1=rightNow.getTime();
				StartTime = df.format(dt1).substring(0,8)+"20";
				EndTime = timeKey.substring(0,8)+"08";
			}else {
				Calendar rightNow = Calendar.getInstance();
		        rightNow.add(Calendar.DAY_OF_YEAR,-1);
		        Date dt1=rightNow.getTime();
				StartTime = df.format(dt1).substring(0,8)+"08";
				EndTime = df.format(dt1).substring(0,8)+"20";
			}
		}
		
		List<Map<String, Object>> listlegend = operatorMonitorService.GetEacPeopleOkQtyDefectCode(FactoryName,Oper_Desc,ProductionCategory,ProductionType,StartTime,EndTime,OperatorId);
		List<Map<String, Object>> listAllData = operatorMonitorService.GetEacPeopleOkQtyAllData(FactoryName,Oper_Desc,ProductionCategory,ProductionType,StartTime,EndTime,OperatorId,Description);
		List<Map<String, Object>> listline = operatorMonitorService.GetEacPeopleOkQtyLineData(FactoryName,Oper_Desc,ProductionCategory,ProductionType,StartTime,EndTime,OperatorId);
		
		StringBuffer xdata = new StringBuffer();
		StringBuffer legenddata = new StringBuffer();
		StringBuffer series = new StringBuffer();
		StringBuffer seriesItem = new StringBuffer();
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		String[] legenddataforcheck = new String[listlegend.size()];
		
		//xdata
		String[] arrxDatacol = new String[12];
		String[] arrxDatacolend = new String[12];
		String[] arrxDatacol1 = {"08","09","10","11","12","13","14","15","16","17","18","19"};
		String[] arrxDatacol2 = {"20","21","22","23","00","01","02","03","04","05","06","07"};
		String[] arrxDatacol3 = {"09","10","11","12","13","14","15","16","17","18","19","20"};
		String[] arrxDatacol4 = {"21","22","23","00","01","02","03","04","05","06","07","08"};
		//8:00~20:00
		if (Integer.parseInt(timeKey.substring(8,10))<20&&Integer.parseInt(timeKey.substring(8,10))>=8) {
			if (className.equals("THIS")) {
				arrxDatacol = arrxDatacol1;
				arrxDatacolend = arrxDatacol3;
			}else {
				arrxDatacol = arrxDatacol2;
				arrxDatacolend = arrxDatacol4;
			}
		}//20:00~23:00 
		else if (Integer.parseInt(timeKey.substring(8,10))>=20&&Integer.parseInt(timeKey.substring(8,10))<=23) {
			if (className.equals("THIS")) {
				arrxDatacol = arrxDatacol2;
				arrxDatacolend = arrxDatacol4;
			}else {
				arrxDatacol = arrxDatacol1;
				arrxDatacolend = arrxDatacol3;
			}//0:00~7:00
		}else if (Integer.parseInt(timeKey.substring(8,10))>=0&&Integer.parseInt(timeKey.substring(8,10))<=7) {
			if (className.equals("THIS")) {
				arrxDatacol = arrxDatacol2;
				arrxDatacolend = arrxDatacol4;
			}else {
				arrxDatacol = arrxDatacol1;
				arrxDatacolend = arrxDatacol3;
			}
		}
		xdata.append("[");
		String[] arrxData = new String[12];
		for (int i = 0; i < arrxDatacol.length; i++) {
			xdata.append("'"+arrxDatacol[i]+"~"+arrxDatacolend[i]+"',");
			arrxData[i] = arrxDatacol[i]+"~"+arrxDatacolend[i];
		}
		xdata.append("]");   
		
		//legenddata
		legenddata.append("[");
		for(int i  =0;i<listlegend.size();i++){
			legenddata.append("'");
			legenddata.append(listlegend.get(i).get("DESCRIPTION").toString());
			legenddata.append("',");
			legenddataforcheck[i] = listlegend.get(i).get("DESCRIPTION").toString();
		}
		legenddata.append("]");
		
		//series
		series.append("[");
		for(int i =0;i<legenddataforcheck.length;i++){
			series.append("{name:'");
			series.append(legenddataforcheck[i]+"',");
			series.append("type:'bar',stack: '1',barWidth:'50%',data:[");
			for(int j=0;j<listAllData.size();j++){
	             if(listAllData.get(j).get("DESCRIPTION").toString().equals(legenddataforcheck[i])){
	            	 for(int m= 0;m<arrxDatacol.length;m++){
	            		 if(listAllData.get(j).get("TIMEHH").toString().substring(8,10).equals(arrxDatacol[m])){
	                    	 double Yield = Double.parseDouble(listAllData.get(j).get("DEFECTQTY").toString())/Double.parseDouble(listAllData.get(j).get("OUTQTY").toString());
	            			 series.append("[");
	                    	 series.append(m+",");
	                    	 series.append(String.format("%.2f", Yield*100)+",");
	                    	 series.append("],");
	                	 }
	            	 }
	             }
			}
			series.append("]},");
		}
		//line data + 小时产能
		series.append("{name:'OK',type:'line',color:'red',yAxisIndex:1,symbol:'circle',symbolSize:7,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '65%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
		for(int j= 0;j<arrxDatacol.length;j++){
			boolean isExit = false;
			for(int i =0;i<listline.size();i++){
				if(arrxDatacol[j].equals(listline.get(i).get("TIMEHH").toString().substring(8,10))){
					isExit = true;
					double Yield = Double.parseDouble(listline.get(i).get("OKQTY").toString())/Double.parseDouble(listline.get(i).get("OUTQTY").toString());
					String YIELD = String.format("%.2f", Yield*100);
					series.append("[");
					series.append(j+",");
					series.append(YIELD+",");
					series.append("],");
				}
			}
			if(!isExit){
				series.append("["+j+",,,],");
			}
		}
		series.append("]},");
		
		//过货量
		series.append("{name:'过货量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color:'#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '60%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		for(int j= 0;j<arrxDatacol.length;j++){
			boolean isExit = false;
			for(int i =0;i<listAllData.size();i++){
				if(arrxDatacol[j].equals(listAllData.get(i).get("TIMEHH").toString().substring(8,10))){
					isExit = true;
					series.append("[");
					series.append(j+",");
					series.append(1+",");
					series.append(listAllData.get(i).get("OUTQTY").toString()+",");
					series.append("],");
				}
			}
			if(!isExit){
				series.append("["+j+",1,0,],");
			}
		}
		series.append("]},");
		
		series.append("]");
		
		result.put("xdata", xdata);
		result.put("legenddata", legenddata);
		result.put("series", series);
		
		//getUsername
			/*	List<Map<String, Object>> listDate=EchartOperatorMonitorServiceImpl.getProductionDate("nameStr");
				String todayDate=listDate.get(0).get("TODAY_5M").toString();
				String userName=new String();
				String userInfo=new String();
				try{
					if(request.getParameter("username")!=null){
						userName=request.getParameter("username");
						userInfo=getUserinfo(userName);
					}
				}catch (Exception e) {
					userInfo="BOECD Confidential@XX/n"+todayDate;
				}	
				result.put("todaydate", todayDate);
				result.put("userinfo", userInfo);*/
		
		try{
			writeJSON(response, result);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	@RequestMapping("/getPeopleEacOkQtyDefectCode")
	public void getPeopleEacOkQtyDefectCode(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false)YieldParam yieldParam){
		String FactoryName = yieldParam.getShopName();
		String Oper_Desc = yieldParam.getOperationName();
		String OperatorId = yieldParam.getDatatype1();
		String ProductionType = yieldParam.getProductionType();
		String ProductionCategory = yieldParam.getProductCategory();
		String className = yieldParam.getDatatype();
		String StartTime = "";
		String EndTime = "";
		SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHH:mm:ss");
		String timeKey=df.format(new Date());
		if (Integer.parseInt(timeKey.substring(8,10))<20&&Integer.parseInt(timeKey.substring(8,10))>=8) {
			if (className.equals("THIS")) {
				StartTime = timeKey.substring(0,8)+"08";			
				EndTime = timeKey.substring(0,8)+"20";
			}else {
				Calendar rightNow = Calendar.getInstance();
		        rightNow.add(Calendar.DAY_OF_YEAR,-1);
		        Date dt1=rightNow.getTime();
				StartTime = df.format(dt1).substring(0,8)+"20";
				EndTime = timeKey.substring(0,8)+"08";
			}
		} else if (Integer.parseInt(timeKey.substring(8,10))>=20&&Integer.parseInt(timeKey.substring(8,10))<=23) {
			if (className.equals("THIS")) {
				Calendar rightNow = Calendar.getInstance();
		        rightNow.add(Calendar.DAY_OF_YEAR,1);
		        Date dt1=rightNow.getTime();
				StartTime = timeKey.substring(0,8)+"20";
				EndTime = df.format(dt1).substring(0,8)+"08";
			}else {
				StartTime = timeKey.substring(0,8)+"08";
				EndTime = timeKey.substring(0,8)+"20";
			}
		}else if (Integer.parseInt(timeKey.substring(8,10))>=0&&Integer.parseInt(timeKey.substring(8,10))<=7) {
			if (className.equals("THIS")) {
				Calendar rightNow = Calendar.getInstance();
		        rightNow.add(Calendar.DAY_OF_YEAR,-1);
		        Date dt1=rightNow.getTime();
				StartTime = df.format(dt1).substring(0,8)+"20";
				EndTime = timeKey.substring(0,8)+"08";
			}else {
				Calendar rightNow = Calendar.getInstance();
		        rightNow.add(Calendar.DAY_OF_YEAR,-1);
		        Date dt1=rightNow.getTime();
				StartTime = df.format(dt1).substring(0,8)+"08";
				EndTime = df.format(dt1).substring(0,8)+"20";
			}
		}
		
		List<Map<String, Object>> listlegend = operatorMonitorService.GetEacPeopleOkQtyDefectCode(FactoryName,Oper_Desc,ProductionCategory,ProductionType,StartTime,EndTime,OperatorId);
		
		JSONArray result = new JSONArray();
		JSONObject tempValue = new JSONObject();
		
		tempValue.put("value","ALL");
		tempValue.put("label", "ALL");
		result.add(tempValue);
		for(int i  =0;i<listlegend.size();i++){
			tempValue.put("value", listlegend.get(i).get("DESCRIPTION").toString());
			tempValue.put("label", listlegend.get(i).get("DESCRIPTION").toString());
			result.add(tempValue);
		}
		
		try{
			writeJSON(response, result);
		}catch(Exception e){
			e.printStackTrace();
		}
	}	
	
	@RequestMapping("getEACOutFactoryqulityChartCategory")
	public void getEACOutFactoryqulityChartCategory(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false)YieldParam yieldParam)throws IOException{
		
		String FactoryName = yieldParam.getShopName();
		String ProductionType = yieldParam.getProductionType();
		String Oper_Desc = yieldParam.getOperationName();
		String DefectCode = yieldParam.getDefectcode();
		
		List<Map<String, Object>> list = operatorMonitorService.EACOutFactoryqulityChartCategory(FactoryName,ProductionType,Oper_Desc,DefectCode);
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		JSONArray ProductCategory = new JSONArray(); 
		
		for(int i = 0;i<list.size();i++){
			ProductCategory.add(list.get(i).get("PRODUCTCATEGORY").toString());
		}
		result.put("productioncategory", ProductCategory);
		
		try{
			writeJSON(response, result);
		}catch(Exception e){
			e.printStackTrace();
		}
	}



	@RequestMapping("getEACOutFactoryqulityChart")
	public void getEACOutFactoryqulityChart(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false)YieldParam yieldParam)throws IOException{
		String FactoryName = yieldParam.getShopName();
		String ProductionType = yieldParam.getProductionType();
		String Oper_Desc = yieldParam.getOperationName();
		String DefectCode = yieldParam.getDefectcode();
		String ProductCategory = yieldParam.getProductCategory();
		
		List<Map<String, Object>>listTotal = operatorMonitorService.EACOutFactoryqulityChart(FactoryName,ProductionType,Oper_Desc,DefectCode,ProductCategory,"TOTAL");
		List<Map<String, Object>>listA = operatorMonitorService.EACOutFactoryqulityChart(FactoryName,ProductionType,Oper_Desc,DefectCode,ProductCategory,"A");
		List<Map<String, Object>>listB = operatorMonitorService.EACOutFactoryqulityChart(FactoryName,ProductionType,Oper_Desc,DefectCode,ProductCategory,"B");
		List<Map<String, Object>>listC = operatorMonitorService.EACOutFactoryqulityChart(FactoryName,ProductionType,Oper_Desc,DefectCode,ProductCategory,"C");
		List<Map<String, Object>>listday = echartCommonUseService.getmonthweekdaytimedata();
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		StringBuffer xdata = new StringBuffer();
		StringBuffer series = new StringBuffer();
		StringBuffer legenddata = new StringBuffer();
		StringBuffer seriesItemTotal = new StringBuffer();
		StringBuffer seriesItemA = new StringBuffer();
		StringBuffer seriesItemB = new StringBuffer();
		StringBuffer seriesItemC = new StringBuffer();
		
		//legenddata
		legenddata.append("['TOTAL','Group A','Group B','Group C']");
		
		String[] DateTime = new String[16];
		String[] DateType = {"MONTH","MONTH","MONTH","","WEEK","WEEK","WEEK","WEEK","","DAY","DAY","DAY","DAY","DAY","DAY","DAY",};
		
		int DateLength = 0;
		xdata.append("[");
		//month
		for(int i = 2 ;i>=0;i--){
			
			xdata.append("'"+listday.get(i).get("DATEMONTH").toString().substring(4,6)+"M',");
			DateTime[DateLength] = listday.get(i).get("DATEMONTH").toString();
			DateLength +=1;
			
		}
		DateTime[DateLength] = ",";
		xdata.append("'',");
		DateLength +=1;
		//week
		for(int i = 3 ;i>=0;i--){
			
			xdata.append("'"+listday.get(i).get("DATEWEEK").toString().substring(4,6)+"W',");
			DateTime[DateLength] = listday.get(i).get("DATEWEEK").toString();
			DateLength +=1;
			
		}
		DateTime[DateLength] = ",";
		xdata.append("'',");
		DateLength +=1;
		//day
		for(int i = 6;i>=0;i--){
			
			xdata.append("'"+listday.get(i).get("DATETIME").toString().substring(4,6)+"/"+listday.get(i).get("DATETIME").toString().substring(6,8)+"',");
			DateTime[DateLength] = listday.get(i).get("DATETIME").toString();
			DateLength +=1;
			
		}
		xdata.append("]");
		
		
	    series.append("[");
	    seriesItemA.append("{name:'Group A',type:'bar',barWidth:'25%',data:[");
	    seriesItemB.append("{name:'Group B',type:'bar',barWidth:'25%',data:[");
	    seriesItemC.append("{name:'Group C',type:'bar',barWidth:'25%',data:[");
	    
	    //Group A
	    for(int i = 0;i<DateTime.length;i++){
	    	boolean NotExit = true;
	    	if(i == 3|| i == 8){
	    		seriesItemA.append("["+i+",,,"+"],");
	    		i+=1;
	    	}
	    	for(int j = 0;j<listA.size();j++){
	    		if(DateTime[i].equals(listA.get(j).get("DATETIME").toString()) && DateType[i].equals(listA.get(j).get("DATATYPE").toString())){
	        		NotExit = false;
	    			seriesItemA.append("["+i+",");
	        		String DYield = String.format("%.2f",Math.ceil(Double.parseDouble(listA.get(j).get("DYIELD").toString())*10000)/100);
	        		seriesItemA.append(DYield+",");
	        		seriesItemA.append(listA.get(j).get("OUTQTY").toString()+",");
	        		seriesItemA.append("],");
	        		break;
	        	}
	    	}
	    	if(NotExit){
	    		seriesItemA.append("["+i+",0,0,"+"],");
	    	}
	    }
	    seriesItemA.append("]},");
	  //Group B
	    for(int i = 0;i<DateTime.length;i++){
	    	boolean NotExit = true;
	    	if(i == 3|| i == 8){
	    		seriesItemB.append("["+i+",,,"+"],");
	    		i+=1;
	    	}
	    	for(int j = 0;j<listB.size();j++){
	    		if(DateTime[i].equals(listB.get(j).get("DATETIME").toString()) && DateType[i].equals(listB.get(j).get("DATATYPE").toString())){
	        		NotExit = false;
	    			seriesItemB.append("["+i+",");
	        		String DYield = String.format("%.2f", Math.ceil(Double.parseDouble(listB.get(j).get("DYIELD").toString())*10000)/100);
	        		seriesItemB.append(DYield+",");
	        		seriesItemB.append(listB.get(j).get("OUTQTY").toString()+",");
	        		seriesItemB.append("],");
	        		break;
	        	}
	    	}
	    	if(NotExit){
	    		seriesItemB.append("["+i+",0,0,"+"],");
	    	}
	    }
	    seriesItemB.append("]},");
	    
	   //Group C 
	    for(int i = 0;i<DateTime.length;i++){
	    	boolean NotExit = true;
	    	if(i == 3|| i == 8){
	    		seriesItemC.append("["+i+",,,"+"],");
	    		i+=1;
	    	}
	    	for(int j = 0;j<listC.size();j++){
	    		if(DateTime[i].equals(listC.get(j).get("DATETIME").toString()) && DateType[i].equals(listC.get(j).get("DATATYPE").toString())){
	        		NotExit = false;
	    			seriesItemC.append("["+i+",");
	        		String DYield = String.format("%.2f", Math.ceil(Double.parseDouble(listC.get(j).get("DYIELD").toString())*10000)/100);
	        		seriesItemC.append(DYield+",");
	        		seriesItemC.append(listC.get(j).get("OUTQTY").toString()+",");
	        		seriesItemC.append("],");
	        		break;
	        	}
	    	}
	    	if(NotExit){
	    		seriesItemC.append("["+i+",0,0,"+"],");
	    	}
	    }
	    seriesItemC.append("]},");
	    
	    //total
	    seriesItemTotal.append("{name:'TOTAL',type:'line',symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
	    for(int i = 0;i<DateTime.length;i++){
	    	boolean NotExit = true;
	    	if(i == 3|| i == 8){
	    		seriesItemTotal.append("["+i+",,,"+"],");
	    		i+=1;
	    	}
	    	for(int j = 0;j<listTotal.size();j++){
	    		if(DateTime[i].equals(listTotal.get(j).get("DATETIME").toString()) && DateType[i].equals(listTotal.get(j).get("DATATYPE").toString())){
	        		NotExit = false;
	    			seriesItemTotal.append("["+i+",");
	        		String DYield = String.format("%.2f",Math.ceil(Double.parseDouble(listTotal.get(j).get("DYIELD").toString())*10000)/100);
	        		seriesItemTotal.append(DYield+",");
	        		seriesItemTotal.append(listTotal.get(j).get("OUTQTY").toString()+",");
	        		seriesItemTotal.append("],");
	        		break;
	        	}
	    	}
	    	if(NotExit){
	    		seriesItemTotal.append("["+i+",'\','\',"+"],");
	    	}
	    }
	    seriesItemTotal.append("]}");
	    
	    
	    series.append(seriesItemA);
		series.append(seriesItemB);
		series.append(seriesItemC);
		series.append(seriesItemTotal);
		series.append("]");
		
		result.put("series", series.toString());
		result.put("xdata", xdata.toString());
		result.put("legenddata", legenddata.toString());
		
		/*//getUsername
		List<Map<String, Object>> listDate=EchartOperatorMonitorServiceImpl.getProductionDate("nameStr");
	    String todayDate=listDate.get(0).get("TODAY_5M").toString();
		String userName=new String();
		String userInfo=new String();
		try{
			if(request.getParameter("username")!=null){
				userName=request.getParameter("username");
				userInfo=getUserinfo(userName);
				}
			}catch (Exception e) {
				userInfo="BOECD Confidential@XX/n"+todayDate;
			}	
			result.put("todaydate", todayDate);
			result.put("userinfo", userInfo);*/
		
		try{
			writeJSON(response, result);
		}catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	@RequestMapping("/getAETloujianPeopleCategory")
	public void getAETloujianPeopleCategory(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false)YieldParam yieldParam) throws IOException{
		
		String DataType = yieldParam.getDatatype();
		String StartTime = yieldParam.getStarttime();
		String EndTime = yieldParam.getEndtime();
		String ProductionType = yieldParam.getProductionType();
		
	//	Map<String, Object> result = new HashMap<>();
		
		List<Map<String, Object>> listcategory = operatorMonitorService.getAETloujianPeopleCategory(DataType,ProductionType,StartTime,EndTime);
		
        JSONArray productCategory = new JSONArray();
		
		for(int i = 0;i<listcategory.size();i++){
			
			productCategory.add(listcategory.get(i).get("PRODUCTCATEGORY").toString());
			
		}
		
		try{
			writeJSON(response, productCategory);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

	@RequestMapping("/getAETloujianDefectCode")
	public void getAETloujianDefectCode(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false)YieldParam yieldParam)throws Exception{
		String DataType = yieldParam.getDatatype();
		String StartTime = yieldParam.getStarttime();
		String EndTime = yieldParam.getEndtime();
		String ProductionType = yieldParam.getProductionType();
		String ProductionCategory = yieldParam.getProductCategory();
		
		JSONArray DefectCode = new JSONArray();
		JSONObject defectcode = new JSONObject();
		
		List<Map<String, Object>> listDefectCode = operatorMonitorService.getAETloujianPeopleDefectData(DataType,ProductionType,StartTime,EndTime,ProductionCategory);

		
		defectcode.put("value", "ALL");
		defectcode.put("label", "ALL");
		DefectCode.add(defectcode);
		for(int i = 0;i<listDefectCode.size();i++){
			defectcode.put("label", listDefectCode.get(i).get("DESCRIPTION").toString());
			defectcode.put("value", listDefectCode.get(i).get("DESCRIPTION").toString());
			DefectCode.add(defectcode);
		}
		
		try{
			writeJSON(response, DefectCode);
		}catch(IOException e){
			e.printStackTrace();
		}	
	}


	@RequestMapping("/getAETloujianPeopleData")
	public void getAETloujianPeopleData(HttpServletRequest request ,HttpServletResponse response,@RequestBody(required=false)YieldParam yieldParam) throws IOException{
		String DataType = yieldParam.getDatatype();
		String StartTime = yieldParam.getStarttime();
		String EndTime = yieldParam.getEndtime();
		String ProductionType = yieldParam.getProductionType();
		String DefectCode = yieldParam.getDefectcode();
		String ProductionCategory = yieldParam.getProductCategory();
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		List<Map<String, Object>> listxdata = operatorMonitorService.getAETloujianPeopleXdata(DataType,ProductionType,StartTime,EndTime,ProductionCategory);
		List<Map<String, Object>> listDefectCode = operatorMonitorService.getAETloujianPeopleDefectData(DataType,ProductionType,StartTime,EndTime,ProductionCategory);
		List<Map<String, Object>> listAllData = operatorMonitorService.getAETloujianPeopleData(DataType,ProductionType,StartTime,EndTime,ProductionCategory,DefectCode);
		List<Map<String, Object>> listSumData = operatorMonitorService.getAETPeopleSumData(DataType,ProductionType,StartTime,EndTime,ProductionCategory);
		
		StringBuffer xdata = new StringBuffer();
		StringBuffer Defectcode = new StringBuffer();
		StringBuffer series = new StringBuffer();
		StringBuffer legenddata = new StringBuffer();
		
		String[] xdataforCheck = new String[listxdata.size()];
		String[] legenddataforCheck = new String[listDefectCode.size()];
		
		//defectcode
		int defectcodecount = 0 ;
		Defectcode.append("ALL,");
		for(int i = 0;i<listDefectCode.size();i++){
			Defectcode.append(listDefectCode.get(i).get("DESCRIPTION").toString());
			Defectcode.append(",");	
			defectcodecount+=1;
		}

		//legenddata
		legenddata.append("['Line',");
		for(int i =0;i<listDefectCode.size();i++){
			
			legenddata.append("'");
			legenddata.append(listDefectCode.get(i).get("DESCRIPTION").toString());
			legenddata.append("',");
			legenddataforCheck[i] = listDefectCode.get(i).get("DESCRIPTION").toString();
		}
		legenddata.append("]");
		
		
		//xdata
		xdata.append("[");
		for(int i = 0;i<listxdata.size();i++){
			xdata.append("'");
			xdata.append(listxdata.get(i).get("OPERATORNAME").toString());
			xdata.append("',");
			xdataforCheck[i] = listxdata.get(i).get("OPERATORNAME").toString();   
		}
		xdata.append("]");		
		
		//series
		series.append("[");
		
		//处理BarData  
		for(int i = 0 ;i<legenddataforCheck.length;i++){
			series.append("{name:'");
			series.append(legenddataforCheck[i]+"',");
			series.append("type:'bar',stack: '1',barWidth:'50%',data:[");
			for(int j = 0;j<listAllData.size();j++){
				if(legenddataforCheck[i].equals(listAllData.get(j).get("DESCRIPTION").toString())){
					for(int m = 0;m<xdataforCheck.length;m++){
						if(listAllData.get(j).get("OPERATORNAME").toString().equals(xdataforCheck[m])){	
							series.append("[");
							series.append(m+",");
							double DefectQTY = Double.parseDouble(listAllData.get(j).get("DEFECTQTY").toString());
							double OutQTY = Double.parseDouble(listAllData.get(j).get("OUTQTY").toString());
							double YIELD = DefectQTY / OutQTY ;
							String Yield = String.format("%.2f",YIELD*100);
							series.append(Yield+",");
							series.append(listAllData.get(j).get("DEFECTQTY").toString()+",");
							series.append(listAllData.get(j).get("OUTQTY").toString()+",");
							series.append("],");
						}

					}

				}
		
			}
	     series.append("]");
	     series.append("},");
		}
		
		//过货量
		series.append("{name:'过货量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color:'#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '70%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		for(int i =0;i<xdataforCheck.length;i++){
			boolean isExit = false;
			for(int j =0;j<listSumData.size();j++){
				if(listSumData.get(j).get("OPERATORNAME").toString().equals(xdataforCheck[i])){
					isExit = true;
					series.append("[");
					series.append(i+",");
					series.append(1+",");
					series.append(listSumData.get(j).get("OUTQTY").toString());
					series.append("],");
					break;
				}
			}
			if(!isExit){
				   series.append("["+i+","+1+","+0+"],");
			}
		}
		series.append("]},");
		
		//处理lineData
		if(DefectCode.equals("ALL")){
			series.append("{name:'Line',type:'line',yAxisIndex:1,symbol:'circle',symbolSize:7,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '80%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
			for(int j = 0;j<xdataforCheck.length;j++){
				boolean isExit = false;
		         for(int i = 0;i<listSumData.size();i++){
		        	 isExit = true;
		        	 if(xdataforCheck[j].equals(listSumData.get(i).get("OPERATORNAME").toString())){
		        		 series.append("[");
		        		 series.append(j+",");
		        		 double defectQTY = Double.parseDouble(listSumData.get(i).get("DEFECTQTY").toString());
		        		 double OutQTY = Double.parseDouble(listSumData.get(i).get("OUTQTY").toString());
		        		 double yield = (defectQTY / OutQTY)*100;
		        		 String Yield = String.format("%.2f", yield);
		        		 series.append(Yield+",");
		        		 series.append(listSumData.get(i).get("DEFECTQTY").toString()+",");
		        		 series.append(listSumData.get(i).get("OUTQTY").toString()+",");
		        		 series.append("],");
		        	 }
		         }
				if(!isExit){
					series.append("["+j+",,,,"+"],");
				}
				
			}
			series.append("]},");
		}
		series.append("]");
		

		
		result.put("xdata", xdata.toString());
		result.put("legenddata", legenddata.toString());
		result.put("series", series.toString());
		//result.put("DefectCode", Defectcode);
		//result.put("DefectCodeCount", defectcodecount);
		
		/*//getUsername
			List<Map<String, Object>> listDate=EchartOperatorMonitorServiceImpl.getProductionDate("nameStr");
		    String todayDate=listDate.get(0).get("TODAY_5M").toString();
			String userName=new String();
			String userInfo=new String();
			try{
				if(request.getParameter("username")!=null){
					userName=request.getParameter("username");
					userInfo=getUserinfo(userName);
					}
				}catch (Exception e) {
					userInfo="BOECD Confidential@XX/n"+todayDate;
				}	
				result.put("todaydate", todayDate);
				result.put("userinfo", userInfo);*/
		
		try{
			writeJSON(response, result);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
}
