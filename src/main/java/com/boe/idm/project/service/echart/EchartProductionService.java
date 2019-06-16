package com.boe.idm.project.service.echart;

import java.util.List;
import java.util.Map;

import com.boe.idm.project.model.ScrapEntity;

public interface EchartProductionService {

	List<Map<String, Object>> getActplan(String shopName, String productCategory, String datatype);

	List<Map<String, Object>> getProduction(String shopName);

	List<Map<String, Object>> getactplanCategory(String shopName);

	List<Map<String, Object>> getwipMoveCategory(String shopName, String productionType, String dataType);

	List<Map<String, Object>> getWIP(String shopName, String productCategory, String productCategory2);

	List<Map<String, Object>> getWIPTotal(String shopName, String productCategory, String productCategory2);

	List<Map<String, Object>> getMove(String shopName, String productCategory, String productCategory2);

	List<Map<String, Object>> getOKMovement(String shopName, String productionType, String productCategory);

	List<Map<String, Object>> eacCutproductioncategory(String shopName);

	List<Map<String, Object>> geteacCutproduction(String productCategory, String productCategory2);

	List<Map<String, Object>> getWIPMDLByLine(String shopName, String lineName);

	List<Map<String, Object>> getWIPTotalMDLByLine(String shopName, String lineName, String lineType);

	List<Map<String, Object>> getMoveMDLByLine(String shopName, String lineName);

	List<Map<String, Object>> WIPMDLByLineProductCategory(String shopName, String lineName);

	List<Map<String, Object>> getOQAAPPList(String productCategory);

	List<Map<String, Object>> getMDLAllOperationName(String productCategory, String lineType);

	List<Map<String, Object>> getMDLAllOperationName1(String productCategory, String lineType);

	List<Map<String, Object>> getWIPMovementOKQTY(String shopName, String lineNameforMovementOk);

	List<Map<String, Object>> getDailyReportCategory();

	List<Map<String, Object>> getDailyReportList(List<String> productCategoryList);

	List<Map<String, Object>> getDailyReportShopCount(String shopNameCompare,List<String> productCategoryList);

	List<Map<String, Object>> getDailyReportCategoryCount(String shopNameCompare, String productCategoryCompare,List<String> productCategoryList);

	List<Map<String, Object>> getScrapProductionCategory(String shopName);

	List<ScrapEntity> getScrapGridValue(String shopName, String productCategory);

	List<Map<String, Object>> getyieldScrap(String shopName, String productCategory);

	List<Map<String, Object>> getScrapRatio(String shopName, String productCategory);

	List<Map<String, Object>> getdetailScrapValue(String shopName, String productCategory, String date,
			String dateType);

	List<Map<String, Object>> getWIPMoveProductCategoryByOPerationType(String shopName, String dataType,
			String productionType);

	List<Map<String, Object>> getWipNew(String shopName, String dataType, String productCategory, String productionType);

	List<Map<String, Object>> getMoveNew(String shopName, String dataType, String productCategory, String productionType);

	List<Map<String, Object>> getMDLAllOperationNameNew(String productCategory, String lineType);

	List<Map<String, Object>> getWIPTotalNew(String shopName, String dataType, String productionType,
			String productCategory);

	List<Map<String, Object>> getOperationNameNew(String shopName, String dataType, String productCategory,
			String productionType);

	List<Map<String, Object>> getWIPMDLByLineNew(String shopName, String lineName);

	List<Map<String, Object>> getWIPTotalMDLByLineNew(String shopName, String lineName, String lineType);

	List<Map<String, Object>> getMoveMDLByLineNew(String shopName, String lineName);

	List<Map<String, Object>> WIPMDLByLineProductCategoryNew(String shopName, String lineName);

	List<Map<String, Object>> getOQAAPPListNew(String productCategory);

	List<Map<String, Object>> getDummyDetail(String shopName);

	List<String> getDummyDepartment(String shopName);

	List<Map<String, Object>> getRtCategory(String shopName);

	List<Map<String, Object>> getRt(String shopName, String productCategory);


}
