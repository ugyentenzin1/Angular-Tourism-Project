import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  backgroundImage = "https://www.bhutanacorn.com/wp-content/uploads/2020/08/Paro-Taktsang-1-1920x610-1.jpg";

  constructor() { }

  ngOnInit(): void {
  }
}
