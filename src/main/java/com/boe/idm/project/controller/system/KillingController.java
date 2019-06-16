package com.boe.idm.project.controller.system;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.EchartParam;
import com.boe.idm.project.model.Language;
import com.boe.idm.project.model.YieldParam;
import com.boe.idm.project.model.system.DAS_PnlKilling;
import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.UserInfo;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.system.KillingService;
import com.boe.idm.project.service.system.MenuInfoService;
import com.boe.utils.json.JsonUtils;
import com.boe.utils.special.MDLMachineOrder;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@RestController
@RequestMapping(value="/api/killing")
public class KillingController extends JsonUtils{

	private static final Logger logger = LoggerFactory.getLogger(KillingController.class);
	
	@Autowired
	private KillingService killingService;
	
	@RequestMapping("/getKillingList")
	public @ResponseBody List<DAS_PnlKilling> getKillingList(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="killingName",required=false)String killingName,
			@RequestParam(value="killingShopname",required=false)String killingShopname,
			@RequestParam(value="killingFactoryyeat",required=false)String killingFactoryyeat,
			@RequestParam(value="killingFactorymonth",required=false)String killingFactorymonth,
			@RequestParam(value="killingProductcategory",required=false)String killingProductcategory) throws IOException {

		List<Map<String, Object>> killingList = killingService.getKillingListAll(killingName,killingShopname,killingFactoryyeat,killingFactorymonth,killingProductcategory);
		int count = killingList.size();
		List<DAS_PnlKilling> resultList = new ArrayList<DAS_PnlKilling>();
		for (int i = 0; i < killingList.size(); i++) {
			DAS_PnlKilling killing = new DAS_PnlKilling();
			killing.setFactoryyear(killingList.get(i).get("FACTORYYEAR").toString());
			killing.setFactorymonth(killingList.get(i).get("FACTORYMONTH").toString());
			killing.setFactoryname(killingList.get(i).get("FACTORYNAME").toString());
			killing.setProductcategory(killingList.get(i).get("PRODUCTCATEGORY").toString());
			killing.setProductiontype(killingList.get(i).get("PRODUCTIONTYPE").toString());
			killing.setDefectcode(killingList.get(i).get("DEFECTCODE").toString());
			killing.setPnlKilling(killingList.get(i).get("PNL_KILLING").toString()+"%");
			killing.setUpdatetime(killingList.get(i).get("UPDATETIME").toString());
			killing.setUpdateuser(killingList.get(i).get("UPDATEUSER").toString());
			resultList.add(killing);
		}
		return resultList;
	}	

}
