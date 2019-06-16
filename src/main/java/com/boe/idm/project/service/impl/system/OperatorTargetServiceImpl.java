package com.boe.idm.project.service.impl.system;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.system.OperatorTargetMapper;
import com.boe.idm.project.service.system.OperatorTargetService;

@Service
public class OperatorTargetServiceImpl implements OperatorTargetService{

	@Resource
	private OperatorTargetMapper operatorTargetMapper;
	
	@Override
	public List<Map<String, Object>> getOperatorTargetById(String operatorId) {
		// TODO Auto-generated method stub
		return operatorTargetMapper.getOperatorTargetById(operatorId);
	}

	@Override
	public List<Map<String, Object>> getOperatorTargetAll(String shopName, String operatorId) {
		// TODO Auto-generated method stub
		return operatorTargetMapper.getOperatorTargetAll(shopName, operatorId);
	}

	@Override
	public List<Map<String, Object>> getStandardTarget() {
		// TODO Auto-generated method stub
		return operatorTargetMapper.getStandardTarget();
	}

	@Override
	public List<Map<String, Object>> getTargetByOperatorId(String operatorId) {
		// TODO Auto-generated method stub
		return operatorTargetMapper.getTargetByOperatorId(operatorId);
	}

	@Override
	public int deleteAllOperatorTarget(String shopName) {
		// TODO Auto-generated method stub
		return operatorTargetMapper.deleteAllOperatorTarget(shopName);
	}

	@Override
	public int setOperatorTarget(String factoryName, String operatorId, String _total, String _00h, String _01h,
			String _02h, String _03h, String _04h, String _05h, String _06h, String _07h, String _08h, String _09h,
			String _10h, String _11h, String _12h, String _13h, String _14h, String _15h, String _16h, String _17h,
			String _18h, String _19h, String _20h, String _21h, String _22h, String _23h) {
		// TODO Auto-generated method stub
		return operatorTargetMapper.setOperatorTarget(factoryName,operatorId,_total,_00h,_01h,_02h,_03h,_04h,_05h,_06h,_07h,_08h,_09h,_10h,_11h,_12h,_13h,_14h,_15h,_16h,_17h,_18h,_19h,_20h,_21h,_22h,_23h);
	}

}
