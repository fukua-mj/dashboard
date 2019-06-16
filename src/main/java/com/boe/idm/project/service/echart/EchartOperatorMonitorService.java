package com.boe.idm.project.service.echart;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface EchartOperatorMonitorService {

	List<Map<String, Object>> getOperatorDefectCategory(String shopName, String operationName, String productionType);

	List<Map<String, Object>> getOperatorDefectCategoryByLine(String shopName, String operationName,
			String productionType);

	List<Map<String, Object>> getOperatorDefectCode(String shopName, String operationName, String productionType,
			String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectCodeByLine(String shopName, String operationName, String productionType,
			String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefect(String shopName, String operationName, String productionType,
			String productCategory, String defectCode, String startTime, String endTime);

	List<Map<String, Object>> getOperatorList(String shopName, String operationName, String productionType,
			String productCategory, String defectCode, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectCodeList(String shopName, String operationName, String productionType,
			String productCategory, String defectCode, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectAVG(String shopName, String operationName, String productionType,
			String productCategory, String defectCode, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectByLine(String shopName, String operationName, String productionType,
			String productCategory, String defectCode, String startTime, String endTime);

	List<Map<String, Object>> getOperatorListByLine(String shopName, String operationName, String productionType,
			String productCategory, String defectCode, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectCodeListByLine(String shopName, String operationName,
			String productionType, String productCategory, String defectCode, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectAVGByLine(String shopName, String operationName, String productionType,
			String productCategory, String defectCode, String startTime, String endTime);

	List<Map<String, Object>> getOperatorYield(String shopName, String operationName, String productionType,
			String productCategory, String showType, String startTime, String endTime);

	List<Map<String, Object>> getOperatorYieldAVG(String shopName, String operationName, String productionType,
			String productCategory, String showType, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectCategorynew(String shopName, String operationName, String dataType,
			String productionType);

	List<Map<String, Object>> getOperatorDefectCodenew(String shopName, String operationName, String dataType,
			String productionType, String productCategory, String startTime, String endTime, String dataType1);

	List<Map<String, Object>> getOperatorDefectnew(String shopName, String operationName, String dataType,
			String productionType, String productCategory, String defectCode, String startTime, String endTime,
			String dataType1);

	List<Map<String, Object>> getOperatorListnew(String shopName, String operationName, String dataType,
			String productionType, String productCategory, String defectCode, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectCodeListnew(String shopName, String operationName, String dataType,
			String productionType, String productCategory, String defectCode, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectAVGnew(String shopName, String operationName, String dataType,
			String productionType, String productCategory, String defectCode, String startTime, String endTime);

	List<Map<String, Object>> getOperatorYieldnew(String shopName, String operationName, String dataType,
			String productionType, String productCategory, String defectCode, String startTime, String endTime,
			String dataType1);

	List<Map<String, Object>> getOperatorYieldAVGnew(String shopName, String operationName, String dataType,
			String productionType, String productCategory, String defectCode, String startTime, String endTime,
			String dataType1);

	List<Map<String, Object>> getOperatorMDLCHANNENGTotal(String shopName, String string, String operationName,
			String productionType, String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getOperatorMDLRENYUANBIETotal(String shopName, String operationName,
			String productionType, String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getOperatorIdList(String shopName, String operationName, String productionType,
			String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getOperatorMDLRENYUANBIEDefectDescription(String shopName, String operationName,
			String productionType, String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getOperatorMDLRENYUANBIETotalAVG(String shopName, String operationName,
			String productionType, String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getlistOpRealName(String opNameId);

	List<Map<String, Object>> getOperatorMDLRENYUANBIEOne(String shopName, String opName, String operationName,
			String productionType, String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getOperatorYieldOne(String shopName, String opName, String operationName,
			String productionType, String productCategory, String string, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectDescription(String shopName, String opName, String operationName,
			String productionType, String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getOperatorMDLRENYUANBIEOneAVG(String shopName, String opName, String operationName,
			String productionType, String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getOperatorYieldOneAVG(String shopName, String opName, String operationName,
			String productionType, String productCategory, String string, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIECategory(String shopName, String productionType,
			String operationName, String dataType, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIECategoryAllType(String shopName, String operationName,
			String dataType, String startTime, String endTime);

	List<Map<String, Object>> getStandardTarget();

	List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIETotalByHour(String shopName, String productionType,
			String productCategory, String operationName, String dataType, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIETotalByHourAllType(String shopName, String productCategory,
			String operationName, String dataType, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIETotalByHourAllCategory(String shopName,
			String productionType, String operationName, String dataType, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIETotalByHourAllTypeCategory(String shopName,
			String operationName, String dataType, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIEOperatorMachineList(String shopName, String productionType,
			String productCategory, String operationName, String dataType, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIETableByOperatorID(String shopName, String productionType,
			String productCategory, String operationName, String dataType, String startTime, String endTime,
			String operatorID);

	List<String> getBPPrdHourMonitorLineType(String shopName, String datatype);

	List<Map<String, Object>> getBPPrdHourMonitorGridValue(String shopName, String dataType, String date,
			String lineType);

	List<String> getBPPrdHourMonitorGridValueMachineList(String shopName, String dataType, String date,
			String lineType);

	String getBPPrdHourMonitorGridValueTotal(String shopName, String dataType, String date, String lineType, String machineName);

	
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
