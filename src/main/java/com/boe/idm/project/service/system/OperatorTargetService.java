package com.boe.idm.project.service.system;

import java.util.List;
import java.util.Map;

public interface OperatorTargetService{
	
	public List<Map<String, Object>> getOperatorTargetById(String operatorId);
	
	public List<Map<String, Object>> getOperatorTargetAll(String shopName, String operatorId);

	public List<Map<String, Object>> getStandardTarget();

	public List<Map<String, Object>> getTargetByOperatorId(String operatorId);

	public int deleteAllOperatorTarget(String shopName);

	public int setOperatorTarget(String factoryName, String operatorId, String _total, String _00h, String _01h,
			String _02h, String _03h, String _04h, String _05h, String _06h, String _07h, String _08h,
			String _09h, String _10h, String _11h, String _12h, String _13h, String _14h, String _15h, String _16h,
			String _17h, String _18h, String _19h, String _20h, String _21h, String _22h, String _23h);
	


}
