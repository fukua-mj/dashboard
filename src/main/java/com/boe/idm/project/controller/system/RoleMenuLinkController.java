package com.boe.idm.project.controller.system;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
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
import com.boe.idm.project.model.system.RoleMenuLink;
import com.boe.idm.project.model.system.RoleMenuLink2;
import com.boe.idm.project.model.system.UserInfo;
import com.boe.idm.project.model.system.UserRoleLink;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.system.MenuInfoService;
import com.boe.idm.project.service.system.RoleMenuLinkService;
import com.boe.idm.project.service.system.UserInfoService;
import com.boe.idm.project.service.system.UserRoleLinkService;
import com.boe.utils.json.JsonUtils;
import com.boe.utils.special.MDLMachineOrder;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@RestController
@RequestMapping(value="/api/roleMenuLink")
public class RoleMenuLinkController extends JsonUtils{

	private static final Logger logger = LoggerFactory.getLogger(RoleMenuLinkController.class);
	
	@Autowired
	private RoleMenuLinkService roleMenuLinkService;
	
	@RequestMapping(value="/insert/roleMenuLinksByRole")
	public int roleMenuLinksByRole(
			HttpServletRequest request,
			HttpServletResponse reHttpServletResponse,
			@RequestBody RoleMenuLink[] roleMenuLinks
		) throws Exception {	
		List<RoleMenuLink> allRoleMenuLink = roleMenuLinkService.getRoleMenuLinkByRoleName(roleMenuLinks[0].getRolename());		
		List<RoleMenuLink> list = Arrays.asList(roleMenuLinks);
		List<RoleMenuLink> arrayList = new ArrayList<RoleMenuLink>(list);
		
		//先把最新的RoleMenuLinkList与已有的RoleMenuLinkList比较，删除最新的里面没有的
		List<RoleMenuLink2> allRoleMenuLink2 = new ArrayList<RoleMenuLink2>();
		List<RoleMenuLink2> newRoleMenuLink2 = new ArrayList<RoleMenuLink2>();
		for(RoleMenuLink rLink:allRoleMenuLink) {
			RoleMenuLink2 roleMenuLink2 = new RoleMenuLink2();
			roleMenuLink2.setMenuname(rLink.getMenuname());
			roleMenuLink2.setRolename(rLink.getRolename());
			allRoleMenuLink2.add(roleMenuLink2);
		}
		for(RoleMenuLink rLink:arrayList) {
			RoleMenuLink2 roleMenuLink2 = new RoleMenuLink2();
			roleMenuLink2.setMenuname(rLink.getMenuname());
			roleMenuLink2.setRolename(rLink.getRolename());
			newRoleMenuLink2.add(roleMenuLink2);
		}
		for(RoleMenuLink2 reLink2: allRoleMenuLink2) {
			if (!newRoleMenuLink2.contains(reLink2)) {
				roleMenuLinkService.deleteRoleMenuLink(reLink2);
			}
		}
		
		//再把最新的RoleMenuLinkList与已有的RoleMenuLinkList比较，排除掉相同的
		for (RoleMenuLink rLink: arrayList) {
			RoleMenuLink isExist = roleMenuLinkService.selectRoleMenuLinkByRoleAndMenu(rLink);
			if (isExist != null) {
				arrayList.remove(rLink);
			}
		}
		return roleMenuLinkService.insertRoleMenuLinks(arrayList);
	}
	
	@RequestMapping(value="/insert/roleMenuLinksByMenu")
	public int roleMenuLinksByMenu(
			HttpServletRequest request,
			HttpServletResponse reHttpServletResponse,
			@RequestBody RoleMenuLink[] roleMenuLinks
		) throws Exception {	
		List<RoleMenuLink> allRoleMenuLink = roleMenuLinkService.getRoleMenuLinkByMenuName(roleMenuLinks[0].getMenuname());		
		List<RoleMenuLink> list = Arrays.asList(roleMenuLinks);
		List<RoleMenuLink> arrayList = new ArrayList<RoleMenuLink>(list);
		
		//先把最新的RoleMenuLinkList与已有的RoleMenuLinkList比较，删除最新的里面没有的
		List<RoleMenuLink2> allRoleMenuLink2 = new ArrayList<RoleMenuLink2>();
		List<RoleMenuLink2> newRoleMenuLink2 = new ArrayList<RoleMenuLink2>();
		for(RoleMenuLink rLink:allRoleMenuLink) {
			RoleMenuLink2 roleMenuLink2 = new RoleMenuLink2();
			roleMenuLink2.setMenuname(rLink.getMenuname());
			roleMenuLink2.setRolename(rLink.getRolename());
			allRoleMenuLink2.add(roleMenuLink2);
		}
		for(RoleMenuLink rLink:arrayList) {
			RoleMenuLink2 roleMenuLink2 = new RoleMenuLink2();
			roleMenuLink2.setMenuname(rLink.getMenuname());
			roleMenuLink2.setRolename(rLink.getRolename());
			newRoleMenuLink2.add(roleMenuLink2);
		}
		for(RoleMenuLink2 reLink2: allRoleMenuLink2) {
			if (!newRoleMenuLink2.contains(reLink2)) {
				roleMenuLinkService.deleteRoleMenuLink(reLink2);
			}
		}
		
		//再把最新的RoleMenuLinkList与已有的RoleMenuLinkList比较，排除掉相同的
		for (RoleMenuLink rLink: arrayList) {
			RoleMenuLink isExist = roleMenuLinkService.selectRoleMenuLinkByRoleAndMenu(rLink);
			if (isExist != null) {
				arrayList.remove(rLink);
			}
		}
		return roleMenuLinkService.insertRoleMenuLinks(arrayList);
	}

}
