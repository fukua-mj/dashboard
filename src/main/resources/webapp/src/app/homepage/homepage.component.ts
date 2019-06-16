import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {

  images: any[];

  viewHistory: any[];

  releaseDate: Date[];

  display_overlay: boolean = false;

  display_releaseHistory:boolean = false;

  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({ source: 'assets/demo/images/homepage/10.jpg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: 'assets/demo/images/homepage/1.png', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: 'assets/demo/images/homepage/2.jpg', alt: 'Description for Image 2', title: 'Title 3' });
    this.images.push({ source: 'assets/demo/images/homepage/3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
    this.images.push({ source: 'assets/demo/images/homepage/4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
    this.images.push({ source: 'assets/demo/images/homepage/5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
    this.images.push({ source: 'assets/demo/images/homepage/6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
    this.images.push({ source: 'assets/demo/images/homepage/7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
    this.images.push({ source: 'assets/demo/images/homepage/8.png', alt: 'Description for Image 8', title: 'Title 8' });
/*     this.images.push({ source: 'assets/demo/images/nature/nature9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
    this.images.push({ source: 'assets/demo/images/nature/nature10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
    this.images.push({ source: 'assets/demo/images/nature/nature11.jpg', alt: 'Description for Image 11', title: 'Title 11' });
    this.images.push({ source: 'assets/demo/images/nature/nature12.jpg', alt: 'Description for Image 12', title: 'Title 12' });
 */
    this.viewHistory = localStorage.getItem('viewHistory').split(';');

    this.initialReleaseDate();

  }

  onDateSelect(event) {
    const selectDate = <Date>event;
    console.log(selectDate.toLocaleTimeString());
  }

  initialReleaseDate() {
    this.releaseDate = [
      new Date("2019-1-1"),
      new Date("2019-1-3")
    ];
  }

  showDialog() {
    this.display_releaseHistory = true;
  }

}
