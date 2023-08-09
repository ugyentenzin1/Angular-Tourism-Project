import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hasScrolled = false;
  sideNav:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("document:scroll")
  navBgChange(){
    document.body.scrollTop > 0 || document.documentElement.scrollTop > 200 ? this.hasScrolled = true : this.hasScrolled = false;
  }

  toogleSideNav() {
    this.sideNav = !this.sideNav;
  }
}
