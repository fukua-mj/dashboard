package com.boe.idm.project.mapper.primary.chart;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface ProductionMapper {

	List<Map<String, Object>> getActplan(@Param("shopName")String shopName, @Param("productCategory")String productCategory, @Param("datatype")String datatype);

	List<Map<String, Object>> getProduction(String shopName);

	List<Map<String, Object>> getactplanCategory(String shopName);

	List<Map<String, Object>> getwipMoveCategory(@Param("shopName")String shopName, @Param("productionType")String productionType, @Param("dataType")String dataType);

	List<Map<String, Object>> getWIP(@Param("shopName")String shopName, @Param("productionType")String productionType, @Param("productCategory")String productCategory);

	List<Map<String, Object>> getWIPTotal(@Param("shopName")String shopName, @Param("productionType")String productionType, @Param("productCategory")String productCategory);

	List<Map<String, Object>> getMove(@Param("shopName")String shopName, @Param("productionType")String productionType, @Param("productCategory")String productCategory);

	List<Map<String, Object>> getOKMovement(@Param("shopName")String shopName, @Param("productionType")String productionType, @Param("productCategory")String productCategory);

	List<Map<String, Object>> eacCutproductioncategory(@Param("shopName")String shopName);

	List<Map<String, Object>> geteacCutproduction(@Param("machineType")String machineType, @Param("productCategory")String productCategory);

	List<Map<String, Object>> getWIPMDLByLine(@Param("shopName")String shopName, @Param("lineName")String lineName);

	List<Map<String, Object>> getWIPTotalMDLByLine(@Param("shopName")String shopName, @Param("lineName")String lineName, @Param("lineType")String lineType);

	List<Map<String, Object>> getMoveMDLByLine(@Param("shopName")String shopName, @Param("lineName")String lineName);

	List<Map<String, Object>> WIPMDLByLineProductCategory(@Param("shopName")String shopName, @Param("lineName")String lineName);

	List<Map<String, Object>> getOQAAPPList(@Param("productCategory")String productCategory);

	List<Map<String, Object>> getMDLAllOperationName(@Param("productCategory")String productCategory, @Param("lineType")String lineType);

	List<Map<String, Object>> getMDLAllOperationName1(@Param("productCategory")String productCategory, @Param("lineType")String lineType);

	List<Map<String, Object>> getWIPMovementOKQTY(@Param("shopName")String shopName, @Param("lineName")String lineName);

	List<Map<String, Object>> getDailyReportCategory();

	List<Map<String, Object>> getDailyReportList(@Param("productCategoryList")List<String> productCategoryList, @Param("productCategoryList2")List<String> productCategoryList2);

	List<Map<String, Object>> getDailyReportShopCount(@Param("shopNameCompare")String shopNameCompare,@Param("productCategoryList")List<String> productCategoryList, @Param("productCategoryList2")List<String> productCategoryList2);

	List<Map<String, Object>> getDailyReportCategoryCount(@Param("shopNameCompare")String shopNameCompare, @Param("productCategoryCompare")String productCategoryCompare,@Param("productCategoryList")List<String> productCategoryList, @Param("productCategoryList2")List<String> productCategoryList2);

	List<Map<String, Object>> getScrapProductionCategory(@Param("shopName")String shopName);

	List<Map<String, Object>> getScrapGridValue(@Param("shopName")String shopName, @Param("productCategory")String productCategory);

	List<Map<String, Object>> getyieldScrap(@Param("shopName")String shopName, @Param("productCategory")String productCategory);

	List<Map<String, Object>> getScrapRatio(@Param("shopName")String shopName, @Param("productCategory")String productCategory);

	List<Map<String, Object>> getdetailScrapValue(@Param("shopName")String shopName, @Param("productCategory")String productCategory, @Param("date")String date,
			@Param("dateType")String dateType);

	List<Map<String, Object>> getWIPMoveProductCategoryByOPerationType(@Param("shopName")String shopName, @Param("dataType")String dataType,
			@Param("productionType")String productionType);

	List<Map<String, Object>> getWipNew(@Param("shopName")String shopName, @Param("dataType")String dataType, @Param("productCategory")String productCategory,
			@Param("productionType")String productionType);

	List<Map<String, Object>> getMoveNew(@Param("shopName")String shopName, @Param("dataType")String dataType, @Param("productCategory")String productCategory, @Param("productionType")String productionType);

	List<Map<String, Object>> getMDLAllOperationNameNew(@Param("productCategory")String productCategory, @Param("lineType")String lineType);

	List<Map<String, Object>> getWIPTotalNew(@Param("shopName")String shopName, @Param("dataType")String dataType, @Param("productionType")String productionType,
			@Param("productCategory")String productCategory);

	List<Map<String, Object>> getOperationNameNew(@Param("shopName")String shopName, @Param("dataType")String dataType, @Param("productCategory")String productCategory,
			@Param("productionType")String productionType);

	List<Map<String, Object>> getWIPMDLByLineNew(@Param("shopName")String shopName, @Param("lineName")String lineName);

	List<Map<String, Object>> getWIPTotalMDLByLineNew(@Param("shopName")String shopName, @Param("lineName")String lineName, @Param("lineType")String lineType);

	List<Map<String, Object>> getMoveMDLByLineNew(@Param("shopName")String shopName, @Param("lineName")String lineName);

	List<Map<String, Object>> WIPMDLByLineProductCategoryNew(@Param("shopName")String shopName, @Param("lineName")String lineName);

	List<Map<String, Object>> getOQAAPPListNew(@Param("productCategory")String productCategory);

	List<Map<String, Object>> getDummyDetail(@Param("shopName")String shopName);

	List<String> getDummyDepartment(@Param("shopName")String shopName);

	List<Map<String, Object>> getRtCategory(@Param("shopName")String shopName);

	List<Map<String, Object>> getRt(@Param("shopName")String shopName, @Param("productCategory")String productCategory);

}
