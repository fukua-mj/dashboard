package com.boe.idm.project.service.system;

import java.util.List;
import java.util.Map;

import com.boe.idm.project.model.system.DAS_PnlKilling;
import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.UserInfo;


public interface KillingService {
	
	/**
	 * setMessageBoard
	 * @param das_PnlKilling
	 * @return
	 */
	public int setKilling(DAS_PnlKilling das_PnlKilling);
	/**
	 * getKillingListAll()
	 * (killingName,killingShopname,killingFactoryyeat,killingFactorymonth,killingProductcategory)
	 * @return
	 */
	public List<Map<String, Object>> getKillingListAll(String killingName,String killingShopname,String killingFactoryyeat,String killingFactorymonth,String killingProductcategory);
	
	//updateKillingDefect(value,updateUser,timeKey,factoryYear,factoryMonth,factoryName,productCategory,defectCode)
	public void updateKillingDefect(String value,String updateUser,String timeKey,String factoryYear,String factoryMonth,String factoryName,String productCategory,String defectCode);
	
	//deleteKillingDefect(factoryYear,factoryMonth,factoryName,productCategory,defectCode)
	public void deleteKillingDefect(String factoryYear,String factoryMonth,String factoryName,String productCategory,String defectCode);
	
	//getOneKilingDefect(request.getParameter("killingFactoryYear"),request.getParameter("killingFactoryMonth"),request.getParameter("killingFactoryName"),request.getParameter("killingProductCategory"),request.getParameter("killingDefectCode"))
	public List<Map<String, Object>> getOneKilingDefect(String killingFactoryYear,String killingFactoryMonth,String killingFactoryName,String killingProductCategory,String killingDefectCode);
	
	public int setKillingWithoutId(String factoryYear, String factoryMonth, String factoryName,
			String productCategory, String productionType, String defectCode, String pnlKilling, String updateTime,
			String updateUser);

}
