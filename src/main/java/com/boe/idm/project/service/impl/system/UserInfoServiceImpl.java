package com.boe.idm.project.service.impl.system;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.system.MenuInfoMapper;
import com.boe.idm.project.mapper.primary.system.UserInfoMapper;
import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.RoleInfo;
import com.boe.idm.project.model.system.UserInfo;
import com.boe.idm.project.service.system.MenuInfoService;
import com.boe.idm.project.service.system.UserInfoService;

@Service
public class UserInfoServiceImpl implements UserInfoService{
	
	@Resource
	private UserInfoMapper userInfoMapper;

	@Override
	public List<UserInfo> getAllUserInfoList() {
		// TODO Auto-generated method stub
		return userInfoMapper.getAllUserInfoList();
	}

	@Override
	public List<UserInfo> getUserInfoListByRole(String roleName) {
		// TODO Auto-generated method stub
		return userInfoMapper.getUserInfoListByRole(roleName);
	}

	@Override
	public List<UserInfo> getUserInfoListWithOutExist(String roleName) {
		// TODO Auto-generated method stub
		return userInfoMapper.getUserInfoListWithOutExist(roleName);
	}

	@Override
	public int insertUserInfo(UserInfo userInfo) {
		// TODO Auto-generated method stub
		return userInfoMapper.insertUserInfo(userInfo);
	}

	@Override
	public int updateUserInfo(UserInfo userInfo) {
		// TODO Auto-generated method stub
		return userInfoMapper.updateUserInfo(userInfo);
	}

	@Override
	public int deleteUserInfo(UserInfo userInfo) {
		// TODO Auto-generated method stub
		return userInfoMapper.deleteUserInfo(userInfo);
	}

	@Override
	public UserInfo getUserInfoByAccount(String useraccount) {
		// TODO Auto-generated method stub
		return userInfoMapper.getUserInfoByAccount(useraccount);
	}

	@Override
	public boolean updatePassword(String userAccount, String passWord) {
		// TODO Auto-generated method stub
		return userInfoMapper.updatePassword(userAccount, passWord);
	}
	


}
