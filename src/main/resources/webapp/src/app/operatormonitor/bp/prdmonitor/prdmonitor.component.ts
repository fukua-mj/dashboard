import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prdmonitor',
  templateUrl: './prdmonitor.component.html',
  styleUrls: ['./prdmonitor.component.css']
})
export class PrdmonitorComponent implements OnInit {

  shopName: string = 'BP';

  deviceType: string = localStorage.getItem('deviceType');

  constructor() { }

  ngOnInit() {
  }

}
