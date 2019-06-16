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
import com.boe.idm.project.model.system.MenuInfo;
import com.boe.idm.project.model.system.RoleInfo;
import com.boe.idm.project.model.system.UserInfo;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.system.MenuInfoService;
import com.boe.idm.project.service.system.UserInfoService;
import com.boe.idm.project.utils.MD5Utils;
import com.boe.utils.json.JsonUtils;
import com.boe.utils.special.MDLMachineOrder;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@RestController
@RequestMapping(value="/api/user")
public class UserInfoController extends JsonUtils{

	private static final Logger logger = LoggerFactory.getLogger(UserInfoController.class);	
	
	public static final String MD5_KEY = "B7CIM";
	
	@Autowired
	private UserInfoService userInfoService;
	
	MD5Utils md5Utils = new MD5Utils();
		
	@RequestMapping(value="/selectAll/userInfo")
	public @ResponseBody List<UserInfo> getAllUserInfoList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return userInfoService.getAllUserInfoList();
	}		
	
	@RequestMapping(value="/insert/userInfo",method=RequestMethod.POST)
	public int insertUserInfo(
				HttpServletRequest request,
				HttpServletResponse reHttpServletResponse,
				@RequestBody UserInfo userInfo
			) throws Exception {
		String md5Password = md5Utils.md5(userInfo.getPassword(), MD5_KEY);
		userInfo.setPassword(md5Password);
		return userInfoService.insertUserInfo(userInfo);
	}
	
	@RequestMapping(value="/update/userInfo",method=RequestMethod.PUT)
	public int updateUserInfo(
				HttpServletRequest request,
				HttpServletResponse response,
				@RequestBody UserInfo userInfo
			) throws Exception {
		return userInfoService.updateUserInfo(userInfo);
	}
	
	@RequestMapping(value="/delete/userInfo")
	public int deleteUserInfo(
				HttpServletRequest request,
				HttpServletResponse response,
				@RequestBody UserInfo userInfo
			) throws Exception {
		return userInfoService.deleteUserInfo(userInfo);
	}
	
	@RequestMapping(value="/selectAll/userInfoWithOutExist")
	public @ResponseBody List<UserInfo> getAllRoleInfoListWithOutExist(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="roleName",required=false) String roleName) throws Exception {
		return userInfoService.getUserInfoListWithOutExist(roleName);
	}
	
	@RequestMapping(value="/select/userInfo")
	public @ResponseBody List<UserInfo> getRoleInfoListByUser(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="roleName",required=false) String roleName) throws Exception {
		return userInfoService.getUserInfoListByRole(roleName);
	}
	
	@RequestMapping(value = "/checkPassword")
	public boolean checkPassword(HttpServletRequest request, HttpServletResponse response, @RequestBody UserInfo userInfo) throws Exception {
		String md5Password = md5Utils.md5(userInfo.getPassword(), MD5_KEY);
		userInfo.setPassword(md5Password);
		UserInfo oldUserInfo = userInfoService.getUserInfoByAccount(userInfo.getUseraccount());
		boolean result = false;
		if (oldUserInfo.getPassword().equals(userInfo.getPassword())) {
			result = true;
		}
		return result;
	}
	
	@RequestMapping(value="/update/updatePassword",method=RequestMethod.POST)
	public boolean updatePassword(
				HttpServletRequest request,
				HttpServletResponse response,
				@RequestBody UserInfo userInfo
			) throws Exception {
		String md5Password = md5Utils.md5(userInfo.getPassword(), MD5_KEY);
		return userInfoService.updatePassword(userInfo.getUseraccount(),md5Password);
	}
}
