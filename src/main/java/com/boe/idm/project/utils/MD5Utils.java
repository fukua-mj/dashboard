package com.boe.idm.project.utils;

import org.apache.commons.codec.digest.DigestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.boe.idm.project.controller.system.MenuInfoController;


/**
 * MD5 加密验证
 * @author CIMPC
 *
 */
public class MD5Utils {

	private static final Logger logger = LoggerFactory.getLogger(MenuInfoController.class);
	
	public static final String MD5_KEY = "B7CIM";

	/**
	 * MD5
	 * 
	 * @param text 明文
	 * @param key 密钥
	 * @return 密文
	 * @throws Exception
	 */
	public static String md5(String text, String key) throws Exception {
		
		//加密后的字符串
		String encodeStr = DigestUtils.md5Hex(text + key);
		System.out.println("MD5加密后的字符串为：encodeStr = " + encodeStr);
		return encodeStr;
	}
	
	/**
	 * MD5验证
	 * 
	 * @param text 明文
	 * @param key 密钥
	 * @param md5  密文
	 * @return true/false
	 * @throws Exception
	 */
	public static boolean verify(String text, String key, String md5) throws Exception{
		//根据传入的密钥进行验证
		String md5Text = md5(text,key);
		if (md5Text.equalsIgnoreCase(md5)) {
			logger.debug("MD5验证通过");
			return true;
		}
		return false;
	}
}
