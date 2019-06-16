package com.boe.idm.project.handler;

import static org.hamcrest.CoreMatchers.not;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.boe.idm.project.model.system.NoticeBoard;
import com.boe.idm.project.service.system.NoticeBoardService;
import com.boe.idm.project.utils.DateUtils;

@Component
public class NoticeBoardHandler extends TextWebSocketHandler {
	
	@Autowired
	private NoticeBoardService noticeBoardService;
	
	private final Logger log = LoggerFactory.getLogger(NoticeBoardHandler.class);
	
	private static Map<String, WebSocketSession> userSession = new HashMap<String, WebSocketSession>();
	
	/**
	 * 接收文本消息并发送出去
	 * @param session
	 * @param message
	 */
	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) {
		
		try {
			for(Entry<String, WebSocketSession> map : userSession.entrySet()) 
			{				
				JSONObject jsonObject = new JSONObject(message.getPayload());
				int messageType = jsonObject.getInt("messagetype");
				JSONObject sendData = new JSONObject();
				switch (messageType) {
				case 1:
					sendData.append("messagetype", 1);
					sendData.append("messagedetail", "用户已连接公告栏服务");
					map.getValue().sendMessage(new TextMessage(sendData.toString()));
					break;					
				case 2:
					String[] receiverName = jsonObject.getString("receivername").split(";");
					String dateTime = DateUtils.getNowDateStr();
					sendData.append("messagetype", 2);
					sendData.append("subject", jsonObject.get("subject"));
					sendData.append("messagedetail", jsonObject.get("messagedetail").toString().substring(0, 6)+"...");
					sendData.append("datetime", dateTime);
					if (map.getValue().getAttributes().get("WEBSOCKET_USERNAME").equals(jsonObject.get("author").toString())) {
						NoticeBoard noticeBoard = new NoticeBoard();
						noticeBoard.setAuthor(jsonObject.get("author").toString());
						noticeBoard.setSubject(jsonObject.get("subject").toString());
						noticeBoard.setMessagedetail(jsonObject.get("messagedetail").toString());
						noticeBoard.setReceivername(jsonObject.getString("receivername").toString());
						noticeBoardService.insertByEntity(noticeBoard);
					}					
										
					for (int i = 0; i < receiverName.length; i++) {
						msgSendToUser(receiverName[i], sendData.toString());
					}
					break;	
				default:
					break;
				}
				
				map.getValue().sendMessage(new TextMessage( "" ));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 连接建立后处理
	 * @param session
	 */
	@Override
	public void afterConnectionEstablished(WebSocketSession session) {
		userSession.put(session.getId(), session);
		log.debug("User "+session.getId() + "已上线");
		log.debug("当前线上用户数量："+userSession.size());
	}
	
	/**
	 * 连接关闭后处理
	 * @param session
	 * @param status
	 * @throws Exception
	 */
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		userSession.remove(session.getId());
		log.debug("User "+session.getId() + "已下线");
	}

	/**
	 * 抛出异常时处理
	 * @param session
	 * @param exception
	 * @throws Exception
	 */
	@Override
	public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
		// TODO Auto-generated method stub
		if (session.isOpen()) {
			session.close();
		}
		log.debug("WebSocket Connection Closed");
		userSession.remove(session.getId());
	}

	public void msgSend(String data) throws Exception{
		try {
			for(Entry<String, WebSocketSession> map : userSession.entrySet()) 
			{
				map.getValue().sendMessage(new TextMessage(data));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}	
	
	public void msgSendToUser(String userName, String data) throws Exception{
		try {
			for(Entry<String, WebSocketSession> map : userSession.entrySet()) 
			{
				if (map.getValue().getAttributes().get("WEBSOCKET_USERNAME").equals(userName)) {
					try {
						if (map.getValue().isOpen()) {
							map.getValue().sendMessage(new TextMessage(data));
						}
					} catch (Exception e) {
						// TODO: handle exception
						log.debug(e.getMessage());
					}
				}								
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}	

}
