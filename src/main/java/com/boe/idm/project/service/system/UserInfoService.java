package com.boe.idm.project.service.system;

import java.util.List;
import java.util.Map;

import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.RoleInfo;
import com.boe.idm.project.model.system.UserInfo;


public interface UserInfoService {
	
	public List<UserInfo> getAllUserInfoList();

	public UserInfo getUserInfoByAccount(String useraccount);

	public int insertUserInfo(UserInfo userInfo);

	public int updateUserInfo(UserInfo userInfo);

	public int deleteUserInfo(UserInfo userInfo);

	public List<UserInfo> getUserInfoListWithOutExist(String roleName);

	public List<UserInfo> getUserInfoListByRole(String roleName);

	public boolean updatePassword(String userAccount, String passWord);


}
