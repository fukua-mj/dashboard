package com.boe.idm.project.mapper.primary.system;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.system.OperatorInfo;

public interface OperatorInfoMapper{
    int insert(OperatorInfo record);

    int insertSelective(OperatorInfo record);

	List<Map<String, Object>> getOperatorInfoListAll(@Param(value="operatorInfofactoryName")String operatorInfofactoryName, @Param(value="operatorInfooperationName")String operatorInfooperationName, 
			@Param(value="operatorInfoshiftName")String operatorInfoshiftName, @Param(value="operatorInfogroupName")String operatorInfogroupName, @Param(value="operatorInfooperatorId")String operatorInfooperatorId, @Param(value="operatorInfooperatorName")String operatorInfooperatorName);

	int setOperatorInfo(@Param(value="factoryName")String factoryName, @Param(value="processOperationName")String processOperationName, @Param(value="shiftName")String shiftName, @Param(value="groupName")String groupName,
			@Param(value="operatorId")String operatorId, @Param(value="operatorName")String operatorName);

	int deleteAllOperatorInfo(@Param(value="shopName")String shopName);
}