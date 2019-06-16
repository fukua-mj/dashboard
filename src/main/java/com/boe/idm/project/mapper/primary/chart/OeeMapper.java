package com.boe.idm.project.mapper.primary.chart;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface OeeMapper {

	List<Map<String, Object>> getMachineName(@Param(value="machineType")String machineType);

	List<Map<String, Object>> getoeedata(@Param(value="shopName")String shopName, @Param(value="processType")String processType, @Param(value="machinename")String machinename);

	List<Map<String, Object>> getOeeRatio(@Param(value="shopName")String shopName, @Param(value="machinename")String machinename);

	List<Map<String, Object>> getoeedata_ALL(@Param(value="processType")String processType);

	List<Map<String, Object>> getOeeRatio_ALL(@Param(value="shopName")String shopName, @Param(value="processType")String processType);

	List<Map<String, Object>> getoeedataByLineDifference(@Param(value="shopName")String shopName, @Param(value="processType")String processType);

	List<Map<String, Object>> getOeeMachineName(@Param(value="shopName")String shopName, @Param(value="processType")String processType);

	List<Map<String, Object>> getOeeRatioByLineDifference(@Param(value="shopName")String shopName, @Param(value="machineNameLikeValue")String machineNameLikeValue,
			@Param(value="yesterdayDate")String yesterdayDate);

	List<Map<String, Object>> getOpt_oeeMDLLineName(@Param(value="processType")String processType);

	List<Map<String, Object>> getPrdMonitorHeatMap(@Param(value="shopName")String shopName);

	List<String> getPrdMonitorHeatMapLineName(@Param(value="shopName")String shopName);

}
