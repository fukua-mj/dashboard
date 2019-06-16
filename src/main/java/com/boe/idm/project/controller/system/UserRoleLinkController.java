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

import org.apache.catalina.User;
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
import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.RoleInfo;
import com.boe.idm.project.model.system.UserInfo;
import com.boe.idm.project.model.system.UserRoleLink;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.system.MenuInfoService;
import com.boe.idm.project.service.system.UserInfoService;
import com.boe.idm.project.service.system.UserRoleLinkService;
import com.boe.utils.json.JsonUtils;
import com.boe.utils.special.MDLMachineOrder;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@RestController
@RequestMapping(value="/api/userRoleLink")
public class UserRoleLinkController extends JsonUtils{

	private static final Logger logger = LoggerFactory.getLogger(UserRoleLinkController.class);
	
	@Autowired
	private UserRoleLinkService userRoleLinkService;
	
	@RequestMapping(value="/insert/userRoleLink",method=RequestMethod.POST)
	public int insertUserRoleLink(
				HttpServletRequest request,
				HttpServletResponse reHttpServletResponse,
				@RequestBody UserRoleLink userRoleLink
			) throws Exception {	
		int res = userRoleLinkService.deleteUserRoleLink(userRoleLink);
		return userRoleLinkService.insertUserRoleLink(userRoleLink);
	}
	
	@RequestMapping(value="/insert/userRoleLinks",method=RequestMethod.POST)
	public int insertUserRoleLinks(
				HttpServletRequest request,
				HttpServletResponse reHttpServletResponse,
				@RequestBody UserRoleLink[] userRoleLink
			) throws Exception {	
		try {
			int res = userRoleLinkService.deleteUserRoleLinkByRole(userRoleLink[0].getRolename());
		} catch (Exception e) {
			// TODO: handle exception
			logger.error("The Role [ " + userRoleLink[0].getRolename() + " ] does't have Users");
		}
		
		int result = 0;
		for (UserRoleLink uRoleLink: userRoleLink) {
			result = userRoleLinkService.insertUserRoleLink(uRoleLink);
			if (result == 0) {
				break;
			}
		}
		return result;
	}
	
	@RequestMapping(value="/update/userRoleLink",method=RequestMethod.PUT)
	public int updateUserRoleLink(
				HttpServletRequest request,
				HttpServletResponse response,
				@RequestBody UserRoleLink userRoleLink
			) throws Exception {
		return userRoleLinkService.updateUserRoleLink(userRoleLink);
	}
	
	@RequestMapping(value="/delete/userRoleLink")
	public int deleteUserRoleLink(
				HttpServletRequest request,
				HttpServletResponse response,
				@RequestBody UserRoleLink userRoleLink
			) throws Exception {
		//return userRoleLinkService.deleteUserRoleLink(userRoleLink);
		return 0;
	}

}
