package com.boe.idm.project.service.impl.system;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.system.MenuInfoMapper;
import com.boe.idm.project.mapper.primary.system.RoleMenuLinkMapper;
import com.boe.idm.project.mapper.primary.system.RoleTabviewLinkMapper;
import com.boe.idm.project.mapper.primary.system.UserInfoMapper;
import com.boe.idm.project.mapper.primary.system.UserRoleLinkMapper;
import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.RoleMenuLink;
import com.boe.idm.project.model.system.RoleMenuLink2;
import com.boe.idm.project.model.system.RoleTabviewLink;
import com.boe.idm.project.model.system.UserInfo;
import com.boe.idm.project.model.system.UserRoleLink;
import com.boe.idm.project.service.system.MenuInfoService;
import com.boe.idm.project.service.system.RoleMenuLinkService;
import com.boe.idm.project.service.system.RoleTabViewLinkService;
import com.boe.idm.project.service.system.UserInfoService;
import com.boe.idm.project.service.system.UserRoleLinkService;

@Service
public class RoleTabViewLinkServiceImpl implements RoleTabViewLinkService{

	@Resource
	private RoleTabviewLinkMapper roleTabviewLinkMapper;

	@Override
	public List<Boolean> getUsableTabView(String userAccount, String menuName) {
		// TODO Auto-generated method stub
		List<RoleTabviewLink> list = roleTabviewLinkMapper.getUsableTabView(userAccount, menuName);
		List<Boolean> result = new ArrayList<>();
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getUseflag().toUpperCase().equals("Y")) {
				result.add(true);
			} else {
				result.add(false);
			}
		}		
		
		return result;
	}

	@Override
	public List<RoleTabviewLink> getRoleTabViewLink() {
		// TODO Auto-generated method stub
		return roleTabviewLinkMapper.getRoleTabViewLink();
	}
	

}
