package com.boe.idm.project.service.echart;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface EchartCassetteUseStatusService {

	List<Map<String, Object>>CSTUseStatusWipBank(@Param(value="FactoryDate")String FactoryDate,@Param(value="DataType")String DataType,@Param(value="FactoryName")String FactoryName);
	
	
}
