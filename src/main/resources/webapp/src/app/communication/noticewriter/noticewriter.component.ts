import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';
import { environment } from 'environments/environment';
import { NoticeBoard } from 'app/common/model/system/noticeboard';
import { Userinfo } from 'app/common/model/system/userinfo';
import { ApiService } from 'app/common/service/api/api.service';
import { WebSocketService } from 'app/common/service/web-socket.service';
import { Message } from 'primeng/api';
import { OverlayPanel } from 'primeng/primeng';

@Component({
  selector: 'app-noticewriter',
  templateUrl: './noticewriter.component.html',
  styleUrls: ['./noticewriter.component.css']
})
export class NoticewriterComponent implements OnInit {

  serverUrl = environment.websocketUrl;

  stompClient: any;

  webSocketHeader: any;

  noticeText: any;

  noticeSubject: any;

  placeholder: '正文';

  display_userList: Boolean = false;

  selectedUsers: Userinfo[];

  users: Userinfo[];

  currentUserName = localStorage.getItem('currentUserName');

  socket: any;

  msgs: Message[];

  sendHistory: NoticeBoard[];

  selectNotice: NoticeBoard = new NoticeBoard();

  constructor(private httpService: ApiService, private websocket: WebSocketService) { }

  ngOnInit() {
    this.socket = this.websocket.NoticeBoardConnection();
    let that = this;
    this.socket.onopen = function (event) {

      const MessageContent = {
        messagetype: 1
      };
      that.socket.send(JSON.stringify(MessageContent));
    };

    this.socket.onmessage = (event) => {
      const receiveData = JSON.parse(event.data);
      const messageType = receiveData.messagetype;
      switch (messageType) {
        case 1:
          console.log(receiveData.messagedetail);
          break;
        case 2:

          break;
        default:
          break;
      }
    };
    //this.initializeWebSocketConnection();
    this.initialSendHistory();
  }

  getUserList() {
    this.httpService.getAll('/user/selectAll/userInfo').subscribe(
      (res) => {
        console.log(res);
        this.users = <Userinfo[]>res;
      },
      (error) => { console.log(error); }
    );
  }

  showUserList() {
    this.display_userList = true;
    this.getUserList();
  }

  initializeWebSocketConnection() {
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect(this.webSocketHeader, function (frame) {
      that.stompClient.subscribe("/topic/marco", (message) => {
        console.log('WEBSOCKET MESSAGE RECEIVED:' + message);
        this.respText = message.body;
        $(".chat").append("<div class='message'>" + this.respText + "</div>")
      });

      that.stompClient.subscribe("/app/getGreet", (message) => {
        const content = message.body;
        const obj = JSON.parse(content);
        console.log("订阅的服务端直接返回的消息：" + obj.content);
      });

      that.stompClient.subscribe('/user/queue/notifications', function (message) {
        const content = message.body;
        const obj = JSON.parse(content);
        console.log('mj用户特定的消息：' + obj.content);
      });

      that.stompClient.subscribe('/user/queue/notice', function (message) {

      });

    });
  }

  sendNotice() {
    /*     this.noticeContent.subject = '<h2>' + this.noticeSubject + '</h2>';
        this.noticeContent.messagedetail = this.noticeText;
        this.stompClient.send("/app/noticeboard", {}, this.noticeContent); */

    if (this.noticeSubject != null || this.noticeSubject != '') {
      if (this.selectedUsers != null) {
        if (this.noticeText != null || this.noticeText != '' || this.noticeText != undefined) {
          let selectedUsersStr = '';
          for (let i = 0; i < this.selectedUsers.length; i++) {
            selectedUsersStr += this.selectedUsers[i].useraccount;
            if (i != this.selectedUsers.length - 1) {
              selectedUsersStr += ';';
            }
          }

          const NoticeContent = this.NoticeContentInit(this.currentUserName, this.noticeSubject, this.noticeText, selectedUsersStr);
          this.socket.send(JSON.stringify(NoticeContent));
        } else {
          this.showMessage('warn', 'Warn Message', 'Please Input Notice');
        }
      } else {
        this.showMessage('warn', 'Warn Message', 'Please Choose Recipient!');
      }
    } else {
      this.showMessage('warn', 'Warn Message', 'Please Input Subject!');
    }
  }

  /**
   * 
   * @param author 
   * @param subject 
   * @param messagedetail 
   * @param receivername 
   * @description MessageType代表自定义的WebSocket类型：1.连接消息；2.具体消息
   */
  NoticeContentInit(author: string, subject: string, messagedetail: string, receivername: string) {
    const MessageContent = {
      messagetype: 2,
      author: author,
      subject: subject,
      messagedetail: messagedetail,
      receivername: receivername
    };
    return MessageContent;
  }

  showMessage(severity: string, summary: string, detail: string) {
    this.msgs = [];
    this.msgs.push({ severity: severity, summary: summary, detail: detail });
  }

  cancel() {
    this.selectedUsers = null;
    this.display_userList = false;
  }

  initialSendHistory() {
    const options = {
      params: {
        author: this.currentUserName,
      }
    };
    let url;
    url = '/noticeboard/getSendHistory';

    this.httpService.get(url, options).subscribe(
      (res) => {
        this.sendHistory = <NoticeBoard[]>res;
      },
      (error) => { console.log(error); }
    );
  }

  showOverLayer(event, overlaypanel: OverlayPanel) {
    debugger;
    this.selectNotice = event.value;
    overlaypanel.toggle(event);
  }

}
