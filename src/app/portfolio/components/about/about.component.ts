import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  downloadCV() {
    window.open('https://drive.google.com/file/d/193Gu5C1oi7-8uzYAdLQIUda3q8G20qAd/view?usp=sharing', '_blank');
  }

}
