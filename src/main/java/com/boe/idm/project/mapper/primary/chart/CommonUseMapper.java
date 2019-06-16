package com.boe.idm.project.mapper.primary.chart;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CommonUseMapper {

	List<Map<String, Object>>getmonthweekdaytimedata();
	
	List<Map<String, Object>>getProductionDate();
	
	List<Map<String, Object>>getUserinfo(String userName);
	
}
