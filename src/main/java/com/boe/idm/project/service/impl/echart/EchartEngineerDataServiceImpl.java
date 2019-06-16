package com.boe.idm.project.service.impl.echart;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.chart.CycleTimeMapper;
import com.boe.idm.project.mapper.primary.chart.EngineerDataMapper;
import com.boe.idm.project.service.echart.EchartCycleTimeService;
import com.boe.idm.project.service.echart.EchartEngineerDataService;

@Service
public class EchartEngineerDataServiceImpl implements EchartEngineerDataService{
	
	@Autowired
	private EngineerDataMapper engineerDataMapper;

	@Override
	public List<Map<String, Object>> getProductCategory(String shopName, String layerItem, String layerName,
			String itemName) {
		// TODO Auto-generated method stub
		return engineerDataMapper.getProductCategory(shopName, layerItem, layerName, itemName);
	}

	@Override
	public List<Map<String, Object>> getengineeringData(String shopName, String layerItem, String layerName,
			String productCategory, String itemName) {
		// TODO Auto-generated method stub
		return engineerDataMapper.getengineeringData(shopName, layerItem, layerName, productCategory, itemName);
	}

	
	
	
}
