import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eacmdlyield',
  templateUrl: './eacmdlyield.component.html',
  styleUrls: ['./eacmdlyield.component.css']
})
export class EacmdlyieldComponent implements OnInit {

  @Input() currentUserName;

  @Input() deviceType;

  @Input() shopName;

  constructor() { }

  ngOnInit() {
  }

}
