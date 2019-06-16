package com.boe.idm.project.service.echart;

import java.util.List;
import java.util.Map;

public interface EchartQualityService {

	List<Map<String, Object>> getqualityCategory(String operationName, String dailyCum, String productionType);

	List<Map<String, Object>> getquality(String operationName, String dailyCum, String productCategory,
			String productionType);

	List<Map<String, Object>> getqualityAllProd(String operationName, String productCategory, String productionType);

	List<Map<String, Object>> getDailyQualityCategory(String operationName, String dailyCum, String productionType);

	List<Map<String, Object>> getqualityDaily(String operationName, String productCategory, String productionType);

	List<Map<String, Object>> getqualityDailyTable(String operationName, String productionType, String productCategory);

	List<Map<String, Object>> getOperatorDefectCategory(String shopName, String operationName, String productionType);

	List<Map<String, Object>> getOperatorDefectCategoryByLine(String shopName, String operationName,
			String productionType);

	List<Map<String, Object>> getOperatorMDLRENYUANBIETotal(String shopName, String operationName,
			String productionType, String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getOperatorIdList(String shopName, String operationName, String productionType,
			String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getOperatorMDLRENYUANBIEDefectDescription(String shopName, String operationName,
			String productionType, String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getOperatorMDLRENYUANBIETotalAVG(String shopName, String operationName,
			String productionType, String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectAVG(String shopName, String operationName, String productionType,
			String productCategory, String defectCode, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefect(String shopName, String operationName, String productionType,
			String productCategory, String defectCode, String startTime, String endTime);

	List<Map<String, Object>> getOperatorYield(String shopName, String operationName, String productionType,
			String productCategory, String dataType, String startTime, String endTime);

	List<Map<String, Object>> getOperatorYieldAVG(String shopName, String operationName, String productionType,
			String productCategory, String dataType, String startTime, String endTime);

	List<Map<String, Object>> getlistOpRealName(String opNameId);

	List<Map<String, Object>> getOperatorMDLRENYUANBIEOne(String shopName, String opName, String operationName,
			String productionType, String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getOperatorYieldOne(String shopName, String opName, String operationName,
			String productionType, String productCategory, String dataType, String startTime, String endTime);

	List<Map<String, Object>> getOperatorDefectDescription(String shopName, String opName, String operationName,
			String productionType, String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getOperatorMDLRENYUANBIEOneAVG(String shopName, String opName, String operationName,
			String productionType, String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getOperatorYieldOneAVG(String shopName, String opName, String operationName,
			String productionType, String productCategory, String dataType, String startTime, String endTime);

	List<Map<String, Object>> getOperatorMDLCHANNENGTotal(String shopName, String string, String operationName,
			String productionType, String productCategory, String startTime, String endTime);

	List<Map<String, Object>> getmdloqappbylineproductcategory(String lineName, String productionType,
			String operationName, String shopName);

	List<Map<String, Object>> getmdloqappbylinelegenddata(String lineName, String productionType, String operationName,
			String shopName, String productCategory);

	List<Map<String, Object>> getmonthweekdaytimedata();

	List<Map<String, Object>> getmdloqappbylinealldata(String lineName, String productionType, String operationName,
			String shopName, String productCategory);

	List<Map<String, Object>> getmdloqappbylinealldataother(String lineName, String productionType,
			String operationName, String shopName, String productCategory);

	List<Map<String, Object>> getAMCData(String itemName);

	List<Map<String, Object>> getSQEWIPProductCategory(String currentDay);

	List<Map<String, Object>> getSQECUMYieldProductCategory(String shopName);

	List<Map<String, Object>> getSQEYieldProductCategory(String operationName);

	List<Map<String, Object>> SQEINPUTOUTPUTProductCategory();

	List<Map<String, Object>> getSQEWIPMove(String currentDay, String productCategory);

	List<Map<String, Object>> getSQEWareHouseMove(String currentDay, String productCategory);

	List<Map<String, Object>> getyieldSQECUM(String productCategory);

	List<Map<String, Object>> getdefectSQE(String operationName, String productCategory);

	List<Map<String, Object>> getdefectSQEDefectList(String operationName, String productCategory);

	List<Map<String, Object>> getSQEInputOutputDaily(String productCategory);

	List<Map<String, Object>> getSQEInputOutputCUM(String productCategory);

	List<Map<String, Object>> getyieldSQE(String operationName, String productCategory);

	List<Map<String, Object>> getCGPlan(String inoutType, String productCategory);



}
