package com.boe.idm.project.service.impl.echart;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.chart.CycleTimeMapper;
import com.boe.idm.project.service.echart.EchartCycleTimeService;

@Service
public class EchartCycleTimeServiceImpl implements EchartCycleTimeService{

	@Resource
	private CycleTimeMapper cycleTimeMapper;

	@Override
	public List<Map<String, Object>> getCycleTimeProductCategory(String shopName, String productionType) {
		// TODO Auto-generated method stub
		return cycleTimeMapper.getCycleTimeProductCategory(shopName, productionType);
	}

	@Override
	public List<Map<String, Object>> CycleTimeForLegendData(String factoryName, String productionType,
			String productcateGory) {
		// TODO Auto-generated method stub
		return cycleTimeMapper.CycleTimeForLegendData(factoryName, productionType, productcateGory);
	}

	@Override
	public List<Map<String, Object>> CycleTimeForAllData(String factoryName, String productionType,
			String productcateGory) {
		// TODO Auto-generated method stub
		return cycleTimeMapper.CycleTimeForAllData(factoryName, productionType, productcateGory);
	}

	@Override
	public List<Map<String, Object>> getmonthweekdaytimedata() {
		// TODO Auto-generated method stub
		return cycleTimeMapper.getmonthweekdaytimedata();
	}

	
	
	
}
