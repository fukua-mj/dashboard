package com.boe.idm.project.controller.websocket;

import java.security.Principal;
import java.text.ParseException;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.system.NoticeBoard;
import com.boe.idm.project.service.system.NoticeBoardService;
import com.boe.idm.project.utils.DateUtils;

@RestController
public class StompController {
	
	private static final Logger log = LoggerFactory.getLogger(StompController.class);
	
	@Autowired
	private NoticeBoardService noticeBoardService;
	
	/**
	 * 默认情况下，帧所发生的目的地会与触发处理器方法的目的地相同，只不过会添加上"/topic"前缀
	 * @param message
	 * @return
	 */
	@MessageMapping("/marco")
	@SendTo("/topic/marco") //可重写目的地，@MessageMapping 会发送到消息代理，客户端再从消息代理订阅
	public Greeting stompHandle(String message) {
		log.info("The Message has received:"+message);
		return new Greeting("This Message is from WebSocket:"+message);
	}
	
	/**
	 * @SubscribeMapping 的主要应用场景是实现请求-回应模式。
	 * 在请求-回应模式中，客户端订阅某一个目的地，然后预期在这个目的地上获得一个一次性的响应
	 * @return
	 */
	@SubscribeMapping("/getGreet")
	public Greeting getGreet() {
		return new Greeting("Hello STOMP");
	}
	
	@MessageMapping("/shout")
	@SendToUser("/queue/notifications")
	public Greeting userStomp(Principal principal, String message) {
		String name = principal.getName();
		log.info("认证的名字是：{}，收到的消息是{}",name,message);
		return new Greeting("认证的名字是："+name+"，收到的消息是"+message+"!");
	}
	
	@MessageMapping("/singleGreet")
	public void singleUser(String message, StompHeaderAccessor stompHeaderAccessor) {
/*		log.info("接收到的消息："+message);
		Principal user = stompHeaderAccessor.getUser();
		simpMessageSendingOperations.convertAndSendToUser(user.getName(), "/queue/shouts", message);*/
	}
	
	@MessageMapping("/noticeboard")
	@SendToUser("/queue/notice")
	public Greeting notice(Principal principal, NoticeBoard noticeBoardMessage) throws ParseException {
		String name = principal.getName();
		NoticeBoard noticeBoard = new NoticeBoard();
		noticeBoard.setAuthor(name);
		noticeBoard.setSubject(noticeBoardMessage.getSubject());
		noticeBoard.setMessagedetail(noticeBoardMessage.getMessagedetail());
		noticeBoard.setReceivername("ALL");
		noticeBoardService.insertByEntity(noticeBoard);
		log.info("认证的名字是：{}，收到的消息是{}",name,noticeBoardMessage.getSubject());
		return new Greeting("认证的名字是："+name+"，收到的消息是"+noticeBoardMessage.getSubject()+"!");
	}
}
