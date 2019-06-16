package com.boe.idm.project.config;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;
import javax.websocket.Session;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.server.HandshakeInterceptor;

import com.boe.idm.project.handler.BroadcastHandler;
import com.boe.idm.project.handler.NoticeBoardHandler;
import com.boe.idm.project.handler.WebsocketHandler;
import com.boe.idm.project.model.system.NoticeBoard;


@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer{
	
	private static final Logger log = LoggerFactory.getLogger(WebSocketConfig.class);
	
	@Autowired
	WebsocketHandler websocketHandler;
	
	@Autowired
	BroadcastHandler broadcastHandler;
	
	@Autowired
	NoticeBoardHandler noticeBoardHandler;
	
	/**
	 * @param registry 该对象可以调用addHandler()来注册信息处理器
	 */
	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		//서버가 연결한 끝점 및 모든 요청 허용
		//服务器的连接及所有要求
		registry.addHandler(websocketHandler, "/api/websocket").setAllowedOrigins("*");
		registry.addHandler(broadcastHandler, "/api/broadcast").setAllowedOrigins("*");
		registry.addHandler(noticeBoardHandler, "/api/noticeboard").setAllowedOrigins("*").addInterceptors(new HandshakeInterceptor() {
			
			@Override
			public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler,
					Map<String, Object> attributes) throws Exception {
				// TODO Auto-generated method stub
				log.debug("Websocket Before HandShake");
				if (request instanceof ServletServerHttpRequest ) {
		            ServletServerHttpRequest servletRequest = (ServletServerHttpRequest) request;
		            HttpSession session = servletRequest.getServletRequest().getSession(false);
		            if (session != null) {
		                //使用userName区分WebSocketHandler，以便定向发送消息
		                String userName = (String) session.getAttribute("loginUserId");
		                if (userName==null) {
		                    userName="default-system";
		                }
		                attributes.put("WEBSOCKET_USERNAME",userName);
		            }
				}
				return true;
			}
			
			@Override
			public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler,
					Exception exception) {
				// TODO Auto-generated method stub
				
			}
		});
//		.withSockJS();	
	}
	
}

