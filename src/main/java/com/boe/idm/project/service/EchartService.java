package com.boe.idm.project.service;

import java.util.List;
import java.util.Map;

public interface EchartService {

	public List<Map<String, Object>> getYield(String shopName, String operationName, String productionType, String productCategory) throws Exception;

	public List<Map<String, Object>> getDefect(String shopName, String operationName, String productionType, String productCategory) throws Exception;

	public List<Map<String, Object>> getDefectListByLine(String shopName, String operationName, String productionType, String productCategory) throws Exception;

	public List<Map<String, Object>> getProductionDate() throws Exception;

	public List<Map<String, Object>> getDateFactory() throws Exception;

	public List<Map<String, Object>> getProduction(String shopName) throws Exception;

	public List<Map<String, Object>> getProductionDate(String shopName) throws Exception;

	public List<Map<String, Object>> getUserinfo(String userName) throws Exception;

	public List<Map<String, Object>> geteqpStateMonitor2days(String processType, String lineName, String lineName1,
			String todayFlag, String dateMin);

	public List<Map<String, Object>> geteqpStateMonitorMachineList(String processType, String lineName,
			String lineName1);

	public List<Map<String, Object>> geteqpStateMonitorStateList2days(String processType, String lineName,
			String lineName1, String todayFlag, String dateMin);

	public List<Map<String, Object>> geteqpStateMonitor7days(String processType, String lineName, String lineName1,
			String dateMin, String dateMax);

	public List<Map<String, Object>> geteqpStateMonitorStateList7days(String processType, String lineName,
			String lineName1, String dateMin, String dateMax);

	public List<Map<String, Object>> geteqpStateMonitorRunRatio(String machineName);

	public List<Map<String, Object>> geteqpStateMonitorRunRatio7day(String machineName, String date);

	public List<Map<String, Object>> getThisMonthDayCount();

	public List<Map<String, Object>> getDefaultCategory(String shopName);

	public List<Map<String, Object>> getDateFactory(String string);

	public List<Map<String, Object>> getYieldDefectSpec(String productCategory,String productionType,String specFactoryName,String specDefectType,String specDepartment,String specFactoryYear);

}
