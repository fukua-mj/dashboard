package com.boe.idm.project.service.impl.echart;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.chart.EchartMapper;
import com.boe.idm.project.mapper.primary.chart.OperatorMonitorMapper;
import com.boe.idm.project.mapper.primary.chart.QualityMapper;
import com.boe.idm.project.mapper.primary.chart.YieldMapper;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.echart.EchartOperatorMonitorService;
import com.boe.idm.project.service.echart.EchartQualityService;
import com.boe.idm.project.service.echart.EchartYieldService;

@Service
public class EchartOperatorMonitorServiceImpl implements EchartOperatorMonitorService{

	@Resource
	private OperatorMonitorMapper operatorMonitorMapper;

	@Override
	public List<Map<String, Object>> getOperatorDefectCategory(String shopName, String operationName,
			String productionType) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectCategory(shopName, operationName, productionType);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectCategoryByLine(String shopName, String operationName,
			String productionType) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectCategoryByLine(shopName, operationName, productionType);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectCode(String shopName, String operationName, String productionType,
			String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectCode(shopName, operationName, productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectCodeByLine(String shopName, String operationName,
			String productionType, String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectCodeByLine(shopName, operationName, productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefect(String shopName, String operationName, String productionType,
			String productCategory, String defectCode, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefect(shopName, operationName, productionType, productCategory, defectCode,startTime,endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorList(String shopName, String operationName, String productionType,
			String productCategory, String defectCode, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorList(shopName, operationName, productionType, productCategory, defectCode,startTime,endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectCodeList(String shopName, String operationName,
			String productionType, String productCategory, String defectCode, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectCodeList(shopName, operationName, productionType, productCategory, defectCode,startTime,endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectAVG(String shopName, String operationName, String productionType,
			String productCategory, String defectCode, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectAVG(shopName, operationName, productionType, productCategory, defectCode,startTime,endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectByLine(String shopName, String operationName,
			String productionType, String productCategory, String defectCode, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectByLine(shopName, operationName, productionType, productCategory, defectCode,startTime,endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorListByLine(String shopName, String operationName, String productionType,
			String productCategory, String defectCode, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorListByLine(shopName, operationName, productionType, productCategory, defectCode,startTime,endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectCodeListByLine(String shopName, String operationName,
			String productionType, String productCategory, String defectCode, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectCodeListByLine(shopName, operationName, productionType, productCategory, defectCode,startTime,endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectAVGByLine(String shopName, String operationName,
			String productionType, String productCategory, String defectCode, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectAVGByLine(shopName, operationName, productionType, productCategory, defectCode,startTime,endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorYield(String shopName, String operationName, String productionType,
			String productCategory, String showType, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorYield(shopName, operationName, productionType, productCategory, showType,startTime,endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorYieldAVG(String shopName, String operationName, String productionType,
			String productCategory, String showType, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorYieldAVG(shopName, operationName, productionType, productCategory, showType,startTime,endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectCategorynew(String shopName, String operationName,
			String dataType, String productionType) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectCategorynew(shopName, operationName, dataType, productionType);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectCodenew(String shopName, String operationName, String dataType,
			String productionType, String productCategory, String startTime, String endTime, String dataType1) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectCodenew(shopName, operationName, dataType, productionType, productCategory, startTime, endTime, dataType1);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectnew(String shopName, String operationName, String dataType,
			String productionType, String productCategory, String defectCode, String startTime, String endTime,
			String dataType1) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectnew(shopName, operationName, dataType, productionType, productCategory, defectCode, startTime, endTime, dataType1);
	}

	@Override
	public List<Map<String, Object>> getOperatorListnew(String shopName, String operationName, String dataType,
			String productionType, String productCategory, String defectCode, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorListnew(shopName, operationName, dataType, productionType, productCategory, defectCode, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectCodeListnew(String shopName, String operationName,
			String dataType, String productionType, String productCategory, String defectCode, String startTime,
			String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectCodeListnew(shopName, operationName, dataType, productionType, productCategory, defectCode, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectAVGnew(String shopName, String operationName, String dataType,
			String productionType, String productCategory, String defectCode, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectAVGnew(shopName, operationName, dataType, productionType, productCategory, defectCode, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorYieldnew(String shopName, String operationName, String dataType,
			String productionType, String productCategory, String defectCode, String startTime, String endTime,
			String dataType1) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorYieldnew(shopName, operationName, dataType, productionType, productCategory, defectCode, startTime, endTime, dataType1);
	}

	@Override
	public List<Map<String, Object>> getOperatorYieldAVGnew(String shopName, String operationName, String dataType,
			String productionType, String productCategory, String defectCode, String startTime, String endTime,
			String dataType1) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorYieldAVGnew(shopName, operationName, dataType, productionType, productCategory, defectCode, startTime, endTime, dataType1);
	}

	@Override
	public List<Map<String, Object>> getOperatorMDLCHANNENGTotal(String shopName, String opName, String operationName,
			String productionType, String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorMDLCHANNENGTotal(shopName, opName, operationName, productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorMDLRENYUANBIETotal(String shopName, String operationName,
			String productionType, String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorMDLRENYUANBIETotal(shopName, operationName, productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorIdList(String shopName, String operationName, String productionType,
			String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorIdList(shopName, operationName, productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorMDLRENYUANBIEDefectDescription(String shopName, String operationName,
			String productionType, String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorMDLRENYUANBIEDefectDescription(shopName, operationName, productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorMDLRENYUANBIETotalAVG(String shopName, String operationName,
			String productionType, String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorMDLRENYUANBIETotalAVG(shopName, operationName, productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getlistOpRealName(String opNameId) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getlistOpRealName(opNameId);
	}

	@Override
	public List<Map<String, Object>> getOperatorMDLRENYUANBIEOne(String shopName, String opName, String operationName,
			String productionType, String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorMDLRENYUANBIEOne(shopName, opName, operationName, productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorYieldOne(String shopName, String opName, String operationName,
			String productionType, String productCategory, String dataType, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorYieldOne(shopName, opName, operationName, productionType, productCategory, dataType, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectDescription(String shopName, String opName, String operationName,
			String productionType, String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectDescription(shopName, opName, operationName, productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorMDLRENYUANBIEOneAVG(String shopName, String opName,
			String operationName, String productionType, String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorMDLRENYUANBIEOneAVG(shopName, opName, operationName, productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorYieldOneAVG(String shopName, String opName, String operationName,
			String productionType, String productCategory, String dataType, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorYieldOneAVG(shopName, opName, operationName, productionType, productCategory, dataType, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIECategory(String shopName, String productionType,
			String operationName, String dataType, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectEACXIAOSHIBIECategory(shopName, productionType, operationName, dataType, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIECategoryAllType(String shopName,
			String operationName, String dataType, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectEACXIAOSHIBIECategoryAllType(shopName, operationName, dataType, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getStandardTarget() {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getStandardTarget();
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIETotalByHour(String shopName, String productionType,
			String productCategory, String operationName, String dataType, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectEACXIAOSHIBIETotalByHour(shopName, productionType, productCategory, operationName, dataType, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIETotalByHourAllType(String shopName,
			String productCategory, String operationName, String dataType, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectEACXIAOSHIBIETotalByHourAllType(shopName, productCategory, operationName, dataType, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIETotalByHourAllCategory(String shopName,
			String productionType, String operationName, String dataType, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectEACXIAOSHIBIETotalByHourAllCategory(shopName, productionType, operationName, dataType, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIETotalByHourAllTypeCategory(String shopName,
			String operationName, String dataType, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectEACXIAOSHIBIETotalByHourAllTypeCategory(shopName, operationName, dataType, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIEOperatorMachineList(String shopName,
			String productionType, String productCategory, String operationName, String dataType, String startTime,
			String endTime) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectEACXIAOSHIBIEOperatorMachineList(shopName, productionType, productCategory, operationName, dataType, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectEACXIAOSHIBIETableByOperatorID(String shopName,
			String productionType, String productCategory, String operationName, String dataType, String startTime,
			String endTime, String operatorID) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getOperatorDefectEACXIAOSHIBIETableByOperatorID(shopName, productionType, productCategory,
				operationName, dataType,startTime,endTime,operatorID);
	}

	@Override
	public List<String> getBPPrdHourMonitorLineType(String shopName, String datatype) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getBPPrdHourMonitorLineType(shopName, datatype);
	}

	@Override
	public List<Map<String, Object>> getBPPrdHourMonitorGridValue(String shopName, String dataType, String date,
			String lineType) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getBPPrdHourMonitorGridValue(shopName, dataType, date, lineType);
	}

	@Override
	public List<String> getBPPrdHourMonitorGridValueMachineList(String shopName, String dataType, String date,
			String lineType) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getBPPrdHourMonitorGridValueMachineList(shopName, dataType, date, lineType);
	}

	@Override
	public String getBPPrdHourMonitorGridValueTotal(String shopName, String dataType, String date, String lineType,
			String machineName) {
		// TODO Auto-generated method stub
		return operatorMonitorMapper.getBPPrdHourMonitorGridValueTotal(shopName, dataType, date, lineType, machineName);
	}

	
	//BpTMS
	@Override
	public List<Map<String, Object>>GetBpTMSOperatorData(String FactoryName,String DataType,String StartTime,String EndTime){
		return operatorMonitorMapper.GetBpTMSOperatorData(FactoryName,DataType,StartTime,EndTime);
	}
	@Override
	public List<Map<String, Object>>GetBpTMSAllData(String FactoryName,String DataType,String StartTime,String EndTime){
		return operatorMonitorMapper.GetBpTMSAllData(FactoryName,DataType,StartTime,EndTime);
	}
	@Override
	public List<Map<String, Object>>GetBpTMSLineSingleData(String DataType,String FactoryName,String StartTime,String EndTime,String Oper_Desc){
		return operatorMonitorMapper.GetBpTMSLineSingleData(DataType,FactoryName,StartTime,EndTime,Oper_Desc);
	}
	@Override
	public List<Map<String, Object>>GetBpTMSLineAllData(String DataType,String FactoryName,String StartTime,String EndTime){
		return operatorMonitorMapper.GetBpTMSLineAllData(DataType,FactoryName,StartTime,EndTime);
	}
	@Override
	public List<Map<String, Object>>GetBpTMSOperatorIDData(String FactoryName,String DataType,String StartTime,String EndTime,String OperatorId){
		return operatorMonitorMapper.GetBpTMSOperatorIDData(FactoryName,DataType,StartTime,EndTime,OperatorId);
	}
	@Override
	public List<Map<String, Object>>GetBpTMSLegendData(String FactoryName,String DataType,String StartTime,String EndTime){
		return operatorMonitorMapper.GetBpTMSLegendData(FactoryName,DataType,StartTime,EndTime);
	}
	@Override
	public List<Map<String, Object>>GetBpTMSAVGData(String FactoryName,String DataType,String StartTime,String EndTime){
		return operatorMonitorMapper.GetBpTMSAVGData(FactoryName,DataType,StartTime,EndTime);
	}
	@Override
	public List<Map<String, Object>>GetBpTMSLegendDataOperatorID(String FactoryName,String DataType,String StartTime,String EndTime,String OperatorId){
		return operatorMonitorMapper.GetBpTMSLegendDataOperatorID(FactoryName,DataType,StartTime,EndTime,OperatorId);
	}
	@Override
	public List<Map<String, Object>>GetBpTMSAVGDataForPeople(String FactoryName,String DataType,String StartTime,String EndTime){
		return operatorMonitorMapper.GetBpTMSAVGDataForPeople(FactoryName,DataType,StartTime,EndTime);
	}		
	
	//EAC产能，品质监控
	@Override
	public List<Map<String, Object>>GetEacOkQtyAllData(String FactoryName,String Oper_Desc,String ProductCategory,String ProductionType,String StartTime,String EndTime){
		return operatorMonitorMapper.GetEacOkQtyAllData(FactoryName,Oper_Desc,ProductCategory,ProductionType,StartTime,EndTime);
	}
	@Override
	public List<Map<String, Object>>GetEacOkQtyCategory(String FactoryName,String Oper_Desc,String ProductionType,String StartTime,String EndTime){
		return operatorMonitorMapper.GetEacOkQtyCategory(FactoryName,Oper_Desc,ProductionType,StartTime,EndTime);
	}
	@Override
	public List<Map<String, Object>>GetEacPeopleOkQtyAllData(String FactoryName,String Oper_Desc,String ProductCategory,String ProductionType,String StartTime,String EndTime,String OperatorId,String Description){
		return operatorMonitorMapper.GetEacPeopleOkQtyAllData(FactoryName,Oper_Desc,ProductCategory,ProductionType,StartTime,EndTime,OperatorId,Description);
	}
	@Override
	public List<Map<String, Object>>GetEacPeopleOkQtyDefectCode(String FactoryName,String Oper_Desc,String ProductCategory,String ProductionType,String StartTime,String EndTime,String OperatorId){
		return operatorMonitorMapper.GetEacPeopleOkQtyDefectCode(FactoryName,Oper_Desc,ProductCategory,ProductionType,StartTime,EndTime,OperatorId);
	}
	@Override
	public List<Map<String, Object>>GetEacPeopleOkQtyLineData(String FactoryName,String Oper_Desc,String ProductCategory,String ProductionType,String StartTime,String EndTime,String OperatorId){
		return operatorMonitorMapper.GetEacPeopleOkQtyLineData(FactoryName,Oper_Desc,ProductCategory,ProductionType,StartTime,EndTime,OperatorId);
	}		
	
	//EACOutFactoryqulityChart
	@Override
	public List<Map<String, Object>>EACOutFactoryqulityChartCategory(String FactoryName,String ProductionType,String Oper_Desc,String DefectCode){
		return operatorMonitorMapper.EACOutFactoryqulityChartCategory(FactoryName,ProductionType,Oper_Desc,DefectCode);
	}
	@Override
	public List<Map<String, Object>>EACOutFactoryqulityChart(String FactoryName,String ProductionType,String Oper_Desc,String DefectCode,String ProductCategory,String ShiftName){
		return operatorMonitorMapper.EACOutFactoryqulityChart(FactoryName,ProductionType,Oper_Desc,DefectCode,ProductCategory,ShiftName);
	}		

	//AET漏检不良
	@Override
	public List<Map<String, Object>>getAETloujianPeopleData(String DataType,String ProductionType,String StartTime,String EndTime,String ProductCategory,String Description){
		return operatorMonitorMapper.getAETloujianPeopleData(DataType,ProductionType,StartTime,EndTime,ProductCategory,Description);
	}
	@Override
	public List<Map<String, Object>>getAETloujianPeopleCategory(String DataType,String ProductionType,String StartTime,String EndTime){
		return operatorMonitorMapper.getAETloujianPeopleCategory(DataType,ProductionType,StartTime,EndTime);
	}
	@Override
	public List<Map<String, Object>>getAETloujianPeopleXdata(String DataType,String ProductionType,String StartTime,String EndTime,String ProductCategory){
		return operatorMonitorMapper.getAETloujianPeopleXdata(DataType,ProductionType,StartTime,EndTime,ProductCategory);
	}
	@Override
	public List<Map<String, Object>>getAETloujianPeopleDefectData(String DataType,String ProductionType,String StartTime,String EndTime,String ProductCategory){
		return operatorMonitorMapper.getAETloujianPeopleDefectData(DataType,ProductionType,StartTime,EndTime,ProductCategory);
	}
	@Override
	public List<Map<String, Object>>getAETPeopleSumData(String DataType,String ProductionType,String StartTime,String EndTime,String ProductCategory){
		return operatorMonitorMapper.getAETPeopleSumData(DataType,ProductionType,StartTime,EndTime,ProductCategory);
	}		
	
	
	
}
