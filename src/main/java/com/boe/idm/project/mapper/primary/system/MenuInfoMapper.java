package com.boe.idm.project.mapper.primary.system;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.RoleInfo;
import com.boe.idm.project.model.system.UserInfo;

public interface MenuInfoMapper {
    int insert(MenuInfo record);

    int insertSelective(MenuInfo record);
    
    List<MenuInfo> getMenuList(@Param(value="userId")String userId);

	List<Map<String, Object>> getPrimaryMenuList();

	List<MenuInfo> getAllMenuInfoList();

	List<MenuInfo> getMenuInfoListWithOutExist(String roleName);

	List<MenuInfo> getMenuInfoListByRole(@Param(value="roleName")String roleName);

	int insertMenuInfo(MenuInfo menuInfo);

	int updateMenuInfo(MenuInfo menuInfo);

	int deleteMenuInfo(MenuInfo menuInfo);

	List<Map<String, Object>> getRoleByUser(String userName);

	List<String> getUrlsByRole(String roleName);
}