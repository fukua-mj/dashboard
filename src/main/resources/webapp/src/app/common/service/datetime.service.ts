import { Injectable } from '@angular/core';

@Injectable()
export class DatetimeService {

  constructor() { }

  /**
   * 今天到明天
   */
  getOperatorStartEndTime() {
    const startTime = new Date();
    let startTimeStr = "";
    startTimeStr += startTime.getFullYear().toString() + "-";
    startTimeStr += startTime.getMonth() + 1 < 10 ? "0" + (startTime.getMonth() + 1).toString() + "-" : (startTime.getMonth() + 1).toString() + "-";
    startTimeStr += startTime.getDate() < 10 ? "0" + startTime.getDate().toString() + "-" : startTime.getDate().toString();
    startTimeStr += " 08:00";
    const sarr1 = startTimeStr.split(" ");
    const sDate = sarr1[0].split("-");
    const sTime = sarr1[1].split(":");
    const startTime_ = new Date(Number(sDate[0]), Number(sDate[1]) - 1, Number(sDate[2]), Number(sTime[0]), Number(sTime[1]), Number("00"));

    let endTime = new Date();
    endTime.setTime(endTime.getTime() + 24 * 3600 * 1000);
    let endTimeStr = "";
    endTimeStr += endTime.getFullYear().toString() + "-";
    endTimeStr += endTime.getMonth() + 1 < 10 ? "0" + (endTime.getMonth() + 1).toString() + "-" : (endTime.getMonth() + 1).toString() + "-";
    endTimeStr += endTime.getDate() < 10 ? "0" + endTime.getDate().toString() + "-" : endTime.getDate().toString();
    endTimeStr += " 08:00";
    const earr1 = endTimeStr.split(" ");
    const eDate = earr1[0].split("-");
    const eTime = earr1[1].split(":");
    const endTime_ = new Date(Number(eDate[0]), Number(eDate[1]) - 1, Number(eDate[2]), Number(eTime[0]), Number(eTime[1]), Number("00"));

    const resultDate: Date[] = [startTime_, endTime_];
    return resultDate;
  }

  /**
   * 
   */
  getOperatorStartEndTimeToday() {
    const startTime = new Date();
    let startTimeStr = "";
    startTimeStr += startTime.getFullYear().toString() + "-";
    startTimeStr += startTime.getMonth() + 1 < 10 ? "0" + (startTime.getMonth() + 1).toString() + "-" : (startTime.getMonth() + 1).toString() + "-";
    startTimeStr += startTime.getDate() < 10 ? "0" + startTime.getDate().toString() + "-" : startTime.getDate().toString();
    startTimeStr += " 08:00";
    const sarr1 = startTimeStr.split(" ");
    const sDate = sarr1[0].split("-");
    const sTime = sarr1[1].split(":");
    const startTime_ = new Date(Number(sDate[0]), Number(sDate[1]) - 1, Number(sDate[2]), Number(sTime[0]), Number(sTime[1]), Number("00"));

    const endTime = new Date();
    let endTimeStr = "";
    endTimeStr += endTime.getFullYear().toString() + "-";
    endTimeStr += endTime.getMonth() + 1 < 10 ? "0" + (endTime.getMonth() + 1).toString() + "-" : (endTime.getMonth() + 1).toString() + "-";
    endTimeStr += endTime.getDate() < 10 ? "0" + endTime.getDate().toString() + "-" : endTime.getDate().toString();
    endTimeStr += " 20:00";
    const earr1 = endTimeStr.split(" ");
    const eDate = earr1[0].split("-");
    const eTime = earr1[1].split(":");
    const endTime_ = new Date(Number(eDate[0]), Number(eDate[1]) - 1, Number(eDate[2]), Number(eTime[0]), Number(eTime[1]), Number("00"));

    const resultDate: Date[] = [startTime_, endTime_];
    return resultDate;
  }

  /**
   * date 2 string
   * format('yyyy:mm:dd HH:MM:ss')
   * @param date 
   */
  date2string(date: Date) {
    let dateStr = "";
    dateStr += date.getFullYear().toString() + "-";
    dateStr += date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1).toString() + "-" : (date.getMonth() + 1).toString() + "-";
    dateStr += date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
    dateStr += (date.getHours() < 10) ? (" 0" + date.getHours()) : (" " + date.getHours());
    dateStr += (date.getMinutes() < 10) ? (":0" + date.getMinutes()) : (":" + date.getMinutes());
    dateStr += (date.getSeconds() < 10) ? (":0" + date.getSeconds()) : (":" + date.getSeconds());
    dateStr += ":" + date.getMilliseconds();
    return dateStr;
  }

  getThisMonth(){
    const date = new Date();
    let dateStr = '';
    dateStr += date.getFullYear().toString();
    dateStr += date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
    return dateStr;
  }

  regularDayDate(day:string){
    const date = new Date();
    let dateStr = '';
    dateStr += date.getFullYear().toString();
    dateStr += day.substring(0,2);
    dateStr += day.substring(3);
    return dateStr;
  }

  stringToDate(dateStr: string) {
    
  }
}
