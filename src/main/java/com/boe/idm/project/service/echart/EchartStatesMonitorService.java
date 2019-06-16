package com.boe.idm.project.service.echart;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public interface EchartStatesMonitorService {

	List<Map<String, Object>> geteqpstateMonitorEQPID(String machineType);

	List<Map<String, Object>> getEqpStateMonitor(String processType, String lineName, String dayDate);

	List<Map<String, Object>> geteqpStateMonitorMachineList(String processType, String lineName, String lineName1);

	List<Map<String, Object>> geteqpStateMonitorStateList(String processType, String lineName, String dayDate);

	List<Map<String, Object>> geteqpStateMonitor2daysEAC(String processType, String lineName);

	List<Map<String, Object>> geteqpStateMonitorMachineListEAC(String processType, String lineName);

	List<Map<String, Object>> geteqpStateMonitorStateList2daysEAC(String processType, String lineName);

	List<Map<String, Object>> geteqpStateMonitor2daysEACYesterday(String processType, String lineName);

	List<Map<String, Object>> geteqpStateMonitorMachineListEACYesterday(String processType, String lineName);

	List<Map<String, Object>> geteqpStateMonitorStateList2daysEACYesterday(String processType, String lineName);

	List<Map<String, Object>> geteqpStateMonitorRunRatio(String machineName, String dayDate);

	List<Map<String, Object>> geteqpStateMonitorRunRatioYesterday(String machineName);

	List<Map<String, Object>> eqpstateMonitorProductTableYesterday(String shopName);

	List<Map<String, Object>> eqpstateMonitorProductTable(List<String> machineNames, String date);

	List<Map<String, Object>> geteqpstateMonitorLineName(String machineType);

	List<Map<String, Object>> geteqpStateMonitorMachineListByLineName(String processType, List<String> lineNames,
			String lineName1);

	List<Map<String, Object>> geteqpStateMonitor2days(String processType, String lineName, String lineName1,
			String string, String dateMin);

	List<Map<String, Object>> geteqpStateMonitor7days(String processType, String lineName, String lineName1,
			String dateMin, String dateMax);

	List<Map<String, Object>> geteqpStateMonitorStateList7days(String processType, String lineName, String lineName1,
			String dateMin, String dateMax);

	List<Map<String, Object>> geteqpStateMonitorStateList2days(String processType, String lineName, String lineName1,
			String string, String dateMin);

	List<Map<String, Object>> geteqpStateMonitorRunRatio7day(String machineName, String date);

	List<Map<String, Object>> geteqpStateMonitorTotalRatioMulti(String date, ArrayList<String> listMachineSorted);

	List<Map<String, Object>> geteqpStateMonitorTotalRatioSingle(String date, String defaultMachineName);

	List<Map<String, Object>> getMachineStateRatio(String string);

	List<Map<String, Object>> getMachineStateRatio7days(String string);

	List<Map<String, Object>> geteqpStateMonitor2daysMDLTOTAL(String lineName);

	List<Map<String, Object>> geteqpStateMonitorMachineListMDLTOTAL(String lineName);

	List<Map<String, Object>> geteqpStateMonitorStateList2daysMDLTOTAL(String lineName);

	List<Map<String, Object>> geteqpStateMonitor7daysMDLTOTAL(String lineName, String dateMin, String dateMax);

	List<Map<String, Object>> geteqpStateMonitorStateList7daysMDLTOTAL(String lineName, String dateMin, String dateMax);

	List<Map<String, Object>> getEqpStateMonitorNew(String processType, String lineName, String dayDate);

	List<Map<String, Object>> geteqpStateMonitorMachineListNew(String processType, String lineName);

	List<Map<String, Object>> geteqpStateMonitorStateListNew(String processType, String lineName, String dayDate);

	List<Map<String, Object>> getEqpStateMonitorMDL(String processType, String lineName, String lineName1, String date);

	List<Map<String, Object>> geteqpStateMonitorStateListMDL(String processType, String lineName, String lineName1,
			String date);

	List<Map<String, Object>> geteqpStateMonitorMDLTOTAL(String lineName, String date);

	//List<Map<String, Object>> geteqpStateMonitorMachineListMDLTOTAL(String lineName, String date);

	List<Map<String, Object>> geteqpStateMonitorStateListMDLTOTAL(String lineName, String date);

	
}
