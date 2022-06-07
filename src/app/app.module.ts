import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './components/shared/header/header.module';
import { FooterModule } from './components/shared/footer/footer.module';
import { NavbarModule } from './components/shared/navbar/navbar.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from './components/shared/carousel/carousel.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    HeaderModule, 
    FooterModule, 
    NavbarModule, 
    FontAwesomeModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
