import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TshirtsRoutingModule } from './tshirts-routing.module';
import { TshirtsComponent } from './tshirts.component';
import { ProductCardModule } from 'src/app/components/shared/product-card/product-card.module';


@NgModule({
  declarations: [
    TshirtsComponent
  ],
  imports: [
    CommonModule,
    TshirtsRoutingModule,
    ProductCardModule
  ]
})
export class TshirtsModule { }
