package com.boe.idm.project.mapper.primary.chart;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface EchartMapper {

	public List<Map<String, Object>> getYield(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory) throws Exception;

	public List<Map<String, Object>> getDefect(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory) throws Exception;

	public List<Map<String, Object>> getDefectListByLine(@Param(value="shopName")String shopName, @Param(value="operationName")String operationName, @Param(value="productionType")String productionType, @Param(value="productCategory")String productCategory) throws Exception;

	public List<Map<String, Object>> getProductionDate() throws Exception;

	public List<Map<String, Object>> getDateFactory() throws Exception;

	public List<Map<String, Object>> getProduction(String shopName) throws Exception;

	public List<Map<String, Object>> getProductionDate(String shopName) throws Exception;

	public List<Map<String, Object>> geteqpStateMonitor2days(@Param(value="processType")String processType, @Param(value="lineName")String lineName,
			@Param(value="lineName1")String lineName1,@Param(value="todayflag")String todayflag, 
			@Param(value="dateMin")String dateMin);

	public List<Map<String, Object>> geteqpStateMonitorMachineList(@Param(value="processType")String processType,  @Param(value="lineName")String lineName,
			@Param(value="lineName1")String lineName1);

	public List<Map<String, Object>> geteqpStateMonitorStateList2days(@Param(value="processType")String processType, @Param(value="lineName")String lineName,
			@Param(value="lineName1")String lineName1, @Param(value="todayflag")String todayflag, 
			@Param(value="dateMin")String dateMin);

	public List<Map<String, Object>> geteqpStateMonitor7days(@Param(value="processType")String processType, @Param(value="lineName")String lineName, @Param(value="lineName1")String lineName1,
			@Param(value="dateMin")String dateMin, @Param(value="dateMax")String dateMax);

	public List<Map<String, Object>> geteqpStateMonitorStateList7days(@Param(value="processType")String processType, @Param(value="lineName")String lineName, @Param(value="lineName1")String lineName1,
			@Param(value="dateMin")String dateMin, @Param(value="dateMax")String dateMax);

	public List<Map<String, Object>> geteqpStateMonitorRunRatio(@Param(value="machineName")String machineName);

	public List<Map<String, Object>> geteqpStateMonitorRunRatio7day(@Param(value="machineName")String machineName, @Param(value="date")String date);

	public List<Map<String, Object>> getThisMonthDayCount();

	public List<Map<String, Object>> getDefaultCategory(String shopName);

	public List<Map<String, Object>> getDateFactory(String string);

	public List<Map<String, Object>> getYieldDefectSpec(@Param(value="productCategory")String productCategory, @Param(value="productionType")String productionType,
			@Param(value="specFactoryName")String specFactoryName, @Param(value="specDefectType")String specDefectType, 
			@Param(value="specDepartment")String specDepartment, @Param(value="specFactoryYear")String specFactoryYear);
}
