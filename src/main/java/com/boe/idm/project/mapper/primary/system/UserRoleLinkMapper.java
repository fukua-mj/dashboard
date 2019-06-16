package com.boe.idm.project.mapper.primary.system;

import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.system.UserRoleLink;

public interface UserRoleLinkMapper {
    int insert(UserRoleLink record);

    int insertSelective(UserRoleLink record);

	int delete(UserRoleLink userRoleLink);

	int deleteUserRoleLinkByRole(@Param("rolename")String rolename);

	int insertUserRoleLinks(UserRoleLink[] userRoleLink);
}