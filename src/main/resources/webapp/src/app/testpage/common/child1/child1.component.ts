import { Component, OnInit } from '@angular/core';
import { MessageService } from 'app/common/service/message.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private message: MessageService) { }

  ngOnInit() {
    this.message.sendMessage(3); // 組件A發送消息3
  }

}
