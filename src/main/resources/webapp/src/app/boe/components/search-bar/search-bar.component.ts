import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() conditions: any[];

  private calendarLang: any;

  constructor() { }

  ngOnInit() {
    // this.calendarLang = {
    //   firstDayOfWeek: 0,
    //   dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    //   dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    //   dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    //   monthNames: ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"],
    //   monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    //   today: 'Today', 
    //   clear: 'Clear'
    // };
    this.calendarLang = {
      firstDayOfWeek: 0,
      dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
      monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      today: '今日', 
      clear: '清除'
    };
  }

  conditionChanged(newcondition: any) {
    // console.log("searchbar changed");
    this.conditions = newcondition;
  }

}
