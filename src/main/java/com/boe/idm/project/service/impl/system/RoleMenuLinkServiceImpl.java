package com.boe.idm.project.service.impl.system;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.system.RoleMenuLinkMapper;
import com.boe.idm.project.model.system.RoleMenuLink;
import com.boe.idm.project.model.system.RoleMenuLink2;
import com.boe.idm.project.service.system.RoleMenuLinkService;

@Service
public class RoleMenuLinkServiceImpl implements RoleMenuLinkService{

	@Resource
	private RoleMenuLinkMapper roleMenuLinkMapper;
	
	@Override
	public int insertRoleMenuLink(RoleMenuLink roleMenuLink) {
		// TODO Auto-generated method stub
		return roleMenuLinkMapper.insert(roleMenuLink);
	}

	@Override
	public int updateRoleMenuLink(RoleMenuLink roleMenuLink) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteRoleMenuLink(RoleMenuLink2 roleMenuLink) {
		// TODO Auto-generated method stub
		return roleMenuLinkMapper.deleteRoleMenuLink(roleMenuLink);
	}

	@Override
	public int deleteRoleMenuLinkByRole(String rolename) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<RoleMenuLink> getRoleMenuLinkByMenuName(String menuname) {
		// TODO Auto-generated method stub
		return roleMenuLinkMapper.getRoleMenuLinkByMenuName(menuname);
	}

	@Override
	public int insertRoleMenuLinks(List<RoleMenuLink> roleMenuLink) {
		// TODO Auto-generated method stub
		int result = 0;
		for(RoleMenuLink roLink: roleMenuLink) {
			result = roleMenuLinkMapper.insert(roLink);
			if (result == 0) {
				break;
			}
		}
		return result;
	}

	@Override
	public List<RoleMenuLink> getRoleMenuLinkByRoleName(String rolename) {
		// TODO Auto-generated method stub
		return roleMenuLinkMapper.getRoleMenuLinkByRoleName(rolename);
	}

	@Override
	public RoleMenuLink selectRoleMenuLinkByRoleAndMenu(RoleMenuLink rLink) {
		// TODO Auto-generated method stub
		return roleMenuLinkMapper.selectRoleMenuLinkByRoleAndMenu(rLink);
	}
	


}
