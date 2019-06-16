import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as Websocket from 'websocket';
import { environment } from 'environments/environment.prod';

@Injectable()
export class WebSocketService {

  constructor() { }

  WebSocketConnection() {
    const websocket = new WebSocket('ws://localhost:8888/api/websocket');
    return websocket;
    // const url = 'http://localhost:8888/api/websocket';
    // const socket = new SockJS(url);
    // const stompClient = Stomp.over(socket);

    // return stompClient;
  }

  NoticeBoardConnection() {
    let wsPath = '';
    if (location.host == 'localhost:4200') {
      wsPath = 'ws://localhost:8888/api/noticeboard';
    } else {
      wsPath = 'ws://' + location.host + '/api/noticeboard';
    }
    const websocket = new WebSocket(wsPath);
    return websocket;
  }

}
