package com.boe.idm.project.controller.websocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class NoticeBoardController {
	
	@MessageMapping("/hello")
	@SendTo("/topic/greetings")
	public Greeting greeting(String message) throws Exception {
		Thread.sleep(1000);
		return new Greeting("Hello, " + message + "!");
	}
}
