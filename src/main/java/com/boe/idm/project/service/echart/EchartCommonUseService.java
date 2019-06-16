package com.boe.idm.project.service.echart;

import java.util.List;
import java.util.Map;

public interface EchartCommonUseService {

    List<Map<String, Object>>getmonthweekdaytimedata();
	
	List<Map<String, Object>>getProductionDate();
	
	List<Map<String, Object>>getUserinfo(String userName);
	
}
