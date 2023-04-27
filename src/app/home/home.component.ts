import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from "@angular/core";
import {SwiperOptions} from "swiper";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
  public swiperOptions: SwiperOptions = {
    // define your swiper options here
    loop:true,
    speed: 800,
    slidesPerView: 3,
    navigation: true,
    pagination: true,
    allowSlidePrev: true,
    allowTouchMove: true,
    touchEventsTarget:"container",
    spaceBetween: 20,
    followFinger: true,
    autoplay : true,
  };
}
