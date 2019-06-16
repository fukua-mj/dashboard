package com.boe.idm.project.service.echart;

import java.util.List;
import java.util.Map;

public interface EchartOeeService {

	List<Map<String, Object>> getMachineName(String machineType);

	List<Map<String, Object>> getoeedata(String shopName, String processType, String machinename);

	List<Map<String, Object>> getOeeRatio(String shopName, String machinename);

	List<Map<String, Object>> getoeedata_ALL(String processType);

	List<Map<String, Object>> getOeeRatio_ALL(String shopName, String processType);

	List<Map<String, Object>> getoeedataByLineDifference(String shopName, String processType);

	List<Map<String, Object>> getOeeMachineName(String shopName, String processType);

	List<Map<String, Object>> getOeeRatioByLineDifference(String shopName, String machineNameLikeValue,
			String yesterdayDate);

	List<Map<String, Object>> getOpt_oeeMDLLineName(String processType);

	List<Map<String, Object>> getPrdMonitorHeatMap(String shopName);

	List<String> getPrdMonitorHeatMapLineName(String shopName);



}
