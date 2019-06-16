package com.boe.idm.project.service.impl.echart;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.chart.EchartMapper;
import com.boe.idm.project.mapper.primary.chart.QualityMapper;
import com.boe.idm.project.mapper.primary.chart.WareHouseMapper;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.echart.EchartQualityService;
import com.boe.idm.project.service.echart.EchartWareHouseService;

@Service
public class EchartWareHouseServiceImpl implements EchartWareHouseService{

	@Resource
	private WareHouseMapper wareHouseMapper;

	@Override
	public List<Map<String, Object>> getwarehouse(String shopName) {
		// TODO Auto-generated method stub
		return wareHouseMapper.getwarehouse(shopName);
	}

	@Override
	public List<Map<String, Object>> getwarehouseGrade(String shopName, String productCategory) {
		// TODO Auto-generated method stub
		return wareHouseMapper.getwarehouseGrade(shopName, productCategory);
	}
	
	
}
