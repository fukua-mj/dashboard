import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class MessageService {

  private subject = new Subject<any>();

  /**
   * content模快裏面進行信息傳輸，類似廣播
   * @param type 發送的信息類型
   *        1-你的信息
   *        2-你的信息
   *        3-你的信息
   *        4-你的信息
   *        5-你的信息
   */
  sendMessage(type:number) {
    console.log('TAG' + '----------->>>'+type);
    this.subject.next({type:type});
  }
  
  /**
   * 清理消息
   */
  clearMessage() {
    this.subject.next();
  }

  /**
   * 獲得消息
   * @returns {Observable<any>}
   */
  getMessage():Observable<any> {
    return this.subject.asObservable();
  }


  constructor() { }


}
