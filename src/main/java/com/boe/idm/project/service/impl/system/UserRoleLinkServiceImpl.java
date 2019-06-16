package com.boe.idm.project.service.impl.system;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.system.MenuInfoMapper;
import com.boe.idm.project.mapper.primary.system.UserInfoMapper;
import com.boe.idm.project.mapper.primary.system.UserRoleLinkMapper;
import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.UserInfo;
import com.boe.idm.project.model.system.UserRoleLink;
import com.boe.idm.project.service.system.MenuInfoService;
import com.boe.idm.project.service.system.UserInfoService;
import com.boe.idm.project.service.system.UserRoleLinkService;

@Service
public class UserRoleLinkServiceImpl implements UserRoleLinkService{
	
	@Resource
	private UserRoleLinkMapper userRoleLinkMapper;

	@Override
	public int insertUserRoleLink(UserRoleLink userRoleLink) {
		// TODO Auto-generated method stub
		return userRoleLinkMapper.insert(userRoleLink);
	}

	@Override
	public int deleteUserRoleLinkByRole(String rolename) {
		// TODO Auto-generated method stub
		return userRoleLinkMapper.deleteUserRoleLinkByRole(rolename);
	}

	@Override
	public int insertUserRoleLinks(UserRoleLink[] userRoleLink) {
		// TODO Auto-generated method stub
		return userRoleLinkMapper.insertUserRoleLinks(userRoleLink);
	}

	@Override
	public int updateUserRoleLink(UserRoleLink userRoleLink) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteUserRoleLink(UserRoleLink userRoleLink) {
		// TODO Auto-generated method stub
		return userRoleLinkMapper.delete(userRoleLink);
	}

}
