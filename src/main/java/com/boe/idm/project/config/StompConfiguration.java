package com.boe.idm.project.config;

import java.security.Principal;
import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.converter.MessageConverter;
import org.springframework.messaging.handler.invocation.HandlerMethodArgumentResolver;
import org.springframework.messaging.handler.invocation.HandlerMethodReturnValueHandler;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.web.socket.config.annotation.AbstractWebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketTransportRegistration;

/*@Configuration
@EnableWebSocketMessageBroker
public class StompConfiguration extends AbstractWebSocketMessageBrokerConfigurer{
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/socket") // 用于建立长连接
                .setAllowedOrigins("*")
                .withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.setApplicationDestinationPrefixes("/app")
                .enableSimpleBroker("topic","/chat","/alarm");
    }
}*/


@Configuration
@EnableWebSocketMessageBroker
public class StompConfiguration implements WebSocketMessageBrokerConfigurer  {
	
	// RabbitMQ Config
	private String host = "127.0.0.1";
	
	private Integer port = 61613;
	
	private String userName = "guest";
	
	private String password = "guest";
		

	/**
	 * 	如果不重载它的话，将会自动配置一个简单的内存消息代理，用他来处理以"/topic"为前缀的消息
	 *  @param config
	 */
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
    	// 基于内存的STOMP消息代理
        config.enableSimpleBroker("/topic","/queue");
        config.setApplicationDestinationPrefixes("/app");
        config.setUserDestinationPrefix("/user");
        
        // 基于RabbitMQ的STOMP消息代理
/*        config.enableStompBrokerRelay("/queue","/topic")
        	.setRelayHost(host)
        	.setRelayPort(port)
        	.setClientLogin(userName)
        	.setClientPasscode(password);*/
    }

    /**
     *	 将"/socket"注册为一个STOMP端点。这个路径与之前发生和接收消息的目的地路径有所
     *	不同。这是一个端点，客户端在订阅或发布消息到目的地路径前，要连接到该端点
     *@param registry
     */
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/socket").setAllowedOrigins("*").withSockJS();
    }

	@Override
	public void configureWebSocketTransport(WebSocketTransportRegistration registry) {
		// TODO Auto-generated method stub
		
	}
	
	/**
	 * 1. 设置拦截器
	 * 2. 首次连接的时候，获取其Header 信息，利用Header里面的信息进行权限认证
	 * 3. 通过认证的用户，使用accessor.setUser(user)方法，将登录信息绑定在该StompHeaderAccessor上，
	 *    在Controller方法上可以获取StompHeaderAccessor的相关信息
	 */
	@Override
	public void configureClientInboundChannel(ChannelRegistration registration) {
		// TODO Auto-generated method stub
		registration.interceptors(new ChannelInterceptor() {
			
			@Override
			public Message<?> preSend(Message<?> message, MessageChannel channel) {
				// TODO Auto-generated method stub
				StompHeaderAccessor accessor = MessageHeaderAccessor.getAccessor(message, StompHeaderAccessor.class);
				// 1.判断是否首次连接
				if (StompCommand.CONNECT.equals(accessor.getCommand())) {
					//2.判断用户名和密码
					String username = accessor.getNativeHeader("username").get(0);
					String password = accessor.getNativeHeader("password").get(0);
					
/*					if ("admin".equals(username) && "admin".equals(password)) {*/
						Principal principal = new Principal() {
							
							@Override
							public String getName() {
								// TODO Auto-generated method stub
								return username;
							}
						};
						accessor.setUser(principal);
						return message;
/*					} else {
						return null;
					}*/
				}
				// 不是首次连接，已经登陆成功
				return message;
			}
			
			@Override
			public boolean preReceive(MessageChannel channel) {
				// TODO Auto-generated method stub
				return false;
			}
			
			@Override
			public void postSend(Message<?> message, MessageChannel channel, boolean sent) {
				// TODO Auto-generated method stub
				
			}
			
			@Override
			public Message<?> postReceive(Message<?> message, MessageChannel channel) {
				// TODO Auto-generated method stub
				return null;
			}
			
			@Override
			public void afterSendCompletion(Message<?> message, MessageChannel channel, boolean sent, Exception ex) {
				// TODO Auto-generated method stub
				
			}
			
			@Override
			public void afterReceiveCompletion(Message<?> message, MessageChannel channel, Exception ex) {
				// TODO Auto-generated method stub
				
			}
		});
	}

	@Override
	public void configureClientOutboundChannel(ChannelRegistration registration) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void addReturnValueHandlers(List<HandlerMethodReturnValueHandler> returnValueHandlers) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean configureMessageConverters(List<MessageConverter> messageConverters) {
		// TODO Auto-generated method stub
		return false;
	}

}

