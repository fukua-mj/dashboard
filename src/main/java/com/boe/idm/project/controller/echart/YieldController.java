package com.boe.idm.project.controller.echart;

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
import com.boe.idm.project.service.echart.EchartQualityService;
import com.boe.idm.project.service.echart.EchartYieldService;
import com.boe.utils.json.JsonUtils;
import com.boe.utils.special.MDLMachineOrder;

@RestController
@RequestMapping(value="/api/echart/yield")
public class YieldController extends JsonUtils{

	private static final Logger log = LoggerFactory.getLogger(YieldController.class);
	
	@Autowired
	private EchartYieldService echartYieldService;
	
	@Autowired
	private EchartService echartService;
	
	@RequestMapping(value="/yield")
	public void getyield(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam
			) throws Exception{
		String shopName = yieldParam.getShopName();
		String processType = yieldParam.getProcesstype();
		String productionType = yieldParam.getProductionType();
		String productCategory = yieldParam.getProductCategory();
		String deviceType = yieldParam.getDeviceType();

		List<Map<String, Object>> list = echartYieldService.getYield(shopName,processType,productionType,productCategory);	
		List<Map<String, Object>> listDate=echartService.getProductionDate("");		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		
		String MFIFAPPYieldLegend = "" ;
		if (processType.equals("MFI")) {
			MFIFAPPYieldLegend = "Yield-MFI & RW_EI" ; 
		} else if (processType.equals("FAPP")) {
			MFIFAPPYieldLegend = "Yield-FAPP & RW_APP" ;
		}
		
		//yield种类
		List<String> listyieldDetial=new ArrayList<String>();
		for(int i=0;i<list.size();i++){
			listyieldDetial.add(list.get(i).get("DESCRIPTION").toString());
		}
		String[] yieldDetial = listyieldDetial.toArray(new String[listyieldDetial.size()]);
		StringBuffer legendData=new StringBuffer();
		legendData.append("[");		
		// MDL MFI FAPP Special
		if (processType.equals("MFI")) {
			legendData.append("'Yield-MFI & RW_EI',"); 
		} else if (processType.equals("FAPP")) {
			legendData.append("'Yield-FAPP & RW_APP',");
		}
		
		for(int i=0;i<listyieldDetial.size();i++){
			if(!yieldDetial[i].equals("DNMTR_QTY")){
				legendData.append("'");
				legendData.append(yieldDetial[i]);
				legendData.append("',");
			}
		}
		
		legendData.append("]");
		
		
		//横坐标
		String[] datestr=new String[16];
		StringBuffer xData=new StringBuffer();
		xData.append("[");
		for(int m=0;m<listDate.size();m++){
			String date=null;
			if(listDate.get(m).get("MONTH_2")!=null){
				date=listDate.get(m).get("MONTH_2").toString();
				datestr[0]=listDate.get(m).get("MONTH_2").toString();
			}
			if(!xData.toString().equals("[")){
				xData.append(",");
			}
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("MONTH_1")!=null){
				date=listDate.get(m).get("MONTH_1").toString();
				datestr[1]=listDate.get(m).get("MONTH_1").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("MONTH_0")!=null){
				date=listDate.get(m).get("MONTH_0").toString();
				datestr[2]=listDate.get(m).get("MONTH_0").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			xData.append(",''");
			datestr[3]="";
			if(listDate.get(m).get("WEEK_3")!=null){
				date=listDate.get(m).get("WEEK_3").toString();
				datestr[4]=listDate.get(m).get("WEEK_3").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("WEEK_2")!=null){
				date=listDate.get(m).get("WEEK_2").toString();
				datestr[5]=listDate.get(m).get("WEEK_2").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("WEEK_1")!=null){
				date=listDate.get(m).get("WEEK_1").toString();
				datestr[6]=listDate.get(m).get("WEEK_1").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("WEEK_0")!=null){
				date=listDate.get(m).get("WEEK_0").toString();
				datestr[7]=listDate.get(m).get("WEEK_0").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			xData.append(",''");
			datestr[8]="";
			if(listDate.get(m).get("DAY_6")!=null){
				date=listDate.get(m).get("DAY_6").toString();
				datestr[9]=listDate.get(m).get("DAY_6").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_5")!=null){
				date=listDate.get(m).get("DAY_5").toString();
				datestr[10]=listDate.get(m).get("DAY_5").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_4")!=null){
				date=listDate.get(m).get("DAY_4").toString();
				datestr[11]=listDate.get(m).get("DAY_4").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_3")!=null){
				date=listDate.get(m).get("DAY_3").toString();
				datestr[12]=listDate.get(m).get("DAY_3").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_2")!=null){
				date=listDate.get(m).get("DAY_2").toString();
				datestr[13]=listDate.get(m).get("DAY_2").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_1")!=null){
				date=listDate.get(m).get("DAY_1").toString();
				datestr[14]=listDate.get(m).get("DAY_1").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_0")!=null){
				date=listDate.get(m).get("DAY_0").toString();
				datestr[15]=listDate.get(m).get("DAY_0").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
		}
		xData.append("]");

		String[] colName=new String[]{"MONTH_2","MONTH_1","MONTH_0","","WEEK_3","WEEK_2","WEEK_1","WEEK_0","","DAY_6","DAY_5","DAY_4","DAY_3","DAY_2","DAY_1","DAY_0"};
		String[] colNameNmrtr = new String[]{"MONTH_2_NMRTR","MONTH_1_NMRTR","MONTH_0_NMRTR","","WEEK_3_NMRTR","WEEK_2_NMRTR","WEEK_1_NMRTR","WEEK_0_NMRTR","","DAY_6_NMRTR","DAY_5_NMRTR","DAY_4_NMRTR","DAY_3_NMRTR","DAY_2_NMRTR","DAY_1_NMRTR","DAY_0_NMRTR"};
		String[] dnmtr_qtyData=new String[16];
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("DESCRIPTION").toString().equals(yieldDetial[i])){
				for(int j=0;j<colName.length;j++){
					if(!colName[j].equals("")){
						if(list.get(i).get(colName[j])!=null){
							if(list.get(i).get("DESCRIPTION").toString().equals("DNMTR_QTY")){
								dnmtr_qtyData[j]=list.get(i).get(colName[j]).toString();
							}
						}
					}
					else{
						dnmtr_qtyData[j]="";
					}
				}
			}
		}	
		
		StringBuffer data_dnmtrqty=new StringBuffer();
		data_dnmtrqty.append("[");
		StringBuffer[] yieldData=new StringBuffer[listyieldDetial.size()];
		for(int i=0;i<listyieldDetial.size();i++){
			yieldData[i]=new StringBuffer();
			yieldData[i].append("[");
		}
		//String[] dnmtrStr=new String[16];
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("DESCRIPTION").toString().equals(yieldDetial[i])){
				for(int j=0;j<colName.length;j++){
					if(!colName[j].equals("")){
							if(list.get(i).get(colName[j])!=null){
								double dd=0;
								yieldData[i].append("[");
								yieldData[i].append(String.valueOf(j));
								yieldData[i].append(",");
								if(list.get(i).get("DESCRIPTION").toString().equals("DNMTR_QTY")){
									data_dnmtrqty.append(list.get(i).get(colName[j]).toString());
									//dnmtrStr[j]=list.get(i).get(colName[j]).toString();
									data_dnmtrqty.append(",");
								}
								else{
									if(!list.get(i).get(colName[j]).toString().equals("0")){
										dd=Double.parseDouble(list.get(i).get(colName[j]).toString());
										yieldData[i].append(String.format("%.2f",dd * 100).toString());
									}
								}
								yieldData[i].append(",");
								yieldData[i].append(dnmtr_qtyData[j]);//datestr
								yieldData[i].append(",'");
								yieldData[i].append(datestr[j]);
								//yieldData[i].append("']");
								yieldData[i].append("',");
								//yieldData[i].append(String.format("%.0f",dd * Double.parseDouble(dnmtr_qtyData[j])).toString());
								yieldData[i].append(list.get(i).get(colNameNmrtr[j]));
								yieldData[i].append("]");
							}
						}
									
					yieldData[i].append(",");
				}
			}
		}
		for(int i=0;i<listyieldDetial.size();i++){
			yieldData[i].append("]");
		}
		data_dnmtrqty.append("]");
		
		StringBuffer seriesData=new StringBuffer();
		seriesData.append("[");
		// MODULE MFI FAPP主线加Rework良率
		if (processType.equals("MFI")||processType.equals("FAPP")) {
			List<Map<String, Object>> listMFIFAPPYield = echartYieldService.getyieldByLine(shopName, processType, productionType, "MDLMAINREWORK", "-", productCategory);
			String[] DateType=new String[]{"MONTH","MONTH","MONTH","MONTH","WEEK","WEEK","WEEK","WEEK","WEEK","DAY","DAY","DAY","DAY","DAY","DAY","DAY"};
			
			List<Map<String, Object>> listDateFactory = echartService.getDateFactory();//和四层良率表日期一致
			String[] arrXdataColumn=new String[]{"MONTH_2","MONTH_1","MONTH_0","","WEEK_3","WEEK_2","WEEK_1","WEEK_0","","DAY_6","DAY_5","DAY_4","DAY_3","DAY_2","DAY_1","DAY_0"};
			String[] arrxData=new String[arrXdataColumn.length];
			String[] arrDateFactory=new String[arrXdataColumn.length];
			for(int i=0;i<arrXdataColumn.length;i++){
				if(!arrXdataColumn[i].equals("")){
					arrxData[i]=listDate.get(0).get(arrXdataColumn[i]).toString();
					arrDateFactory[i]=listDateFactory.get(0).get(arrXdataColumn[i]).toString();
				}
				else{
					arrxData[i]="";
					arrDateFactory[i]="";
				}

			}
			if (deviceType.equals("tv")) {
				seriesData.append("{name:'"+MFIFAPPYieldLegend+"',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show:true,position:'top',fontSize:'100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
			}else {
				seriesData.append("{name:'"+MFIFAPPYieldLegend+"',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:6,smooth:true,label: {normal: {show:true,position:'top',fontSize:'75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data: [");
			}
			for(int i=0;i<arrDateFactory.length;i++){
				boolean isExist=false;
				for(int m=0;m<listMFIFAPPYield.size();m++){
					if (listMFIFAPPYield.get(m).get("DATETYPE").toString().equals(DateType[i])) {
						if(listMFIFAPPYield.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
							isExist=true;
							if(listMFIFAPPYield.get(m).get("YIELD")!=null){
								seriesData.append("[");
								seriesData.append(String.valueOf(i));
								seriesData.append(",");
								seriesData.append(listMFIFAPPYield.get(m).get("YIELD").toString());
								seriesData.append(",,'");
								seriesData.append(arrxData[i]);
								seriesData.append("',");
								double yieldRatio = Double.parseDouble(listMFIFAPPYield.get(m).get("YIELD").toString())/100;
								double yieldInQty = Double.parseDouble(listMFIFAPPYield.get(m).get("IN_QTY").toString());
								seriesData.append(String.format("%.0f", (yieldRatio*yieldInQty)));
								seriesData.append("],");
								break;
							}
						}
					}				
				}
				if(!isExist){
					seriesData.append("[");
					seriesData.append(String.valueOf(i));
					seriesData.append(",");
					seriesData.append(",,'");
					seriesData.append(arrxData[i]);
					seriesData.append("',],");
				}
			}		
			seriesData.append("]},");
		}
		for(int i=0;i<listyieldDetial.size();i++){
			if(!yieldDetial[i].equals("DNMTR_QTY")){
				seriesData.append("{name:'");
				seriesData.append(yieldDetial[i]);
				seriesData.append("',type:'");
				//良率画面BP分厂的ST和SAT数值相近，为防止数据重叠，将SA的良率数据显示放在bottom，其他放在Top
				//2018.02.02 Modify
				if(shopName.equals("BP")&&yieldDetial[i].equals("SA Yield"))
				{
					if (deviceType.equals("tv")) {
						seriesData.append("line',yAxisIndex:1,symbol:'circle',symbolSize:10,smooth: true,label: {normal:{show:true,position:'bottom',fontSize: '100%',formatter: function(obj){var value =obj.value;return value[1]+'%'},fontWeight:'bold',}},data:");
					}else {
						seriesData.append("line',yAxisIndex:1,symbol:'circle',symbolSize:6,smooth: true,label: {normal:{show:true,position:'bottom',fontSize: '75%',formatter: function(obj){var value =obj.value;return value[1]+'%'},fontWeight:'bold',}},data:");
					}
				}
				else if(yieldDetial[i].equals("SAT Yield")||yieldDetial[i].equals("SA Yield")||yieldDetial[i].contains("S Yield")||yieldDetial[i].contains("ST Yield")||yieldDetial[i].contains("Yield")){
					if (deviceType.equals("tv")) {
						seriesData.append("line',yAxisIndex:1,symbol:'circle',symbolSize:10,smooth: true,label: {normal:{show:true,position:'bottom',fontSize: '100%',formatter: function(obj){var value =obj.value;return value[1]+'%'},fontWeight:'bold',}},data:");
					}else {
						seriesData.append("line',yAxisIndex:1,symbol:'circle',symbolSize:6,smooth: true,label: {normal:{show:true,position:'bottom',fontSize: '75%',formatter: function(obj){var value =obj.value;return value[1]+'%'},fontWeight:'bold',}},data:");
					}
				}
				else{
					seriesData.append("bar',stack: '1',barWidth:'50%',data:");
				}
				seriesData.append(yieldData[i].toString());
				seriesData.append("},");
			}
			else{
				if (deviceType.equals("tv")) {
					seriesData.append("{name:'过货量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color:'#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '80%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
				}else {
					seriesData.append("{name:'过货量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color:'#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '70%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
				}
				for(int m=0;m<colName.length;m++){
					if(!colName.toString().equals("")){
						seriesData.append("[");
						seriesData.append(String.valueOf(m));
						seriesData.append(",");
						if (m==3||m==8) {
							seriesData.append("0,");
							seriesData.append("''");
						}else {
							seriesData.append("1,");
							seriesData.append(dnmtr_qtyData[m]);
						}
						seriesData.append("],");
					}
				}
				seriesData.append("]},");
			}
		}
		seriesData.append("]");
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("dnmtrqty", data_dnmtrqty.toString());
		result.put("todaydate", todayDate);
		result.put("series", seriesData.toString());
		result.put("legenddata", legendData.toString());
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value="/yieldProductCategory")
	public @ResponseBody List<String> yieldProductCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName,
			@RequestParam(value = "processType",required = true)String processType,
			@RequestParam(value = "productionType",required = true)String productionType) throws Exception {
		List<Map<String, Object>> list = echartYieldService.getyieldCategory(shopName,processType,productionType);
		
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

	@RequestMapping("yield4Layer")
	public void yield4Layer(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception{
		String layer = yieldParam.getProcesstype();
		String productionType = yieldParam.getProductionType();
		String productCategory = yieldParam.getProductCategory();
		String deviceType = yieldParam.getDeviceType();

		List<Map<String, Object>> listYield = echartYieldService.getyieldBP4LAYER(layer,productionType,productCategory);
		List<Map<String, Object>> listDefect = echartYieldService.getdefectBP4LAYER(layer,productionType,productCategory);	
		List<Map<String, Object>> listDefectCategory = echartYieldService.getBP4LAYERDefectList(layer,productionType,productCategory);	
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
		
		//legendData
		StringBuffer legendData=new StringBuffer();
		String[] arrlegendData=new String[listDefectCategory.size()+2];
		legendData.append("['SA Yield','SAT Yield',");
		arrlegendData[0]="SA Yield";
		arrlegendData[1]="SAT Yield";
		for(int m=0;m<listDefectCategory.size();m++){
			if(listDefectCategory.get(m).get("DEFECT_GROUP")!=null){
				legendData.append("'");
				legendData.append(listDefectCategory.get(m).get("DEFECT_GROUP").toString());
				legendData.append("',");
				arrlegendData[m+2]=listDefectCategory.get(m).get("DEFECT_GROUP").toString();
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
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'SA Yield',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show:true,position:'bottom',fontSize:'100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		}else {
			seriesItem.append("{name:'SA Yield',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:6,smooth:true,label: {normal: {show:true,position:'bottom',fontSize:'75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		}
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<listYield.size();m++){
				if (listYield.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(listYield.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(listYield.get(m).get("SA_YIELD")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(listYield.get(m).get("SA_YIELD").toString());
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
		//get SAT Yield
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'SAT Yield',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show:true,position:'top',fontSize:'100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		}else {
			seriesItem.append("{name:'SAT Yield',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:6,smooth:true,label: {normal: {show:true,position:'top',fontSize:'75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		}
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<listYield.size();m++){
				if (listYield.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(listYield.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(listYield.get(m).get("SAT_YIELD")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							seriesItem.append(",");
							seriesItem.append(listYield.get(m).get("SAT_YIELD").toString());
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
			arrDefectCategory[i]=listDefectCategory.get(i).get("DEFECT_GROUP").toString();
		}
				
		//get Defect
		for(int i=0;i<arrDefectCategory.length;i++){
			boolean isDefectExist=false;
			seriesItem.append("{name:'"+arrDefectCategory[i]+"',type:'bar',stack:'1',barWidth:'50%',data:[");
			for(int m=0;m<arrDateFactory.length;m++){
				boolean isDateExist=false;
				for(int p=0;p<listDefect.size();p++){
					if (listDefect.get(p).get("DEFECT_GROUP").toString().equals(arrDefectCategory[i])) {
						isDefectExist=true;
						if(listDefect.get(p).get("DATETYPE").toString().equals(DateType[m])){
							if(listDefect.get(p).get("DATETIME").toString().equals(arrDateFactory[m])){
								isDateExist=true;
								seriesItem.append("[");
								seriesItem.append(String.valueOf(m));
								seriesItem.append(",");
								double dd=Double.parseDouble(listDefect.get(p).get("DFT_RATIO").toString());
								seriesItem.append(String.format("%.2f", dd).toString());
								seriesItem.append(","+listDefect.get(m).get("OUT_QTY")+",'");
								seriesItem.append(arrxData[m]);
								seriesItem.append("',"+listDefect.get(p).get("DFT_QTY")+"],");
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
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'过货量',type:'bar',yAxisIndex:2,xAxisIndex:1,color:'#C4C4C4',barWidth:'85%',label:{normal:{show: true,position:'inside',fontSize:'80%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		}else {
			seriesItem.append("{name:'过货量',type:'bar',yAxisIndex:2,xAxisIndex:1,color:'#C4C4C4',barWidth:'85%',label:{normal:{show: true,position:'inside',fontSize:'70%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		}
		for(int i=0;i<arrDateFactory.length;i++){
			boolean isExist=false;
			for(int m=0;m<listDefect.size();m++){
				if (listDefect.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if(listDefect.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
						isExist=true;
						if(listDefect.get(m).get("OUT_QTY")!=null){
							seriesItem.append("[");
							seriesItem.append(String.valueOf(i));
							if(arrxData[i].equals("")){
								seriesItem.append(",0,''");
							}else {
								seriesItem.append(",1,"+listDefect.get(m).get("OUT_QTY").toString());
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

	@RequestMapping("yield4LayerProductCategory")
	public @ResponseBody List<String> yield4LayerProductCategory(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName,
			@RequestParam(value = "processType",required = true)String processType,
			@RequestParam(value = "productionType",required = true)String productionType) throws IOException{

		List<Map<String, Object>> list = echartYieldService.getyieldBP4LAYERCategory(shopName,processType,productionType);
		
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

	@RequestMapping("yield4LayerKillingProductCategory")
	public @ResponseBody List<String> yield4LayerKillingProductCategory(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName,
			@RequestParam(value = "processType",required = true)String layer,
			@RequestParam(value = "productionType",required = true)String productionType) throws IOException{

		List<Map<String, Object>> list = echartYieldService.getyieldBP4LAYERWithKillingCategory(shopName,layer,productionType);
		
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

	@RequestMapping("yield4LayerKilling")
	public void yield4LayerKilling(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception{
		String layer=yieldParam.getProcesstype();
		String productionType = yieldParam.getProductionType();
		String productCategory = yieldParam.getProductCategory();
		String deviceType = yieldParam.getDeviceType();
		
		StringBuffer xData =new StringBuffer();
		String todayDate = "";
		StringBuffer legendData=new StringBuffer().append("[");
		StringBuffer series=new StringBuffer();
		
		try {
			List<Map<String, Object>> listDefect = new ArrayList<Map<String,Object>>();
			List<Map<String, Object>> listDefectCategory = new ArrayList<Map<String,Object>>();
			try {
				listDefect = echartYieldService.getdefectBP4LAYERWithKilling(layer,productionType,productCategory);	
				listDefectCategory = echartYieldService.getBP4LAYERDefectListWithKilling(layer,productionType,productCategory);	

			} catch (Exception e) {
				// TODO: handle exception
			}
			List<Map<String, Object>> listDate=echartService.getProductionDate();	
			todayDate = listDate.get(0).get("TODAY_5M").toString();//get today date
			List<Map<String, Object>> listDateFactory = echartService.getDateFactory();//和四层良率表日期一致
			
			//xData from Calendar

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
			String[] arrlegendData=new String[listDefectCategory.size()+2];
			for(int m=0;m<listDefectCategory.size();m++){
				if(listDefectCategory.get(m).get("DEFECT_GROUP")!=null){
					legendData.append("'");
					legendData.append(listDefectCategory.get(m).get("DEFECT_GROUP").toString());
					legendData.append("',");
					arrlegendData[m]=listDefectCategory.get(m).get("DEFECT_GROUP").toString();
				}
			}
			legendData.append("]");
			
			//series
			String[] DateType=new String[]{"MONTH","MONTH","MONTH","MONTH","WEEK","WEEK","WEEK","WEEK","WEEK","DAY","DAY","DAY","DAY","DAY","DAY","DAY"};

			series.append("[");
			StringBuffer seriesItem=new StringBuffer();
			
			String[] arrDefectCategory=new String[listDefectCategory.size()];
			for(int i=0;i<listDefectCategory.size();i++){
				arrDefectCategory[i]=listDefectCategory.get(i).get("DEFECT_GROUP").toString();
			}
					
			//get Defect
			for(int i=0;i<arrDefectCategory.length;i++){
				boolean isDefectExist=false;
				seriesItem.append("{name:'"+arrDefectCategory[i]+"',type:'bar',stack:'1',barWidth:'50%',data:[");
				for(int m=0;m<arrDateFactory.length;m++){
					boolean isDateExist=false;
					for(int p=0;p<listDefect.size();p++){
						if (listDefect.get(p).get("DEFECT_GROUP").toString().equals(arrDefectCategory[i])) {
							isDefectExist=true;
							if(listDefect.get(p).get("DATETYPE").toString().equals(DateType[m])){
								if(listDefect.get(p).get("DATETIME").toString().equals(arrDateFactory[m])){
									isDateExist=true;
									seriesItem.append("[");
									seriesItem.append(String.valueOf(m));
									seriesItem.append(",");
									double dd=Double.parseDouble(listDefect.get(p).get("DFT_RATIO").toString());
									seriesItem.append(String.format("%.2f", dd).toString());
									seriesItem.append(","+listDefect.get(m).get("OUT_QTY")+",'");
									seriesItem.append(arrxData[m]);
									seriesItem.append("',"+listDefect.get(p).get("DFT_QTY")+"],");
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
			if (deviceType.equals("tv")) {
				seriesItem.append("{name:'过货量',type:'bar',yAxisIndex:2,xAxisIndex:1,color:'#C4C4C4',barWidth:'85%',label:{normal:{show: true,position:'inside',fontSize:'80%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
			}else {
				seriesItem.append("{name:'过货量',type:'bar',yAxisIndex:2,xAxisIndex:1,color:'#C4C4C4',barWidth:'85%',label:{normal:{show: true,position:'inside',fontSize:'70%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
			}
			for(int i=0;i<arrDateFactory.length;i++){
				boolean isExist=false;
				for(int m=0;m<listDefect.size();m++){
					if (listDefect.get(m).get("DATETYPE").toString().equals(DateType[i])) {
						if(listDefect.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
							isExist=true;
							if(listDefect.get(m).get("OUT_QTY")!=null){
								seriesItem.append("[");
								seriesItem.append(String.valueOf(i));
								if(arrxData[i].equals("")){
									seriesItem.append(",0,''");
								}else {
									seriesItem.append(",1,"+listDefect.get(m).get("OUT_QTY").toString());
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
		} catch (Exception e) {
			// TODO: handle exception
		}


		
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

	@RequestMapping("yieldEVENProductCategory")
	public @ResponseBody List<String> yieldEVENProductCategory(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName,
			@RequestParam(value = "processType",required = true)String processType,
			@RequestParam(value = "productionType",required = true)String productionType) throws IOException{

		List<Map<String, Object>> list = echartYieldService.getyieldEVEN_category(shopName,processType,productionType);
		
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

	@RequestMapping("yieldEVEN")
	public void yieldEVEN(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception{
		
		String shopName = yieldParam.getShopName();	
		String processType = yieldParam.getProcesstype();
		String productionType = yieldParam.getProductionType();
		String productCategory = yieldParam.getProductCategory();
		String deviceType = yieldParam.getDeviceType();
		String operationName=new String();
		if (processType.equals("E31000R_CUT_AOI")) {
			operationName="H_CUT AOI";
		}else if (processType.equals("E31000R_CRACK_AOI")) {
			operationName="CRACK AOI";
		}else if (processType.equals("E31000R_IJP_AOI")) {
			operationName="IJP AOI";
		}else if (processType.equals("E31000R_TFE_AOI_REVIEW")) {
			operationName="TFE AOI";
		}		
		List<Map<String, Object>> list=echartYieldService.yieldEVENNew(shopName,processType,productCategory,productionType);
		List<Map<String, Object>> listYield = echartYieldService.getyieldEVEN(shopName,operationName,productionType,productCategory);
		List<Map<String, Object>> listDate=echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		
		//xData from Calendar
		StringBuffer xData =new StringBuffer();
		xData.append("[");
		String[] arrXdataColumn=new String[]{"MONTH_2","MONTH_1","MONTH_0","","WEEK_3","WEEK_2","WEEK_1","WEEK_0","","DAY_6","DAY_5","DAY_4","DAY_3","DAY_2","DAY_1","DAY_0"};
		String[] arrxData=new String[arrXdataColumn.length];
		for(int i=0;i<arrXdataColumn.length;i++){
			xData.append("'");
			if(!arrXdataColumn[i].equals("")){
				xData.append(listDate.get(0).get(arrXdataColumn[i]).toString());
				arrxData[i]=listDate.get(0).get(arrXdataColumn[i]).toString();				
			}
			else{
				xData.append("");
				arrxData[i]="";
			}
			xData.append("',");
		}
		xData.append("]");
		
		//legendData
		StringBuffer legendData=new StringBuffer().append("['Yield',");
		String[] arrlegendData=new String[list.size()+1];
		arrlegendData[0]="Yield";
		for(int i=0;i<list.size();i++){
			legendData.append("'"+list.get(i).get("DEFECTCODE").toString()+"',");
			arrlegendData[i+1]=list.get(i).get("DEFECTCODE").toString();
		}
		legendData.append("]");
		
		//get series
		//String[] dnmtr=new String[]{"MONTH_2_DNMTR","MONTH_1_DNMTR","MONTH_0_DNMTR","","WEEK_3_DNMTR","WEEK_2_DNMTR","WEEK_1_DNMTR","WEEK_0_DNMTR","","DAY_6_DNMTR","DAY_5_DNMTR","DAY_4_DNMTR","DAY_3_DNMTR","DAY_2_DNMTR","DAY_1_DNMTR","DAY_0_DNMTR"};
		//String[] nmrtr=new String[]{"MONTH_2_NMRTR","MONTH_1_NMRTR","MONTH_0_NMRTR","","WEEK_3_NMRTR","WEEK_2_NMRTR","WEEK_1_NMRTR","WEEK_0_NMRTR","","DAY_6_NMRTR","DAY_5_NMRTR","DAY_4_NMRTR","DAY_3_NMRTR","DAY_2_NMRTR","DAY_1_NMRTR","DAY_0_NMRTR"};
		StringBuffer series=new StringBuffer().append("[");
		String[] dnmtrQty=new String[arrXdataColumn.length];
		for (int i = 0; i < listYield.size(); i++) {
			if (listYield.get(i).get("DESCRIPTION").toString().equals("DNMTR_QTY")) {
				for (int j = 0; j < arrXdataColumn.length; j++) {
					if (!arrXdataColumn[j].equals("")) {
						if (listYield.get(i).get(arrXdataColumn[j])!=null) {
							dnmtrQty[j]=listYield.get(i).get(arrXdataColumn[j]).toString();
						}else {
							dnmtrQty[j]="0";
						}
					}else {
						dnmtrQty[j]="";
					}
				}
			}
		}
		if (deviceType.equals("tv")) {
			series.append("{name:'Yield',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show: true,position: 'bottom',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
		}else {
			series.append("{name:'Yield',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:6,smooth:true,label: {normal: {show: true,position: 'bottom',fontSize: '75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
		}
		for (int m=0;m<listYield.size();m++){
			if (!listYield.get(m).get("DESCRIPTION").toString().equals("DNMTR_QTY")){
				for(int i=0;i<arrXdataColumn.length;i++){
					StringBuffer seriesData=new StringBuffer().append("[");
					if(!arrXdataColumn[i].equals("")){
						if(listYield.get(m).get(arrXdataColumn[i])!=null&&!listYield.get(m).get(arrXdataColumn[i]).toString().equals("0")){
							seriesData.append(String.valueOf(i)+",");
							double dd=Double.parseDouble(listYield.get(m).get(arrXdataColumn[i]).toString());
							seriesData.append(String.format("%.2f", dd*100)+",");
							seriesData.append(dnmtrQty[i]+",'");
							seriesData.append(arrxData[i]+"',");
							seriesData.append(String.format("%.0f", dd*Double.parseDouble(dnmtrQty[i])));
						}
					}
					seriesData.append("],");
					series.append(seriesData.toString());
				}
			}
		}
		series.append("]},");
		for(int i=0;i<list.size();i++){
			series.append("{name: '");
			series.append(arrlegendData[i+1]);
			series.append("',type: 'bar',stack: '1',barWidth: '50%',data: [");
			for(int m=0;m<arrXdataColumn.length;m++){
				StringBuffer seriesData=new StringBuffer().append("[");
				seriesData.append(String.valueOf(m)+",");
				if(!arrXdataColumn[m].equals("")){
					seriesData.append(list.get(i).get(arrXdataColumn[m]).toString());
				}
				seriesData.append(","+dnmtrQty[m]);
				if(!arrXdataColumn[m].equals("")){
					seriesData.append(",");
				}
				seriesData.append("'"+arrxData[m]+"',");
				if(!arrXdataColumn[m].equals("")){

				}
				if (!arrXdataColumn[m].equals("")) {
					double dd=Double.parseDouble(list.get(i).get(arrXdataColumn[m]).toString())*Double.parseDouble(dnmtrQty[m]);
					seriesData.append(String.format("%.0f", dd/100));
				}
				seriesData.append("],");
				series.append(seriesData.toString());
			}
			series.append("]},");
		}
		if (deviceType.equals("tv")) {
			series.append("{name:'过货量',type: 'bar',yAxisIndex:2,xAxisIndex:1,color:'#C4C4C4',barWidth:'85%',label: {normal:{show: true,position:'inside',fontSize:'80%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		}else {
			series.append("{name:'过货量',type: 'bar',yAxisIndex:2,xAxisIndex:1,color:'#C4C4C4',barWidth:'85%',label: {normal:{show: true,position:'inside',fontSize:'70%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		}
		for(int i=0;i<arrXdataColumn.length;i++){
			StringBuffer seriesData=new StringBuffer().append("[");
			seriesData.append(String.valueOf(i)+",");
			if (i!=3&&i!=8) {
				seriesData.append("1,");
			}else{
				seriesData.append(",");
			}
			seriesData.append(dnmtrQty[i]+"],");
			series.append(seriesData.toString());
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

	@RequestMapping(value="/yieldEACMDLCategory")
	public @ResponseBody List<String> yieldEACMDLCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName,
			@RequestParam(value = "processType",required = true)String processType,
			@RequestParam(value = "productionType",required = true)String productionType,
			@RequestParam(value = "dataType",required = true)String defectdataType,
			@RequestParam(value = "lineName",required = true)String lineName) throws Exception {
		
		shopName += "%";
		List<Map<String, Object>> list = echartYieldService.getyieldEACMDLCategory(shopName,processType,productionType,defectdataType,lineName);
		
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

	@RequestMapping(value="yieldEACMDL")
	public void yieldEACMDL(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String shopName = yieldParam.getShopName();
		shopName += "%";
		String yieldtype = yieldParam.getProcesstype();
		String defectdataType = yieldParam.getDatatype();
		String lineName = yieldParam.getLinename();
		String productionType = yieldParam.getProductionType();
		String productCategory = yieldParam.getProductCategory();
		String deviceType = yieldParam.getDeviceType();

		List<Map<String, Object>> listYield = new ArrayList<>();
		List<Map<String, Object>> listDefect = new ArrayList<>();
		List<Map<String, Object>> listDefectDetail = new ArrayList<>();
		List<Map<String, Object>> listDefectCategory = new ArrayList<>();
		try {
			listYield = echartYieldService.getyieldByLine(shopName,yieldtype,productionType,defectdataType,lineName,productCategory);
			listDefect = echartYieldService.getdefectByLine(shopName,yieldtype,productionType,defectdataType,lineName,productCategory);	
			listDefectDetail = echartYieldService.getdefectDetailByLine(shopName,yieldtype,productionType,"AFIRELATEDOCA",lineName,productCategory);	
			listDefectCategory = echartYieldService.getDefectListByLine(shopName,yieldtype,productionType,defectdataType,lineName,productCategory);	
		} catch (Exception e) {
			// TODO: handle exception
			log.debug(e.getMessage());
		}
		
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
		StringBuffer legendData=new StringBuffer().append("[");
		String[] arrlegendData=new String[listDefectCategory.size()+2];
		
		String MFIFAPPYieldLegend = "" ;
		if (yieldtype.equals("MFI")) {
			MFIFAPPYieldLegend = "Yield-MFI & RW_EI" ; 
		} else if (yieldtype.equals("FAPP")) {
			MFIFAPPYieldLegend = "Yield-FAPP & RW_APP" ;
		}
		if (!defectdataType.equals("MDLBYLINE")) {
			if (yieldtype.equals("MFI")||yieldtype.equals("FAPP")) {
				legendData.append("'"+MFIFAPPYieldLegend+"',");
			}
		}
		legendData.append("'Yield',");
		if (shopName.equals("MODULE")&&defectdataType.equals("SHOPYIELD")) {
			legendData.append("'MainLine Yield',");
		}
		//arrlegendData[0]="Yield";
		for(int m=0;m<listDefectCategory.size();m++){
			if(listDefectCategory.get(m).get("DESCRIPTION")!=null){
				legendData.append("'");
				legendData.append(listDefectCategory.get(m).get("DESCRIPTION").toString());
				legendData.append("',");
				//arrlegendData[m+2]=listDefectCategory.get(m).get("DESCRIPTION").toString();
			}
		}
		legendData.append("]");
		
		//series
		String[] DateType=new String[]{"MONTH","MONTH","MONTH","MONTH","WEEK","WEEK","WEEK","WEEK","WEEK","DAY","DAY","DAY","DAY","DAY","DAY","DAY"};
		StringBuffer series=new StringBuffer();
		series.append("[");
		StringBuffer seriesItem=new StringBuffer();

		// MODULE MFI FAPP主线加Rework良率
		if (!defectdataType.equals("MDLBYLINE")) {
			if (yieldtype.equals("MFI")||yieldtype.equals("FAPP")) {
				List<Map<String, Object>> listMFIFAPPYield = echartYieldService.getyieldByLine(shopName, yieldtype, productionType, "MDLMAINREWORK", "-", productCategory);

				if (deviceType.equals("tv")) {
					seriesItem.append("{name:'"+MFIFAPPYieldLegend+"',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show:true,position:'top',fontSize:'100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
				}else {
					seriesItem.append("{name:'"+MFIFAPPYieldLegend+"',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:6,smooth:true,label: {normal: {show:true,position:'top',fontSize:'75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
				}
				for(int i=0;i<arrDateFactory.length;i++){
					boolean isExist=false;
					for(int m=0;m<listMFIFAPPYield.size();m++){
						if (listMFIFAPPYield.get(m).get("DATETYPE").toString().equals(DateType[i])) {
							if(listMFIFAPPYield.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
								isExist=true;
								if(listMFIFAPPYield.get(m).get("YIELD")!=null){
									seriesItem.append("[");
									seriesItem.append(String.valueOf(i));
									seriesItem.append(",");
									seriesItem.append(listMFIFAPPYield.get(m).get("YIELD").toString());
									seriesItem.append(",,'");
									seriesItem.append(arrxData[i]);
									seriesItem.append("',");
									double yieldRatio = Double.parseDouble(listMFIFAPPYield.get(m).get("YIELD").toString())/100;
									double yieldInQty = Double.parseDouble(listMFIFAPPYield.get(m).get("IN_QTY").toString());
									seriesItem.append(String.format("%.0f", (yieldRatio*yieldInQty)));
									seriesItem.append("],");
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
			}	
		}		
		
		//增加模组主线入库良率数据
		if (shopName.equals("MODULE")&&defectdataType.equals("SHOPYIELD")) {
			List<Map<String, Object>> listMDLStockInYield = echartYieldService.getyieldByLine(shopName, "MDLMAINLINE", productionType, "SHOPYIELD", "-", productCategory);  

			if (deviceType.equals("tv")) {
				seriesItem.append("{name:'MainLine Yield',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show:true,position:'bottom',fontSize:'100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
			}else {
				seriesItem.append("{name:'MainLine Yield',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:6,smooth:true,label: {normal: {show:true,position:'bottom',fontSize:'75%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
			}
			for(int i=0;i<arrDateFactory.length;i++){
				boolean isExist=false;
				for(int m=0;m<listMDLStockInYield.size();m++){
					if (listMDLStockInYield.get(m).get("DATETYPE").toString().equals(DateType[i])) {
						if(listMDLStockInYield.get(m).get("DATETIME").toString().equals(arrDateFactory[i])){
							isExist=true;
							if(listMDLStockInYield.get(m).get("YIELD")!=null){
								seriesItem.append("[");
								seriesItem.append(String.valueOf(i));
								seriesItem.append(",");
								seriesItem.append(listMDLStockInYield.get(m).get("YIELD").toString());
								seriesItem.append(",,'");
								seriesItem.append(arrxData[i]);
								seriesItem.append("',");
								double yieldRatio = Double.parseDouble(listMDLStockInYield.get(m).get("YIELD").toString())/100;
								double yieldInQty = Double.parseDouble(listMDLStockInYield.get(m).get("IN_QTY").toString());
								seriesItem.append(String.format("%.0f", (yieldRatio*yieldInQty)));
								seriesItem.append("],");
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
		}
		
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'Yield',type:'line',yAxisIndex: 1,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show:true,position:'bottom',fontSize:'100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		}else {
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
								StringBuffer defectDetail = new StringBuffer();
								if (yieldtype.equals("AFI")) {
									for (int j = 0; j < listDefectDetail.size(); j++) {
										if (listDefectDetail.get(j).get("DATETYPE").toString().equals(DateType[m])&&
												listDefectDetail.get(j).get("DATETIME").toString().equals(arrDateFactory[m])&&
												listDefectDetail.get(j).get("DESCRIPTION").toString().substring(8).equals(arrDefectCategory[i])) {
											defectDetail.append(listDefectDetail.get(j).get("DESCRIPTION").toString().substring(0, 7));
											defectDetail.append(" : ");
											defectDetail.append(listDefectDetail.get(j).get("DEFECTQTY").toString());
											defectDetail.append(",\\n");
										}
									}
								}
								seriesItem.append("[");
								seriesItem.append(String.valueOf(m));
								seriesItem.append(",");
								double dd=Double.parseDouble(listDefect.get(p).get("DEFECTRATIO").toString());
								seriesItem.append(String.format("%.2f", dd).toString());
								seriesItem.append(","+listDefect.get(p).get("TOTALQTY")+",'");
								seriesItem.append(arrxData[m]);
								seriesItem.append("',"+listDefect.get(p).get("DEFECTQTY")+",'");
								if (yieldtype.equals("AFI")) {
									seriesItem.append(defectDetail);
								}
								seriesItem.append("'],");
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
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'过货量',type:'bar',yAxisIndex:2,xAxisIndex:1,color:'#C4C4C4',barWidth:'85%',label:{normal:{show: true,position:'inside',fontSize:'80%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		}else {
			seriesItem.append("{name:'过货量',type:'bar',yAxisIndex:2,xAxisIndex:1,color:'#C4C4C4',barWidth:'85%',label:{normal:{show: true,position:'inside',fontSize:'70%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		}
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

	@RequestMapping(value="/yieldMDLCUMCategory")
	public @ResponseBody List<String> yieldMDLCUMCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName,
			@RequestParam(value = "processType",required = true)String processType,
			@RequestParam(value = "productionType",required = true)String productionType,
			@RequestParam(value = "dataType",required = true)String dataType,
			@RequestParam(value = "lineName",required = true)String lineName) throws Exception {
			
		List<Map<String, Object>> list = echartYieldService.getyieldCategoryMDLCUM(shopName,processType,productionType,dataType,lineName);
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
	
	@RequestMapping(value="yieldMDLCUM")
	public void yieldMDLCUM(HttpServletRequest request,HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String shopName = yieldParam.getShopName();
		String productionType = yieldParam.getProductionType();
		String productCategory = yieldParam.getProductCategory();
		String processType = yieldParam.getProcesstype();
		String dataType = yieldParam.getDatatype();
		String lineName = yieldParam.getLinename();
		String deviceType = yieldParam.getDeviceType();
		
		List<Map<String, Object>> list = new ArrayList<>();
		List<Map<String, Object>> listReworkYield = new ArrayList<>();
		List<Map<String, Object>> listDefect = new ArrayList<>();
		List<Map<String, Object>> listDefectCategory = new ArrayList<>();
		try {
			list = echartYieldService.getyieldMDLCUM(shopName,productionType,productCategory,processType,dataType,lineName);	
			listReworkYield = echartYieldService.getReworkYieldMDLCUM(shopName,productionType,productCategory);
			listDefect=echartYieldService.getdefectMDLCUM(shopName,productionType,productCategory,processType,dataType,lineName);	
			listDefectCategory=echartYieldService.getdefectMDLCUMCategory(shopName,productionType,productCategory,processType,dataType,lineName);
		} catch (Exception e) {
			// TODO: handle exception
			log.debug(e.getMessage());
		}

		List<Map<String, Object>> listDateFactory = echartService.getDateFactory();//和四层良率表日期一致
		List<Map<String, Object>> listDate=echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		//xData
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

		
		//get FPY
		String[] DateType=new String[]{"MONTH","MONTH","MONTH","MONTH","WEEK","WEEK","WEEK","WEEK","WEEK","DAY","DAY","DAY","DAY","DAY","DAY","DAY"};
		StringBuffer legendData=new StringBuffer();
		legendData.append("['FPY','FPY_Rework',");

		String[] arrlegendData=new String[]{"FPY"};		
		StringBuffer series=new StringBuffer();
		series.append("[");
		
		for(int q=0;q<arrlegendData.length;q++){
			series.append("{name:'");
			series.append(arrlegendData[q]);
			series.append("',type:'");	
			series.append("line");
			if (deviceType.equals("tv")) {
				series.append("',yAxisIndex: 1,symbol:'circle',symbolSize:10,smooth:true,label:{normal:{show:true,position:'bottom',fontSize:'100%',formatter:function(obj) {var value = obj.value;return value[1]+'%'},fontWeight:'bold',}},data:[");					
			}else {
				series.append("',yAxisIndex: 1,symbol:'circle',symbolSize:6,smooth:true,label:{normal:{show:true,position:'bottom',fontSize:'75%',formatter:function(obj) {var value = obj.value;return value[1]+'%'},fontWeight:'bold',}},data:[");					
			}
			
			for(int m=0;m<arrDateFactory.length;m++){
				boolean isDateExist=false;
				for(int p=0;p<list.size();p++){
						if(list.get(p).get("DATETYPE").toString().equals(DateType[m])){
							if(list.get(p).get("FACTORYDATE").toString().equals(arrDateFactory[m])){
								isDateExist=true;
								series.append("[");
								series.append(String.valueOf(m));
								series.append(",");
								double dd;
								if (list.get(p).get("FPY")!=null) {
									dd=Double.parseDouble(list.get(p).get("FPY").toString());
								}else {
									dd = 0;
								}
								series.append(String.format("%.2f", dd*100).toString());
								series.append(",1"+",'");
								series.append(arrxData[m]);
								series.append("',1"+"],");
								break;
							}
						}
				}
				if(!isDateExist){
					series.append("[");
					series.append(String.valueOf(m));
					series.append(",");
					series.append(",,'");
					series.append(arrxData[m]);
					series.append("',],");
				}
			}			
			series.append("]},");
		}
		
		String[] arrlegendData1=new String[]{"FPY_Rework"};
		for(int q=0;q<arrlegendData1.length;q++){
			series.append("{name:'");
			series.append(arrlegendData1[q]);
			series.append("',type:'");	
			series.append("line");
			if (deviceType.equals("tv")) {
				series.append("',yAxisIndex: 1,symbol:'circle',symbolSize:10,smooth:true,label:{normal:{show:true,position:'top',fontSize:'100%',formatter:function(obj) {var value = obj.value;return value[1]+'%'},fontWeight:'bold',}},data:[");					
			}else {
				series.append("',yAxisIndex: 1,symbol:'circle',symbolSize:6,smooth:true,label:{normal:{show:true,position:'top',fontSize:'75%',formatter:function(obj) {var value = obj.value;return value[1]+'%'},fontWeight:'bold',}},data:[");					
			}
			
			for(int m=0;m<arrDateFactory.length;m++){
				boolean isDateExist=false;
				for(int p=0;p<listReworkYield.size();p++){
						if(listReworkYield.get(p).get("DATETYPE").toString().equals(DateType[m])){
							if(listReworkYield.get(p).get("FACTORYDATE").toString().equals(arrDateFactory[m])){
								isDateExist=true;
								series.append("[");
								series.append(String.valueOf(m));
								series.append(",");
								double dd;
								if (listReworkYield.get(p).get("FPY")!=null) {
									dd=Double.parseDouble(listReworkYield.get(p).get("FPY").toString());
								}else {
									dd = 0;
								}
								series.append(String.format("%.2f", dd*100).toString());
								series.append(",1"+",'");
								series.append(arrxData[m]);
								series.append("',1"+"],");
								break;
							}
						}
				}
				if(!isDateExist){
					series.append("[");
					series.append(String.valueOf(m));
					series.append(",");
					series.append(",,'");
					series.append(arrxData[m]);
					series.append("',],");
				}
			}			
			series.append("]},");
		}
		
		
		
		//defect
		StringBuffer legendData2=new StringBuffer();
		String[] arrlegendData2=new String[listDefectCategory.size()];
		for(int m=0;m<listDefectCategory.size();m++){
			arrlegendData2[m]=listDefectCategory.get(m).get("DEFECTCODE").toString();
			legendData.append("'"+listDefectCategory.get(m).get("DEFECTCODE").toString()+"',");
		}
		legendData.append("]");

		for(int q=0;q<arrlegendData2.length;q++){
			boolean isDefectExist=false;
			series.append("{name:'"+arrlegendData2[q]+"',type:'bar',stack:'1',barWidth:'50%',data:[");
			for(int m=0;m<arrDateFactory.length;m++){
				boolean isDateExist=false;
				for(int p=0;p<listDefect.size();p++){
					if (listDefect.get(p).get("DESCRIPTION").toString().equals(arrlegendData2[q])) {
						isDefectExist=true;
						if(listDefect.get(p).get("DATETYPE").toString().equals(DateType[m])){
							if(listDefect.get(p).get("DATETIME").toString().equals(arrDateFactory[m])){
								isDateExist=true;
								series.append("[");
								series.append(String.valueOf(m));
								series.append(",");
								double dd;
								if (listDefect.get(p).get("FPY_DEFECTRATIO")!=null) {
									dd=Double.parseDouble(listDefect.get(p).get("FPY_DEFECTRATIO").toString());
								}else {
									dd = 0;
								}
								series.append(String.format("%.2f", dd*100).toString());
								series.append(",1"+",'");
								series.append(arrxData[m]);
								series.append("',1"+"],");
								break;
							}
						}
						
					}
				}
				if(!isDateExist){
					series.append("[");
					series.append(String.valueOf(m));
					series.append(",");
					series.append(",,'");
					series.append(arrxData[m]);
					series.append("',],");
				}
			}
			series.append("]},");
		}
		
		
		
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

	@RequestMapping("yieldStockInCUMCategory")
	public @ResponseBody List<String> yieldStockInCUMCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value = "shopName",required = true)String shopName) throws Exception {
			
		List<Map<String, Object>> list = echartYieldService.yieldStockInCUMCategory(shopName);
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
	
	@RequestMapping("yieldStockInCUM")
	public void yieldStockInCUM(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String productCategory = yieldParam.getProductCategory();
		String deviceType = yieldParam.getDeviceType();

		List<Map<String, Object>> listYield = echartYieldService.getyieldStockInCum(productCategory);
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
		StringBuffer legendData=new StringBuffer().append("['Yield',]");
		
		//series
		String[] DateType=new String[]{"MONTH","MONTH","MONTH","MONTH","WEEK","WEEK","WEEK","WEEK","WEEK","DAY","DAY","DAY","DAY","DAY","DAY","DAY"};
		StringBuffer series=new StringBuffer();
		series.append("[");
		StringBuffer seriesItem=new StringBuffer();
		if (deviceType.equals("tv")) {
			seriesItem.append("{name:'Yield',type:'line',yAxisIndex: 0,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show:true,position:'bottom',fontSize:'100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		}else {
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

	@RequestMapping(value="/totalYieldProductCategory")
	public @ResponseBody List<String> totalYieldProductCategory(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="shopName",required = true) String shopName,
			@RequestParam(value="processType",required = true) String yieldType
			) throws Exception {
		List<Map<String, Object>> list = echartYieldService.getTotalYieldCategory(shopName,yieldType);
		
		String defaultshopName = "";
		if (shopName.equals("EAC2")) {
			defaultshopName="EVEN";
		}else {
			defaultshopName=shopName;
		}
		//取默认值
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

	@RequestMapping("yieldTotal")
	public void yieldTotal(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String shopName = yieldParam.getShopName();
		String productionType = yieldParam.getProductionType();
		String productCategory = yieldParam.getProductCategory();
		String deviceType = yieldParam.getDeviceType();
		String specproductCategory = "";
		if (yieldParam.getProductCategory().contains("5.46QHD")) {
			specproductCategory="5.5QHD";
		}else {
			specproductCategory = yieldParam.getProductCategory();
		}
		String specFactoryName = "CUM";
		String specDefectType = "CUM";
		String specDepartment = yieldParam.getDatatype();
		String specFactoryYear = "2018";
		List<Map<String, Object>> listSpec = echartService.getYieldDefectSpec(specproductCategory,productionType,specFactoryName,specDefectType,specDepartment,specFactoryYear);		
		List<Map<String, Object>> listDefect = echartYieldService.getEVENYiledOneyear(productCategory,specFactoryYear+"%","defect");	
		List<Map<String, Object>> listScrap = echartYieldService.getEVENYiledOneyear(productCategory,specFactoryYear+"%","scrap");	
		List<Map<String, Object>> listDate = echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();
		
		//get xdata
		String[] arrxData={"1M","2M","3M","4M","5M","6M","7M","8M","9M","10M","11M","12M"};
		StringBuffer xData=new StringBuffer().append("['1M','2M','3M','4M','5M','6M','7M','8M','9M','10M','11M','12M']");
		String[] allSpeccolumn={"DEFECT_1_PLAN","DEFECT_2_PLAN","DEFECT_3_PLAN","DEFECT_4_PLAN","DEFECT_5_PLAN","DEFECT_6_PLAN","DEFECT_7_PLAN","DEFECT_8_PLAN","DEFECT_9_PLAN","DEFECT_10_PLAN","DEFECT_11_PLAN","DEFECT_12_PLAN"};
		String[] arrXdatatemp={specFactoryYear+"01",specFactoryYear+"02",specFactoryYear+"03",specFactoryYear+"04",specFactoryYear+"05",specFactoryYear+"06",specFactoryYear+"07",specFactoryYear+"08",specFactoryYear+"09",specFactoryYear+"10",specFactoryYear+"11",specFactoryYear+"12"};

		//get legendData
		StringBuffer legendData=new StringBuffer().append("['Spec','Yield'");
		legendData.append("]");
		String[] arrlegendData={"Spec","Yield"};
		
		StringBuffer series=new StringBuffer().append("[");
		if (deviceType.equals("tv")) {
			series.append("{name:'Spec',type:'line',yAxisIndex:0,symbol:'circle',symbolSize:10,smooth:true,label:{normal:{show:true,position:'top',fontSize:'100%',formatter:function(obj){var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		} else if (deviceType.equals("monitor")) {
			series.append("{name:'Spec',type:'line',yAxisIndex:0,symbol:'circle',symbolSize:5,smooth:true,label:{normal:{show:true,position:'top',fontSize:'80%',formatter:function(obj){var value = obj.value;return value[1] + '%'},fontWeight: 'bold',}},data: [");
		}
		if (listSpec.size() != 0) {
			for (int i = 0; i < allSpeccolumn.length; i++) {
				StringBuffer seriesData=new StringBuffer().append("[");
				if (listSpec.get(0).get(allSpeccolumn[i])!=null&&!listSpec.get(0).get(allSpeccolumn[i]).toString().equals("0")) {
					seriesData.append(String.valueOf(i)+",");
					double dd=Double.parseDouble(listSpec.get(0).get(allSpeccolumn[i]).toString());
					seriesData.append(String.format("%.1f", dd*100)+",");
					seriesData.append("'"+arrxData[i]+"',");
				}
				seriesData.append("],");
				series.append(seriesData.toString());
			}
		}
		series.append("]},");
		
		//综合良率
		Double[] defectRatio = new Double[12];
		Double[] scrapRatio = new Double[12];
		Double[] scrapQty = new Double[12];
		for (int i = 0; i < listDefect.size(); i++) {
			if (!listDefect.get(i).get("QTYDNMTR").toString().equals("0")) {
				Double dd=Double.parseDouble(listDefect.get(i).get("QTYNMRTR").toString())/Double.parseDouble(listDefect.get(i).get("QTYDNMTR").toString());
				for (int j = 0; j < arrXdatatemp.length; j++) {
					if (listDefect.get(i).get("FACTORYMONTH").equals(arrXdatatemp[j])) {
						defectRatio[j]=(1-dd);
						break;
					}
				}				
			}			
		}
		for (int i = 0; i < listScrap.size(); i++) {
			if (!listScrap.get(i).get("QTYDNMTR").toString().equals("0")) {
				Double dd=Double.parseDouble(listScrap.get(i).get("QTYNMRTR").toString())/(Double.parseDouble(listScrap.get(i).get("QTYDNMTR").toString())+Double.parseDouble(listScrap.get(i).get("QTYNMRTR").toString()));
				for (int j = 0; j < arrXdatatemp.length; j++) {
					if (listScrap.get(i).get("FACTORYMONTH").equals(arrXdatatemp[j])) {
						scrapRatio[j]=(1-dd);
						scrapQty[j] = Double.parseDouble(listScrap.get(i).get("QTYDNMTR").toString());
						break;
					}
				}
			}			
		}		
		series.append("{name:'Yield',type: 'bar',stack: '1',barWidth:'40%',data: [");
		for (int i = 0; i < arrXdatatemp.length; i++) {
			StringBuffer seriesItem = new StringBuffer().append("["+String.valueOf(i)+",");
			if ((scrapRatio[i]!=null&&defectRatio[i]!=null)) {
				seriesItem.append(String.format("%.2f", scrapRatio[i]*defectRatio[i]*100));
			}
			seriesItem.append(",0,'");
			seriesItem.append(arrxData[i]);
			seriesItem.append("',0],");
			series.append(seriesItem.toString());
		}
		series.append("]},");
		if (deviceType.equals("tv")) {
			series.append("{name:'过货量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color:'#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '80%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		} else if (deviceType.equals("monitor")) {
			series.append("{name:'过货量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color:'#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '70%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		}
		for (int i = 0; i < arrxData.length; i++) {
			series.append("[");
			series.append(String.valueOf(i));
			series.append(",");
			series.append("1,");
			if (scrapQty[i]!=null) {
				series.append(String.valueOf(scrapQty[i]));
			}else {
				series.append("0");
			}
			series.append("],");			
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

	@RequestMapping(value="/yieldTotalDefect")
	public void yieldTotalDefect(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String shopName = yieldParam.getShopName();		
		String productionType = yieldParam.getProductionType();
		String productCategory = yieldParam.getProductCategory();
		String deviceType = yieldParam.getDeviceType();
		String specproductCategory = "";
		if (productCategory.contains("5.46QHD")) {
			specproductCategory="5.5QHD";
		}else {
			specproductCategory = productCategory;
		}
		String specFactoryName = yieldParam.getDatatype();
		String specDefectType = "ET";
		String specDepartment = "DEFECT_RATE";
		String specFactoryYear = "2018";
		List<Map<String, Object>> listSpec = echartService.getYieldDefectSpec(specproductCategory,productionType,specFactoryName,specDefectType,specDepartment,specFactoryYear);
		List<Map<String, Object>> list = echartYieldService.getEVENYieldByDepartment(shopName,productCategory,productionType);
		List<Map<String, Object>> listDate = echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		
		//xData from Calendar
		StringBuffer xData =new StringBuffer();
		xData.append("[");
		String[] arrXdataColumn=new String[]{"MONTH_2","MONTH_1","MONTH_0","","WEEK_3","WEEK_2","WEEK_1","WEEK_0","","DAY_6","DAY_5","DAY_4","DAY_3","DAY_2","DAY_1","DAY_0"};
		String[] arrxData=new String[arrXdataColumn.length];
		for(int i=0;i<arrXdataColumn.length;i++){
			xData.append("'");
			if(!arrXdataColumn[i].equals("")){
				xData.append(listDate.get(0).get(arrXdataColumn[i]).toString());
				arrxData[i]=listDate.get(0).get(arrXdataColumn[i]).toString();				
			}
			else{
				xData.append("");
				arrxData[i]="";
			}
			xData.append("',");
		}
		xData.append("]");
		
		//legendData
		StringBuffer legendData=new StringBuffer().append("['Spec',");
		String[] arrlegendData=new String[list.size()+1];
		arrlegendData[0]="Spec";
		for(int i=0;i<list.size();i++){
			legendData.append("'"+list.get(i).get("DESCRIPTION").toString()+"',");
			arrlegendData[i+1]=list.get(i).get("DESCRIPTION").toString();
		}
		legendData.append("]");
		
		//get series
		String[] dnmtr=new String[]{"MONTH_2_DNMTR","MONTH_1_DNMTR","MONTH_0_DNMTR","","WEEK_3_DNMTR","WEEK_2_DNMTR","WEEK_1_DNMTR","WEEK_0_DNMTR","","DAY_6_DNMTR","DAY_5_DNMTR","DAY_4_DNMTR","DAY_3_DNMTR","DAY_2_DNMTR","DAY_1_DNMTR","DAY_0_DNMTR"};
		String[] nmrtr=new String[]{"MONTH_2_NMRTR","MONTH_1_NMRTR","MONTH_0_NMRTR","","WEEK_3_NMRTR","WEEK_2_NMRTR","WEEK_1_NMRTR","WEEK_0_NMRTR","","DAY_6_NMRTR","DAY_5_NMRTR","DAY_4_NMRTR","DAY_3_NMRTR","DAY_2_NMRTR","DAY_1_NMRTR","DAY_0_NMRTR"};
		StringBuffer series=new StringBuffer().append("[");
		String[] allSpeccolumn=new String[]{"DEFECT_1_PLAN","DEFECT_2_PLAN","DEFECT_3_PLAN","DEFECT_4_PLAN","DEFECT_5_PLAN","DEFECT_6_PLAN","DEFECT_7_PLAN","DEFECT_8_PLAN","DEFECT_9_PLAN","DEFECT_10_PLAN","DEFECT_11_PLAN","DEFECT_12_PLAN"};
		String[] arrSpeccolumn=new String[3];
		int startMonth=Integer.parseInt(arrxData[0].substring(0,2))-1;		
		for(int i=0;i<3;i++){
			arrSpeccolumn[i]=allSpeccolumn[startMonth+i];
		}
		if (deviceType.equals("tv")) {
			series.append("{name:'Spec',type:'line',yAxisIndex: 0,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
		} else if(deviceType.equals("monitor")) {
			series.append("{name:'Spec',type:'line',yAxisIndex: 0,symbol:'circle',symbolSize:5,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '80%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
		}
		for (int i = 0; i < 3; i++) {
			StringBuffer seriesData=new StringBuffer().append("[");
			seriesData.append(String.valueOf(i)+",");
			if(!listSpec.isEmpty()){
				double dd=Double.parseDouble(listSpec.get(0).get(arrSpeccolumn[i]).toString());
				seriesData.append(String.format("%.1f", dd*100));
			}
			seriesData.append(",'"+arrxData[i]+"',");
			seriesData.append("],");
			series.append(seriesData.toString());
		}
		series.append("[],[],[],[],[],[],[],[],[],[],[],[],[],]},");	
		for(int i=0;i<list.size();i++){
			series.append("{name: '");
			series.append(arrlegendData[i+1]);
			series.append("',type: 'bar',stack: '1',barWidth: '50%',data: [");
			for(int m=0;m<arrXdataColumn.length;m++){
				StringBuffer seriesData=new StringBuffer().append("[");
				seriesData.append(String.valueOf(m)+",");
				if(!arrXdataColumn[m].equals("")){
					if(list.get(i).get(nmrtr[m])!=null){
						if(!list.get(i).get(dnmtr[m]).toString().equals("0")){
							double dd1=Double.parseDouble(list.get(i).get(nmrtr[m]).toString());
							double dd2=Double.parseDouble(list.get(i).get(dnmtr[m]).toString());
							seriesData.append(String.format("%.1f", (dd1/dd2)*100));
						}else {
							seriesData.append("0");
						}
					}
				}
				seriesData.append(",");
				if(!arrXdataColumn[m].equals("")){
					seriesData.append(list.get(i).get(dnmtr[m]).toString()+",");
				}
				seriesData.append("'"+arrxData[m]+"',");
				if(!arrXdataColumn[m].equals("")){
					seriesData.append(list.get(i).get(nmrtr[m]).toString());
				}
				seriesData.append("],");
				series.append(seriesData.toString());
			}
			series.append("]},");
		}
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

	@RequestMapping(value="/yieldTotalScrap")
	public void yieldTotalScrap(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String shopName = yieldParam.getShopName();
		String productionType = yieldParam.getProductionType();
		String productCategory = yieldParam.getProductCategory();
		String deviceType = yieldParam.getDeviceType();
		String specproductCategory = "";
		if (productCategory.contains("5.46QHD")) {
			specproductCategory="5.5QHD";
		}else {
			specproductCategory = productCategory;
		}
		String specFactoryName = yieldParam.getDatatype();
		String specDefectType = "LOSS";
		String specDepartment = "ALL";
		String specFactoryYear = "2018";
		List<Map<String, Object>> listSpec = echartService.getYieldDefectSpec(specproductCategory,productionType,specFactoryName,specDefectType,specDepartment,specFactoryYear);		
		List<Map<String, Object>> listScrap = echartYieldService.getScrapEVENAllbyDepartment(shopName);	
		List<Map<String, Object>> listScrapQty = echartYieldService.getScrapEVENAllbyDepartmentQty(shopName);
		List<Map<String, Object>> listDate = echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		
		//GET XDATA 横坐标
		StringBuffer xData=new StringBuffer().append("[");
		String[] xDataColumn=new String[]{"MONTH_2","MONTH_1","MONTH_0","","WEEK_3","WEEK_2","WEEK_1","WEEK_0","","DAY_6","DAY_5","DAY_4","DAY_3","DAY_2","DAY_1","DAY_0"};
		String[] arrxData=new String[xDataColumn.length];
		for(int i=0;i<xDataColumn.length;i++){
			if(!xDataColumn[i].equals("")){
				xData.append("'");
				xData.append(listDate.get(0).get(xDataColumn[i]).toString());
				arrxData[i]=listDate.get(0).get(xDataColumn[i]).toString();
				xData.append("',");
			}else{
				xData.append("'',");
				arrxData[i]="";
			}
		}
		xData.append("]");
		
		//Get Defect Code LegendData
		ArrayList<String> defectCode=new ArrayList<String>();
		defectCode.add("Spec");
		defectCode.add("EN");
		defectCode.add("Mask");
		defectCode.add("PI");
		defectCode.add("EV");
		//defectCode.add("-");
		StringBuffer legendData=new StringBuffer().append("['Spec','EN','Mask','PI','EV'");	
		legendData.append("]");
		
		//Get series
		StringBuffer series=new StringBuffer().append("[");
		String[] allSpeccolumn=new String[]{"DEFECT_1_PLAN","DEFECT_2_PLAN","DEFECT_3_PLAN","DEFECT_4_PLAN","DEFECT_5_PLAN","DEFECT_6_PLAN","DEFECT_7_PLAN","DEFECT_8_PLAN","DEFECT_9_PLAN","DEFECT_10_PLAN","DEFECT_11_PLAN","DEFECT_12_PLAN"};
		String[] arrSpeccolumn=new String[3];
		String[] xDataColumn1=new String[]{"MONTH_2_NMRTR","MONTH_1_NMRTR","MONTH_0_NMRTR","","WEEK_3_NMRTR","WEEK_2_NMRTR","WEEK_1_NMRTR","WEEK_0_NMRTR","","DAY_6_NMRTR","DAY_5_NMRTR","DAY_4_NMRTR","DAY_3_NMRTR","DAY_2_NMRTR","DAY_1_NMRTR","DAY_0_NMRTR"};
		String[] xDataColumn2=new String[]{"MONTH_2_NMRTR_ALL","MONTH_1_NMRTR_ALL","MONTH_0_NMRTR_ALL","","WEEK_3_NMRTR_ALL","WEEK_2_NMRTR_ALL","WEEK_1_NMRTR_ALL","WEEK_0_NMRTR_ALL","","DAY_6_NMRTR_ALL","DAY_5_NMRTR_ALL","DAY_4_NMRTR_ALL","DAY_3_NMRTR_ALL","DAY_2_NMRTR_ALL","DAY_1_NMRTR_ALL","DAY_0_NMRTR_ALL"};
		String[] xDataColumn3=new String[]{"MONTH_2_DNMTR","MONTH_1_DNMTR","MONTH_0_DNMTR","","WEEK_3_DNMTR","WEEK_2_DNMTR","WEEK_1_DNMTR","WEEK_0_DNMTR","","DAY_6_DNMTR","DAY_5_DNMTR","DAY_4_DNMTR","DAY_3_DNMTR","DAY_2_DNMTR","DAY_1_DNMTR","DAY_0_DNMTR"};
		int startMonth=Integer.parseInt(arrxData[0].substring(0,2))-1;		
		for(int i=0;i<3;i++){
			arrSpeccolumn[i]=allSpeccolumn[startMonth+i];
		}
		
		if (deviceType.equals("tv")) {
			series.append("{name:'Spec',type:'line',yAxisIndex: 0,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
		} else if(deviceType.equals("monitor")) {
			series.append("{name:'Spec',type:'line',yAxisIndex: 0,symbol:'circle',symbolSize:5,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '80%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
		}
		for (int i = 0; i < 3; i++) {
			StringBuffer seriesData=new StringBuffer().append("[");
			seriesData.append(String.valueOf(i)+",");
			if(!listSpec.isEmpty()){
				double dd=Double.parseDouble(listSpec.get(0).get(arrSpeccolumn[i]).toString());
				seriesData.append(String.format("%.2f", dd*100));
			}
			seriesData.append(",'"+arrxData[i]+"',");
			seriesData.append("],");
			series.append(seriesData.toString());
		}
		series.append("[],[],[],[],[],[],[],[],[],[],[],[],[],]},");	
		//series.append("{name:'EN',type: 'bar',stack: '1',barWidth:'50%',data: [[0, 1.37, 0, '02 M', 0],[1, 0.21, 0, '03 M', 0],[2, 0.47, 0, '04 M', 0],,,,,,,,,,,,,,] }, {name: 'Mask',type: 'bar',stack: '1',barWidth: '50%',data: [[0, 0.06, 0, '02 M', 0],[1, 0.41, 0, '03 M', 0],,,,,,,,,,,,,,,] }, {name: 'PI',type: 'bar',stack: '1',barWidth: '50%',data: [[0, 0.30, 0, '02 M', 0],[1, 0.20, 0, '03 M', 0],,,,,,,,,,,,,,,] }, {name: 'EV',type: 'bar',stack: '1',barWidth: '50%',data:[[0, 0.42, 0, '02 M', 0],[1, 0.10, 0, '03 M', 0],,,,,,,,,,,,,,,]},");
		if (listScrap.size()!=0) {
			for (int i = 0; i < listScrap.size(); i++) {
				StringBuffer seriesItem=new StringBuffer();
				seriesItem.append("{name:'");
				seriesItem.append(listScrap.get(i).get("DEFECTCODE").toString());
				seriesItem.append("',type: 'bar',stack: '1',barWidth:'50%',data: [");
				for (int j = 0; j < xDataColumn.length; j++) {
					if (!xDataColumn[j].equals("")) {
						if (!listScrap.get(i).get(xDataColumn[j]).toString().equals("0")) {
							seriesItem.append("["+String.valueOf(j)+",");
							seriesItem.append(listScrap.get(i).get(xDataColumn[j]).toString());
							seriesItem.append(","+listScrapQty.get(i).get(xDataColumn1[j]).toString()+",'");
							seriesItem.append(arrxData[j]+"',");
							seriesItem.append(listScrapQty.get(i).get(xDataColumn2[j]).toString()+",");
							seriesItem.append(listScrapQty.get(i).get(xDataColumn3[j]).toString()+"]");
						}
					}
					seriesItem.append(",");
				}
				seriesItem.append("]},");
				series.append(seriesItem.toString());
			}
		}
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

	@RequestMapping(value="/defectByDepartment")
	public void defectByDepartment(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String shopName = yieldParam.getProcesstype();
		String productionType = yieldParam.getProductionType();
		String productCategory = yieldParam.getProductCategory();
		String departmentName = yieldParam.getDatatype();
		String deviceType = yieldParam.getDeviceType();
		String specproductCategory = "";
		if (productCategory.contains("5.46QHD")) {
			specproductCategory="5.5QHD";
		}else {
			specproductCategory = productCategory;
		}
		String specFactoryName = yieldParam.getShopName();
		String specDefectType = "ET";
		String specDepartment = yieldParam.getDatatype();
		String specFactoryYear = "2018";
		List<Map<String, Object>> listSpec = echartService.getYieldDefectSpec(specproductCategory,productionType,specFactoryName,specDefectType,specDepartment,specFactoryYear);		
		List<Map<String, Object>> list = echartYieldService.getdefectEVENbyDepartment(shopName,productCategory,productionType,departmentName);	
		List<Map<String, Object>> listDate = echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		
		//GET XDATA 横坐标
		StringBuffer xData=new StringBuffer().append("[");
		String[] xDataColumn=new String[]{"MONTH_2","MONTH_1","MONTH_0","","WEEK_3","WEEK_2","WEEK_1","WEEK_0","","DAY_6","DAY_5","DAY_4","DAY_3","DAY_2","DAY_1","DAY_0"};
		String[] arrxData=new String[xDataColumn.length];
		for(int i=0;i<xDataColumn.length;i++){
			if(!xDataColumn[i].equals("")){
				xData.append("'");
				xData.append(listDate.get(0).get(xDataColumn[i]).toString());
				arrxData[i]=listDate.get(0).get(xDataColumn[i]).toString();
				xData.append("',");
			}else{
				xData.append("'',");
				arrxData[i]="";
			}
		}
		xData.append("]");
		
		//Get Defect Code LegendData
		ArrayList<String> defectCode=new ArrayList<String>();
		defectCode.add("Spec");
		StringBuffer legendData=new StringBuffer().append("['Spec',");	
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("DESCRIPTION")!=null){
				defectCode.add(list.get(i).get("DESCRIPTION").toString());
				legendData.append("'"+list.get(i).get("DESCRIPTION").toString()+"',");
			}
		}
		legendData.append("]");
		
		//Get series
		StringBuffer series=new StringBuffer().append("[");
		String[] allSpeccolumn=new String[]{"DEFECT_1_PLAN","DEFECT_2_PLAN","DEFECT_3_PLAN","DEFECT_4_PLAN","DEFECT_5_PLAN","DEFECT_6_PLAN","DEFECT_7_PLAN","DEFECT_8_PLAN","DEFECT_9_PLAN","DEFECT_10_PLAN","DEFECT_11_PLAN","DEFECT_12_PLAN"};
		String[] arrSpeccolumn=new String[3];
		int startMonth=Integer.parseInt(arrxData[0].substring(0,2))-1;		
		for(int i=0;i<3;i++){
			arrSpeccolumn[i]=allSpeccolumn[startMonth+i];
		}
		if (deviceType.equals("tv")) {
			series.append("{name:'Spec',type:'line',yAxisIndex: 0,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
		} else if(deviceType.equals("monitor")) {
			series.append("{name:'Spec',type:'line',yAxisIndex: 0,symbol:'circle',symbolSize:5,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '80%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
		}
		for (int i = 0; i < 3; i++) {
			StringBuffer seriesData=new StringBuffer().append("[");
			seriesData.append(String.valueOf(i)+",");
			if(!listSpec.isEmpty()){
				double dd=Double.parseDouble(listSpec.get(0).get(arrSpeccolumn[i]).toString());
				seriesData.append(String.format("%.1f", dd*100));
			}
			seriesData.append(",'"+arrxData[i]+"',");
			seriesData.append("],");
			series.append(seriesData.toString());
		}
		series.append("[],[],[],[],[],[],[],[],[],[],[],[],[],]},");
		for(int i=0;i<list.size();i++){
			series.append("{name:'");
			series.append(defectCode.get(i+1));
			series.append("',type:'bar',stack:'1',barWidth:'50%',data: [");
			for(int m=0;m<xDataColumn.length;m++){
				StringBuffer seriesData=new StringBuffer().append("[");				
				if(!arrxData[m].equals("")){
					if(list.get(i).get(xDataColumn[m])!=null){
						seriesData.append(String.valueOf(m)+",");
						double dd=Double.parseDouble(list.get(i).get(xDataColumn[m]).toString())*100;
						seriesData.append(String.format("%.1f", dd).toString()+",");
						seriesData.append("'None','"+arrxData[m]+"','None'");
					}
				}
				seriesData.append("],");
				series.append(seriesData.toString());
			}
			series.append("]},");
		}	
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
	
	@RequestMapping(value="/scrapByDepartment")
	public void scrapByDepartment(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String shopName = yieldParam.getProcesstype();
		String productionType = yieldParam.getProductionType();
		String productCategory = yieldParam.getProductCategory();
		String departmentName = yieldParam.getDatatype();
		String deviceType = yieldParam.getDeviceType();
		String specproductCategory = "";
		if (productCategory.contains("5.46QHD")) {
			specproductCategory="5.5QHD";
		}else {
			specproductCategory = productCategory;
		}
		String specFactoryName = yieldParam.getShopName();
		String specDefectType = "LOSS";
		String specDepartment = yieldParam.getDatatype();
		String specFactoryYear = "2018";
		List<Map<String, Object>> listSpec = echartService.getYieldDefectSpec(specproductCategory,productionType,specFactoryName,specDefectType,specDepartment,specFactoryYear);		
		List<Map<String, Object>> listScrap = echartYieldService.getScrapEVENbyDepartment(shopName.substring(3),productCategory,productionType,departmentName+"%");	
		List<Map<String, Object>> listScrapQty = echartYieldService.getScrapEVENbyDepartmentQty(shopName.substring(3),productCategory,productionType,departmentName+"%");
		List<Map<String, Object>> listDate = echartService.getProductionDate();		
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		
		//GET XDATA 横坐标
		StringBuffer xData=new StringBuffer().append("[");
		String[] xDataColumn=new String[]{"MONTH_2","MONTH_1","MONTH_0","","WEEK_3","WEEK_2","WEEK_1","WEEK_0","","DAY_6","DAY_5","DAY_4","DAY_3","DAY_2","DAY_1","DAY_0"};
		String[] arrxData=new String[xDataColumn.length];
		for(int i=0;i<xDataColumn.length;i++){
			if(!xDataColumn[i].equals("")){
				xData.append("'");
				xData.append(listDate.get(0).get(xDataColumn[i]).toString());
				arrxData[i]=listDate.get(0).get(xDataColumn[i]).toString();
				xData.append("',");
			}else{
				xData.append("'',");
				arrxData[i]="";
			}
		}
		xData.append("]");
		
		//Get Defect Code LegendData
		ArrayList<String> defectCode=new ArrayList<String>();
		defectCode.add("Spec");
		StringBuffer legendData=new StringBuffer().append("['Spec',");	
		for (int i = 0; i < listScrap.size(); i++) {
			legendData.append("'"+listScrap.get(i).get("DEFECTCODE").toString()+"',");
			defectCode.add(listScrap.get(i).get("DEFECTCODE").toString());
		}
		legendData.append("]");
		
		//Get series
		StringBuffer series=new StringBuffer().append("[");
		String[] allSpeccolumn=new String[]{"DEFECT_1_PLAN","DEFECT_2_PLAN","DEFECT_3_PLAN","DEFECT_4_PLAN","DEFECT_5_PLAN","DEFECT_6_PLAN","DEFECT_7_PLAN","DEFECT_8_PLAN","DEFECT_9_PLAN","DEFECT_10_PLAN","DEFECT_11_PLAN","DEFECT_12_PLAN"};
		String[] arrSpeccolumn=new String[3];
		String[] xDataColumn1=new String[]{"MONTH_2_NMRTR","MONTH_1_NMRTR","MONTH_0_NMRTR","","WEEK_3_NMRTR","WEEK_2_NMRTR","WEEK_1_NMRTR","WEEK_0_NMRTR","","DAY_6_NMRTR","DAY_5_NMRTR","DAY_4_NMRTR","DAY_3_NMRTR","DAY_2_NMRTR","DAY_1_NMRTR","DAY_0_NMRTR"};
		String[] xDataColumn2=new String[]{"MONTH_2_NMRTR_ALL","MONTH_1_NMRTR_ALL","MONTH_0_NMRTR_ALL","","WEEK_3_NMRTR_ALL","WEEK_2_NMRTR_ALL","WEEK_1_NMRTR_ALL","WEEK_0_NMRTR_ALL","","DAY_6_NMRTR_ALL","DAY_5_NMRTR_ALL","DAY_4_NMRTR_ALL","DAY_3_NMRTR_ALL","DAY_2_NMRTR_ALL","DAY_1_NMRTR_ALL","DAY_0_NMRTR_ALL"};
		String[] xDataColumn3=new String[]{"MONTH_2_DNMTR","MONTH_1_DNMTR","MONTH_0_DNMTR","","WEEK_3_DNMTR","WEEK_2_DNMTR","WEEK_1_DNMTR","WEEK_0_DNMTR","","DAY_6_DNMTR","DAY_5_DNMTR","DAY_4_DNMTR","DAY_3_DNMTR","DAY_2_DNMTR","DAY_1_DNMTR","DAY_0_DNMTR"};	
		int startMonth=Integer.parseInt(arrxData[0].substring(0,2))-1;		
		for(int i=0;i<3;i++){
			arrSpeccolumn[i]=allSpeccolumn[startMonth+i];
		}
		if (deviceType.equals("tv")) {
			series.append("{name:'Spec',type:'line',yAxisIndex: 0,symbol:'circle',symbolSize:10,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '100%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
		} else if(deviceType.equals("monitor")) {
			series.append("{name:'Spec',type:'line',yAxisIndex: 0,symbol:'circle',symbolSize:5,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '80%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
		}
		for (int i = 0; i < 3; i++) {
			StringBuffer seriesData=new StringBuffer().append("[");
			seriesData.append(String.valueOf(i)+",");
			if(!listSpec.isEmpty()){
				double dd=Double.parseDouble(listSpec.get(0).get(arrSpeccolumn[i]).toString());
				seriesData.append(String.format("%.2f", dd*100));
			}
			seriesData.append(",'"+arrxData[i]+"',");
			seriesData.append("],");
			series.append(seriesData.toString());
		}
		series.append("[],[],[],[],[],[],[],[],[],[],[],[],[],]},");
		if (listScrap.size()!=0) {
			for (int i = 0; i < listScrap.size(); i++) {
				StringBuffer seriesItem=new StringBuffer();
				seriesItem.append("{name:'");
				seriesItem.append(defectCode.get(i+1));
				seriesItem.append("',type: 'bar',stack: '1',barWidth:'50%',data: [");
				for (int j = 0; j < xDataColumn.length; j++) {
					if (!xDataColumn[j].equals("")) {
						if (!listScrap.get(i).get(xDataColumn[j]).toString().equals("0")) {
/*							seriesItem.append("["+String.valueOf(j)+",");
							seriesItem.append(listScrap.get(i).get(xDataColumn[j]).toString());
							seriesItem.append(",0,'");
							seriesItem.append(arrxData[j]+"',0]");*/
							seriesItem.append("["+String.valueOf(j)+",");
							seriesItem.append(listScrap.get(i).get(xDataColumn[j]).toString());
							seriesItem.append(","+listScrapQty.get(i).get(xDataColumn1[j]).toString()+",'");
							seriesItem.append(arrxData[j]+"',");
							seriesItem.append(listScrapQty.get(i).get(xDataColumn2[j]).toString()+",");
							seriesItem.append(listScrapQty.get(i).get(xDataColumn3[j]).toString()+"]");
						}
					}
					seriesItem.append(",");
				}
				seriesItem.append("]},");
				series.append(seriesItem.toString());
			}
		}			
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
