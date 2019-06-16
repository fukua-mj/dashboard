package com.boe.idm.project.mapper.primary.chart;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface YieldMapper {

	public List<Map<String, Object>> getYield(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory) throws Exception;

	public List<Map<String, Object>> getDefect(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory) throws Exception;

	public List<Map<String, Object>> getyieldCategory(@Param(value="shopName")String shopName, @Param(value="processType")String processType, @Param(value="productionType")String productionType);

	public List<Map<String, Object>> getyieldByLine(@Param(value="shopName")String shopName, @Param(value="processType")String processType, @Param(value="productionType")String productionType,
			@Param(value="defectdataType")String defectdataType, @Param(value="lineName")String lineName, @Param(value="productCategory")String productCategory);

	public List<Map<String, Object>> getyieldBP4LAYER(@Param(value="layer")String layer, @Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory);

	public List<Map<String, Object>> getdefectBP4LAYER(@Param(value="layer")String layer, @Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory);

	public List<Map<String, Object>> getBP4LAYERDefectList(@Param(value="layer")String layer, @Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory);

	public List<Map<String, Object>> getyieldBP4LAYERCategory(@Param(value="shopName")String shopName, @Param(value="layer")String layer, @Param(value="productionType")String productionType);

	public List<Map<String, Object>> getyieldBP4LAYERWithKillingCategory(@Param(value="shopName")String shopName, @Param(value="layer")String layer,
			@Param(value="productionType")String productionType);

	public List<Map<String, Object>> getdefectBP4LAYERWithKilling(@Param(value="layer")String layer, @Param(value="productionType")String productionType,
			@Param(value="productCategory")String productCategory);

	public List<Map<String, Object>> getBP4LAYERDefectListWithKilling(@Param(value="layer")String layer, @Param(value="productionType")String productionType,
			@Param(value="productCategory")String productCategory);

	public List<Map<String, Object>> getyieldEVEN_category(@Param(value="shopName")String shopName, @Param(value="processType")String processType, @Param(value="productionType")String productionType);

	public List<Map<String, Object>> yieldEVENNew(@Param(value="shopName")String shopName, @Param(value="processType")String processType, @Param(value="productCategory")String productCategory,
			@Param(value="productionType")String productionType);

	public List<Map<String, Object>> getyieldEVEN(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="productCategory")String productCategory,
			@Param(value="productionType")String productionType);

	public List<Map<String, Object>> getyieldEACMDLCategory(@Param(value="shopName")String shopName, @Param(value="processType")String processType, @Param(value="productionType")String productionType,
			@Param(value="defectdataType")String defectdataType, @Param(value="lineName")String lineName);

	public List<Map<String, Object>> getdefectByLine(@Param(value="shopName")String shopName, @Param(value="yieldtype")String yieldtype, @Param(value="productionType")String productionType,
			@Param(value="defectdataType")String defectdataType, @Param(value="lineName")String lineName, @Param(value="productCategory")String productCategory);

	public List<Map<String, Object>> getDefectListByLine(@Param(value="shopName")String shopName, @Param(value="yieldtype")String yieldtype, @Param(value="productionType")String productionType,
			@Param(value="defectdataType")String defectdataType, @Param(value="lineName")String lineName, @Param(value="productCategory")String productCategory);

	public List<Map<String, Object>> getdefectDetailByLine(@Param(value="shopName")String shopName, @Param(value="yieldtype")String yieldtype, @Param(value="productionType")String productionType,
			@Param(value="defectdataType")String defectdataType, @Param(value="lineName")String lineName, @Param(value="productCategory")String productCategory);

	public List<Map<String, Object>> getyieldCategoryMDLCUM(@Param(value="shopName")String shopName, @Param(value="processType")String processType, @Param(value="productionType")String productionType, @Param(value="dataType")String dataType, @Param(value="lineName")String lineName);

	public List<Map<String, Object>> getdefectMDLCUM(@Param(value="shopName")String shopName, @Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="processType")String processType, @Param(value="dataType")String dataType, @Param(value="lineName")String lineName);

	public List<Map<String, Object>> getdefectMDLCUMCategory(@Param(value="shopName")String shopName, @Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="processType")String processType, @Param(value="dataType")String dataType, @Param(value="lineName")String lineName);

	public List<Map<String, Object>> getReworkYieldMDLCUM(@Param(value="shopName")String shopName, @Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory);

	public List<Map<String, Object>> getyieldMDLCUM(@Param(value="shopName")String shopName, @Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory, @Param(value="processType")String processType, @Param(value="dataType")String dataType, @Param(value="lineName")String lineName);

	public List<Map<String, Object>> getyieldStockInCum(@Param(value="productCategory")String productCategory);

	public List<Map<String, Object>> yieldStockInCUMCategory(@Param(value="shopName")String shopName);

	public List<Map<String, Object>> getTotalYieldCategory(@Param(value="shopName")String shopName, @Param(value="yieldType")String yieldType);

	public List<Map<String, Object>> getEVENYiledOneyear(@Param(value="productCategory")String productCategory, @Param(value="year")String year, @Param(value="defectOrscrap")String defectOrscrap);

	public List<Map<String, Object>> getEVENYieldByDepartment(@Param(value="shopName")String shopName, @Param(value="productCategory")String productCategory,
			@Param(value="productionType")String productionType);

	public List<Map<String, Object>> getScrapEVENAllbyDepartment(@Param(value="shopName")String shopName);

	public List<Map<String, Object>> getScrapEVENAllbyDepartmentQty(@Param(value="shopName")String shopName);

	public List<Map<String, Object>> getdefectEVENbyDepartment(@Param(value="shopName")String shopName, @Param(value="productCategory")String productCategory,
			@Param(value="productionType")String productionType, @Param(value="departmentName")String departmentName);

	public List<Map<String, Object>> getScrapEVENbyDepartment(@Param(value="shopName")String shopName, @Param(value="productCategory")String productCategory,
			@Param(value="productionType")String productionType, @Param(value="departmentName")String departmentName);

	public List<Map<String, Object>> getScrapEVENbyDepartmentQty(@Param(value="shopName")String shopName, @Param(value="productCategory")String productCategory,
			@Param(value="productionType")String productionType, @Param(value="departmentName")String departmentName);

}
