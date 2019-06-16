package com.boe.idm.project.service.system;

import java.util.List;

import com.boe.idm.project.model.system.RoleTabviewLink;


public interface RoleTabViewLinkService {

	List<Boolean> getUsableTabView(String userAccount, String menuName);

	List<RoleTabviewLink> getRoleTabViewLink();
	



}
