package com.boe.idm.project.service.impl.system;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.management.relation.Role;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.system.MenuInfoMapper;
import com.boe.idm.project.mapper.primary.system.MenuLabelInfoMapper;
import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.RoleInfo;
import com.boe.idm.project.model.system.UserInfo;
import com.boe.idm.project.service.system.MenuInfoService;

@Service
public class MenuInfoServiceImpl implements MenuInfoService{
	
	@Resource
	private MenuInfoMapper menuInfoMapper;
	
	@Resource
	private MenuLabelInfoMapper menuLabelInfoMapper;
	
	@Override
	public List<MenuInfo> getAllMenuInfoList() {
		// TODO Auto-generated method stub
		return menuInfoMapper.getAllMenuInfoList();
	}

	@Override
	public List<MenuInfo> getMenuInfoListByRole(String roleName) {
		// TODO Auto-generated method stub
		return menuInfoMapper.getMenuInfoListByRole(roleName);
	}

	@Override
	public List<MenuInfo> getMenuList(String userId) {
		// TODO Auto-generated method stub
		return menuInfoMapper.getMenuList(userId);
	}

	@Override
	public int insertMenuInfo(MenuInfo menuInfo) {
		// TODO Auto-generated method stub
		int resLabel = menuLabelInfoMapper.insert(menuInfo);
		return menuInfoMapper.insert(menuInfo);
	}

	@Override
	public int updateMenuInfo(MenuInfo menuInfo) {
		// TODO Auto-generated method stub
		int resLabel = menuLabelInfoMapper.update(menuInfo);
		return menuInfoMapper.updateMenuInfo(menuInfo);
	}

	@Override
	public int deleteMenuInfo(MenuInfo menuInfo) {
		// TODO Auto-generated method stub
		int resLabel = menuLabelInfoMapper.delete(menuInfo);
		return menuInfoMapper.deleteMenuInfo(menuInfo);
	}

	@Override
	public List<MenuInfo> getMenuInfoListWithOutExist(String roleName) {
		// TODO Auto-generated method stub
		return menuInfoMapper.getMenuInfoListWithOutExist(roleName);
	}

	@Override
	public List<Map<String, Object>> getPrimaryMenuList() {
		// TODO Auto-generated method stub
		return menuInfoMapper.getPrimaryMenuList();
	}

	@Override
	public List<String> getAllUrlsByUser(String userName) {
		// TODO Auto-generated method stub
		List<Map<String, Object>> roleInfo = menuInfoMapper.getRoleByUser(userName);
		String roleName = roleInfo.get(0).get("ROLENAME").toString();
		List<String> result = menuInfoMapper.getUrlsByRole(roleName);
		result.add("home");
		return result;
	}

}
