package com.boe.idm.project.service.echart;

import java.util.List;
import java.util.Map;

public interface EchartCycleTimeService {

	List<Map<String, Object>> getCycleTimeProductCategory(String shopName, String productionType);

	List<Map<String, Object>> CycleTimeForLegendData(String factoryName, String productionType, String productcateGory);

	List<Map<String, Object>> CycleTimeForAllData(String factoryName, String productionType, String productcateGory);

	List<Map<String, Object>> getmonthweekdaytimedata();



}
