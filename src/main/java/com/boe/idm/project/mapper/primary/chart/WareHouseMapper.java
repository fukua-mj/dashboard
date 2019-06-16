package com.boe.idm.project.mapper.primary.chart;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface WareHouseMapper {

	List<Map<String, Object>> getwarehouse(@Param(value="shopName")String shopName);

	List<Map<String, Object>> getwarehouseGrade(@Param(value="shopName")String shopName, @Param(value="productCategory")String productCategory);


}
