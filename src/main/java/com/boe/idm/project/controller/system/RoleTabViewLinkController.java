package com.boe.idm.project.controller.system;

import java.math.BigDecimal;
import java.util.List;

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

import com.boe.idm.project.model.system.RoleInfo;
import com.boe.idm.project.model.system.RoleTabviewLink;
import com.boe.idm.project.service.system.RoleInfoService;
import com.boe.idm.project.service.system.RoleTabViewLinkService;
import com.boe.utils.json.JsonUtils;

@RestController
@RequestMapping(value="/api/roletabviewlink")
public class RoleTabViewLinkController extends JsonUtils{

	private static final Logger logger = LoggerFactory.getLogger(RoleTabViewLinkController.class);
	
	@Autowired
	private RoleTabViewLinkService roleTabViewLinkService;
		
	@RequestMapping(value="/select/usableTabView")
	public @ResponseBody List<Boolean> getUsableTabView(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="userAccount",required = true) String userAccount,
			@RequestParam(value="menuName",required = true) String menuName) throws Exception {		
		
		return roleTabViewLinkService.getUsableTabView(userAccount,menuName);
	}
	
	@RequestMapping(value="/select/roleTabViewLink")
	public @ResponseBody List<RoleTabviewLink> roleTabViewLink(HttpServletRequest request,HttpServletResponse response)throws Exception {
		
		return roleTabViewLinkService.getRoleTabViewLink();
	}
	

}
