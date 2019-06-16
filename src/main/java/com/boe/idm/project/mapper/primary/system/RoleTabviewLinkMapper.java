package com.boe.idm.project.mapper.primary.system;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.system.RoleTabviewLink;

public interface RoleTabviewLinkMapper {
    int insert(RoleTabviewLink record);

    int insertSelective(RoleTabviewLink record);

	List<RoleTabviewLink> getUsableTabView(@Param(value="userAccount")String userAccount, @Param(value="menuName")String menuName);

	List<RoleTabviewLink> getRoleTabViewLink();
}