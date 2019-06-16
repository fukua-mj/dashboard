package com.boe.idm.project.mapper.primary.chart;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface OperatorMonitorMapper {

	List<Map<String, Object>> getOperatorDefectCategory(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="productionType")String productionType);

	List<Map<String, Object>> getOperatorDefectCategoryByLine(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType);

	List<Map<String, Object>> getOperatorDefectCode(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="productionType")String productionType,
			@Param(value="productCategory")String productCategory, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectCodeByLine(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="productionType")String productionType,
			@Param(value="productCategory")String productCategory, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);		
	
	List<Map<String, Object>> getOperatorDefect(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, 
			@Param(value="productionType")String productionType,@Param(value="productCategory")String productCategory, 
			@Param(value="defectCode")String defectCode, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorList(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, 
			@Param(value="productionType")String productionType,@Param(value="productCategory")String productCategory, 
			@Param(value="defectCode")String defectCode, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectCodeList(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, 
			@Param(value="productionType")String productionType,@Param(value="productCategory")String productCategory, 
			@Param(value="defectCode")String defectCode, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectAVG(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, 
			@Param(value="productionType")String productionType,@Param(value="productCategory")String productCategory, 
			@Param(value="defectCode")String defectCode, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectByLine(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, 
			@Param(value="productionType")String productionType,@Param(value="productCategory")String productCategory, 
			@Param(value="defectCode")String defectCode, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorListByLine(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, 
			@Param(value="productionType")String productionType,@Param(value="productCategory")String productCategory, 
			@Param(value="defectCode")String defectCode, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectCodeListByLine(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, 
			@Param(value="productionType")String productionType,@Param(value="productCategory")String productCategory, 
			@Param(value="defectCode")String defectCode, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectAVGByLine(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, 
			@Param(value="productionType")String productionType,@Param(value="productCategory")String productCategory, 
			@Param(value="defectCode")String defectCode, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorYield(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, 
			@Param(value="productionType")String productionType,@Param(value="productCategory")String productCategory, 
			@Param(value="yieldType")String yieldType, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorYieldAVG(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, 
			@Param(value="productionType")String productionType,@Param(value="productCategory")String productCategory, 
			@Param(value="yieldType")String yieldType, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectCategorynew(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, 
			@Param(value="dataType")String dataType, @Param(value="productionType")String productionType);

	List<Map<String, Object>> getOperatorDefectCodenew(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="dataType")String dataType,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, 
			@Param(value="startTime")String startTime, @Param(value="endTime")String endTime, @Param(value="dataType1")String dataType1);
		
	List<Map<String, Object>> getOperatorDefectnew(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="dataType")String dataType,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="defectCode")String defectCode, 
			@Param(value="startTime")String startTime, @Param(value="endTime")String endTime, @Param(value="dataType1")String dataType1);

	List<Map<String, Object>> getOperatorListnew(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="dataType")String dataType,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="defectCode")String defectCode, 
			@Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectCodeListnew(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="dataType")String dataType,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="defectCode")String defectCode, 
			@Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectAVGnew(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="dataType")String dataType,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="defectCode")String defectCode, 
			@Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorYieldnew(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="dataType")String dataType,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="defectCode")String defectCode, 
			@Param(value="startTime")String startTime, @Param(value="endTime")String endTime, @Param(value="dataType1")String dataType1);

	List<Map<String, Object>> getOperatorYieldAVGnew(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="dataType")String dataType,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="defectCode")String defectCode, 
			@Param(value="startTime")String startTime, @Param(value="endTime")String endTime, @Param(value="dataType1")String dataType1);

	List<Map<String, Object>> getOperatorMDLCHANNENGTotal(@Param(value="shopName")String shopName, @Param(value="opName")String opName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	
	
	List<Map<String, Object>> getOperatorMDLRENYUANBIETotal(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorIdList(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorMDLRENYUANBIEDefectDescription(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorMDLRENYUANBIETotalAVG(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getlistOpRealName(@Param(value="opNameId")String opNameId);

	List<Map<String, Object>> getOperatorMDLRENYUANBIEOne(@Param(value="shopName")String shopName, @Param(value="opName")String opName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);	

	List<Map<String, Object>> getOperatorYieldOne(@Param(value="shopName")String shopName, @Param(value="opName")String opName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="dataType")String dataType,@Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectDescription(@Param(value="shopName")String shopName, @Param(value="opName")String opName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorMDLRENYUANBIEOneAVG(@Param(value="shopName")String shopName, @Param(value="opName")String opName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorYieldOneAVG(@Param(value="shopName")String shopName, @Param(value="opName")String opName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="dataType")String dataType, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIECategory(@Param(value="shopName")String shopName, @Param(value="productionType")String productionType,
			@Param(value="operationName")String operationName, @Param(value="dataType")String dataType,
			@Param(value="startTime")String startTime,  @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIECategoryAllType(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName,
			@Param(value="dataType")String dataType, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getStandardTarget();

	List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIETotalByHour(@Param(value="shopName")String shopName, @Param(value="productionType")String productionType,
			@Param(value="productCategory")String productCategory, @Param(value="operationName")String operationName, @Param(value="dataType")String dataType, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIETotalByHourAllType(@Param(value="shopName")String shopName,
			@Param(value="productCategory")String productCategory, @Param(value="operationName")String operationName, @Param(value="dataType")String dataType, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIETotalByHourAllCategory(@Param(value="shopName")String shopName,
			@Param(value="productionType")String productionType, @Param(value="operationName")String operationName, @Param(value="dataType")String dataType, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIETotalByHourAllTypeCategory(@Param(value="shopName")String shopName,
			@Param(value="operationName")String operationName, @Param(value="dataType")String dataType, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIEOperatorMachineList(@Param(value="shopName")String shopName, @Param(value="productionType")String productionType,
			@Param(value="productCategory")String productCategory, @Param(value="operationName")String operationName, @Param(value="dataType")String dataType, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIETableByOperatorID(@Param(value="shopName")String shopName, @Param(value="productionType")String productionType,
			@Param(value="productCategory")String productCategory, @Param(value="operationName")String operationName, @Param(value="dataType")String dataType, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime,
			@Param(value="operatorID")String operatorID);
	List<String> getBPPrdHourMonitorLineType(@Param(value="shopName")String shopName, @Param(value="datatype")String datatype);

	List<Map<String, Object>> getBPPrdHourMonitorGridValue(@Param(value="shopName")String shopName, @Param(value="datatype")String datatype, @Param(value="date")String date,
			@Param(value="lineType")String lineType);

	List<String> getBPPrdHourMonitorGridValueMachineList(@Param(value="shopName")String shopName, @Param(value="datatype")String datatype, @Param(value="date")String date,
			@Param(value="lineType")String lineType);

	String getBPPrdHourMonitorGridValueTotal(@Param(value="shopName")String shopName, @Param(value="datatype")String datatype, @Param(value="date")String date,
			@Param(value="lineType")String lineType, @Param(value="machineName")String machineName);



	//BPTMS
    List<Map<String, Object>>GetBpTMSOperatorData(@Param(value="FactoryName")String FactoryName,@Param(value="DataType")String DataType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime);
    List<Map<String, Object>>GetBpTMSAllData(@Param(value="FactoryName")String FactoryName,@Param(value="DataType")String DataType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime);
    List<Map<String, Object>>GetBpTMSLineSingleData(@Param(value="DataType")String DataType,@Param(value="FactoryName")String FactoryName,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime,@Param(value="Oper_Desc")String Oper_Desc);
    List<Map<String, Object>>GetBpTMSLineAllData(@Param(value="DataType")String DataType,@Param(value="FactoryName")String FactoryName,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime);
    List<Map<String, Object>>GetBpTMSOperatorIDData(@Param(value="FactoryName")String FactoryName,@Param(value="DataType")String DataType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime,@Param(value="OperatorId")String OperatorId);
    List<Map<String, Object>>GetBpTMSLegendData(@Param(value="FactoryName")String FactoryName,@Param(value="DataType")String DataType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime);
    List<Map<String, Object>>GetBpTMSAVGData(@Param(value="FactoryName")String FactoryName,@Param(value="DataType")String DataType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime);
    List<Map<String, Object>>GetBpTMSLegendDataOperatorID(@Param(value="FactoryName")String FactoryName,@Param(value="DataType")String DataType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime,@Param(value="OperatorId")String OperatorId);
    List<Map<String, Object>>GetBpTMSAVGDataForPeople(@Param(value="FactoryName")String FactoryName,@Param(value="DataType")String DataType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime);
   
    //EAC产能，品质监控
    List<Map<String, Object>>GetEacOkQtyAllData(@Param(value="FactoryName")String FactoryName,@Param(value="Oper_Desc")String Oper_Desc,@Param(value="ProductCategory")String ProductCategory,@Param(value="ProductionType")String ProductionType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime);
    List<Map<String, Object>>GetEacOkQtyCategory(@Param(value="FactoryName")String FactoryName,@Param(value="Oper_Desc")String Oper_Desc,@Param(value="ProductionType")String ProductionType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime);
    List<Map<String, Object>>GetEacPeopleOkQtyAllData(@Param(value="FactoryName")String FactoryName,@Param(value="Oper_Desc")String Oper_Desc,@Param(value="ProductCategory")String ProductCategory,@Param(value="ProductionType")String ProductionType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime,@Param(value="OperatorId")String OperatorId,@Param(value="Description")String Description);
    List<Map<String, Object>>GetEacPeopleOkQtyDefectCode(@Param(value="FactoryName")String FactoryName,@Param(value="Oper_Desc")String Oper_Desc,@Param(value="ProductCategory")String ProductCategory,@Param(value="ProductionType")String ProductionType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime,@Param(value="OperatorId")String OperatorId);
    List<Map<String, Object>>GetEacPeopleOkQtyLineData(@Param(value="FactoryName")String FactoryName,@Param(value="Oper_Desc")String Oper_Desc,@Param(value="ProductCategory")String ProductCategory,@Param(value="ProductionType")String ProductionType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime,@Param(value="OperatorId")String OperatorId);
    
    //EACOutFactoryqulityChart
    List<Map<String, Object>>EACOutFactoryqulityChartCategory(@Param(value="FactoryName")String FactoryName,@Param(value="ProductionType")String ProductionType,@Param(value="Oper_Desc")String Oper_Desc,@Param(value="DefectCode")String DefectCode);
    List<Map<String, Object>>EACOutFactoryqulityChart(@Param(value="FactoryName")String FactoryName,@Param(value="ProductionType")String ProductionType,@Param(value="Oper_Desc")String Oper_Desc,@Param(value="DefectCode")String DefectCode,@Param(value="ProductCategory")String ProductCategory,@Param(value="ShiftName")String ShiftName);

    //AET漏检不良
    List<Map<String, Object>>getAETloujianPeopleData(@Param(value="DataType")String DataType,@Param(value="ProductionType")String ProductionType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime,@Param(value="ProductCategory")String ProductCategory,@Param(value="Description")String Description);
    List<Map<String, Object>>getAETloujianPeopleCategory(@Param(value="DataType")String DataType,@Param(value="ProductionType")String ProductionType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime);
    List<Map<String, Object>>getAETloujianPeopleXdata(@Param(value="DataType")String DataType,@Param(value="ProductionType")String ProductionType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime,@Param(value="ProductCategory")String ProductCategory);
    List<Map<String, Object>>getAETloujianPeopleDefectData(@Param(value="DataType")String DataType,@Param(value="ProductionType")String ProductionType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime,@Param(value="ProductCategory")String ProductCategory);
    List<Map<String, Object>>getAETPeopleSumData(@Param(value="DataType")String DataType,@Param(value="ProductionType")String ProductionType,@Param(value="StartTime")String StartTime,@Param(value="EndTime")String EndTime,@Param(value="ProductCategory")String ProductCategory);
    
	
	
	
}