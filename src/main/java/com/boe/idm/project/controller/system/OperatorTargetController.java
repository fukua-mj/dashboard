package com.boe.idm.project.controller.system;

import java.io.IOException;
import java.math.BigDecimal;
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
import com.boe.idm.project.model.system.CGPlan;
import com.boe.idm.project.model.system.DAS_PnlKilling;
import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.OperatorTarget;
import com.boe.idm.project.model.system.UserInfo;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.system.CGPlanService;
import com.boe.idm.project.service.system.KillingService;
import com.boe.idm.project.service.system.MenuInfoService;
import com.boe.idm.project.service.system.OperatorTargetService;
import com.boe.idm.project.utils.DateUtils;
import com.boe.utils.json.JsonUtils;
import com.boe.utils.special.MDLMachineOrder;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@RestController
@RequestMapping(value="/api/operatortarget")
public class OperatorTargetController extends JsonUtils{

	private static final Logger logger = LoggerFactory.getLogger(OperatorTargetController.class);
	
	@Autowired
	private OperatorTargetService operatorTargetService;
	
	@RequestMapping("/getOperatorTargetList")
	public @ResponseBody List<OperatorTarget> getOperatorTargetList(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="shopName",required = false)String shopName,
			@RequestParam(value="operatorId",required = false)String operatorId) throws IOException {
		List<OperatorTarget> resultList = new ArrayList<>();
		List<Map<String, Object>> operatorTargetList= operatorTargetService.getOperatorTargetAll(shopName, operatorId);
		for (int i = 0; i < operatorTargetList.size(); i++) {
			OperatorTarget operatorTarget = new OperatorTarget();
			operatorTarget.setFactoryname(operatorTargetList.get(i).get("FACTORYNAME").toString());
			operatorTarget.setOperatorid(operatorTargetList.get(i).get("OPERATORID").toString());
			operatorTarget.setTargetTotal(new BigDecimal(operatorTargetList.get(i).get("TARGET_TOTAL").toString()));
			operatorTarget.setTarget00h(new BigDecimal(operatorTargetList.get(i).get("TARGET_00H").toString()));
			operatorTarget.setTarget01h(new BigDecimal(operatorTargetList.get(i).get("TARGET_01H").toString()));
			operatorTarget.setTarget02h(new BigDecimal(operatorTargetList.get(i).get("TARGET_02H").toString()));
			operatorTarget.setTarget03h(new BigDecimal(operatorTargetList.get(i).get("TARGET_03H").toString()));
			operatorTarget.setTarget04h(new BigDecimal(operatorTargetList.get(i).get("TARGET_04H").toString()));
			operatorTarget.setTarget05h(new BigDecimal(operatorTargetList.get(i).get("TARGET_05H").toString()));
			operatorTarget.setTarget06h(new BigDecimal(operatorTargetList.get(i).get("TARGET_06H").toString()));
			operatorTarget.setTarget07h(new BigDecimal(operatorTargetList.get(i).get("TARGET_07H").toString()));
			operatorTarget.setTarget08h(new BigDecimal(operatorTargetList.get(i).get("TARGET_08H").toString()));
			operatorTarget.setTarget09h(new BigDecimal(operatorTargetList.get(i).get("TARGET_09H").toString()));
			operatorTarget.setTarget10h(new BigDecimal(operatorTargetList.get(i).get("TARGET_10H").toString()));
			operatorTarget.setTarget11h(new BigDecimal(operatorTargetList.get(i).get("TARGET_11H").toString()));
			operatorTarget.setTarget12h(new BigDecimal(operatorTargetList.get(i).get("TARGET_12H").toString()));
			operatorTarget.setTarget13h(new BigDecimal(operatorTargetList.get(i).get("TARGET_13H").toString()));
			operatorTarget.setTarget14h(new BigDecimal(operatorTargetList.get(i).get("TARGET_14H").toString()));
			operatorTarget.setTarget15h(new BigDecimal(operatorTargetList.get(i).get("TARGET_15H").toString()));
			operatorTarget.setTarget16h(new BigDecimal(operatorTargetList.get(i).get("TARGET_16H").toString()));
			operatorTarget.setTarget17h(new BigDecimal(operatorTargetList.get(i).get("TARGET_17H").toString()));
			operatorTarget.setTarget18h(new BigDecimal(operatorTargetList.get(i).get("TARGET_18H").toString()));
			operatorTarget.setTarget19h(new BigDecimal(operatorTargetList.get(i).get("TARGET_19H").toString()));
			operatorTarget.setTarget20h(new BigDecimal(operatorTargetList.get(i).get("TARGET_20H").toString()));
			operatorTarget.setTarget21h(new BigDecimal(operatorTargetList.get(i).get("TARGET_21H").toString()));
			operatorTarget.setTarget22h(new BigDecimal(operatorTargetList.get(i).get("TARGET_22H").toString()));
			operatorTarget.setTarget23h(new BigDecimal(operatorTargetList.get(i).get("TARGET_23H").toString()));
			operatorTarget.setReserved1(operatorTargetList.get(i).get("RESERVED1").toString());
			operatorTarget.setReserved2(operatorTargetList.get(i).get("RESERVED2").toString());
			operatorTarget.setReserved3(operatorTargetList.get(i).get("RESERVED3").toString());
			operatorTarget.setLastupdatetime(DateUtils.toDate(operatorTargetList.get(i).get("LASTUPDATETIME").toString()));

			resultList.add(operatorTarget);
		}

		return resultList;
	}	
}
