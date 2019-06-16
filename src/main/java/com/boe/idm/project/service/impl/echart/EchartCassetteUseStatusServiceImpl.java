package com.boe.idm.project.service.impl.echart;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.chart.CassetteUseStatusMapper;
import com.boe.idm.project.service.echart.EchartCassetteUseStatusService;

@Service
public class EchartCassetteUseStatusServiceImpl implements EchartCassetteUseStatusService{

	@Resource
	private CassetteUseStatusMapper CassetteUseStatusMapper;
	
	@Override
	public List<Map<String, Object>>CSTUseStatusWipBank(String FactoryDate,String DataType,String FactoryName){
		return  CassetteUseStatusMapper.CSTUseStatusWipBank(FactoryDate,DataType,FactoryName);
	}
	
	
}
