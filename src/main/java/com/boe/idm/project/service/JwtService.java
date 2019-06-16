package com.boe.idm.project.service;

import java.util.Map;

public interface JwtService {
	public String create(Map<String, String> data,String subject);
	
	public Map<String, Object> get(String key);
	
	public boolean isUsable(String jwt);
}
