package com.boe.idm.project.service.system;

import java.util.List;
import java.util.Map;

public interface OperatorInfoService {
	public List<Map<String, Object>> getOperatorInfoListAll(String operatorInfofactoryName, String operatorInfooperationName, 
			String operatorInfoshiftName, String operatorInfogroupName, 
			String operatorInfooperatorId, String operatorInfooperatorName);

	public int setOperatorInfo(String factoryName, String processOperationName, String shiftName, String groupName,
			String operatorId, String operatorName);

	public int deleteAllOperatorInfo(String shopName);
}
