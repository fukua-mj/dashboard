package com.boe.idm.project.mapper.primary.system;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.system.DAS_PnlKilling;


public interface DAS_PnlKillingMapper{
    int insert(DAS_PnlKilling record);

    int insertSelective(DAS_PnlKilling record);
    
    /**
     * getKillingListAll(killingName,killingShopname,killingFactoryyeat,killingFactorymonth,killingProductcategory)
     * @return
     */
    List<Map<String, Object>> getKillingListAll(@Param(value="killingName")String killingName,@Param(value="killingShopname")String killingShopname,@Param(value="killingFactoryyeat")String killingFactoryyeat,@Param(value="killingFactorymonth")String killingFactorymonth,@Param(value="killingProductcategory")String killingProductcategory);

    /**
     * updateKillingDefect()
     * @param value
     * @param updateUser
     * @param timeKey
     * @param factoryYear
     * @param factoryMonth
     * @param factoryName
     * @param productCategory
     * @param defectCode
     */
    void updateKillingDefect(@Param(value="value")String value,@Param(value="updateUser")String updateUser,@Param(value="timeKey")String timeKey,@Param(value="factoryYear")String factoryYear,@Param(value="factoryMonth")String factoryMonth,@Param(value="factoryName")String factoryName,@Param(value="productCategory")String productCategory,@Param(value="defectCode")String defectCode);

    /**
     * deleteKillingDefect()
     * @param factoryYear
     * @param factoryMonth
     * @param factoryName
     * @param productCategory
     * @param defectCode
     */
    void deleteKillingDefect(@Param(value="factoryYear")String factoryYear,@Param(value="factoryMonth")String factoryMonth,@Param(value="factoryName")String factoryName,@Param(value="productCategory")String productCategory,@Param(value="defectCode")String defectCode);
    
    /**
     * getOneKilingDefect()
     * @param killingFactoryYear
     * @param killingFactoryMonth
     * @param killingFactoryName
     * @param killingProductCategory
     * @param killingDefectCode
     * @return
     */
    List<Map<String, Object>> getOneKilingDefect(@Param(value="killingFactoryYear")String killingFactoryYear,@Param(value="killingFactoryMonth")String killingFactoryMonth,@Param(value="killingFactoryName")String killingFactoryName,@Param(value="killingProductCategory")String killingProductCategory,@Param(value="killingDefectCode")String killingDefectCode);

	int setKillingWithoutId(@Param(value="factoryYear")String factoryYear, @Param(value="factoryMonth")String factoryMonth, @Param(value="factoryName")String factoryName, @Param(value="productCategory")String productCategory,
			@Param(value="productionType")String productionType, @Param(value="defectCode")String defectCode, @Param(value="pnlKilling")String pnlKilling, @Param(value="updateTime")String updateTime, @Param(value="updateUser")String updateUser);
}