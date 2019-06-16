package com.boe.idm.project.service.impl.system;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.system.DAS_PnlKillingMapper;
import com.boe.idm.project.model.system.DAS_PnlKilling;
import com.boe.idm.project.service.system.KillingService;

@Service
public class KillingServiceImpl implements KillingService{

	@Resource
	private DAS_PnlKillingMapper das_PnlKillingMapper;
	
	@Override
	public int setKilling(DAS_PnlKilling das_PnlKilling) {
		// TODO Auto-generated method stub
		return das_PnlKillingMapper.insert(das_PnlKilling);
	}

	@Override
	public List<Map<String, Object>> getKillingListAll(String killingName, String killingShopname,
			String killingFactoryyeat, String killingFactorymonth, String killingProductcategory) {
		// TODO Auto-generated method stub
		return das_PnlKillingMapper.getKillingListAll(killingName, killingShopname, killingFactoryyeat, killingFactorymonth, killingProductcategory);
	}

	@Override
	public void updateKillingDefect(String value, String updateUser, String timeKey, String factoryYear,
			String factoryMonth, String factoryName, String productCategory, String defectCode) {
		// TODO Auto-generated method stub
		this.das_PnlKillingMapper.updateKillingDefect(value,updateUser,timeKey,factoryYear,factoryMonth,factoryName,productCategory,defectCode);
	}

	@Override
	public void deleteKillingDefect(String factoryYear, String factoryMonth, String factoryName, String productCategory,
			String defectCode) {
		// TODO Auto-generated method stub
		this.das_PnlKillingMapper.deleteKillingDefect(factoryYear,factoryMonth,factoryName,productCategory,defectCode);
	}

	@Override
	public List<Map<String, Object>> getOneKilingDefect(String killingFactoryYear, String killingFactoryMonth,
			String killingFactoryName, String killingProductCategory, String killingDefectCode) {
		// TODO Auto-generated method stub
		return das_PnlKillingMapper.getOneKilingDefect(killingFactoryYear,killingFactoryMonth,killingFactoryName,killingProductCategory,killingDefectCode);
	}

	@Override
	public int setKillingWithoutId(String factoryYear, String factoryMonth, String factoryName, String productCategory,
			String productionType, String defectCode, String pnlKilling, String updateTime, String updateUser) {
		// TODO Auto-generated method stub
		return das_PnlKillingMapper.setKillingWithoutId(factoryYear,factoryMonth,factoryName,productCategory,productionType,defectCode,pnlKilling,updateTime,updateUser);
	}

}
