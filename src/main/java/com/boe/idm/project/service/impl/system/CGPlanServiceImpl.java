package com.boe.idm.project.service.impl.system;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.system.CGPlanMapper;
import com.boe.idm.project.model.system.CGPlan;
import com.boe.idm.project.service.system.CGPlanService;

@Service
public class CGPlanServiceImpl implements CGPlanService{

	@Resource
	private CGPlanMapper cgPlanMapper;

	@Override
	public List<Map<String, Object>> getCGPlanAll(String productCategory) {
		// TODO Auto-generated method stub
		return cgPlanMapper.getCGPlanAll(productCategory);
	}

	@Override
	public int deleteAllCGPlan(String shopName) {
		// TODO Auto-generated method stub
		return cgPlanMapper.deleteAllCGPlan(shopName);
	}

	@Override
	public int setCGPlan(String factoryName, String productCategory, String category, String inout, BigDecimal _01h,
			BigDecimal _02h, BigDecimal _03h, BigDecimal _04h, BigDecimal _05h, BigDecimal _06h, BigDecimal _07h,
			BigDecimal _08h, BigDecimal _09h, BigDecimal _10h, BigDecimal _11h, BigDecimal _12h, BigDecimal _13h,
			BigDecimal _14h, BigDecimal _15h, BigDecimal _16h, BigDecimal _17h, BigDecimal _18h, BigDecimal _19h,
			BigDecimal _20h, BigDecimal _21h, BigDecimal _22h, BigDecimal _23h, BigDecimal _24h, BigDecimal _25h,
			BigDecimal _26h, BigDecimal _27h, BigDecimal _28h, BigDecimal _29h, BigDecimal _30h, BigDecimal _31h,
			String userName) {
		// TODO Auto-generated method stub
		CGPlan cgPlan = new CGPlan();
		cgPlan.setCategory(category);
		cgPlan.setProductcategory(productCategory);
		cgPlan.setFactoryname(factoryName);
		cgPlan.setInOut(inout);
		cgPlan.setDay01(_01h);
		cgPlan.setDay02(_02h);
		cgPlan.setDay03(_03h);
		cgPlan.setDay04(_04h);
		cgPlan.setDay05(_05h);
		cgPlan.setDay06(_06h);
		cgPlan.setDay07(_07h);
		cgPlan.setDay08(_08h);
		cgPlan.setDay09(_09h);
		cgPlan.setDay10(_10h);
		cgPlan.setDay11(_11h);
		cgPlan.setDay12(_12h);
		cgPlan.setDay13(_13h);
		cgPlan.setDay14(_14h);
		cgPlan.setDay15(_15h);
		cgPlan.setDay16(_16h);
		cgPlan.setDay17(_17h);
		cgPlan.setDay18(_18h);
		cgPlan.setDay19(_19h);
		cgPlan.setDay20(_20h);
		cgPlan.setDay21(_21h);
		cgPlan.setDay22(_22h);
		cgPlan.setDay23(_23h);
		cgPlan.setDay24(_24h);
		cgPlan.setDay25(_25h);
		cgPlan.setDay26(_26h);
		cgPlan.setDay27(_27h);
		cgPlan.setDay28(_28h);
		cgPlan.setDay29(_29h);
		cgPlan.setDay30(_30h);
		cgPlan.setDay31(_31h);
		cgPlan.setUpdateuser(userName);
		cgPlan.setLastUpdateDate(new Date());		
		
		return cgPlanMapper.insert(cgPlan);
	}
	
	


}
