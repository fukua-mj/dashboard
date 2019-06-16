package com.boe.idm.project.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.chart.EchartMapper;
import com.boe.idm.project.service.EchartService;

@Service
public class EchartServiceImpl implements EchartService{

	@Resource
	private EchartMapper echartmapper;
	
	@Override
	public List<Map<String, Object>> geteqpStateMonitor2days(String processType, String lineName, String lineName1,
			String todayflag, String dateMin) {
		// TODO Auto-generated method stub
		return echartmapper.geteqpStateMonitor2days(processType, lineName, lineName1, todayflag, dateMin);
	}

	@Override
	public List<Map<String, Object>> getThisMonthDayCount() {
		// TODO Auto-generated method stub
		return echartmapper.getThisMonthDayCount();
	}

	@Override
	public List<Map<String, Object>> getDefaultCategory(String shopName) {
		// TODO Auto-generated method stub
		return echartmapper.getDefaultCategory(shopName);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorMachineList(String processType, String lineName,
			String lineName1) {
		// TODO Auto-generated method stub
		return echartmapper.geteqpStateMonitorMachineList(processType, lineName, lineName1);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorStateList2days(String processType, String lineName,
			String lineName1, String todayflag, String dateMin) {
		// TODO Auto-generated method stub
		return echartmapper.geteqpStateMonitorStateList2days(processType, lineName, lineName1, todayflag, dateMin);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitor7days(String processType, String lineName, String lineName1,
			String dateMin, String dateMax) {
		// TODO Auto-generated method stub
		return echartmapper.geteqpStateMonitor7days(processType, lineName, lineName1, dateMin, dateMax);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorStateList7days(String processType, String lineName,
			String lineName1, String dateMin, String dateMax) {
		// TODO Auto-generated method stub
		return echartmapper.geteqpStateMonitorStateList7days(processType, lineName, lineName1, dateMin, dateMax);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorRunRatio(String machineName) {
		// TODO Auto-generated method stub
		return echartmapper.geteqpStateMonitorRunRatio(machineName);
	}

	@Override
	public List<Map<String, Object>> geteqpStateMonitorRunRatio7day(String machineName, String date) {
		// TODO Auto-generated method stub
		return echartmapper.geteqpStateMonitorRunRatio7day(machineName,date);
	}

	@Override
	public List<Map<String, Object>> getYield(String shopName, String operationName, String productionType, String productCategory) throws Exception{
		// TODO Auto-generated method stub
		return echartmapper.getYield(shopName, operationName, productionType,productCategory);
	}

	@Override
	public List<Map<String, Object>> getDefect(String shopName, String operationName, String productionType, String productCategory)
			throws Exception {
		// TODO Auto-generated method stub
		return echartmapper.getDefect(shopName, operationName, productionType, productCategory);
	}

	@Override
	public List<Map<String, Object>> getDefectListByLine(String shopName, String operationName, String productionType, String productCategory)
			throws Exception {
		// TODO Auto-generated method stub
		return echartmapper.getDefectListByLine(shopName, operationName, productionType,productCategory);
	}

	@Override
	public List<Map<String, Object>> getProductionDate() throws Exception {
		// TODO Auto-generated method stub
		return echartmapper.getProductionDate();
	}

	@Override
	public List<Map<String, Object>> getDateFactory() throws Exception {
		// TODO Auto-generated method stub
		return echartmapper.getDateFactory();
	}

	@Override
	public List<Map<String, Object>> getProduction(String shopName) throws Exception {
		// TODO Auto-generated method stub
		return echartmapper.getProduction(shopName);
	}

	@Override
	public List<Map<String, Object>> getUserinfo(String userName) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Map<String, Object>> getProductionDate(String shopName) throws Exception {
		// TODO Auto-generated method stub
		return echartmapper.getProductionDate(shopName);
	}

	@Override
	public List<Map<String, Object>> getDateFactory(String string) {
		// TODO Auto-generated method stub
		return echartmapper.getDateFactory(string);
	}

	@Override
	public List<Map<String, Object>> getYieldDefectSpec(String productCategory,String productionType,String specFactoryName,String specDefectType,String specDepartment,String specFactoryYear){
		return echartmapper.getYieldDefectSpec(productCategory,productionType,specFactoryName,specDefectType,specDepartment,specFactoryYear);
	}

	

}
