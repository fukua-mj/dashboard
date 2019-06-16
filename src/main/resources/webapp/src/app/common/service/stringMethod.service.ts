import { Injectable } from '@angular/core';

@Injectable()
export class StringMethodService {

  constructor() { }

  removeDuplicatiuon(arr: string[]): string[] {
    let temp: string[];
    for (let i = 0; i < arr.length; i++) {
      if (temp.indexOf(arr[i]) == -1) {
        temp.push(arr[i]);
      }
    }
    return temp;
  }

  removeDuplicationByLimit(arr: string[], limit: Number) {
    let temp: Array<string> = new Array<string>();
    let isExist: Boolean = false;

    if (limit >= arr.length - 1) {
      limit = arr.length - 1
    }

    for (let i = 0; i < limit; i++) {
      if (arr[arr.length - 1] != arr[i]) {
        temp.push(arr[i]);
      } else {
        isExist = true
      }
    }
    temp.unshift(arr[arr.length - 1]);

    return temp;
  }

  viewHistoryMethod(oldViewHistory: string, newView: string): string {
    let newViewHistory = '';
    if (oldViewHistory == '' || oldViewHistory == null) {
      oldViewHistory = newView;
    } else {
      oldViewHistory += (";" + newView);
    }
    const arrViewHistory = this.removeDuplicationByLimit(oldViewHistory.split(';'), 5);
    for (let i = 0; i < arrViewHistory.length; i++) {
      newViewHistory += arrViewHistory[i];
      if (i != arrViewHistory.length - 1) {
        newViewHistory += ";";
      }
    }
    return newViewHistory;
  }

}
