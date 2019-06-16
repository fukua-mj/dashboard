package com.boe.idm.project.service.echart;

import java.util.List;
import java.util.Map;

public interface EchartEngineerDataService {

	List<Map<String, Object>> getProductCategory(String shopName, String layerItem, String layerName, String itemName);

	List<Map<String, Object>> getengineeringData(String shopName, String layerItem, String layerName,
			String productCategory, String itemName);




}
