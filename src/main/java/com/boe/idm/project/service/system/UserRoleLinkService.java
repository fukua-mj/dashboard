package com.boe.idm.project.service.system;

import java.util.List;
import java.util.Map;

import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.UserInfo;
import com.boe.idm.project.model.system.UserRoleLink;


public interface UserRoleLinkService {
	

	public int insertUserRoleLink(UserRoleLink userRoleLink);

	public int updateUserRoleLink(UserRoleLink userRoleLink);

	public int deleteUserRoleLink(UserRoleLink userRoleLink);

	public int deleteUserRoleLinkByRole(String rolename);

	public int insertUserRoleLinks(UserRoleLink[] userRoleLink);


}
