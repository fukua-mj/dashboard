package com.boe.idm.project.service.impl.echart;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.chart.ProductionMapper;
import com.boe.idm.project.model.ScrapEntity;
import com.boe.idm.project.service.echart.EchartProductionService;

@Service
public class EchartProductionServiceImpl implements EchartProductionService{

	@Resource
	private ProductionMapper productionMapper;

	@Override
	public List<Map<String, Object>> getActplan(String shopName, String productCategory, String datatype) {
		// TODO Auto-generated method stub
		return productionMapper.getActplan(shopName, productCategory, datatype);
	}

	@Override
	public List<Map<String, Object>> getactplanCategory(String shopName) {
		// TODO Auto-generated method stub
		return productionMapper.getactplanCategory(shopName);
	}

	@Override
	public List<Map<String, Object>> getWIPMDLByLine(String shopName, String lineName) {
		// TODO Auto-generated method stub
		return productionMapper.getWIPMDLByLine(shopName, lineName);
	}

	@Override
	public List<Map<String, Object>> getWIPTotalMDLByLine(String shopName, String lineName, String lineType) {
		// TODO Auto-generated method stub
		return productionMapper.getWIPTotalMDLByLine(shopName, lineName, lineType);
	}

	@Override
	public List<Map<String, Object>> getMoveMDLByLine(String shopName, String lineName) {
		// TODO Auto-generated method stub
		return productionMapper.getMoveMDLByLine(shopName, lineName);
	}

	@Override
	public List<Map<String, Object>> WIPMDLByLineProductCategory(String shopName, String lineName) {
		// TODO Auto-generated method stub
		return productionMapper.WIPMDLByLineProductCategory(shopName, lineName);
	}

	@Override
	public List<Map<String, Object>> getOQAAPPList(String productCategory) {
		// TODO Auto-generated method stub
		return productionMapper.getOQAAPPList(productCategory);
	}

	@Override
	public List<Map<String, Object>> getMDLAllOperationName(String productCategory, String lineType) {
		// TODO Auto-generated method stub
		return productionMapper.getMDLAllOperationName(productCategory, lineType);
	}

	@Override
	public List<Map<String, Object>> getMDLAllOperationName1(String productCategory, String lineType) {
		// TODO Auto-generated method stub
		return productionMapper.getMDLAllOperationName1(productCategory, lineType);
	}

	@Override
	public List<Map<String, Object>> getWIPMovementOKQTY(String shopName, String lineName) {
		// TODO Auto-generated method stub
		return productionMapper.getWIPMovementOKQTY(shopName, lineName);
	}

	@Override
	public List<Map<String, Object>> getwipMoveCategory(String shopName,String productionType, String dataType) {
		// TODO Auto-generated method stub
		return productionMapper.getwipMoveCategory(shopName, productionType, dataType);
	}

	@Override
	public List<Map<String, Object>> getWIP(String shopName,String productionType, String productCategory) {
		// TODO Auto-generated method stub
		return productionMapper.getWIP(shopName, productionType, productCategory);
	}

	@Override
	public List<Map<String, Object>> getWIPTotal(String shopName,String productionType, String productCategory) {
		// TODO Auto-generated method stub
		return productionMapper.getWIPTotal(shopName, productionType, productCategory);
	}

	@Override
	public List<Map<String, Object>> getMove(String shopName,String productionType, String productCategory) {
		// TODO Auto-generated method stub
		return productionMapper.getMove(shopName, productionType, productCategory);
	}

	@Override
	public List<Map<String, Object>> eacCutproductioncategory(String shopName) {
		// TODO Auto-generated method stub
		return productionMapper.eacCutproductioncategory(shopName);
	}

	@Override
	public List<Map<String, Object>> geteacCutproduction(String machineType,String productCategory) {
		// TODO Auto-generated method stub
		return productionMapper.geteacCutproduction(machineType, productCategory);
	}

	@Override
	public List<Map<String, Object>> getOKMovement(String shopName, String productionType, String productCategory) {
		// TODO Auto-generated method stub
		return productionMapper.getOKMovement(shopName, productionType, productCategory);
	}

	@Override
	public List<Map<String, Object>> getProduction(String shopName) {
		// TODO Auto-generated method stub
		return productionMapper.getProduction(shopName);
	}

	@Override
	public List<Map<String, Object>> getDailyReportCategory() {
		// TODO Auto-generated method stub
		return productionMapper.getDailyReportCategory();
	}

	@Override
	public List<Map<String, Object>> getDailyReportList(List<String> productCategoryList) {
		// TODO Auto-generated method stub
		return productionMapper.getDailyReportList(productCategoryList,productCategoryList);
	}

	@Override
	public List<Map<String, Object>> getDailyReportShopCount(String shopNameCompare,List<String> productCategoryList) {
		// TODO Auto-generated method stub
		return productionMapper.getDailyReportShopCount(shopNameCompare,productCategoryList,productCategoryList);
	}

	@Override
	public List<Map<String, Object>> getDailyReportCategoryCount(String shopNameCompare,
			String productCategoryCompare,List<String> productCategoryList) {
		// TODO Auto-generated method stub
		return productionMapper.getDailyReportCategoryCount(shopNameCompare, productCategoryCompare,productCategoryList,productCategoryList);
	}

	@Override
	public List<Map<String, Object>> getScrapProductionCategory(String shopName) {
		// TODO Auto-generated method stub
		return productionMapper.getScrapProductionCategory(shopName);
	}

	@Override
	public List<ScrapEntity> getScrapGridValue(String shopName, String productCategory) {
		// TODO Auto-generated method stub
		List<Map<String, Object>> list = productionMapper.getScrapGridValue(shopName, productCategory);
		List<ScrapEntity> result = new ArrayList<>();
		for (int i = 0; i < list.size(); i++) {
			ScrapEntity scrapItem = new ScrapEntity();
			if (list.get(i).get("DATETYPE").toString().equals("WEEK")) {
				scrapItem.setFactoryDate(list.get(i).get("FACTORYDATE").toString().substring(0, 4)+"W"+list.get(i).get("FACTORYDATE").toString().substring(4));
			} else {
				scrapItem.setFactoryDate(list.get(i).get("FACTORYDATE").toString().substring(0, 4)+"M"+list.get(i).get("FACTORYDATE").toString().substring(4));
			}			
			scrapItem.setDateType(list.get(i).get("DATETYPE").toString());
			scrapItem.setProductCategory(list.get(i).get("PRODUCTCATEGORY").toString());
			scrapItem.setFactoryName(list.get(i).get("FACTORYNAME").toString());
			scrapItem.setProductionType(list.get(i).get("PRODUCTIONTYPE").toString());
			//scrapItem.setCauseDepartment(list.get(i).get("CAUSEDEPARTMENT").toString());
			scrapItem.setScrapQty(list.get(i).get("SCRAPQTY").toString());
			scrapItem.setOutQty(list.get(i).get("OUTQTY").toString());
			scrapItem.setTotalScrap(list.get(i).get("TOTALSCRAP").toString());
			scrapItem.setInQty(list.get(i).get("INQTY").toString());
			scrapItem.setCauseRatio(String.format("%.2f", Double.parseDouble(list.get(i).get("CAUSERATIO").toString())*100)+"%");
			result.add(scrapItem);
		}
		return result;
	}

	@Override
	public List<Map<String, Object>> getyieldScrap(String shopName, String productCategory) {
		// TODO Auto-generated method stub
		return productionMapper.getyieldScrap(shopName, productCategory);
	}

	@Override
	public List<Map<String, Object>> getScrapRatio(String shopName, String productCategory) {
		// TODO Auto-generated method stub
		return productionMapper.getScrapRatio(shopName, productCategory);
	}

	@Override
	public List<Map<String, Object>> getdetailScrapValue(String shopName, String productCategory, String date,
			String dateType) {
		// TODO Auto-generated method stub
		return productionMapper.getdetailScrapValue(shopName, productCategory, date, dateType);
	}

	@Override
	public List<Map<String, Object>> getWIPMoveProductCategoryByOPerationType(String shopName, String dataType,
			String productionType) {
		// TODO Auto-generated method stub
		return productionMapper.getWIPMoveProductCategoryByOPerationType(shopName, dataType, productionType);
	}

	@Override
	public List<Map<String, Object>> getWipNew(String shopName, String dataType, String productCategory,
			String productionType) {
		// TODO Auto-generated method stub
		return productionMapper.getWipNew(shopName, dataType, productCategory, productionType);
	}

	@Override
	public List<Map<String, Object>> getMoveNew(String shopName, String dataType, String productCategory,
			String productionType) {
		// TODO Auto-generated method stub
		return productionMapper.getMoveNew(shopName, dataType, productCategory, productionType);
	}

	@Override
	public List<Map<String, Object>> getMDLAllOperationNameNew(String productCategory, String lineType) {
		// TODO Auto-generated method stub
		return productionMapper.getMDLAllOperationNameNew(productCategory, lineType);
	}

	@Override
	public List<Map<String, Object>> getWIPTotalNew(String shopName, String dataType, String productionType,
			String productCategory) {
		// TODO Auto-generated method stub
		return productionMapper.getWIPTotalNew(shopName, dataType, productionType, productCategory);
	}

	@Override
	public List<Map<String, Object>> getOperationNameNew(String shopName, String dataType, String productCategory,
			String productionType) {
		// TODO Auto-generated method stub
		return productionMapper.getOperationNameNew(shopName, dataType, productCategory, productionType);
	}

	@Override
	public List<Map<String, Object>> getWIPMDLByLineNew(String shopName, String lineName) {
		// TODO Auto-generated method stub
		return productionMapper.getWIPMDLByLineNew(shopName, lineName);
	}

	@Override
	public List<Map<String, Object>> getWIPTotalMDLByLineNew(String shopName, String lineName, String lineType) {
		// TODO Auto-generated method stub
		return productionMapper.getWIPTotalMDLByLineNew(shopName, lineName, lineType);
	}

	@Override
	public List<Map<String, Object>> getMoveMDLByLineNew(String shopName, String lineName) {
		// TODO Auto-generated method stub
		return productionMapper.getMoveMDLByLineNew(shopName, lineName);
	}

	@Override
	public List<Map<String, Object>> WIPMDLByLineProductCategoryNew(String shopName, String lineName) {
		// TODO Auto-generated method stub
		return productionMapper.WIPMDLByLineProductCategoryNew(shopName, lineName);
	}

	@Override
	public List<Map<String, Object>> getOQAAPPListNew(String productCategory) {
		// TODO Auto-generated method stub
		return productionMapper.getOQAAPPListNew(productCategory);
	}

	@Override
	public List<Map<String, Object>> getDummyDetail(String shopName) {
		// TODO Auto-generated method stub
		return productionMapper.getDummyDetail(shopName);
	}

	@Override
	public List<String> getDummyDepartment(String shopName) {
		// TODO Auto-generated method stub
		return productionMapper.getDummyDepartment(shopName);
	}

	@Override
	public List<Map<String, Object>> getRtCategory(String shopName) {
		// TODO Auto-generated method stub
		return productionMapper.getRtCategory(shopName);
	}

	@Override
	public List<Map<String, Object>> getRt(String shopName, String productCategory) {
		// TODO Auto-generated method stub
		return productionMapper.getRt(shopName, productCategory);
	}
	
	

}
