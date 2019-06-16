package com.boe.idm.project.service.impl.system;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.system.MenuInfoMapper;
import com.boe.idm.project.mapper.primary.system.RoleInfoMapper;
import com.boe.idm.project.mapper.primary.system.UserInfoMapper;
import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.RoleInfo;
import com.boe.idm.project.model.system.UserInfo;
import com.boe.idm.project.service.system.MenuInfoService;
import com.boe.idm.project.service.system.RoleInfoService;
import com.boe.idm.project.service.system.UserInfoService;

@Service
public class RoleInfoServiceImpl implements RoleInfoService{
	
	@Resource
	private RoleInfoMapper roleInfoMapper;

	@Override
	public List<RoleInfo> getAllRoleInfoList() {
		// TODO Auto-generated method stub
		return roleInfoMapper.getAllRoleInfoList();
	}

	@Override
	public int insertRoleInfo(RoleInfo roleInfo) {
		// TODO Auto-generated method stub
		return roleInfoMapper.insert(roleInfo);
	}

	@Override
	public int updateRoleInfo(RoleInfo roleInfo) {
		// TODO Auto-generated method stub
		return roleInfoMapper.updateRoleInfo(roleInfo);
	}

	@Override
	public List<RoleInfo> getAllRoleInfoWithOutExistByMenuName(String menuName) {
		// TODO Auto-generated method stub
		return roleInfoMapper.getAllRoleInfoWithOutExistByMenuName(menuName);
	}

	@Override
	public List<RoleInfo> getRoleInfoByMenuName(String menuName) {
		// TODO Auto-generated method stub
		return roleInfoMapper.getRoleInfoByMenuName(menuName);
	}

	@Override
	public int deleteRoleInfo(RoleInfo roleInfo) {
		// TODO Auto-generated method stub
		return roleInfoMapper.deleteRoleInfo(roleInfo);
	}

	@Override
	public List<RoleInfo> getRoleInfoListByUser(String userAccount) {
		// TODO Auto-generated method stub
		return roleInfoMapper.getRoleInfoListByUser(userAccount);
	}

	@Override
	public List<RoleInfo> getAllRoleInfoListWithOutExist(String existRoleName) {
		// TODO Auto-generated method stub
		return roleInfoMapper.getAllRoleInfoListWithOutExist(existRoleName);
	}
	


}
