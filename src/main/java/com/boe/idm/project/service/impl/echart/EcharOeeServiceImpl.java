package com.boe.idm.project.service.impl.echart;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.chart.EchartMapper;
import com.boe.idm.project.mapper.primary.chart.OeeMapper;
import com.boe.idm.project.mapper.primary.chart.QualityMapper;
import com.boe.idm.project.mapper.primary.chart.WareHouseMapper;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.echart.EchartOeeService;
import com.boe.idm.project.service.echart.EchartQualityService;
import com.boe.idm.project.service.echart.EchartWareHouseService;

@Service
public class EcharOeeServiceImpl implements EchartOeeService{

	@Resource
	private OeeMapper oeeMapper;

	@Override
	public List<Map<String, Object>> getMachineName(String machineType) {
		// TODO Auto-generated method stub
		return oeeMapper.getMachineName(machineType);
	}

	@Override
	public List<Map<String, Object>> getoeedata(String shopName, String processType, String machinename) {
		// TODO Auto-generated method stub
		return oeeMapper.getoeedata(shopName, processType, machinename);
	}

	@Override
	public List<Map<String, Object>> getOeeRatio(String shopName, String machinename) {
		// TODO Auto-generated method stub
		return oeeMapper.getOeeRatio(shopName, machinename);
	}

	@Override
	public List<Map<String, Object>> getoeedata_ALL(String processType) {
		// TODO Auto-generated method stub
		return oeeMapper.getoeedata_ALL(processType);
	}

	@Override
	public List<Map<String, Object>> getOeeRatio_ALL(String shopName, String processType) {
		// TODO Auto-generated method stub
		return oeeMapper.getOeeRatio_ALL(shopName, processType);
	}

	@Override
	public List<Map<String, Object>> getoeedataByLineDifference(String shopName, String processType) {
		// TODO Auto-generated method stub
		return oeeMapper.getoeedataByLineDifference(shopName, processType);
	}

	@Override
	public List<Map<String, Object>> getOeeMachineName(String shopName, String processType) {
		// TODO Auto-generated method stub
		return oeeMapper.getOeeMachineName(shopName, processType);
	}

	@Override
	public List<Map<String, Object>> getOeeRatioByLineDifference(String shopName, String machineNameLikeValue,
			String yesterdayDate) {
		// TODO Auto-generated method stub
		return oeeMapper.getOeeRatioByLineDifference(shopName, machineNameLikeValue, yesterdayDate);
	}

	@Override
	public List<Map<String, Object>> getOpt_oeeMDLLineName(String processType) {
		// TODO Auto-generated method stub
		return oeeMapper.getOpt_oeeMDLLineName(processType);
	}

	@Override
	public List<Map<String, Object>> getPrdMonitorHeatMap(String shopName) {
		// TODO Auto-generated method stub
		return oeeMapper.getPrdMonitorHeatMap(shopName);
	}

	@Override
	public List<String> getPrdMonitorHeatMapLineName(String shopName) {
		// TODO Auto-generated method stub
		return oeeMapper.getPrdMonitorHeatMapLineName(shopName);
	}


	
	
}
