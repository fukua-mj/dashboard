package com.boe.idm.project.service.impl.system;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.system.OperatorInfoMapper;
import com.boe.idm.project.mapper.primary.system.OperatorTargetMapper;
import com.boe.idm.project.service.system.OperatorInfoService;
import com.boe.idm.project.service.system.OperatorTargetService;

@Service
public class OperatorInfoServiceImpl implements OperatorInfoService{

	@Resource
	private OperatorInfoMapper operatorInfoMapper;

	@Override
	public List<Map<String, Object>> getOperatorInfoListAll(String operatorInfofactoryName,
			String operatorInfooperationName, String operatorInfoshiftName, String operatorInfogroupName,
			String operatorInfooperatorId, String operatorInfooperatorName) {
		// TODO Auto-generated method stub
		return operatorInfoMapper.getOperatorInfoListAll(operatorInfofactoryName,operatorInfooperationName,
				operatorInfoshiftName,operatorInfogroupName,operatorInfooperatorId,operatorInfooperatorName);
	}

	@Override
	public int setOperatorInfo(String factoryName, String processOperationName, String shiftName, String groupName,
			String operatorId, String operatorName) {
		// TODO Auto-generated method stub
		return operatorInfoMapper.setOperatorInfo(factoryName,processOperationName,shiftName,groupName,operatorId,operatorName);
	}

	@Override
	public int deleteAllOperatorInfo(String shopName) {
		// TODO Auto-generated method stub
		return operatorInfoMapper.deleteAllOperatorInfo(shopName);
	}


}
