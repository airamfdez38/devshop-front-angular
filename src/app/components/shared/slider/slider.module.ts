import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular'
import { SliderComponent } from './slider.component';


@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    SliderComponent
  ]
})
export class SliderModule { }
