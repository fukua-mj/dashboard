package com.boe.idm.project.mapper.primary.system;

import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.MenuLabelInfo;

public interface MenuLabelInfoMapper {
    int insert(MenuInfo record);

    int insertSelective(MenuLabelInfo record);

	int update(MenuInfo menuInfo);

	int delete(MenuInfo menuInfo);
}