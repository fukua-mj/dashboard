package com.boe.idm.project.mapper.primary.chart;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface EngineerDataMapper {

	List<Map<String, Object>> getProductCategory(@Param("shopName")String shopName, @Param("layerItem")String layerItem, @Param("layerName")String layerName, @Param("itemName")String itemName);

	List<Map<String, Object>> getengineeringData(@Param("shopName")String shopName, @Param("layerItem")String layerItem, @Param("layerName")String layerName,
			@Param("productCategory")String productCategory, @Param("itemName")String itemName);


}
