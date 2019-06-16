package com.boe.idm.project.mapper.primary.chart;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface CassetteUseStatusMapper {

	List<Map<String, Object>>CSTUseStatusWipBank(@Param(value="FactoryDate")String FactoryDate,@Param(value="DataType")String DataType,@Param(value="FactoryName")String FactoryName);
	
}
