package com.boe.idm.project.service.system;

import java.util.List;
import java.util.Map;

import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.RoleInfo;
import com.boe.idm.project.model.system.UserInfo;


public interface RoleInfoService {
	
	public List<RoleInfo> getAllRoleInfoList();

	public List<RoleInfo> getRoleInfoListByUser(String userAccount);

	public List<RoleInfo> getAllRoleInfoListWithOutExist(String existRoleName);

	public int insertRoleInfo(RoleInfo roleInfo);

	public int updateRoleInfo(RoleInfo roleInfo);

	public int deleteRoleInfo(RoleInfo roleInfo);

	public List<RoleInfo> getAllRoleInfoWithOutExistByMenuName(String menuName);

	public List<RoleInfo> getRoleInfoByMenuName(String menuName);


}
