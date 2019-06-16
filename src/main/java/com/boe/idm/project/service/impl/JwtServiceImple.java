package com.boe.idm.project.service.impl;

import java.io.UnsupportedEncodingException;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.boe.idm.project.service.JwtService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JwtServiceImple implements JwtService{
	private static final String SALT = "luvookSecret";
	private String key = "aaabcd";
	@Override
	public String create(Map<String, String> data,String subject) {
		String jwt = Jwts.builder()
				.setHeaderParam("typ", "JWT")
				.setHeaderParam("regData", System.currentTimeMillis())
				.setSubject(subject)
				.claim(this.key, data)
				.signWith(SignatureAlgorithm.HS256, this.generateKey())
				.compact();
		return jwt;
	}
	
	private byte[] generateKey() {
		byte[] key = null;
		try {
			key = SALT.getBytes("UTF-8");
		} catch (UnsupportedEncodingException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return key;
	}
	
	@Override
	public boolean isUsable(String jwt) {
		Jws<Claims> claims = Jwts.parser()
				.setSigningKey(this.generateKey())
				.parseClaimsJws(jwt);
		return true;
	}
	
	@Override
	public Map<String, Object> get(String key) {
		HttpServletRequest request = 
				((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
		String jwt  = request.getHeader("Authorization");
		Jws<Claims> claims = null;
		try {
			claims = Jwts.parser()
					.setSigningKey(SALT.getBytes("UTF-8"))
					.parseClaimsJws(jwt);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		Map<String, Object> value = (LinkedHashMap<String, Object>)claims.getBody().get(key);
		return value;
	}
}
