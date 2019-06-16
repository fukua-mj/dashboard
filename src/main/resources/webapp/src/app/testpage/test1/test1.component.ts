import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { Car } from 'app/common/model/car';
import { CarService } from 'app/common/service/car.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  selectedValue;
  values: string[];
  items: MenuItem[];

  controlClose: boolean = true;

  display: boolean[];

  cars: Car[];


  constructor(private carService: CarService) {
    this.values = ['1', '2', '3', '4'];
  }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
    


    this.items = [
      { label: 'Stats', icon: 'fa fa-fw fa-bar-chart' },
      { label: 'Calendar', icon: 'fa fa-fw fa-calendar' },
      { label: 'Documentation', icon: 'fa fa-fw fa-book' },
      { label: 'Support', icon: 'fa fa-fw fa-support' },
      { label: 'Social', icon: 'fa fa-fw fa-twitter' }
    ];
    this.display = [true, true, true, true, true, true, true, true, false, false];
  }

  onReorder(event) {
    console.log(event);
  }

  leftClick() {
    let startIndex;
    let endIndex;
    for (let i = 0; i < this.display.length; i++) {
      if (this.display[i] == true) {
        startIndex = i;
        break;
      }
    }
    for (let i = startIndex; i < this.display.length; i++) {
      if (this.display[i] == false) {
        endIndex = i - 1;
        break;
      }
    }
    if (endIndex - startIndex + 1 > 6) {
      for (let i = 0; i < startIndex + 1; i++) {
        this.display[i] = false;
      }
      for (let i = startIndex + 1; i < endIndex + 2; i++) {
        this.display[i] = true;
      }
      for (let i = endIndex + 2; i < this.display.length; i++) {
        this.display[i] = false;
      }
    }

  }

  rightClick() {

    let startIndex;
    let endIndex;
    for (let i = 0; i < this.display.length; i++) {
      if (this.display[i] == true) {
        startIndex = i;
        break;
      }
    }
    for (let i = startIndex; i < this.display.length; i++) {
      if (this.display[i] == false) {
        endIndex = i - 1;
        break;
      }
    }
    if (endIndex == undefined || endIndex == null) {
      endIndex = this.display.length - 1;
    }

    let falseStart;
    if (startIndex - 1 < 0) {
      falseStart = 0;
    } else {
      falseStart = startIndex - 1;
    }
    if (endIndex - falseStart > 6) {
      for (let i = 0; i < falseStart; i++) {
        this.display[i] = false;
      }

      for (let i = falseStart; i < endIndex; i++) {
        this.display[i] = true;
      }
      for (let i = endIndex; i < this.display.length; i++) {
        this.display[i] = false;
      }
    }
  }

  testClick() {
    debugger;
    const el = document.getElementById('testTabView');
    console.log(el.style.width);
  }

}
