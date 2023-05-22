import { Component } from '@angular/core';
import {routingAnimation} from "./Interfaces/app.animation";
import {filter} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routingAnimation]
})
export class AppComponent {

  constructor(private router: Router) {
  }
  title = 'e-commerce';
 backgroundImageFooter = '/assets/paro-tak.jpeg'

  ngOnInit(){
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        window.scrollTo({
          top: 200,
          behavior: 'smooth',
        });
      });
  }
}

