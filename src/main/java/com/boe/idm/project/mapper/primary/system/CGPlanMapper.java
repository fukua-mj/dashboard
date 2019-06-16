package com.boe.idm.project.mapper.primary.system;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.system.CGPlan;


public interface CGPlanMapper{
    int insert(CGPlan record);

    int insertSelective(CGPlan record);

	List<Map<String, Object>> getCGPlanAll(@Param(value="productCategory")String productCategory);

	int deleteAllCGPlan(@Param(value="shopName")String shopName);

	int setCGPlan(@Param(value="factoryName")String factoryName, @Param(value="productCategory")String productCategory, @Param(value="category")String category, @Param(value="inout")String inout, @Param(value="_01h")BigDecimal _01h, @Param(value="_02h")BigDecimal _02h,
			@Param(value="_03h")BigDecimal _03h, @Param(value="_04h")BigDecimal _04h, @Param(value="_05h")BigDecimal _05h, @Param(value="_06h")BigDecimal _06h, @Param(value="_07h")BigDecimal _07h, @Param(value="_08h")BigDecimal _08h, @Param(value="_09h")BigDecimal _09h,
			@Param(value="_10h")BigDecimal _10h, @Param(value="_11h")BigDecimal _11h, @Param(value="_12h")BigDecimal _12h, @Param(value="_13h")BigDecimal _13h, @Param(value="_14h")BigDecimal _14h, @Param(value="_15h")BigDecimal _15h, @Param(value="_16h")BigDecimal _16h, @Param(value="_17h")BigDecimal _17h,
			@Param(value="_18h")BigDecimal _18h, @Param(value="_19h")BigDecimal _19h, @Param(value="_20h")BigDecimal _20h, @Param(value="_21h")BigDecimal _21h, @Param(value="_22h")BigDecimal _22h, @Param(value="_23h")BigDecimal _23h, @Param(value="_24h")BigDecimal _24h, @Param(value="_25h")BigDecimal _25h, @Param(value="_26h")BigDecimal _26h,
			@Param(value="_27h")BigDecimal _27h, @Param(value="_28h")BigDecimal _28h, @Param(value="_29h")BigDecimal _29h, @Param(value="_30h")BigDecimal _30h, @Param(value="_31h")BigDecimal _31h, @Param(value="userName")String userName);
}