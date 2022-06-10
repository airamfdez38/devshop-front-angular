import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MugsRoutingModule } from './mugs-routing.module';
import { MugsComponent } from './mugs.component';
import { ProductCardModule } from 'src/app/components/shared/product-card/product-card.module';


@NgModule({
  declarations: [
    MugsComponent
  ],
  imports: [
    CommonModule,
    MugsRoutingModule,
    ProductCardModule
  ]
})
export class MugsModule { }
