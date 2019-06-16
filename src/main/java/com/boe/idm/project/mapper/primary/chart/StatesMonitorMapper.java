package com.boe.idm.project.mapper.primary.chart;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface StatesMonitorMapper {

	List<Map<String, Object>> geteqpstateMonitorEQPID(@Param(value="machineType")String machineType);

	List<Map<String, Object>> getEqpStateMonitor(@Param(value="processType")String processType, @Param(value="lineName")String lineName, @Param(value="dayDate")String dayDate);

	List<Map<String, Object>> geteqpStateMonitorMachineList(@Param(value="processType")String processType, @Param(value="lineName")String lineName, @Param(value="lineName1")String lineName1);

	List<Map<String, Object>> geteqpStateMonitorStateList(@Param(value="processType")String processType, @Param(value="lineName")String lineName, @Param(value="dayDate")String dayDate);

	List<Map<String, Object>> geteqpStateMonitor2daysEAC(@Param(value="processType")String processType, @Param(value="lineName")String lineName);

	List<Map<String, Object>> geteqpStateMonitorMachineListEAC(@Param(value="processType")String processType, @Param(value="lineName")String lineName);

	List<Map<String, Object>> geteqpStateMonitorStateList2daysEAC(@Param(value="processType")String processType, @Param(value="lineName")String lineName);

	List<Map<String, Object>> geteqpStateMonitor2daysEACYesterday(@Param(value="processType")String processType, @Param(value="lineName")String lineName);

	List<Map<String, Object>> geteqpStateMonitorMachineListEACYesterday(@Param(value="processType")String processType, @Param(value="lineName")String lineName);

	List<Map<String, Object>> geteqpStateMonitorStateList2daysEACYesterday(@Param(value="processType")String processType, @Param(value="lineName")String lineName);

	List<Map<String, Object>> geteqpStateMonitorRunRatio(@Param(value="machineName")String machineName, @Param(value="dayDate")String dayDate);

	List<Map<String, Object>> geteqpStateMonitorRunRatioYesterday(@Param(value="machineName")String machineName);

	List<Map<String, Object>> eqpstateMonitorProductTableYesterday(@Param(value="shopName")String shopName);

	List<Map<String, Object>> eqpstateMonitorProductTable(@Param(value="machineNames")List<String> machineNames, @Param(value="date")String date);

	List<Map<String, Object>> geteqpstateMonitorLineName(@Param(value="machineType")String machineType);
	
	
	
	
	

	List<Map<String, Object>> geteqpStateMonitorMachineListByLineName(@Param(value="processType")String processType, @Param(value="lineNames")List<String> lineNames,
			@Param(value="lineName1")String lineName1);

	List<Map<String, Object>> geteqpStateMonitor2days(@Param(value="processType")String processType, @Param(value="lineName")String lineName, @Param(value="lineName1")String lineName1,
			@Param(value="string")String string, @Param(value="dateMin")String dateMin);

	List<Map<String, Object>> geteqpStateMonitor7days(@Param(value="processType")String processType, @Param(value="lineName")String lineName, @Param(value="lineName1")String lineName1,
			@Param(value="dateMin")String dateMin, @Param(value="dateMax")String dateMax);

	List<Map<String, Object>> geteqpStateMonitorStateList7days(@Param(value="processType")String processType, @Param(value="lineName")String lineName, @Param(value="lineName1")String lineName1,
			@Param(value="dateMin")String dateMin, @Param(value="dateMax")String dateMax);

	List<Map<String, Object>> geteqpStateMonitorStateList2days(@Param(value="processType")String processType, @Param(value="lineName")String lineName, @Param(value="lineName1")String lineName1,
			@Param(value="string")String string, @Param(value="date")String date);

	List<Map<String, Object>> geteqpStateMonitorRunRatio7day(@Param(value="machineName")String machineName, @Param(value="date")String date);

	List<Map<String, Object>> geteqpStateMonitorTotalRatioMulti(@Param(value="date")String date, @Param(value="listMachineSorted")ArrayList<String> listMachineSorted, @Param(value="listMachineSorted1")ArrayList<String> listMachineSorted1);

	List<Map<String, Object>> geteqpStateMonitorTotalRatioSingle(@Param(value="date")String date, @Param(value="defaultMachineName")String defaultMachineName);

	List<Map<String, Object>> getMachineStateRatio(@Param(value="string")String string);

	List<Map<String, Object>> getMachineStateRatio7days(@Param(value="string")String string);

	List<Map<String, Object>> geteqpStateMonitor2daysMDLTOTAL(@Param(value="lineName")String lineName);

	List<Map<String, Object>> geteqpStateMonitorMachineListMDLTOTAL(@Param(value="lineName")String lineName);

	List<Map<String, Object>> geteqpStateMonitorStateList2daysMDLTOTAL(@Param(value="lineName")String lineName);

	List<Map<String, Object>> geteqpStateMonitor7daysMDLTOTAL(@Param(value="lineName")String lineName, @Param(value="dateMin")String dateMin, @Param(value="dateMax")String dateMax);

	List<Map<String, Object>> geteqpStateMonitorStateList7daysMDLTOTAL(@Param(value="lineName")String lineName, @Param(value="dateMin")String dateMin, @Param(value="dateMax")String dateMax);

	List<Map<String, Object>> getEqpStateMonitorNew(@Param(value="processType")String processType, @Param(value="lineName")String lineName, @Param(value="dayDate")String dayDate);

	List<Map<String, Object>> geteqpStateMonitorMachineListNew(@Param(value="processType")String processType, @Param(value="lineName")String lineName);

	List<Map<String, Object>> geteqpStateMonitorStateListNew(@Param(value="processType")String processType, @Param(value="lineName")String lineName, @Param(value="dayDate")String dayDate);

	List<Map<String, Object>> getEqpStateMonitorMDL(@Param(value="processType")String processType, @Param(value="lineName")String lineName, @Param(value="lineName1")String lineName1, @Param(value="date")String date);

	List<Map<String, Object>> geteqpStateMonitorStateListMDL(@Param(value="processType")String processType, @Param(value="lineName")String lineName, @Param(value="lineName1")String lineName1, @Param(value="date")String date);

	List<Map<String, Object>> geteqpStateMonitorMDLTOTAL(@Param(value="lineName")String lineName, @Param(value="date")String date);

	//List<Map<String, Object>> geteqpStateMonitorMachineListMDLTOTAL(@Param(value="lineName")String lineName, @Param(value="date")String date);

	List<Map<String, Object>> geteqpStateMonitorStateListMDLTOTAL(@Param(value="lineName")String lineName, @Param(value="date")String date);

}
