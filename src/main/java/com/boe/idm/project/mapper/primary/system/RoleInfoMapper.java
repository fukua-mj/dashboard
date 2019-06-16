package com.boe.idm.project.mapper.primary.system;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.system.RoleInfo;
import com.boe.idm.project.model.system.UserInfo;

public interface RoleInfoMapper {
    int insert(RoleInfo record);

    int insertSelective(RoleInfo record);

	List<RoleInfo> getAllRoleInfoList();

	List<RoleInfo> getRoleInfoListByUser(String userAccount);

	List<RoleInfo> getAllRoleInfoListWithOutExist(@Param("existRoleName")String existRoleName);

	int insertRoleInfo(RoleInfo roleInfo);

	int updateRoleInfo(RoleInfo roleInfo);

	int deleteRoleInfo(RoleInfo roleInfo);

	List<RoleInfo> getAllRoleInfoWithOutExistByMenuName(String menuName);

	List<RoleInfo> getRoleInfoByMenuName(String menuName);	

}