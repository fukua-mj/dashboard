import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-bpcstuse',
  templateUrl: './bpcstuse.component.html',
  styleUrls: ['./bpcstuse.component.css']
})
export class BpcstuseComponent implements OnInit {

  deviceType = localStorage.getItem('deviceType');

  currentUserName = localStorage.getItem('currentUserName');

  @ViewChild("Child_CommonBP")
  Child_CommonBP: CommonComponent

  Params: any

  MenuItems: String
  constructor() { }

  ngOnInit() {
    this.Params = {
      FactoryName: "BP",
      WIP: "BP WIP",
      BANK: "BP Bank",
      DUMMY: "-"
    }
    this.MenuItems = "BPCST Status"




  }

}
