package com.boe.idm.project.mapper.primary.system;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.system.RoleInfo;
import com.boe.idm.project.model.system.UserInfo;

public interface UserInfoMapper {
    int insert(UserInfo record);

    int insertSelective(UserInfo record);

	List<UserInfo> getAllUserInfoList();
	
	UserInfo getUserInfoByAccount(@Param(value="userAccount")String userAccount);

	int insertUserInfo(UserInfo userInfo);

	int updateUserInfo(UserInfo userInfo);

	int deleteUserInfo(UserInfo userInfo);

	List<UserInfo> getUserInfoListWithOutExist(@Param(value="roleName")String roleName);

	List<UserInfo> getUserInfoListByRole(@Param(value="roleName")String roleName);

	boolean updatePassword(@Param(value="userAccount")String userAccount, @Param(value="passWord")String passWord);
}