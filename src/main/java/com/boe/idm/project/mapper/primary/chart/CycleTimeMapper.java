package com.boe.idm.project.mapper.primary.chart;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface CycleTimeMapper {

	List<Map<String, Object>> getCycleTimeProductCategory(@Param(value="shopName")String shopName, @Param(value="productionType")String productionType);

	List<Map<String, Object>> CycleTimeForLegendData(@Param(value="factoryName")String factoryName, @Param(value="productionType")String productionType, @Param(value="productcateGory")String productcateGory);

	List<Map<String, Object>> CycleTimeForAllData(@Param(value="factoryName")String factoryName, @Param(value="productionType")String productionType, @Param(value="productcateGory")String productcateGory);

	List<Map<String, Object>> getmonthweekdaytimedata();


}
