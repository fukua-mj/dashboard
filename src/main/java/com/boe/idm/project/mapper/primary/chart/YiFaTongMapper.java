package com.boe.idm.project.mapper.primary.chart;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;


@Mapper
public interface YiFaTongMapper {

	List<Map<String, Object>>getYiFaTongGirdData(@Param(value="DefectDataType")String DefectDataType,@Param(value="Productiontype")String Productiontype,@Param(value="DateTime")String DateTime,@Param(value="Oper_Desc")String Oper_Desc,@Param(value="ProductCategory")String ProductCategory);
	List<Map<String, Object>>getYiFaTongCategoryData(@Param(value="DefectDataType")String DefectDataType,@Param(value="Productiontype")String Productiontype,@Param(value="DateTime")String DateTime,@Param(value="Oper_Desc")String Oper_Desc);
	List<Map<String, Object>>getyifatongmaildata(@Param(value="Oper_Desc")String Oper_Desc);
	List<Map<String, Object>>getmonthweekdaytimedata();
	List<Map<String, Object>>selectfromYIFATONG(@Param(value="OPERA_DESC")String OPERA_DESC,@Param(value="PRODUCTIONCATEGORY")String PRODUCTIONCATEGORY);
	void insertYiFaTongData(@Param(value="FACTORYNAME")String  FACTORYNAME,@Param(value="OPERA_DESC")String  OPERA_DESC,@Param(value="DEFECTCODE")String  DEFECTCODE,@Param(value="NOTYIELD_NOW")String  NOTYIELD_NOW,@Param(value="NOTYIELD_QTY")String  NOTYIELD_QTY,@Param(value="NOTYIELD_NOW_Q")String  NOTYIELD_NOW_Q,@Param(value="NOTYIELD_QTY_Q")String  NOTYIELD_QTY_Q,@Param(value="PRODUCTIONCATEGORY")String PRODUCTIONCATEGORY);
	void deleteYiFaYTongData();
	List<Map<String, Object>>GetYiFaTongMailCheckDoNotSendData(@Param(value="Oper_Desc")String Oper_Desc,@Param(value="FactoryName")String FactoryName,@Param(value="DefectCode")String DefectCode,@Param(value="ProductionType")String ProductionType,@Param(value="ProductionCategory")String ProductionCategory,@Param(value="TimeKey")String TimeKey);
	void insertintoYiFaTongMailHappendData(@Param(value="Oper_Desc")String Oper_Desc,@Param(value="FactoryName")String FactoryName,@Param(value="DefectCode")String DefectCode,@Param(value="ProductionType")String ProductionType,@Param(value="ProductionCategory")String ProductionCategory,@Param(value="TimeKey")String TimeKey);
	void DeleteCheckYiFaTongHapendData(String TimeKey);
	List<Map<String, Object>>GetYiFaTongForWebSocket(String TimeKey);
	
}
