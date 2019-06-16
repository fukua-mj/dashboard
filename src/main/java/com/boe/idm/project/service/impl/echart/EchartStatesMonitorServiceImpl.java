package com.boe.idm.project.service.impl.echart;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.chart.EchartMapper;
import com.boe.idm.project.mapper.primary.chart.OeeMapper;
import com.boe.idm.project.mapper.primary.chart.QualityMapper;
import com.boe.idm.project.mapper.primary.chart.StatesMonitorMapper;
import com.boe.idm.project.mapper.primary.chart.WareHouseMapper;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.echart.EchartOeeService;
import com.boe.idm.project.service.echart.EchartQualityService;
import com.boe.idm.project.service.echart.EchartStatesMonitorService;
import com.boe.idm.project.service.echart.EchartWareHouseService;

import oracle.net.aso.s;

@Service
public class EchartStatesMonitorServiceImpl implements EchartStatesMonitorService{

	@Resource
	private StatesMonitorMapper statesMonitorMapper;

	@Override
	public List<Map<String, Object>> geteqpstateMonitorEQPID(String machineType) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpstateMonitorEQPID(machineType);
	}

	@Override
	public List<Map<String, Object>> getEqpStateMonitor(String processType, String lineName, String dayDate) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.getEqpStateMonitor(processType, lineName, dayDate);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorMachineList(String processType, String lineName,
			String lineName1) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorMachineList(processType, lineName, lineName1);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorStateList(String processType, String lineName, String dayDate) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorStateList(processType, lineName, dayDate);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitor2daysEAC(String processType, String lineName) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitor2daysEAC(processType, lineName);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorMachineListEAC(String processType, String lineName) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorMachineListEAC(processType, lineName);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorStateList2daysEAC(String processType, String lineName) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorStateList2daysEAC(processType, lineName);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitor2daysEACYesterday(String processType, String lineName) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitor2daysEACYesterday(processType, lineName);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorMachineListEACYesterday(String processType, String lineName) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorMachineListEACYesterday(processType, lineName);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorStateList2daysEACYesterday(String processType, String lineName) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorStateList2daysEACYesterday(processType, lineName);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorRunRatio(String machineName, String dayDate) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorRunRatio(machineName, dayDate);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorRunRatioYesterday(String machineName) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorRunRatioYesterday(machineName);
	}

	@Override
	public List<Map<String, Object>> eqpstateMonitorProductTableYesterday(String shopName) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.eqpstateMonitorProductTableYesterday(shopName);
	}

	@Override
	public List<Map<String, Object>> eqpstateMonitorProductTable(List<String> machineNames, String date) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.eqpstateMonitorProductTable(machineNames, date);
	}

	@Override
	public List<Map<String, Object>> geteqpstateMonitorLineName(String machineType) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpstateMonitorLineName(machineType);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorMachineListByLineName(String processType, List<String> lineNames,
			String lineName1) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorMachineListByLineName(processType, lineNames, lineName1);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitor2days(String processType, String lineName, String lineName1,
			String string, String dateMin) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitor2days(processType, lineName, lineName1, string, dateMin);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitor7days(String processType, String lineName, String lineName1,
			String dateMin, String dateMax) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitor7days(processType, lineName, lineName1, dateMin, dateMax);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorStateList7days(String processType, String lineName,
			String lineName1, String dateMin, String dateMax) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorStateList7days(processType, lineName, lineName1, dateMin, dateMax);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorStateList2days(String processType, String lineName,
			String lineName1, String string, String dateMin) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorStateList2days(processType, lineName, lineName1, string, dateMin);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorRunRatio7day(String machineName, String date) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorRunRatio7day(machineName, date);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorTotalRatioMulti(String date,
			ArrayList<String> listMachineSorted) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorTotalRatioMulti(date, listMachineSorted, listMachineSorted);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorTotalRatioSingle(String date, String defaultMachineName) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorTotalRatioSingle(date, defaultMachineName);
	}

	@Override
	public List<Map<String, Object>> getMachineStateRatio(String string) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.getMachineStateRatio(string);
	}

	@Override
	public List<Map<String, Object>> getMachineStateRatio7days(String string) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.getMachineStateRatio7days(string);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitor2daysMDLTOTAL(String lineName) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitor2daysMDLTOTAL(lineName);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorMachineListMDLTOTAL(String lineName) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorMachineListMDLTOTAL(lineName);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorStateList2daysMDLTOTAL(String lineName) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorStateList2daysMDLTOTAL(lineName);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitor7daysMDLTOTAL(String lineName, String dateMin, String dateMax) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitor7daysMDLTOTAL(lineName, dateMin, dateMax);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorStateList7daysMDLTOTAL(String lineName, String dateMin,
			String dateMax) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorStateList7daysMDLTOTAL(lineName, dateMin, dateMax);
	}

	@Override
	public List<Map<String, Object>> getEqpStateMonitorNew(String processType, String lineName, String dayDate) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.getEqpStateMonitorNew(processType, lineName, dayDate);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorMachineListNew(String processType, String lineName) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorMachineListNew(processType, lineName);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorStateListNew(String processType, String lineName,
			String dayDate) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorStateListNew(processType, lineName, dayDate);
	}

	@Override
	public List<Map<String, Object>> getEqpStateMonitorMDL(String processType, String lineName, String lineName1,
			String date) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.getEqpStateMonitorMDL(processType, lineName, lineName1, date);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorStateListMDL(String processType, String lineName,
			String lineName1, String date) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorStateListMDL(processType, lineName, lineName1, date);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorMDLTOTAL(String lineName, String date) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorMDLTOTAL(lineName, date);
	}

/*	@Override
	public List<Map<String, Object>> geteqpStateMonitorMachineListMDLTOTAL(String lineName, String date) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorMachineListMDLTOTAL(lineName, date);
	}*/

	@Override
	public List<Map<String, Object>> geteqpStateMonitorStateListMDLTOTAL(String lineName, String date) {
		// TODO Auto-generated method stub
		return statesMonitorMapper.geteqpStateMonitorStateListMDLTOTAL(lineName, date);
	}

	
	
}
