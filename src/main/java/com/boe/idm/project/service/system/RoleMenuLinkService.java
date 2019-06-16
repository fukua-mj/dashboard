package com.boe.idm.project.service.system;

import java.util.List;
import java.util.Map;

import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.RoleMenuLink;
import com.boe.idm.project.model.system.RoleMenuLink2;
import com.boe.idm.project.model.system.UserInfo;
import com.boe.idm.project.model.system.UserRoleLink;


public interface RoleMenuLinkService {
	

	public int insertRoleMenuLink(RoleMenuLink roleMenuLink);

	public int updateRoleMenuLink(RoleMenuLink roleMenuLink);

	public int deleteRoleMenuLink(RoleMenuLink2 reLink2);

	public int deleteRoleMenuLinkByRole(String rolename);

	public int insertRoleMenuLinks(List<RoleMenuLink> roleMenuLink);

	public RoleMenuLink selectRoleMenuLinkByRoleAndMenu(RoleMenuLink rLink);

	public List<RoleMenuLink> getRoleMenuLinkByRoleName(String rolename);

	public List<RoleMenuLink> getRoleMenuLinkByMenuName(String menuname);


}
