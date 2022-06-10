import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './components/shared/header/header.module';
import { FooterModule } from './components/shared/footer/footer.module';
import { NavbarModule } from './components/shared/navbar/navbar.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**Every Angular application has a root module, conventionally named AppModule,
 * which provides the bootstrap mechanism that launches the application. 
 * An application typically contains many functional modules.
 * */
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
