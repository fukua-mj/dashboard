package com.boe.idm.project.mapper.primary.chart;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface QualityMapper {

	List<Map<String, Object>> getqualityCategory(@Param(value="operationName")String operationName, @Param(value="dailyCum")String dailyCum, @Param(value="productionType")String productionType);

	List<Map<String, Object>> getquality(@Param(value="operationName")String operationName, @Param(value="dailyCum")String dailyCum, @Param(value="productCategory")String productCategory,  @Param(value="productionType")String productionType);

	List<Map<String, Object>> getqualityAllProd(@Param(value="operationName")String operationName, @Param(value="productCategory")String productCategory, @Param(value="productionType")String productionType);

	List<Map<String, Object>> getDailyQualityCategory(@Param(value="operationName")String operationName, @Param(value="productionType")String productionType);

	List<Map<String, Object>> getqualityDaily(@Param(value="operationName")String operationName, @Param(value="productCategory")String productCategory, @Param(value="productionType")String productionType);

	List<Map<String, Object>> getqualityDailyTable(@Param(value="operationName")String operationName, @Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory);

	List<Map<String, Object>> getOperatorDefectCategory(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="productionType")String productionType);

	List<Map<String, Object>> getOperatorDefectCategoryByLine(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="productionType")String productionType);

	List<Map<String, Object>> getOperatorMDLRENYUANBIETotal(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory,
			@Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorIdList(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory,
			@Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorMDLRENYUANBIEDefectDescription(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory,
			@Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorMDLRENYUANBIETotalAVG(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory,
			@Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectAVG(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory,
			@Param(value="defectCode")String defectCode, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);
	
	List<Map<String, Object>> getOperatorDefect(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory,
			@Param(value="defectCode")String defectCode, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorYield(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory,
			@Param(value="dataType")String dataType, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorYieldAVG(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory,
			@Param(value="dataType")String dataType, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getlistOpRealName(@Param(value="opNameId")String opNameId);

	List<Map<String, Object>> getOperatorMDLRENYUANBIEOne(@Param(value="shopName")String shopName, @Param(value="opName")String opName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorYieldOne(@Param(value="shopName")String shopName, @Param(value="opName")String opName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="dataType")String dataType, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorDefectDescription(@Param(value="shopName")String shopName, @Param(value="opName")String opName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorMDLRENYUANBIEOneAVG(@Param(value="shopName")String shopName, @Param(value="opName")String opName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorYieldOneAVG(@Param(value="shopName")String shopName, @Param(value="opName")String opName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="dataType")String dataType, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getOperatorMDLCHANNENGTotal(@Param(value="shopName")String shopName, @Param(value="opName")String opName, @Param(value="operationName")String operationName,
			@Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="startTime")String startTime, @Param(value="endTime")String endTime);

	List<Map<String, Object>> getmdloqappbylineproductcategory(@Param(value="lineName")String lineName, @Param(value="productionType")String productionType,
			@Param(value="operationName")String operationName, @Param(value="shopName")String shopName);

	List<Map<String, Object>> getmdloqappbylinelegenddata(@Param(value="lineName")String lineName, @Param(value="productionType")String productionType, @Param(value="operationName")String operationName,
			@Param(value="shopName")String shopName, @Param(value="productCategory")String productCategory);

	List<Map<String, Object>> getmonthweekdaytimedata();

	List<Map<String, Object>> getmdloqappbylinealldata(@Param(value="lineName")String lineName, @Param(value="productionType")String productionType, @Param(value="operationName")String operationName,
			@Param(value="shopName")String shopName, @Param(value="productCategory")String productCategory);

	List<Map<String, Object>> getmdloqappbylinealldataother(@Param(value="lineName")String lineName, @Param(value="productionType")String productionType, @Param(value="operationName")String operationName,
			@Param(value="shopName")String shopName, @Param(value="productCategory")String productCategory);

	List<Map<String, Object>> getAMCData(@Param(value="itemName")String itemName);

	List<Map<String, Object>> getSQEWIPProductCategory(@Param(value="currentDay")String currentDay);

	List<Map<String, Object>> getSQECUMYieldProductCategory(@Param(value="shopName")String shopName);

	List<Map<String, Object>> getSQEYieldProductCategory(@Param(value="operationName")String operationName);

	List<Map<String, Object>> SQEINPUTOUTPUTProductCategory();

	List<Map<String, Object>> getSQEWIPMove(@Param(value="currentDay")String currentDay, @Param(value="productCategory")String productCategory);

	List<Map<String, Object>> getSQEWareHouseMove(@Param(value="currentDay")String currentDay, @Param(value="productCategory")String productCategory);

	List<Map<String, Object>> getyieldSQECUM(@Param(value="productCategory")String productCategory);

	List<Map<String, Object>> getdefectSQE(@Param(value="operationName")String operationName, @Param(value="productCategory")String productCategory);

	List<Map<String, Object>> getdefectSQEDefectList(@Param(value="operationName")String operationName, @Param(value="productCategory")String productCategory);

	List<Map<String, Object>> getSQEInputOutputDaily(@Param(value="productCategory")String productCategory);

	List<Map<String, Object>> getSQEInputOutputCUM(@Param(value="productCategory")String productCategory);

	List<Map<String, Object>> getyieldSQE(@Param(value="operationName")String operationName, @Param(value="productCategory")String productCategory);

	List<Map<String, Object>> getCGPlan(@Param(value="inoutType")String inoutType, @Param(value="productCategory")String productCategory);



}
