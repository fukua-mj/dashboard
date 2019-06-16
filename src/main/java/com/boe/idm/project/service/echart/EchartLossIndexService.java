package com.boe.idm.project.service.echart;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface EchartLossIndexService {

	//GetPanelLoss
    List<Map<String, Object>>getPanelLossCategory(@Param(value="DataType")String DataType,@Param(value="FactoryName")String FactoryName,@Param(value="ProductionType")String ProductionType);
    List<Map<String, Object>>getPanelLossLegenddata(@Param(value="DataType")String DataType,@Param(value="FactoryName")String FactoryName,@Param(value="ProductionType")String ProductionType,@Param(value="ProductCategory")String ProductCategory);
    List<Map<String, Object>>getPanelLossAllData(@Param(value="DataType")String DataType,@Param(value="FactoryName")String FactoryName,@Param(value="ProductionType")String ProductionType,@Param(value="ProductCategory")String ProductCategory);
  
}
