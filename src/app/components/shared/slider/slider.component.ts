import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() imgCollection: string[]
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 5,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  constructor() { }

  ngOnInit(): void {
  }

}
