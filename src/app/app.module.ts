import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './components/shared/header/header.module';
import { FooterModule } from './components/shared/footer/footer.module';
import { NavbarModule } from './components/shared/navbar/navbar.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule, AppRoutingModule, HeaderModule, FooterModule, NavbarModule, FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
