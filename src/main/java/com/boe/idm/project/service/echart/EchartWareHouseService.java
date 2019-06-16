package com.boe.idm.project.service.echart;

import java.util.List;
import java.util.Map;

public interface EchartWareHouseService {

	List<Map<String, Object>> getwarehouse(String shopName);

	List<Map<String, Object>> getwarehouseGrade(String shopName, String productCategory);



}
