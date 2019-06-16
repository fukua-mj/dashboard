package com.boe.idm.project.service.impl.echart;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.service.echart.EchartCommonUseService;
import com.boe.idm.project.mapper.primary.chart.*;

@Service
public class EchartCommonUseServiceImpl implements EchartCommonUseService {

	@Resource
	private CommonUseMapper CommonUseMapper;
	
	@Override
	public  List<Map<String, Object>>getmonthweekdaytimedata(){
		return CommonUseMapper.getmonthweekdaytimedata();
	}
	
	@Override
	public List<Map<String, Object>>getProductionDate(){
		return CommonUseMapper.getProductionDate();
	}
	
	@Override
	public List<Map<String, Object>>getUserinfo(String userName){
		return CommonUseMapper.getUserinfo(userName);
	}
	
}
