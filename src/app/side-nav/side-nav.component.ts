import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  headerActive = 'about';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((ev)=>{
      if(ev instanceof NavigationEnd) {
        this.headerActive = ev.url;
      }
    })
  }

}
