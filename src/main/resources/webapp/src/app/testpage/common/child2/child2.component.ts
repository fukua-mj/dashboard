import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from 'app/common/service/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, OnDestroy {

  public subscription: Subscription;

  constructor(private message: MessageService) {
    this.subscription = this.message.getMessage().subscribe(msg => {
      console.log('child2 constructor:' + JSON.stringify(msg));
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // 組件生命週期結束的時候，記得註銷一下，不然會卡
  }

  send() {
    this.message.sendMessage(666);
  }

}
