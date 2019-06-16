package com.boe.idm.project.service.impl.system;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.service.echart.EchartLossIndexService;
import com.boe.idm.project.mapper.primary.chart.*;

@Service
public class LossIndexServiceImpl implements EchartLossIndexService{

	@Resource
    private	LossIndexMapper LossIndexMapper;
	
	//GetPanelLoss
	@Override
	public List<Map<String, Object>>getPanelLossCategory(String DataType,String FactoryName,String ProductionType) {
		return LossIndexMapper.getPanelLossCategory(DataType,FactoryName,ProductionType);
	}
	@Override
	public List<Map<String, Object>>getPanelLossLegenddata(String DataType,String FactoryName,String ProductionType,String ProductCategory){
		return LossIndexMapper.getPanelLossLegenddata(DataType,FactoryName,ProductionType,ProductCategory);
	}
	@Override
	public List<Map<String, Object>>getPanelLossAllData(String DataType,String FactoryName,String ProductionType,String ProductCategory){
		return LossIndexMapper.getPanelLossAllData(DataType,FactoryName,ProductionType,ProductCategory);
	}
		
	
}
