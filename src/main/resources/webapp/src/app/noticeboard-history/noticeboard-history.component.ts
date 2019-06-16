import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'app/common/service/api/api.service';
import { NoticeBoard } from 'app/common/model/system/noticeboard';
import { MessageService } from 'app/common/service/message.service';

@Component({
  selector: 'app-noticeboard-history',
  templateUrl: './noticeboard-history.component.html',
  styleUrls: ['./noticeboard-history.component.css']
})
export class NoticeboardHistoryComponent implements OnInit, OnDestroy {

  cities: any[];

  noticelist: NoticeBoard[];

  selectNotice: NoticeBoard = new NoticeBoard();

  currentUserName = localStorage.getItem('currentUserName');

  cols: any;

  constructor(private httpService: ApiService, private message: MessageService) { }

  ngOnInit() {
    this.message.sendMessage(6666); // 組件B發送消息

    this.cols = [
      { field: 'subject', header: '主题' },
      { field: 'timekey', header: '发布日期' },
      /*      { field: 'author', header: '作者' },
           { field: 'messagedetail', header: '内容' },
           { field: 'receivername', header: '收件人' },
           { field: 'confirmflag', header: '确认状态' },
           { field: 'imageurl', header: '图片' },
           { field: 'visitcount', header: '访问次数' }, */
    ];

    this.getNoticeList();
  }

  ngOnDestroy() {

  }

  getNoticeList() {
    const options = {
      params: {
        currentUserName: this.currentUserName,
      }
    };
    let url;
    url = '/noticeboard/getNoticeList';

    this.httpService.get(url, options).subscribe(
      (res) => {
        this.noticelist = <NoticeBoard[]>res;
      },
      (error) => { console.log(error); }
    );
  }

  onClick() {
    this.message.sendMessage(6666); // 組件B發送消息
  }

  onChange(event) {
    console.log(event.value);
  }

}
