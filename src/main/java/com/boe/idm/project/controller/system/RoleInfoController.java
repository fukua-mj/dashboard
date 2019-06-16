package com.boe.idm.project.controller.system;

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
import com.boe.idm.project.service.system.RoleInfoService;
import com.boe.utils.json.JsonUtils;

@RestController
@RequestMapping(value="/api/role")
public class RoleInfoController extends JsonUtils{

	private static final Logger logger = LoggerFactory.getLogger(RoleInfoController.class);
	
	@Autowired
	private RoleInfoService roleInfoService;
		
	@RequestMapping(value="/selectAll/roleInfoWithOutExist")
	public @ResponseBody List<RoleInfo> getAllRoleInfoListWithOutExist(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="userAccount",required=false) String userAccount) throws Exception {
		List<RoleInfo> listExist =  roleInfoService.getRoleInfoListByUser(userAccount);
		String existRoleName = listExist.size() != 0 ? listExist.get(0).getRolename() : null;
		return roleInfoService.getAllRoleInfoListWithOutExist(existRoleName);
	}
	
	@RequestMapping(value="/select/roleInfo")
	public @ResponseBody List<RoleInfo> getRoleInfoListByUser(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="userAccount",required=false) String userAccount) throws Exception {
		return roleInfoService.getRoleInfoListByUser(userAccount);
	}
	
	@RequestMapping(value="/selectAll/roleInfo")
	public @ResponseBody List<RoleInfo> getAllRoleInfo(HttpServletRequest request, HttpServletResponse response) throws Exception {

		return roleInfoService.getAllRoleInfoList();
	}
	
	@RequestMapping(value="/insert/roleInfo")
	public int insertRoleInfo(
			HttpServletRequest request,
			HttpServletResponse reHttpServletResponse,
			@RequestBody RoleInfo roleInfo
		) throws Exception {		
	return roleInfoService.insertRoleInfo(roleInfo);
	}
	
	@RequestMapping(value="/update/roleInfo",method=RequestMethod.PUT)
	public int updateRoleInfo(
				HttpServletRequest request,
				HttpServletResponse response,
				@RequestBody RoleInfo roleInfo
			) throws Exception {
		return roleInfoService.updateRoleInfo(roleInfo);
	}
	
	@RequestMapping(value="/delete/roleInfo")
	public int deleteRoleInfo(
				HttpServletRequest request,
				HttpServletResponse response,
				@RequestBody RoleInfo roleInfo
			) throws Exception {
		return roleInfoService.deleteRoleInfo(roleInfo);
	}
	
	@RequestMapping(value="/selectAll/roleInfoWithOutExistByMenuName")
	public @ResponseBody List<RoleInfo> roleInfoWithOutExistByMenuName(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="menuName",required=false) String menuName) throws Exception {
		return roleInfoService.getAllRoleInfoWithOutExistByMenuName(menuName);
	}
	
	@RequestMapping(value="/select/roleInfoByMenuName")
	public @ResponseBody List<RoleInfo> roleInfoByMenuName(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="menuName",required=false) String menuName) throws Exception {
		return roleInfoService.getRoleInfoByMenuName(menuName);
	}
}
