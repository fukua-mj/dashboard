package com.boe.idm.project.model.mybatis;

import com.boe.idm.project.model.RPCObject;

public class UserVO extends RPCObject{
	private String username;
	private String password;
	private String token;
	private String loginTime;
	private int checkState;
	private String logInIP;
	
	public String getLogInIP() {
		return logInIP;
	}
	public void setLogInIP(String logInIP) {
		this.logInIP = logInIP;
	}
	public String getUsername() {
		return username;
	}
	public int getCheckState() {
		return checkState;
	}
	public void setCheckState(int checkState) {
		this.checkState = checkState;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getLoginTime() {
		return loginTime;
	}
	public void setLoginTime(String loginTime) {
		this.loginTime = loginTime;
	}
	
	
}
