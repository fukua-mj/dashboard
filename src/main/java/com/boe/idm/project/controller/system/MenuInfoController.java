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
import com.boe.idm.project.model.system.UserInfo;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.system.MenuInfoService;
import com.boe.utils.json.JsonUtils;
import com.boe.utils.special.MDLMachineOrder;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@RestController
@RequestMapping(value="/api/menu")
public class MenuInfoController extends JsonUtils{

	private static final Logger logger = LoggerFactory.getLogger(MenuInfoController.class);
	
	@Autowired
	private MenuInfoService menuInfoService;
	
	@RequestMapping(value="/getMenuList")
	public void getMenuList(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Language language/*,
			@RequestParam(value="lang_local",required=false) String lang_local*/) throws Exception {
		String lang_local = language.getLang_local();
		String userId = request.getSession().getAttribute("loginUserId").toString();
		List<MenuInfo> menuList = menuInfoService.getMenuList(userId);
		List<Object> resultList = new ArrayList<Object>();
		for(MenuInfo menu : menuList) {
			//第一层菜单
			if (menu.getParentname() == null) {
					JSONObject jsonObject = new JSONObject();
					if (lang_local.equals("zh")) {
						jsonObject.element("label", menu.getChinese());
					} else if(lang_local.equals("en")){
						jsonObject.element("label", menu.getEnglish());
					} else if (lang_local.equals("kr")) {
						jsonObject.element("label", menu.getKorean());
					}
					jsonObject.element("icon", menu.getIcon());
					
					if (menu.getIsparent().equals("Y")) {
						jsonObject.element("items", getItemMenu(menu.getMenuname(),menuList,lang_local));
					} else {
						jsonObject.element("routerLink", menu.getRouterlink());
					}
					resultList.add(jsonObject);
			}
		}
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("menuList", resultList);
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	private static JSONArray getItemMenu(String menuname, List<MenuInfo> menuList, String lang_local) {
		// TODO Auto-generated method stub
		JSONArray jsonArray = new JSONArray();
		for(MenuInfo menu : menuList) {
			if (menu.getParentname() != null && menu.getParentname().equals(menuname)) {
				JSONObject jsonObject = new JSONObject();
				if (lang_local.equals("zh")) {
					jsonObject.element("label", menu.getChinese());
				} else if(lang_local.equals("en")){
					jsonObject.element("label", menu.getEnglish());
				} else if (lang_local.equals("kr")) {
					jsonObject.element("label", menu.getKorean());
				}
				jsonObject.element("icon", menu.getIcon());
				
				if (menu.getIsparent().equals("Y")) {
					jsonObject.element("items", getItemMenu(menu.getMenuname(),menuList,lang_local));
				} else {
					jsonObject.element("routerLink", menu.getRouterlink());
				}
				jsonArray.add(jsonObject);
			}						
		}
		
		return jsonArray;
	}
	
	@RequestMapping(value="/select/url")
	public @ResponseBody List<String> getUrlsByUser(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="userName")String userName) throws Exception {
		return menuInfoService.getAllUrlsByUser(userName);
	}

	@RequestMapping(value="/selectAll/menuInfo")
	public @ResponseBody List<MenuInfo> getAllMenuInfoList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return menuInfoService.getAllMenuInfoList();
	}
			
	@RequestMapping(value="/selectAll/menuInfoWithOutExist")
	public @ResponseBody List<MenuInfo> getAllMenuInfoListWithOutExist(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="roleName",required=false) String roleName) throws Exception {
		return menuInfoService.getMenuInfoListWithOutExist(roleName);
	}
	
	@RequestMapping(value="/select/menuInfo")
	public @ResponseBody List<MenuInfo> getMenuInfoListByUser(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="roleName",required=false) String roleName) throws Exception {
		return menuInfoService.getMenuInfoListByRole(roleName);
	}
	
	@RequestMapping(value="/insert/menuInfo",method=RequestMethod.POST)
	public int insertMenuInfo(
				HttpServletRequest request,
				HttpServletResponse reHttpServletResponse,
				@RequestBody MenuInfo menuInfo
			) throws Exception {	
		MenuInfo parentMenuInfo = new MenuInfo();
		parentMenuInfo.setMenuname(menuInfo.getParentname());
		menuInfo.setParent(parentMenuInfo);
		return menuInfoService.insertMenuInfo(menuInfo);
	}
	
	@RequestMapping(value="/update/menuInfo",method=RequestMethod.PUT)
	public int updateMenuInfo(
				HttpServletRequest request,
				HttpServletResponse response,
				@RequestBody MenuInfo menuInfo
			) throws Exception {
		return menuInfoService.updateMenuInfo(menuInfo);
	}
	
	@RequestMapping(value="/delete/menuInfo")
	public int deleteMenuInfo(
				HttpServletRequest request,
				HttpServletResponse response,
				@RequestBody MenuInfo menuInfo
			) throws Exception {
		return menuInfoService.deleteMenuInfo(menuInfo);
	}

}
