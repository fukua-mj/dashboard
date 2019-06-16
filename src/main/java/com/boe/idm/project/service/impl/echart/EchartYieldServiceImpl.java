package com.boe.idm.project.service.impl.echart;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.chart.EchartMapper;
import com.boe.idm.project.mapper.primary.chart.QualityMapper;
import com.boe.idm.project.mapper.primary.chart.YieldMapper;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.echart.EchartQualityService;
import com.boe.idm.project.service.echart.EchartYieldService;

@Service
public class EchartYieldServiceImpl implements EchartYieldService{

	@Resource
	private YieldMapper yieldMapper;
	
	@Override
	public List<Map<String, Object>> getYield(String shopName, String operationName, String productionType, String productCategory) throws Exception{
		// TODO Auto-generated method stub
		return yieldMapper.getYield(shopName, operationName, productionType,productCategory);
	}

	@Override
	public List<Map<String, Object>> getDefect(String shopName, String operationName, String productionType, String productCategory)
			throws Exception {
		// TODO Auto-generated method stub
		return yieldMapper.getDefect(shopName, operationName, productionType, productCategory);
	}

	@Override
	public List<Map<String, Object>> getyieldCategory(String shopName, String processType, String productionType) {
		// TODO Auto-generated method stub
		return yieldMapper.getyieldCategory(shopName, processType, productionType);
	}

	@Override
	public List<Map<String, Object>> getyieldByLine(String shopName, String processType, String productionType,
			String defectdataType, String lineName, String productCategory) {
		// TODO Auto-generated method stub
		return yieldMapper.getyieldByLine(shopName, processType, productionType, defectdataType, lineName, productCategory);
	}

	@Override
	public List<Map<String, Object>> getyieldBP4LAYER(String layer, String productionType, String productCategory) {
		// TODO Auto-generated method stub
		return yieldMapper.getyieldBP4LAYER(layer, productionType, productCategory);
	}

	@Override
	public List<Map<String, Object>> getdefectBP4LAYER(String layer, String productionType, String productCategory) {
		// TODO Auto-generated method stub
		return yieldMapper.getdefectBP4LAYER(layer, productionType, productCategory);
	}

	@Override
	public List<Map<String, Object>> getBP4LAYERDefectList(String layer, String productionType,
			String productCategory) {
		// TODO Auto-generated method stub
		return yieldMapper.getBP4LAYERDefectList(layer, productionType, productCategory);
	}

	@Override
	public List<Map<String, Object>> getyieldBP4LAYERCategory(String shopName, String layer, String productionType) {
		// TODO Auto-generated method stub
		return yieldMapper.getyieldBP4LAYERCategory(shopName, layer, productionType);
	}

	@Override
	public List<Map<String, Object>> getyieldBP4LAYERWithKillingCategory(String shopName, String layer,
			String productionType) {
		// TODO Auto-generated method stub
		return yieldMapper.getyieldBP4LAYERWithKillingCategory(shopName, layer, productionType);
	}

	@Override
	public List<Map<String, Object>> getdefectBP4LAYERWithKilling(String layer, String productionType,
			String productCategory) {
		// TODO Auto-generated method stub
		return yieldMapper.getdefectBP4LAYERWithKilling(layer, productionType, productCategory);
	}

	@Override
	public List<Map<String, Object>> getBP4LAYERDefectListWithKilling(String layer, String productionType,
			String productCategory) {
		// TODO Auto-generated method stub
		return yieldMapper.getBP4LAYERDefectListWithKilling(layer, productionType, productCategory);
	}

	@Override
	public List<Map<String, Object>> getyieldEVEN_category(String shopName, String processType, String productionType) {
		// TODO Auto-generated method stub
		return yieldMapper.getyieldEVEN_category(shopName, processType, productionType);
	}

	@Override
	public List<Map<String, Object>> yieldEVENNew(String shopName, String processType, String productCategory,
			String productionType) {
		// TODO Auto-generated method stub
		return yieldMapper.yieldEVENNew(shopName, processType, productCategory, productionType);
	}

	@Override
	public List<Map<String, Object>> getyieldEVEN(String shopName, String operationName, String productionType,
			String productCategory) {
		// TODO Auto-generated method stub
		return yieldMapper.getyieldEVEN(shopName, operationName, productCategory, productionType);
	}

	@Override
	public List<Map<String, Object>> getyieldEACMDLCategory(String shopName, String processType,
			String productionType, String defectdataType, String lineName) {
		// TODO Auto-generated method stub
		return yieldMapper.getyieldEACMDLCategory(shopName, processType, productionType, defectdataType, lineName);
	}

	@Override
	public List<Map<String, Object>> getdefectByLine(String shopName, String yieldtype, String productionType,
			String defectdataType, String lineName, String productCategory) {
		// TODO Auto-generated method stub
		return yieldMapper.getdefectByLine(shopName,yieldtype,productionType,defectdataType,lineName,productCategory);
	}

	@Override
	public List<Map<String, Object>> getdefectDetailByLine(String shopName, String yieldtype, String productionType,
			String defectdataType, String lineName, String productCategory) {
		// TODO Auto-generated method stub
		return yieldMapper.getdefectDetailByLine(shopName,yieldtype,productionType,defectdataType,lineName,productCategory);
	}

	@Override
	public List<Map<String, Object>> getDefectListByLine(String shopName, String yieldtype, String productionType,
			String defectdataType, String lineName, String productCategory) {
		// TODO Auto-generated method stub
		return yieldMapper.getDefectListByLine(shopName,yieldtype,productionType,defectdataType,lineName,productCategory);
	}

	@Override
	public List<Map<String, Object>> getyieldCategoryMDLCUM(String shopName, String processType, String productionType,
			String dataType, String lineName) {
		// TODO Auto-generated method stub
		return yieldMapper.getyieldCategoryMDLCUM(shopName, processType, productionType,dataType,lineName);
	}

	@Override
	public List<Map<String, Object>> getdefectMDLCUM(String shopName, String productionType,
			String productCategory, String processType, String dataType, String lineName) {
		// TODO Auto-generated method stub
		return yieldMapper.getdefectMDLCUM(shopName, productionType, productCategory,processType,dataType,lineName);
	}

	@Override
	public List<Map<String, Object>> getdefectMDLCUMCategory(String shopName, String productionType,
			String productCategory, String processType, String dataType, String lineName) {
		// TODO Auto-generated method stub
		return yieldMapper.getdefectMDLCUMCategory(shopName,productionType,productCategory,processType,dataType,lineName);
	}

	@Override
	public List<Map<String, Object>> getReworkYieldMDLCUM(String shopName, String productionType,
			String productCategory) {
		// TODO Auto-generated method stub
		return yieldMapper.getReworkYieldMDLCUM(shopName,productionType,productCategory);
	}

	@Override
	public List<Map<String, Object>> getyieldMDLCUM(String shopName, String productionType,
			String productCategory, String processType, String dataType, String lineName) {
		// TODO Auto-generated method stub
		return yieldMapper.getyieldMDLCUM(shopName,productionType,productCategory,processType,dataType,lineName);
	}

	@Override
	public List<Map<String, Object>> yieldStockInCUMCategory(String shopName) {
		// TODO Auto-generated method stub
		return yieldMapper.yieldStockInCUMCategory(shopName);
	}

	@Override
	public List<Map<String, Object>> getyieldStockInCum(String productCategory) {
		// TODO Auto-generated method stub
		return yieldMapper.getyieldStockInCum(productCategory);
	}

	@Override
	public List<Map<String, Object>> getTotalYieldCategory(String shopName, String yieldType) {
		// TODO Auto-generated method stub
		return yieldMapper.getTotalYieldCategory(shopName, yieldType);
	}

	@Override
	public List<Map<String, Object>> getEVENYiledOneyear(String productCategory, String year, String defectOrscrap) {
		// TODO Auto-generated method stub
		return yieldMapper.getEVENYiledOneyear(productCategory, year, defectOrscrap);
	}

	@Override
	public List<Map<String, Object>> getEVENYieldByDepartment(String shopName, String productCategory,
			String productionType) {
		// TODO Auto-generated method stub
		return yieldMapper.getEVENYieldByDepartment(shopName, productCategory, productionType);
	}

	@Override
	public List<Map<String, Object>> getScrapEVENAllbyDepartment(String shopName) {
		// TODO Auto-generated method stub
		return yieldMapper.getScrapEVENAllbyDepartment(shopName);
	}

	@Override
	public List<Map<String, Object>> getScrapEVENAllbyDepartmentQty(String shopName) {
		// TODO Auto-generated method stub
		return yieldMapper.getScrapEVENAllbyDepartmentQty(shopName);
	}

	@Override
	public List<Map<String, Object>> getdefectEVENbyDepartment(String shopName, String productCategory,
			String productionType, String departmentName) {
		// TODO Auto-generated method stub
		return yieldMapper.getdefectEVENbyDepartment(shopName, productCategory, productionType, departmentName);
	}

	@Override
	public List<Map<String, Object>> getScrapEVENbyDepartment(String shopName, String productCategory,
			String productionType, String departmentName) {
		// TODO Auto-generated method stub
		return yieldMapper.getScrapEVENbyDepartment(shopName, productCategory, productionType, departmentName);
	}

	@Override
	public List<Map<String, Object>> getScrapEVENbyDepartmentQty(String shopName, String productCategory,
			String productionType, String departmentName) {
		// TODO Auto-generated method stub
		return yieldMapper.getScrapEVENbyDepartmentQty(shopName, productCategory, productionType, departmentName);
	}
	
	
}
