package com.boe.idm.project.mapper.primary.system;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.system.OperatorTarget;

public interface OperatorTargetMapper{
    int insert(OperatorTarget record);

    int insertSelective(OperatorTarget record);

	List<Map<String, Object>> getOperatorTargetAll(@Param(value="shopName")String shopName, @Param(value="operatorId")String operatorId);

	List<Map<String, Object>> getStandardTarget();

	List<Map<String, Object>> getTargetByOperatorId(@Param(value="operatorId")String operatorId);

	List<Map<String, Object>> getOperatorTargetById(String operatorId);

	int deleteAllOperatorTarget(@Param(value="shopName")String shopName);	

	int setOperatorTarget(@Param(value="factoryName")String factoryName, @Param(value="operatorId")String operatorId, @Param(value="_total")String _total, @Param(value="_00h")String _00h, @Param(value="_01h")String _01h, @Param(value="_02h")String _02h,
			@Param(value="_03h")String _03h, @Param(value="_04h")String _04h, @Param(value="_05h")String _05h, @Param(value="_06h")String _06h, @Param(value="_07h")String _07h, @Param(value="_08h")String _08h, @Param(value="_09h")String _09h,
			@Param(value="_10h")String _10h, @Param(value="_11h")String _11h, @Param(value="_12h")String _12h, @Param(value="_13h")String _13h, @Param(value="_14h")String _14h, @Param(value="_15h")String _15h, @Param(value="_16h")String _16h, @Param(value="_17h")String _17h,
			@Param(value="_18h")String _18h, @Param(value="_19h")String _19h, @Param(value="_20h")String _20h, @Param(value="_21h")String _21h, @Param(value="_22h")String _22h, @Param(value="_23h")String _23h);
}