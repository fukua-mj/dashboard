package com.boe.idm.project.mapper.primary.system;

import java.util.List;

import com.boe.idm.project.model.system.RoleMenuLink;
import com.boe.idm.project.model.system.RoleMenuLink2;

public interface RoleMenuLinkMapper {
    int insert(RoleMenuLink record);

    int insertSelective(RoleMenuLink record);

	RoleMenuLink selectRoleMenuLinkByRoleAndMenu(RoleMenuLink rLink);

	List<RoleMenuLink> getRoleMenuLinkByRoleName(String rolename);

	int deleteRoleMenuLink(RoleMenuLink2 roleMenuLink);

	List<RoleMenuLink> getRoleMenuLinkByMenuName(String menuname);
}