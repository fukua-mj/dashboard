import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'app/common/service/message.service';
import { Subscription } from 'rxjs';
import { ApiService } from 'app/common/service/api/api.service';
import { NoticeBoard } from 'app/common/model/system/noticeboard';
import * as $ from 'jquery';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.css']
})
export class NoticeboardComponent implements OnInit {

  public data: any;
  public subscription: Subscription;

  bodyClass: string = 'ui-lg-10 body';
  bodyVisible: string = 'block';

  div1Class: string = 'ui-g-12 ui-md-6 ui-lg-8';

  div1Visible: string = 'block';

  subject: string;
  timekey: string;

  selectNotice: NoticeBoard = new NoticeBoard();
  lastNotice: NoticeBoard = new NoticeBoard();
  nextNotice: NoticeBoard = new NoticeBoard();
  noticeList: NoticeBoard[];

  disable_Last: boolean = true;
  disable_Next: boolean = true;

  constructor(public activRoute: ActivatedRoute, private http: ApiService) {

  }

  ngOnInit() {
    this.subject = this.activRoute.snapshot.queryParams['subject'];
    this.timekey = this.activRoute.snapshot.queryParams['timekey'];
    if (this.subject == undefined) {
      this.subject = 'none';
    }
    if (this.timekey == undefined) {
      this.timekey = 'none';
    }
    this.getNoticeContent();
  }

  getNoticeContent() {
    const options = {
      params: {
        subject: this.subject,
        timekey: this.timekey
      }
    };
    let url;
    url = '/noticeboard/getNoticeContent';
    debugger;

    this.http.get(url, options).subscribe(
      (res) => {
        this.noticeList = <NoticeBoard[]>res;
        this.selectNotice = this.noticeList[1];
        this.lastNotice = this.noticeList[0];
        this.nextNotice = this.noticeList[2];
        this.initialButton();
        $(".noticecontent").empty();
        $(".noticecontent").append(this.selectNotice.messagedetail);
        this.updateNoticeVisitCount();
      },
      (error) => { console.log(error); }
    );
  }

  updateNoticeVisitCount() {
    const options = {
      params: {
        subject: this.selectNotice.subject,
        timekey: this.selectNotice.timekey
      }
    };
    let url;
    url = '/noticeboard/updateNoticeVisitCount';

    this.http.get(url, options).subscribe(
      (res) => {

      },
      (error) => { console.log(error); }
    );
  }

  getLastNotice() {
    const options = {
      params: {
        subject: this.lastNotice.subject,
        timekey: this.lastNotice.timekey,
      }
    };
    let url;
    url = '/noticeboard/getNoticeContent';

    this.http.get(url, options).subscribe(
      (res) => {
        this.noticeList = <NoticeBoard[]>res;
        this.selectNotice = this.noticeList[1];
        this.lastNotice = this.noticeList[0];
        this.nextNotice = this.noticeList[2];
        this.initialButton();
        $(".noticecontent").empty();
        $(".noticecontent").append(this.selectNotice.messagedetail);
        this.updateNoticeVisitCount();
      },
      (error) => { console.log(error); }
    );
  }

  getNextNotice() {
    const options = {
      params: {
        subject: this.nextNotice.subject,
        timekey: this.nextNotice.timekey,
      }
    };
    let url;
    url = '/noticeboard/getNoticeContent';

    this.http.get(url, options).subscribe(
      (res) => {
        this.noticeList = <NoticeBoard[]>res;
        this.selectNotice = this.noticeList[1];
        this.lastNotice = this.noticeList[0];
        this.nextNotice = this.noticeList[2];
        this.initialButton();
        $(".noticecontent").empty();
        $(".noticecontent").append(this.selectNotice.messagedetail);
        this.updateNoticeVisitCount();
      },
      (error) => { console.log(error); }
    );
  }

  initialButton() {
    debugger;
    if (this.lastNotice.timekey == '没有了') {
      this.disable_Last = true;
    } else {
      this.disable_Last = false;
    }

    if (this.nextNotice.timekey == '没有了') {
      this.disable_Next = true;
    } else {
      this.disable_Next = false;
    }

  }
}
