package com.boe.idm.project.service.echart;

import java.util.List;
import java.util.Map;

public interface EchartYieldService {

	public List<Map<String, Object>> getYield(String shopName, String operationName, String productionType, String productCategory) throws Exception;

	public List<Map<String, Object>> getDefect(String shopName, String operationName, String productionType, String productCategory) throws Exception;

	public List<Map<String, Object>> getyieldCategory(String shopName, String processType, String productionType);

	public List<Map<String, Object>> getyieldByLine(String shopName, String processType, String productionType,
			String defectdataType, String lineName, String productCategory);

	public List<Map<String, Object>> getyieldBP4LAYER(String layer, String productionType, String productCategory);

	public List<Map<String, Object>> getdefectBP4LAYER(String layer, String productionType, String productCategory);

	public List<Map<String, Object>> getBP4LAYERDefectList(String layer, String productionType, String productCategory);

	public List<Map<String, Object>> getyieldBP4LAYERCategory(String shopName, String layer, String productionType);

	public List<Map<String, Object>> getyieldBP4LAYERWithKillingCategory(String shopName, String layer,
			String productionType);

	public List<Map<String, Object>> getdefectBP4LAYERWithKilling(String layer, String productionType,
			String productCategory);

	public List<Map<String, Object>> getBP4LAYERDefectListWithKilling(String layer, String productionType,
			String productCategory);

	public List<Map<String, Object>> getyieldEVEN_category(String shopName, String processType, String productionType);

	public List<Map<String, Object>> yieldEVENNew(String shopName, String processType, String productCategory,
			String productionType);

	public List<Map<String, Object>> getyieldEVEN(String shopName, String operationName, String productionType,
			String productCategory);

	public List<Map<String, Object>> getyieldEACMDLCategory(String shopName, String processType,
			String productionType, String defectdataType, String lineName);

	public List<Map<String, Object>> getdefectByLine(String shopName, String yieldtype, String productionType,
			String defectdataType, String lineName, String productCategory);

	public List<Map<String, Object>> getdefectDetailByLine(String shopName, String yieldtype, String productionType,
			String defectdataType, String lineName, String productCategory);

	public List<Map<String, Object>> getDefectListByLine(String shopName, String yieldtype, String productionType,
			String defectdataType, String lineName, String productCategory);

	public List<Map<String, Object>> getyieldCategoryMDLCUM(String shopName, String processType, String productionType, String dataType, String lineName);

	public List<Map<String, Object>> getdefectMDLCUM(String shopName, String productionType, String productCategory, String processType, String dataType, String lineName);

	public List<Map<String, Object>> getdefectMDLCUMCategory(String shopName, String productionType,
			String productCategory, String processType, String dataType, String lineName);

	public List<Map<String, Object>> getReworkYieldMDLCUM(String shopName, String productionType,
			String productCategory);

	public List<Map<String, Object>> getyieldMDLCUM(String shopName, String productionType, String productCategory, String processType, String dataType, String lineName);

	public List<Map<String, Object>> yieldStockInCUMCategory(String shopName);

	public List<Map<String, Object>> getyieldStockInCum(String productCategory);

	public List<Map<String, Object>> getTotalYieldCategory(String shopName, String yieldType);

	public List<Map<String, Object>> getEVENYiledOneyear(String productCategory, String string, String string2);

	public List<Map<String, Object>> getEVENYieldByDepartment(String shopName, String productCategory,
			String productionType);

	public List<Map<String, Object>> getScrapEVENAllbyDepartment(String shopName);

	public List<Map<String, Object>> getScrapEVENAllbyDepartmentQty(String shopName);

	public List<Map<String, Object>> getdefectEVENbyDepartment(String shopName, String productCategory,
			String productionType, String departmentName);

	public List<Map<String, Object>> getScrapEVENbyDepartment(String shopName, String productCategory,
			String productionType, String departmentName);

	public List<Map<String, Object>> getScrapEVENbyDepartmentQty(String shopName, String productCategory,
			String productionType, String departmentName);




}
