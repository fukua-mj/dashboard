package com.boe.idm.project.controller.echart;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections.map.HashedMap;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.boe.idm.project.model.YieldParam;
import com.boe.idm.project.service.impl.echart.EchartYiFaTongServiceImpl;
import com.boe.utils.json.JsonUtils;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;



@RestController
@RequestMapping("/api/YiFaTong")
public class YiFaTongController extends JsonUtils{

	private static final Logger logger = LoggerFactory.getLogger(YiFaTongController.class);
	
	@Autowired
	private EchartYiFaTongServiceImpl EchartYiFaTongServiceImpl;
	
	@RequestMapping("/YiFaTongForGetCategory")
	public void YiFaTongForGetCategory(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false) YieldParam yieldParam)throws Exception {
		   
		    String DefectDataType = yieldParam.getDatatype();
			String Productiontype = yieldParam.getProductionType();
			
			String Oper_Desc = yieldParam.getOperationName();
			
			String DateTime = new String();
			List<Map<String, Object>> listforDay =  EchartYiFaTongServiceImpl.getmonthweekdaytimedata();
			if(request.getParameter("DateTime")==null||request.getParameter("DateTime").equals("")){
				DateTime = listforDay.get(0).get("DATETIME").toString();
			}else{
				 DateTime = yieldParam.getDate();
			}
			
			List<String> ProductCategory = new ArrayList<>();
			
			Map<String, Object>   result = new HashMap<String, Object>();
			List<Map<String, Object>> list = EchartYiFaTongServiceImpl.getYiFaTongCategoryData(DefectDataType,Productiontype,DateTime,Oper_Desc);	
			for(int i = 0;i<list.size();i++){
				ProductCategory.add(list.get(i).get("PRODUCTCATEGORY").toString());
			}
		
			JSONArray DayButton = new JSONArray();
			for(int i =6;i>=0;i--){
				JSONObject buttonTemp = new JSONObject();
				buttonTemp.put("label", listforDay.get(i).get("DATETIME").toString().substring(0,4)+"年"+listforDay.get(i).get("DATETIME").toString().substring(4,6)+"月"+listforDay.get(i).get("DATETIME").toString().substring(6,8)+"日");
				buttonTemp.put("value", listforDay.get(i).get("DATETIME").toString());
				
				DayButton.add(buttonTemp);
			}
			
			result.put("DayButton",DayButton);
			result.put("ProductCategory",ProductCategory);
			
			try{
				writeJSON(response, result);
			}catch(Exception e){
				e.printStackTrace();
			}
	}
	
	@RequestMapping("/YiFaTongForGetData")
	public void YiFaTongForGetData(HttpServletRequest request,HttpServletResponse response,@RequestBody(required=false) YieldParam yieldParam)throws Exception {
		
		String DefectDataType = yieldParam.getDatatype();
		String Productiontype = yieldParam.getProductionType();
		String DateTime = new String();
		List<Map<String, Object>> listforDay =  EchartYiFaTongServiceImpl.getmonthweekdaytimedata();
		if(yieldParam.getDate()==null||yieldParam.getDate().equals("")){
			DateTime = listforDay.get(1).get("DATETIME").toString();
		}else{
			 DateTime = yieldParam.getDate();
		}
		String Oper_Desc = yieldParam.getOperationName();
		String ProductCategory = yieldParam.getProductCategory();
			
		List<Map<String, Object>> list = EchartYiFaTongServiceImpl.getYiFaTongGirdData(DefectDataType,Productiontype,DateTime,Oper_Desc,ProductCategory);
		List<Map<String, Object>> listQdata = EchartYiFaTongServiceImpl.selectfromYIFATONG(Oper_Desc,ProductCategory);
		
        JSONArray resultTemp = new JSONArray();
		
		//for yifatong
		int YesTimes = 0;
		for(int i = 0;i<list.size();i++){
			boolean NotExit = true ;
			boolean DBEixt = false;
			double NotYield = Math.ceil( Double.parseDouble(list.get(i).get("DYIELD").toString())*10000);//放大一万取整
			NotYield = NotYield/100;
			String DYield = String.format("%.2f", NotYield);
			
			double TotalQTY = Double.parseDouble(list.get(i).get("TOTALQTY").toString());
		
			for(int m =0;m<listQdata.size();m++){
				 if(list.get(i).get("DESCRIPTION").toString().equals(listQdata.get(m).get("DEFECTCODE").toString())){
					 DBEixt = true ;
					 if(NotYield > Double.parseDouble(listQdata.get(m).get("NOTYIELD_NOW_Q").toString()) && TotalQTY > Double.parseDouble(listQdata.get(m).get("NOTYIELD_QTY_Q").toString())){
				                NotExit = false;
				                YesTimes +=1;
				        		JSONObject rowData = new JSONObject();
				                rowData.put("Happend", "Yes");
								if(listQdata.get(m).get("FACTORYNAME")==null||listQdata.get(m).get("FACTORYNAME").equals("")){
									rowData.put("FactoryName","NotExit");
									logger.error("YiFaTong Null Value FACTORYNAME");
								}else{
							        rowData.put("FactoryName", listQdata.get(m).get("FACTORYNAME").toString());
								}
								if(listQdata.get(m).get("NOTYIELD_NOW_Q")==null||listQdata.get(m).get("NOTYIELD_NOW_Q").equals("")){
									rowData.put("StandYield", "NotExit");
									logger.error("YiFaTong Null Value NOTYIELD_NOW_Q");
								}else{
									rowData.put("StandYield", listQdata.get(m).get("NOTYIELD_NOW_Q").toString()+"%");
								}
								if(listQdata.get(m).get("NOTYIELD_QTY_Q")==null||listQdata.get(m).get("NOTYIELD_QTY_Q").equals("")){
									rowData.put("StandQTY", "NotExit");
									logger.error("YiFaTong Null Value NOTYIELD_QTY_Q");
								}else{
									rowData.put("StandQTY", listQdata.get(m).get("NOTYIELD_QTY_Q").toString());
								} 
								rowData.put("DefectName", list.get(i).get("DESCRIPTION").toString());
								rowData.put("NowYield", DYield+"%");
								rowData.put("NowQTY", TotalQTY);
								rowData.put("YesNo", "true");
								
								resultTemp.add(rowData);
								break;
						}
					 }
			  }	
			 if(NotExit && !DBEixt){
				 if(NotYield > 0.5 && TotalQTY > Double.parseDouble(listQdata.get(0).get("NOTYIELD_QTY_Q").toString()) ){
					    YesTimes +=1;
						JSONObject rowData = new JSONObject();
					    rowData.put("Happend", "Yes");
					    rowData.put("FactoryName","未导入"); 
					    rowData.put("StandYield", "0.5"+"%");
					    String NotExitQTY = "";
					    if(listQdata.get(0).get("NOTYIELD_QTY_Q") ==null|| listQdata.get(0).get("NOTYIELD_QTY_Q").equals("")) {
					    	NotExitQTY = "2000";
					    }else {
					    	NotExitQTY = listQdata.get(0).get("NOTYIELD_QTY_Q").toString();
					    }
					    rowData.put("StandQTY",NotExitQTY);
					    rowData.put("DefectName", list.get(i).get("DESCRIPTION").toString());
					    rowData.put("NowYield", DYield+"%");
					    rowData.put("NowQTY", TotalQTY);
						rowData.put("YesNo", "true");
					    
					    resultTemp.add(rowData);
				 }
			 }
		}

		
	//for not yifatong
		for(int i = 0;i<list.size();i++){
			boolean NotExit = true ;
			boolean DBEixt = false;
			double NotYield = Math.ceil( Double.parseDouble(list.get(i).get("DYIELD").toString())*10000);//放大一万取整
			NotYield = NotYield/100;
			String DYield = String.format("%.2f", NotYield);
			double TotalQTY = Double.parseDouble(list.get(i).get("TOTALQTY").toString());
		
			for(int m =0;m<listQdata.size();m++){
				 if(list.get(i).get("DESCRIPTION").toString().equals(listQdata.get(m).get("DEFECTCODE").toString())){
					 if(NotYield < Double.parseDouble(listQdata.get(m).get("NOTYIELD_NOW_Q").toString()) || TotalQTY < Double.parseDouble(listQdata.get(m).get("NOTYIELD_QTY_Q").toString())){
				                NotExit = false;	
				        		JSONObject rowData = new JSONObject();
				                rowData.put("Happend", "No");
				                
								if(listQdata.get(m).get("FACTORYNAME")==null||listQdata.get(m).get("FACTORYNAME").equals("")){
									rowData.put("FactoryName","NotExit");
									logger.error("YiFaTong Null Value FACTORYNAME");
								}else{
									 rowData.put("FactoryName", listQdata.get(m).get("FACTORYNAME").toString());
								}
								if(listQdata.get(m).get("NOTYIELD_NOW_Q")==null||listQdata.get(m).get("NOTYIELD_NOW_Q").equals("")){
									rowData.put("StandYield", "NotExit");
									logger.error("YiFaTong Null Value NOTYIELD_NOW_Q");
								}else{
									rowData.put("StandYield", listQdata.get(m).get("NOTYIELD_NOW_Q").toString()+"%");
								}
								if(listQdata.get(m).get("NOTYIELD_QTY_Q")==null||listQdata.get(m).get("NOTYIELD_QTY_Q").equals("")){
									rowData.put("StandQTY", "NotExit");
									logger.error("YiFaTong Null Value NOTYIELD_QTY_Q");
								}else{
									rowData.put("StandQTY", listQdata.get(m).get("NOTYIELD_QTY_Q").toString());
								} 
								rowData.put("DefectName", list.get(i).get("DESCRIPTION").toString());
								rowData.put("NowYield", DYield+"%");
								rowData.put("NowQTY", TotalQTY);
								
								resultTemp.add(rowData);
								break;
						}
					 }
				 
			  }	
			if(NotExit && !DBEixt){
				 if(NotYield < 0.5 || TotalQTY < Double.parseDouble(listQdata.get(0).get("NOTYIELD_QTY_Q").toString()) ){
						JSONObject rowData = new JSONObject();
					    rowData.put("Happend", "No");
					    rowData.put("FactoryName","未导入"); 
					    rowData.put("StandYield", "0.5"+"%");
					    String NotExitQTY = "";
					    if(listQdata.get(0).get("NOTYIELD_QTY_Q") ==null|| listQdata.get(0).get("NOTYIELD_QTY_Q").equals("")) {
					    	NotExitQTY = "2000";
					    }else {
					    	NotExitQTY = listQdata.get(0).get("NOTYIELD_QTY_Q").toString();
					    }
					    rowData.put("StandQTY",NotExitQTY);
					    rowData.put("DefectName", list.get(i).get("DESCRIPTION").toString());
					    rowData.put("NowYield", DYield+"%");
					    rowData.put("NowQTY", TotalQTY);
					    
						resultTemp.add(rowData);
				 }
			 }
		}
		
		try{
			writeJSON(response, resultTemp);		
		}catch(Exception e){
			writeJSON(response, resultTemp);
			e.printStackTrace();
		}
	}
	
@RequestMapping("/getYiFaTongExcelData")	
public void getYiFaTongExcelData(HttpServletRequest request,HttpServletResponse response,@RequestParam("file")MultipartFile file) throws Exception {
	
	
	
	Map<String, Object> result = new HashMap<String, Object>();
	//获得输入流
	InputStream is = file.getInputStream();
	//创建工作蒲
	 Workbook  WK = null;
	if(file.getOriginalFilename().contains(".xlsx")){
	     WK = new XSSFWorkbook(is);
	}else {
		 WK = new HSSFWorkbook(is);
	}		
	//获得第一个sheet
    //	Sheet sheet = WK.getSheetAt(2);
	
    String[]  SheetName = {"异发通基准信息_CUT","异发通基准信息_Aging","异发通基准信息_AET","异发通基准信息_EAPP"};
    String[]  Opera_Desc = {"CUT","Aging","AET","EAPP"};
 //   EchartYiFaTongServiceImpl.deleteYiFaYTongData();	
    for(int SheetNum = 0;SheetNum<SheetName.length;SheetNum++){
	 
	Sheet sheet = WK.getSheet(SheetName[SheetNum]);
	//获得内容体的List
	//List<List<String>> bodyList = new ArrayList<List<String>>();
	//用于临时存放的List
	//List<String>  tempList;
	String[] Data =new String[]{"不良名","基准不良率/%","基准投入母数","责任工厂","产品类型"};
	int[] DataNum = new int[Data.length];
	int mm = 0 ;
			
	//取得行index
	int LineNum = 0;
	boolean isExit = false;
	for(int i = 0;i<sheet.getLastRowNum()+1;i++){
		Row rowForgetLineNum = sheet.getRow(i);	
		for(int j = 0;j<rowForgetLineNum.getLastCellNum()+1;j++){
			if(rowForgetLineNum.getCell(j).toString().equals("不良名")){
				LineNum = i;
				isExit = true;
				break;
			}	
		}
        if(isExit){
        	break;
        }
	}
	
	Row rowForCheck = sheet.getRow(LineNum);
	//取得列index
	for(int i = 0;i<Data.length;i++){
		for(int j = 0;j<rowForCheck.getLastCellNum()+1;j++){
			
			if(rowForCheck.getCell(j)==null||rowForCheck.getCell(j).equals("")){
				
			}else{
				
			if(Data[i].equals(rowForCheck.getCell(j).toString())){
				DataNum[mm] = j;
				mm +=1;
				break;
			}	
		  }
		}
	}
 GetExcelMapData(Opera_Desc[SheetNum],sheet,Data,DataNum,LineNum);
}
 result.put("Message", "导入成功");
 try{
	 writeJSON(response, result);
 }catch(Exception e){
	 writeJSON(response, "Sorry,导入失败，请联系管理员");
	 e.printStackTrace();
 }
}

private void GetExcelMapData(String Opera_DESC,Sheet sheet,String[] CellName,int[] CellNum,int LineNumber) throws IOException{
	
	for(int i = LineNumber+1;i<sheet.getLastRowNum()+1;i++){
		    Row row = sheet.getRow(i);
		    //get NotYieldName,Name为空直接退出
			if(row.getCell(CellNum[0]) == null||row.getCell(CellNum[0]).equals("")||row.getCell(CellNum[1]) == null||row.getCell(CellNum[1]).equals("")||row.getCell(CellNum[2]) == null||row.getCell(CellNum[2]).equals("")||row.getCell(CellNum[3]) == null||row.getCell(CellNum[3]).equals("")||row.getCell(CellNum[4]) == null||row.getCell(CellNum[4]).equals("")){
				break;
			}
			String NotYieldName = row.getCell(CellNum[0]).toString();
			
			String NotYieldStard = "";
			if(row.getCell(CellNum[1]) == null||row.getCell(CellNum[1]).equals("")){	
				String message = "Line:"+i+"Row:"+CellNum[1]+"is Null";
				logger.error(message);
				NotYieldStard = "This is Null";
			}else{
				 NotYieldStard = row.getCell(CellNum[1]).toString();
			}
			
			String NotYieldQTYStard = "";
			if(row.getCell(CellNum[2]) == null||row.getCell(CellNum[2]).equals("")){	
				String message = "Line:"+i+"Row:"+CellNum[2]+"is Null";
				logger.error(message);
				NotYieldQTYStard = "This is Null";
			}else{
				NotYieldQTYStard = row.getCell(CellNum[2]).toString();
			}
			 
			String NotYieldFactoryName = "";
			if(row.getCell(CellNum[3]) == null||row.getCell(CellNum[3]).equals("")){	
				String message = "Line:"+i+"Row:"+CellNum[3]+"is Null";
				logger.error(message);
				NotYieldFactoryName = "This is Null";
			}else{
				NotYieldFactoryName = row.getCell(CellNum[3]).toString();
			}
			
			String ProductionCategory = "";
			if(row.getCell(CellNum[4]) == null||row.getCell(CellNum[4]).equals("")){	
				String message = "Line:"+i+"Row:"+CellNum[4]+"is Null";
				logger.error(message);
				ProductionCategory = "This is Null";
			}else{
				ProductionCategory = row.getCell(CellNum[4]).toString();
			}
			
		//	EchartYiFaTongServiceImpl.insertYiFaTongData(NotYieldFactoryName,Opera_DESC,NotYieldName,"","",NotYieldStard,NotYieldQTYStard,ProductionCategory);
		}
}
	
}
