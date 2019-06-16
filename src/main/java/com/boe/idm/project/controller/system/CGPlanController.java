package com.boe.idm.project.controller.system;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.system.CGPlan;
import com.boe.idm.project.service.system.CGPlanService;
import com.boe.idm.project.utils.DateUtils;
import com.boe.utils.json.JsonUtils;

@RestController
@RequestMapping(value="/api/cg")
public class CGPlanController extends JsonUtils{

	private static final Logger logger = LoggerFactory.getLogger(CGPlanController.class);
	
	@Autowired
	private CGPlanService cgPlanService;
	
	@RequestMapping("/getCGPlanList")
	public @ResponseBody List<CGPlan> getOperatorTargetList(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="productCategory",required=false)String productCategory) throws IOException {		
		
		List<Map<String, Object>> cgPlanList= cgPlanService.getCGPlanAll(productCategory);
		List<CGPlan> resultList = new ArrayList<CGPlan>();
		for (int i = 0; i < cgPlanList.size(); i++) {
			CGPlan cg = new CGPlan();
			cg.setFactoryname(cgPlanList.get(i).get("FACTORYNAME").toString());
			cg.setProductcategory(cgPlanList.get(i).get("PRODUCTCATEGORY").toString());
			cg.setCategory(cgPlanList.get(i).get("CATEGORY").toString());
			cg.setInOut(cgPlanList.get(i).get("IN_OUT").toString());
			cg.setDay01(new BigDecimal(cgPlanList.get(i).get("DAY_01").toString()));
			cg.setDay02(new BigDecimal(cgPlanList.get(i).get("DAY_02").toString()));
			cg.setDay03(new BigDecimal(cgPlanList.get(i).get("DAY_03").toString()));
			cg.setDay04(new BigDecimal(cgPlanList.get(i).get("DAY_04").toString()));
			cg.setDay05(new BigDecimal(cgPlanList.get(i).get("DAY_05").toString()));
			cg.setDay06(new BigDecimal(cgPlanList.get(i).get("DAY_06").toString()));
			cg.setDay07(new BigDecimal(cgPlanList.get(i).get("DAY_07").toString()));
			cg.setDay08(new BigDecimal(cgPlanList.get(i).get("DAY_08").toString()));
			cg.setDay09(new BigDecimal(cgPlanList.get(i).get("DAY_09").toString()));
			cg.setDay10(new BigDecimal(cgPlanList.get(i).get("DAY_10").toString()));
			cg.setDay11(new BigDecimal(cgPlanList.get(i).get("DAY_11").toString()));
			cg.setDay12(new BigDecimal(cgPlanList.get(i).get("DAY_12").toString()));
			cg.setDay13(new BigDecimal(cgPlanList.get(i).get("DAY_13").toString()));
			cg.setDay14(new BigDecimal(cgPlanList.get(i).get("DAY_14").toString()));
			cg.setDay15(new BigDecimal(cgPlanList.get(i).get("DAY_15").toString()));
			cg.setDay16(new BigDecimal(cgPlanList.get(i).get("DAY_16").toString()));
			cg.setDay17(new BigDecimal(cgPlanList.get(i).get("DAY_17").toString()));
			cg.setDay18(new BigDecimal(cgPlanList.get(i).get("DAY_18").toString()));
			cg.setDay19(new BigDecimal(cgPlanList.get(i).get("DAY_19").toString()));
			cg.setDay20(new BigDecimal(cgPlanList.get(i).get("DAY_20").toString()));
			cg.setDay21(new BigDecimal(cgPlanList.get(i).get("DAY_21").toString()));
			cg.setDay22(new BigDecimal(cgPlanList.get(i).get("DAY_22").toString()));
			cg.setDay23(new BigDecimal(cgPlanList.get(i).get("DAY_23").toString()));
			cg.setDay24(new BigDecimal(cgPlanList.get(i).get("DAY_24").toString()));
			cg.setDay25(new BigDecimal(cgPlanList.get(i).get("DAY_25").toString()));
			cg.setDay26(new BigDecimal(cgPlanList.get(i).get("DAY_26").toString()));
			cg.setDay27(new BigDecimal(cgPlanList.get(i).get("DAY_27").toString()));
			cg.setDay28(new BigDecimal(cgPlanList.get(i).get("DAY_28").toString()));
			cg.setDay29(new BigDecimal(cgPlanList.get(i).get("DAY_29").toString()));
			cg.setDay30(new BigDecimal(cgPlanList.get(i).get("DAY_30").toString()));
			cg.setDay31(new BigDecimal(cgPlanList.get(i).get("DAY_31").toString()));
			cg.setUpdateuser(cgPlanList.get(i).get("UPDATEUSER").toString());
			cg.setLastUpdateDate(DateUtils.toDate(cgPlanList.get(i).get("LAST_UPDATE_DATE").toString()));			
        
			resultList.add(cg);
		}
		return resultList;

	}	

}
