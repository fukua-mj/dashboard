package com.boe.idm.project.controller.echart;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boe.utils.json.JsonUtils;

import net.sf.json.JSONArray;
import com.boe.idm.project.model.YieldParam;
import com.boe.idm.project.service.impl.system.LossIndexServiceImpl;
import com.boe.idm.project.service.impl.echart.*;


@RestController
@RequestMapping(value="/api/LossIndex")
public class LossIndexController extends JsonUtils{

	@Autowired
	private LossIndexServiceImpl LossIndexServiceImpl;
	
	@Autowired
	private EchartCommonUseServiceImpl EchartCommonUseServiceImpl;
	
	
	public String[] getMonthWeekDayForCheck(){
		   String[]  DateTime = new String[16];
		   StringBuffer xdata = new StringBuffer();
		   List<Map<String, Object>>listday = EchartCommonUseServiceImpl.getmonthweekdaytimedata();
		   
		   int DateLength = 0;
		   xdata.append("[");
			//month
			for(int i = 2 ;i>=0;i--){
				
				xdata.append("'"+listday.get(i).get("DATEMONTH").toString().substring(4,6)+"M',");
				DateTime[DateLength] = listday.get(i).get("DATEMONTH").toString();
				DateLength +=1;
				
			}
			DateTime[DateLength] = "";
			xdata.append("'',");
			DateLength +=1;
			//week
			for(int i = 3 ;i>=0;i--){
				
				xdata.append("'"+listday.get(i).get("DATEWEEK").toString().substring(4,6)+"W',");
				DateTime[DateLength] = listday.get(i).get("DATEWEEK").toString();
				DateLength +=1;
				
			}
			DateTime[DateLength] = "";
			xdata.append("'',");
			DateLength +=1;
			//day
			for(int i = 6;i>=0;i--){
				
				xdata.append("'"+listday.get(i).get("DATETIME").toString().substring(4,6)+"/"+listday.get(i).get("DATETIME").toString().substring(6,8)+"',");
				DateTime[DateLength] = listday.get(i).get("DATETIME").toString();
				DateLength +=1;
				
			}
			xdata.append("]");
		   
		   return DateTime;
	   }
	
	public StringBuffer getMonthWeekDayForxdata(){
		   String[]  DateTime = new String[16];
		   StringBuffer xdata = new StringBuffer();
		   List<Map<String, Object>>listday = EchartCommonUseServiceImpl.getmonthweekdaytimedata();
		   
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
		   
		   return xdata;
	   }
	
	@RequestMapping(value="/getPanelLossCategory")
	public void getPanelLossCategory(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false)YieldParam yieldParam) {
		String DataType = yieldParam.getDatatype();
		String FactoryName = yieldParam.getShopName();
		String ProductionType = yieldParam.getProductionType();
		List<Map<String, Object>> list = LossIndexServiceImpl.getPanelLossCategory(DataType,FactoryName,ProductionType);
		
		JSONArray result = new JSONArray();
		
		for(int i = 0 ;i<list.size();i++){
			result.add(list.get(i).get("PRODUCTCATEGORY").toString());
		}
		
		try{
			writeJSON(response, result);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
	@RequestMapping(value="/getPanelLossData")
	public void getPanelLossData(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false)YieldParam yieldParam) {
		
		String DataType = yieldParam.getDatatype();
		String FactoryName = yieldParam.getShopName();
		String ProductionCategory = yieldParam.getProductCategory();
		String ProductionType = yieldParam.getProductionType();
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		List<Map<String, Object>> listlegend = LossIndexServiceImpl.getPanelLossLegenddata(DataType,FactoryName,ProductionType,ProductionCategory);
		List<Map<String, Object>> listBarData = LossIndexServiceImpl.getPanelLossAllData(DataType,FactoryName,ProductionType,ProductionCategory);
		List<Map<String, Object>> listLineData = LossIndexServiceImpl.getPanelLossAllData("LossRatio",FactoryName,ProductionType,ProductionCategory);
		
		StringBuffer xdata = new StringBuffer();
		StringBuffer legenddata = new StringBuffer();
		StringBuffer series = new StringBuffer();
		
		String[] xdatatime = getMonthWeekDayForCheck();
		String[] xdatatype = {"MONTH","MONTH","MONTH","","WEEK","WEEK","WEEK","WEEK","","DAY","DAY","DAY","DAY","DAY","DAY","DAY",};
		String[] legend = new String[listlegend.size()];
		//xdata
		xdata = getMonthWeekDayForxdata();
		
		//legenddata
		legenddata.append("['Ratio',");
		for(int i =0; i<listlegend.size();i++){
			legenddata.append("'"+listlegend.get(i).get("SCRAPCODE").toString()+"',");
			legend[i] = listlegend.get(i).get("SCRAPCODE").toString();
		}
		legenddata.append("]");
		
		series.append("[");
		//series bardata
		for(int i = 0; i<legend.length;i++){
			series.append("{name:'");
			series.append(legend[i]+"',");
			series.append("type:'bar',stack: '1',barWidth:'50%',data:[");
			for(int j = 0;j<listBarData.size();j++){
				if(legend[i].equals(listBarData.get(j).get("SCRAPCODE").toString())){
					for(int m = 0;m<xdatatime.length;m++){
						if(m==3||m==8){
							m+=1;
						}
						if(xdatatime[m].endsWith(listBarData.get(j).get("DATETIME").toString()) && xdatatype[m].equals(listBarData.get(j).get("DATETYPE").toString())){
							series.append("["+m+",");
							series.append(listBarData.get(j).get("SCRAPQTY").toString()+",");
							String NotYield = String.format("%.2f", Math.ceil(Double.parseDouble(listBarData.get(j).get("NOTYIELD").toString())*10000)/100);
							series.append(NotYield+",");
							series.append(listBarData.get(j).get("AGINGOUTQTY").toString()+",");
							series.append("],");
						}
				}
				
			}	
		  }
		series.append("]");	
		series.append("},");
		}
		
		//linedata
		series.append("{name:'Ratio',type:'line',yAxisIndex:1,symbol:'circle',symbolSize:7,smooth:true,label: {normal: {show: true,position: 'top',fontSize: '70%',formatter: function(obj) {var value = obj.value;return value[1] + '%'},fontWeight:'bold',}},data:[");
		for(int i = 0;i<xdatatime.length;i++){
			for(int j = 0;j<listLineData.size();j++){
				if(i==3||i==8 ){
					series.append("["+i+",,,"+"],");
					i+=1;
				}
				if(xdatatime[i].equals(listLineData.get(j).get("DATETIME").toString()) && xdatatype[i].equals(listLineData.get(j).get("DATETYPE").toString())){
					series.append("[");
					series.append(i+",");
					String NotYield = String.format("%.2f", Math.ceil(Double.parseDouble(listLineData.get(j).get("NOTYIELD").toString())*10000)/100);
					series.append(NotYield+",");
					series.append(listLineData.get(j).get("SCRAPQTY").toString()+",");
					series.append(listLineData.get(j).get("AGINGOUTQTY").toString());
					series.append("],");
				}
			}	
			
		}
		series.append("]},");
		
		series.append("{name:'过货量',type: 'bar',yAxisIndex: 2,xAxisIndex: 1,color:'#C4C4C4',barWidth: '85%',label: {normal: {show: true,position: 'inside',fontSize: '70%',color:'black',formatter: function(obj) {var value = obj.value;return value[2]},}},data:[");
		for(int i = 0;i<xdatatime.length;i++){
			boolean isExit = false;
			for(int j = 0;j<listLineData.size();j++){
				if(i==3||i==8 ){
					series.append("["+i+",,,"+"],");
					i+=1;
				}
				if(xdatatime[i].equals(listLineData.get(j).get("DATETIME").toString()) && xdatatype[i].equals(listLineData.get(j).get("DATETYPE").toString())){
					isExit = true;
					series.append("[");
					series.append(i+",");
					series.append(1+",");
					//String NotYield = String.format("%.2f", Math.ceil(Double.parseDouble(listLineData.get(j).get("NOTYIELD").toString())*10000)/100);
					//series.append(NotYield+",");
					series.append(listLineData.get(j).get("AGINGOUTQTY").toString()+",");
					series.append(listLineData.get(j).get("AGINGOUTQTY").toString()+",");
					series.append(listLineData.get(j).get("AGINGOUTQTY").toString()+",");
					series.append("],");
				}
			}	
			if(!isExit){
			   series.append("["+i+","+1+",0,0,0,"+"],");
				
			}
		
		}
		series.append("]},");
		
		
		
		series.append("]");
		
		result.put("xdata", xdata);
		result.put("legenddata", legenddata);
		result.put("series", series);
		
	       /*//getUsername
			List<Map<String, Object>> listDate=LossIndexServiceImpl.getProductionDate("nameStr");
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
	
}
