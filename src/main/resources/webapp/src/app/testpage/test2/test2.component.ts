import { HttpClient } from '@angular/common/http';
import { MenuItem, SelectItem, Message } from 'primeng/api';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Test2Component implements OnInit {

  items: MenuItem[];
  home: MenuItem;

  cars: SelectItem[];

  sales: any[];

  title = 'app works';

  stompClient: any;

  respText: any;

  serverUrl = 'http://localhost:8888/socket';

  public msgs: any;

  currentUserName = localStorage.getItem('currentUserName');

  webSocketHeader: any;

  constructor(private Http: HttpClient) {
    this.webSocketHeader = {
      username: this.currentUserName,
      password: 'admin'
    }
    this.setMessage('666');
    this.initializeWebSocketConnection();
  }

  ngOnInit() {

    this.cars = [
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];
    this.items = [
      { label: 'Categories' },
      { label: 'Sports' },
      { label: 'Football' },
      { label: 'Countries' },
      { label: 'Spain' },
      { label: 'F.C. Barcelona' },
      { label: 'Squad', url: 'http://localhost:4200/#/boe/production/pro-even' },
      { label: 'Lionel Messi', url: 'http://localhost:4200/#/boe/production/pro-bp', icon: 'pi pi-external-link' }
    ];

    this.home = { icon: 'pi pi-home' };

    this.sales = [
      { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
      { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
      { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
      { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
      { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
      { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
      { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
      { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
      { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
      { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
    ];

  }

  initializeWebSocketConnection() {
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect(this.webSocketHeader, function (frame) {
      that.stompClient.subscribe("/topic/marco", (message) => {
        console.log('WEBSOCKET MESSAGE RECEIVED:' + message);
        this.respText = message.body;
        $(".chat").append("<div class='message'>" + this.respText + "</div>");
        that.setMessage(this.respText);
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

    });
  }

  sendMessage(message) {
    this.stompClient.send("/app/marco", {}, message);
    console.log('sendMessage');
  }

  send() {
    this.sendMessage('MJMJMJMJMJMJ');
  }


  sendByUser() {
    const adminJSON = JSON.stringify({ 'message': 'MJ' });
    this.stompClient.send('/app/shout', {}, adminJSON);
  }

  setMessage(content: string) {
    this.msgs = [{
      severity: 'error',
      summary: '提示',
      detail: content
    }];
    return;
  }

}
