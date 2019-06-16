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
import com.boe.idm.project.model.system.OperatorInfo;
import com.boe.idm.project.service.system.CGPlanService;
import com.boe.idm.project.service.system.OperatorInfoService;
import com.boe.idm.project.utils.DateUtils;
import com.boe.utils.json.JsonUtils;

@RestController
@RequestMapping(value="/api/operatorinfo")
public class OperatorInfoController extends JsonUtils{

	private static final Logger logger = LoggerFactory.getLogger(OperatorInfoController.class);
	
	@Autowired
	private OperatorInfoService operatorInfoService;
	
	@RequestMapping("/getOperatorInfoList")
	public @ResponseBody List<OperatorInfo> getOperatorInfoList(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="operatorInfofactoryName",required = false)String operatorInfofactoryName,
			@RequestParam(value="operatorInfooperationName",required = false)String operatorInfooperationName,
			@RequestParam(value="operatorInfoshiftName",required = false)String operatorInfoshiftName,
			@RequestParam(value="operatorInfogroupName",required = false)String operatorInfogroupName,
			@RequestParam(value="operatorInfooperatorId",required = false)String operatorInfooperatorId,
			@RequestParam(value="operatorInfooperatorName",required = false)String operatorInfooperatorName) throws IOException {
		
		List<Map<String, Object>> operatorInfoList= operatorInfoService.getOperatorInfoListAll(operatorInfofactoryName,operatorInfooperationName,
				operatorInfoshiftName,operatorInfogroupName,operatorInfooperatorId,operatorInfooperatorName);
		List<OperatorInfo> resultList = new ArrayList<>();
		for (int i = 0; i < operatorInfoList.size(); i++) {
			OperatorInfo operatorInfo = new OperatorInfo();
			operatorInfo.setFactoryname(operatorInfoList.get(i).get("FACTORYNAME")!=null?operatorInfoList.get(i).get("FACTORYNAME").toString():"null");
			operatorInfo.setProcessoperationname(operatorInfoList.get(i).get("PROCESSOPERATIONNAME")!=null?operatorInfoList.get(i).get("PROCESSOPERATIONNAME").toString():"null");
			operatorInfo.setShiftname(operatorInfoList.get(i).get("SHIFTNAME")!=null?operatorInfoList.get(i).get("SHIFTNAME").toString():"null");
			operatorInfo.setGroupname(operatorInfoList.get(i).get("GROUPNAME")!=null?operatorInfoList.get(i).get("GROUPNAME").toString():"null");
			operatorInfo.setOperatorid(operatorInfoList.get(i).get("OPERATORID")!=null?operatorInfoList.get(i).get("OPERATORID").toString():"null");
			operatorInfo.setOperatorname(operatorInfoList.get(i).get("OPERATORNAME")!=null?operatorInfoList.get(i).get("OPERATORNAME").toString():"null");
			operatorInfo.setReserved1(operatorInfoList.get(i).get("RESERVED1")!=null?operatorInfoList.get(i).get("RESERVED1").toString():"null");
			operatorInfo.setReserved2(operatorInfoList.get(i).get("RESERVED2")!=null?operatorInfoList.get(i).get("RESERVED2").toString():"null");
			operatorInfo.setReserved3(operatorInfoList.get(i).get("RESERVED3")!=null?operatorInfoList.get(i).get("RESERVED3").toString():"null");
			operatorInfo.setLastupdatetime(DateUtils.toDate(operatorInfoList.get(i).get("LASTUPDATETIME")!=null?operatorInfoList.get(i).get("LASTUPDATETIME").toString():"null"));

			resultList.add(operatorInfo);
		}
		return resultList;

	}

}
