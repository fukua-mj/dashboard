package com.boe.idm.project.service.impl.echart;

import com.boe.idm.project.mapper.primary.chart.YiFaTongMapper;
import com.boe.idm.project.service.echart.EchartYIFaTongService;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;

import org.apache.coyote.http11.filters.VoidInputFilter;
import org.springframework.stereotype.Service;

@Service
public class EchartYiFaTongServiceImpl implements EchartYIFaTongService{

	@Resource
	private YiFaTongMapper YiFaTongMapper;
	
	@Override
	public List<Map<String, Object>>getYiFaTongGirdData(String DefectDataType,String Productiontype,String DateTime,String Oper_Desc,String ProductCategory){
		return YiFaTongMapper.getYiFaTongGirdData(DefectDataType,Productiontype,DateTime,Oper_Desc,ProductCategory);
	}
	
	@Override
	public List<Map<String, Object>>getYiFaTongCategoryData(String DefectDataType,String Productiontype,String DateTime,String Oper_Desc){
		return YiFaTongMapper.getYiFaTongCategoryData(DefectDataType,Productiontype,DateTime,Oper_Desc);
	}
	
	@Override
	public List<Map<String, Object>>getyifatongmaildata(String Oper_Desc){
		return YiFaTongMapper.getyifatongmaildata(Oper_Desc);
	}
	
	@Override
	public List<Map<String, Object>>getmonthweekdaytimedata(){
		return YiFaTongMapper.getmonthweekdaytimedata();
	}
	
	@Override
	public List<Map<String, Object>>selectfromYIFATONG(String OPERA_DESC,String PRODUCTIONCATEGORY){
		return YiFaTongMapper.selectfromYIFATONG(OPERA_DESC,PRODUCTIONCATEGORY);
	}
	
	@Override
	public void deleteYiFaYTongData() {
		this.YiFaTongMapper.deleteYiFaYTongData();
	}
	
	@Override 
	public void insertYiFaTongData(String FACTORYNAME,String OPERA_DESC,String DEFECTCODE,String NOTYIELD_NOW,String NOTYIELD_QTY,String NOTYIELD_NOW_Q,String NOTYIELD_QTY_Q,String PRODUCTIONCATEGROY) {
		this.YiFaTongMapper.insertYiFaTongData(FACTORYNAME,OPERA_DESC,DEFECTCODE,NOTYIELD_NOW,NOTYIELD_QTY,NOTYIELD_NOW_Q,NOTYIELD_QTY_Q,PRODUCTIONCATEGROY);
	}
	
	@Override
	public List<Map<String, Object>>GetYiFaTongMailCheckDoNotSendData(String Oper_Desc,String FactoryName,String DefectCode,String ProductionType,String ProductionCategory,String TimeKey){
		return YiFaTongMapper.GetYiFaTongMailCheckDoNotSendData(Oper_Desc,FactoryName,DefectCode,ProductionType,ProductionCategory,TimeKey);
		
	}
	
	@Override
	public void insertintoYiFaTongMailHappendData(String Oper_Desc,String FactoryName,String DefectCode,String ProductionType,String ProductionCategory,String TimeKey) {
		this.YiFaTongMapper.insertintoYiFaTongMailHappendData(Oper_Desc,FactoryName,DefectCode,ProductionType,ProductionCategory,TimeKey);
	}
	
	@Override
	public void DeleteCheckYiFaTongHapendData(String TimeKey) {
		this.YiFaTongMapper.DeleteCheckYiFaTongHapendData(TimeKey);
	}
	
	@Override
	public List<Map<String, Object>>GetYiFaTongForWebSocket(String TimeKey){
		return YiFaTongMapper.GetYiFaTongForWebSocket(TimeKey);
	}
	
	
	
}
