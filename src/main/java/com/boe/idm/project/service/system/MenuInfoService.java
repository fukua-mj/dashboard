package com.boe.idm.project.service.system;

import java.util.List;
import java.util.Map;

import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.UserInfo;


public interface MenuInfoService {
	
	public List<MenuInfo> getMenuList(String userId);

	public List<Map<String, Object>> getPrimaryMenuList();

	public List<MenuInfo> getAllMenuInfoList();

	public List<MenuInfo> getMenuInfoListWithOutExist(String roleName);

	public List<MenuInfo> getMenuInfoListByRole(String roleName);

	public int insertMenuInfo(MenuInfo menuInfo);

	public int updateMenuInfo(MenuInfo menuInfo);

	public int deleteMenuInfo(MenuInfo menuInfo);

	public List<String> getAllUrlsByUser(String userName);

}
