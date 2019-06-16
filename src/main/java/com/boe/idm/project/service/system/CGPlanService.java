package com.boe.idm.project.service.system;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;


public interface CGPlanService {
	
	public List<Map<String, Object>> getCGPlanAll(String productCategory) ;

	public int deleteAllCGPlan(String shopName) ;

	public int setCGPlan(String factoryName, String productCategory, String category, String inout, BigDecimal _01h,
			BigDecimal _02h, BigDecimal _03h, BigDecimal _04h, BigDecimal _05h, BigDecimal _06h, BigDecimal _07h, BigDecimal _08h, BigDecimal _09h,
			BigDecimal _10h, BigDecimal _11h, BigDecimal _12h, BigDecimal _13h, BigDecimal _14h, BigDecimal _15h, BigDecimal _16h, BigDecimal _17h,
			BigDecimal _18h, BigDecimal _19h, BigDecimal _20h, BigDecimal _21h, BigDecimal _22h, BigDecimal _23h, BigDecimal _24h, BigDecimal _25h,
			BigDecimal _26h, BigDecimal _27h, BigDecimal _28h, BigDecimal _29h, BigDecimal _30h, BigDecimal _31h, String userName);

}
