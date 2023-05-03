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
  backgroundImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9jWlFM8Kv3JiavpqL6tJ8qyoCcyVazRVfuA&usqp=CAU'
  constructor() { }

  icon = [
    {
    icon: 'fa-sharp fa-solid fa-person-hiking',
    name:'Hiking'
  },
    {
      icon: 'fa-solid fa-car',
      name:'By Car'
    },
    {
      icon: 'fa-regular fa-person-biking',
      name:'Bike Hike'
    },

  ]

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
    spaceBetween: 20,
    effect:"cube",
    cubeEffect:{
      shadow: true,
      shadowScale:0.94,
      slideShadows: true,
      shadowOffset: 16,
    }
  };

  url = ''

  redirect() {

  }
}
