package com.boe.idm.project.service.impl.echart;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.chart.EchartMapper;
import com.boe.idm.project.mapper.primary.chart.QualityMapper;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.echart.EchartQualityService;

@Service
public class EchartQualityServiceImpl implements EchartQualityService{

	@Resource
	private QualityMapper qualityMapper;

	@Override
	public List<Map<String, Object>> getqualityCategory(String operationName, String dailyCum, String productionType) {
		// TODO Auto-generated method stub
		return qualityMapper.getqualityCategory(operationName, dailyCum, productionType);
	}

	@Override
	public List<Map<String, Object>> getquality(String operationName, String dailyCum, String productCategory,
			String productionType) {
		// TODO Auto-generated method stub
		return qualityMapper.getquality(operationName, dailyCum, productCategory, productionType);
	}

	@Override
	public List<Map<String, Object>> getqualityAllProd(String operationName, String productCategory,
			String productionType) {
		// TODO Auto-generated method stub
		return qualityMapper.getqualityAllProd(operationName, productCategory, productionType);
	}

	@Override
	public List<Map<String, Object>> getDailyQualityCategory(String operationName, String dailyCum,
			String productionType) {
		// TODO Auto-generated method stub
		return qualityMapper.getDailyQualityCategory(operationName,productionType);
	}

	@Override
	public List<Map<String, Object>> getqualityDaily(String operationName, String productCategory,
			String productionType) {
		// TODO Auto-generated method stub
		return qualityMapper.getqualityDaily(operationName, productCategory, productionType);
	}

	@Override
	public List<Map<String, Object>> getqualityDailyTable(String operationName, String productionType,
			String productCategory) {
		// TODO Auto-generated method stub
		return qualityMapper.getqualityDailyTable(operationName, productionType, productCategory);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectCategory(String shopName, String operationName,
			String productionType) {
		// TODO Auto-generated method stub
		return qualityMapper.getOperatorDefectCategory(shopName, operationName, productionType);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectCategoryByLine(String shopName, String operationName,
			String productionType) {
		// TODO Auto-generated method stub
		return qualityMapper.getOperatorDefectCategoryByLine(shopName, operationName, productionType);
	}

	@Override
	public List<Map<String, Object>> getOperatorMDLRENYUANBIETotal(String shopName, String operationName,
			String productionType, String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return qualityMapper.getOperatorMDLRENYUANBIETotal(shopName, operationName,productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorIdList(String shopName, String operationName, String productionType,
			String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return qualityMapper.getOperatorIdList(shopName, operationName,productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorMDLRENYUANBIEDefectDescription(String shopName, String operationName,
			String productionType, String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return qualityMapper.getOperatorMDLRENYUANBIEDefectDescription(shopName, operationName,productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorMDLRENYUANBIETotalAVG(String shopName, String operationName,
			String productionType, String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return qualityMapper.getOperatorMDLRENYUANBIETotalAVG(shopName, operationName,productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectAVG(String shopName, String operationName, String productionType,
			String productCategory, String defectCode, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return qualityMapper.getOperatorDefectAVG(shopName, operationName,productionType, productCategory, defectCode, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefect(String shopName, String operationName, String productionType,
			String productCategory, String defectCode, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return qualityMapper.getOperatorDefect(shopName, operationName,productionType, productCategory, defectCode, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorYield(String shopName, String operationName, String productionType,
			String productCategory, String dataType, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return qualityMapper.getOperatorYield(shopName, operationName,productionType, productCategory, dataType, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorYieldAVG(String shopName, String operationName, String productionType,
			String productCategory, String dataType, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return qualityMapper.getOperatorYieldAVG(shopName, operationName,productionType, productCategory, dataType, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getlistOpRealName(String opNameId) {
		// TODO Auto-generated method stub
		return qualityMapper.getlistOpRealName(opNameId);
	}

	@Override
	public List<Map<String, Object>> getOperatorMDLRENYUANBIEOne(String shopName, String opName, String operationName,
			String productionType, String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return qualityMapper.getOperatorMDLRENYUANBIEOne(shopName, opName, operationName, productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorYieldOne(String shopName, String opName, String operationName,
			String productionType, String productCategory, String dataType, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return qualityMapper.getOperatorYieldOne(shopName, opName, operationName, productionType, productCategory, dataType, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorDefectDescription(String shopName, String opName, String operationName,
			String productionType, String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return qualityMapper.getOperatorDefectDescription(shopName, opName, operationName, productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorMDLRENYUANBIEOneAVG(String shopName, String opName,
			String operationName, String productionType, String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return qualityMapper.getOperatorMDLRENYUANBIEOneAVG(shopName, opName, operationName, productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorYieldOneAVG(String shopName, String opName, String operationName,
			String productionType, String productCategory, String dataType, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return qualityMapper.getOperatorYieldOneAVG(shopName, opName, operationName, productionType, productCategory, dataType, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getOperatorMDLCHANNENGTotal(String shopName, String opName, String operationName,
			String productionType, String productCategory, String startTime, String endTime) {
		// TODO Auto-generated method stub
		return qualityMapper.getOperatorMDLCHANNENGTotal(shopName, opName, operationName, productionType, productCategory, startTime, endTime);
	}

	@Override
	public List<Map<String, Object>> getmdloqappbylineproductcategory(String lineName, String productionType,
			String operationName, String shopName) {
		// TODO Auto-generated method stub
		return qualityMapper.getmdloqappbylineproductcategory(lineName, productionType, operationName, shopName);
	}

	@Override
	public List<Map<String, Object>> getmdloqappbylinelegenddata(String lineName, String productionType,
			String operationName, String shopName, String productCategory) {
		// TODO Auto-generated method stub
		return qualityMapper.getmdloqappbylinelegenddata(lineName, productionType, operationName, shopName, productCategory);
	}

	@Override
	public List<Map<String, Object>> getmonthweekdaytimedata() {
		// TODO Auto-generated method stub
		return qualityMapper.getmonthweekdaytimedata();
	}

	@Override
	public List<Map<String, Object>> getmdloqappbylinealldata(String lineName, String productionType,
			String operationName, String shopName, String productCategory) {
		// TODO Auto-generated method stub
		return qualityMapper.getmdloqappbylinealldata(lineName, productionType, operationName, shopName, productCategory);
	}

	@Override
	public List<Map<String, Object>> getmdloqappbylinealldataother(String lineName, String productionType,
			String operationName, String shopName, String productCategory) {
		// TODO Auto-generated method stub
		return qualityMapper.getmdloqappbylinealldataother(lineName, productionType, operationName, shopName, productCategory);
	}

	@Override
	public List<Map<String, Object>> getAMCData(String itemName) {
		// TODO Auto-generated method stub
		return qualityMapper.getAMCData(itemName);
	}

	@Override
	public List<Map<String, Object>> getSQEWIPProductCategory(String currentDay) {
		// TODO Auto-generated method stub
		return qualityMapper.getSQEWIPProductCategory(currentDay);
	}

	@Override
	public List<Map<String, Object>> getSQECUMYieldProductCategory(String shopName) {
		// TODO Auto-generated method stub
		return qualityMapper.getSQECUMYieldProductCategory(shopName);
	}

	@Override
	public List<Map<String, Object>> getSQEYieldProductCategory(String operationName) {
		// TODO Auto-generated method stub
		return qualityMapper.getSQEYieldProductCategory(operationName);
	}

	@Override
	public List<Map<String, Object>> SQEINPUTOUTPUTProductCategory() {
		// TODO Auto-generated method stub
		return qualityMapper.SQEINPUTOUTPUTProductCategory();
	}

	@Override
	public List<Map<String, Object>> getSQEWIPMove(String currentDay, String productCategory) {
		// TODO Auto-generated method stub
		return qualityMapper.getSQEWIPMove(currentDay, productCategory);
	}

	@Override
	public List<Map<String, Object>> getSQEWareHouseMove(String currentDay, String productCategory) {
		// TODO Auto-generated method stub
		return qualityMapper.getSQEWareHouseMove(currentDay, productCategory);
	}

	@Override
	public List<Map<String, Object>> getyieldSQECUM(String productCategory) {
		// TODO Auto-generated method stub
		return qualityMapper.getyieldSQECUM(productCategory);
	}

	@Override
	public List<Map<String, Object>> getdefectSQE(String operationName, String productCategory) {
		// TODO Auto-generated method stub
		return qualityMapper.getdefectSQE(operationName, productCategory);
	}

	@Override
	public List<Map<String, Object>> getdefectSQEDefectList(String operationName, String productCategory) {
		// TODO Auto-generated method stub
		return qualityMapper.getdefectSQEDefectList(operationName, productCategory);
	}

	@Override
	public List<Map<String, Object>> getSQEInputOutputDaily(String productCategory) {
		// TODO Auto-generated method stub
		return qualityMapper.getSQEInputOutputDaily(productCategory);
	}

	@Override
	public List<Map<String, Object>> getSQEInputOutputCUM(String productCategory) {
		// TODO Auto-generated method stub
		return qualityMapper.getSQEInputOutputCUM(productCategory);
	}

	@Override
	public List<Map<String, Object>> getyieldSQE(String operationName, String productCategory) {
		// TODO Auto-generated method stub
		return qualityMapper.getyieldSQE(operationName, productCategory);
	}

	@Override
	public List<Map<String, Object>> getCGPlan(String inoutType, String productCategory) {
		// TODO Auto-generated method stub
		return qualityMapper.getCGPlan(inoutType, productCategory);
	}
	

}
