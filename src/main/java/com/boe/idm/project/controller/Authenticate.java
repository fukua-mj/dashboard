package com.boe.idm.project.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.UserVO;
import com.boe.idm.project.model.system.UserInfo;
import com.boe.idm.project.service.JwtService;
import com.boe.idm.project.service.system.UserInfoService;
import com.boe.idm.project.utils.DateUtils;
import com.boe.idm.project.utils.IPUtils;
import com.boe.idm.project.utils.MD5Utils;

@RestController
@RequestMapping("/api")
public class Authenticate {
	private final Logger logger = LoggerFactory.getLogger(Authenticate.class);
	
	@Autowired
	private JwtService jwtservice;
	
	@Autowired
	private UserInfoService userInfoService;
	
	public static final String MD5_KEY = "B7CIM";
	
	MD5Utils md5Utils = new MD5Utils();
	IPUtils ipUtils = new IPUtils();
	
	@RequestMapping(value="/authenticate", method = RequestMethod.POST)
	public UserVO authenticate(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody UserVO userVO
			) throws Exception{
		
		UserInfo userToCheck = userInfoService.getUserInfoByAccount(userVO.getUsername());
		if (md5Utils.verify(userVO.getPassword(), MD5_KEY, userToCheck.getPassword())) {
			userVO.setCheckState(1);
			HttpSession session = request.getSession();
			if (session.getAttribute("loginUserId") == null) {
				session.setAttribute("loginUserId", userVO.getUsername());
				session.setMaxInactiveInterval(365*24*60*60);//设置session超时
				
				Map<String, String> info = new HashMap<>();
				info.put("id", "test");
				info.put("name", "mj");
				String token = jwtservice.create(info, "sub");
				Cookie cookie = new Cookie("token", token);
				cookie.setPath("/");
				response.addCookie(cookie);
			}
			
			userVO.setToken("fake-jwt-token");
			userVO.setLoginTime(DateUtils.getCurrentTimeStamp());
			userVO.setLogInIP(ipUtils.getRequestIp(request));
			logger.debug("return userVO : "+userVO);
		}else {
			userVO.setCheckState(0);
		}
		
		return userVO;
	}
	
/*	@RequestMapping(value="/authenticate", method = RequestMethod.POST)
	public UserVO authenticate(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody UserVO userVO
			) throws Exception{
		
		String checkId = userVO.getUsername();
		String checkPassword = userVO.getPassword();
		Cookie[] cookies = request.getCookies();
		for(Cookie cookie: cookies) {
			if (cookie.getName().equals(checkId)&&cookie.getValue().eq) {
				
			}
		}
		
		userVO.setToken("fake-jwt-token");
		userVO.setLoginTime(DateUtils.getCurrentTimeStamp());
		logger.debug("return userVO : "+userVO);
		
		return userVO;
	}*/
	
	
	
	@RequestMapping(value="/logout", method = RequestMethod.POST)
	public void Logout(
			HttpServletRequest request, 
			HttpServletResponse response
			) throws Exception{
		HttpSession session = request.getSession();
		session.getAttribute("loginUserId");
		session.removeAttribute("loginUserId");
		response.sendRedirect("/");

	}
}
