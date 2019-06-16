package com.boe.idm.project.controller.echart;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boe.utils.json.JsonUtils;
import com.boe.idm.project.model.YieldParam;
import com.boe.idm.project.service.impl.echart.*;

@RestController
@RequestMapping("/api/CassetteUseStatus")
public class CassetteUseStatusController extends  JsonUtils {

	@Autowired
	private EchartCassetteUseStatusServiceImpl EchartCassetteUseStatusServiceImpl;
	
	@Autowired
	private EchartCommonUseServiceImpl EchartCommonUseServiceImpl;
	
	    
	@RequestMapping("/CSTUseStatusBPWIPAndBANK")
	public void CSTUseStatusBPWIPAndBANK(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false)YieldParam yieldParam){
		
		String FactoryName =yieldParam.getShopName(); 
		String DataType =yieldParam.getDatatype(); 
		List<Map<String, Object>> listfortoday = EchartCommonUseServiceImpl.getmonthweekdaytimedata();
		String 	FactoryDate = listfortoday.get(0).get("DATETIME").toString();
		
		List<Map<String, Object>> ListAllData = EchartCassetteUseStatusServiceImpl.CSTUseStatusWipBank(FactoryDate,DataType,FactoryName);
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		StringBuffer xdata = new StringBuffer();
		StringBuffer legenddata = new StringBuffer();
		StringBuffer series = new StringBuffer();
		
		String[] ProductTypeForCheck = {"Engineer","Develop","Production","TPCN","PV","Dummy"};
		int[] SeriesIndex ={0,0,1,1,1,2};
		
		//legenddata
		legenddata.append("[");
		for(int i = 0;i<ListAllData.size();i++){
			legenddata.append("'");
			legenddata.append(ListAllData.get(i).get("PRODUCTIONTYPE").toString());
			legenddata.append("',");
		}
		legenddata.append("]");
		
		//xdata
		xdata.append("["+"'Engineer&Develop',"+"'PRO&TPCN&PV',"+"'Dummy'"+"]");
		
		//series
		series.append("[");
		for(int j = 0;j<ProductTypeForCheck.length;j++){
			series.append("{name:'");
			series.append(ProductTypeForCheck[j]+"',");
			series.append("type:'bar',stack: '1',barWidth:'50%',data:[");
			for(int i=0;i<ListAllData.size();i++){
				if(ListAllData.get(i).get("PRODUCTIONTYPE").toString().equals(ProductTypeForCheck[j])){
					series.append("[");
					series.append(SeriesIndex[j]+",");
					series.append(ListAllData.get(i).get("USEQTY").toString());
					series.append("],");
				}
			}
			series.append("]},");
		}
		series.append("{name:'总和', type: 'scatter',yAxisIndex:0,symbolSize: 8,label: {normal: {show: true,position: 'top',fontSize: '80%',formatter: function(obj) {var value = obj.value;return value[1]},fontWeight:'bold',}},data:[");
	    int TotoalQTY = 0;
	    int Pointindex = 0;
		for(int i=0;i<ProductTypeForCheck.length;i++){
			boolean isExit = false;
			for(int j =0;j<ListAllData.size();j++){
	             if(ListAllData.get(j).get("PRODUCTIONTYPE").toString().equals(ProductTypeForCheck[i])){
	            	 isExit =true;
		     	     TotoalQTY += Integer.parseInt(ListAllData.get(j).get("USEQTY").toString()); 
		     	     if(i == 1||i == 4||i == 5){
	                    series.append("[");
	                    series.append(Pointindex+",");
	                    series.append(TotoalQTY+",");
		     	    	series.append("],");
		     	    	Pointindex +=1;
		     	    	TotoalQTY =0;
		     	     }
		     	}
			}
			if(!isExit){
				 if(i == 1||i == 4||i == 5){
	                 series.append("[");
	                 series.append(Pointindex+",");
	                 series.append(TotoalQTY+",");
		     	    	series.append("],");
		     	    	Pointindex +=1;
		     	    	TotoalQTY =0;
		     	     }
			}
		}
		series.append("]}");
		series.append("]");
		
		result.put("xdata", xdata.toString());
		result.put("legenddata", legenddata.toString());
		result.put("series", series.toString());
		
		/*//getUsername
		List<Map<String, Object>> listDate=EchartCommonUseServiceImpl.getProductionDate();
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
			// TODO: handle exception
		}
		
	}
	
	@RequestMapping("CSTUseStatusDummy")
	public void CSTUseStatusDummy(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false)YieldParam yieldParam){
		String FactoryName =yieldParam.getShopName(); 
		List<Map<String, Object>> listfortoday = EchartCommonUseServiceImpl.getmonthweekdaytimedata();
		String 	FactoryDate = listfortoday.get(0).get("DATETIME").toString();
		String DataType =yieldParam.getDatatype(); 
	    List<Map<String, Object>> ListAllData = EchartCassetteUseStatusServiceImpl.CSTUseStatusWipBank(FactoryDate,DataType,FactoryName);
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		StringBuffer xdata = new StringBuffer();
		StringBuffer legenddata = new StringBuffer();
		StringBuffer series = new StringBuffer();
		
		String[] Description = new String[ListAllData.size()];
		//xdata
		xdata.append("[");
		for(int i =0;i<ListAllData.size();i++){
			if(ListAllData.get(i).get("DESCRIPTION").toString().length() > 24){
				xdata.append("'Sputter',");
		    }else{
			    xdata.append("'");
				xdata.append(ListAllData.get(i).get("DESCRIPTION").toString());
				xdata.append("',");
			}
			Description[i] = ListAllData.get(i).get("DESCRIPTION").toString();
		 }
	    xdata.append("]");	
		
	    //legenddata
	    legenddata.append("["+"'CST QTY'"+"]");
	    
	    //series
	    series.append("[{name:'CST QTY',color:'#DE9C53',type:'bar',stack: '1',barWidth:'40%',data:[");//label: {normal: {show: true,position: 'top',fontSize: '100%',color:'black',formatter: function(obj) {var value = obj.value;return value[1]},}},
	    for(int i =0;i<Description.length;i++){
			for(int j =0;j<ListAllData.size();j++){
				if(Description[i].equals(ListAllData.get(j).get("DESCRIPTION").toString())){
					series.append("[");
					series.append(i+",");
					series.append(ListAllData.get(j).get("USEQTY").toString());
					series.append("],");
				}
			}
		}
	    series.append("]},");
	    
	    series.append("{name:'总和', type: 'scatter',yAxisIndex:0,symbolSize: 8,label: {normal: {show: true,position: 'top',fontSize: '80%',formatter: function(obj) {var value = obj.value;return value[1]},fontWeight:'bold',}},data:[");
	    for(int i =0;i<Description.length;i++){
			for(int j =0;j<ListAllData.size();j++){
				if(Description[i].equals(ListAllData.get(j).get("DESCRIPTION").toString())){
					series.append("[");
					series.append(i+",");
					series.append(ListAllData.get(j).get("USEQTY").toString());
					series.append("],");
				}
			}
		}
	    series.append("]}");
	    
	    series.append("]");
	    
	    result.put("xdata", xdata);
	    result.put("legenddata", legenddata);
	    result.put("series", series);
	    
	  /*//getUsername
		List<Map<String, Object>> listDate=EchartCassetteUseStatusServiceImpl.getProductionDate("nameStr");
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
			// TODO: handle exception
		}
	}
	
	
}
