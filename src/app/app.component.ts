import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './core/services/login.service';
import { CartService } from './core/services/cart.service';
import { CartItem } from './core/models/cart-item.model';

/**
 * Every Angular application has at least one component, 
 * the root component that connects a component hierarchy with the page 
 * document object model (DOM). Each component defines a class that contains application data and logic,
 *  and is associated with an HTML template that defines a view to be displayed in a target environment.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devshop-front-angular';
  constructor(private cartService: CartService){
    const cartLocalStorage = localStorage.getItem('userCart') !== null ? localStorage.getItem('userCart') : '';
    if(cartLocalStorage !== '' || localStorage !== null){
      const cartItemCollection: CartItem[] = [...JSON.parse(cartLocalStorage || '[]')]
      this.cartService.$cart.next(cartItemCollection)
      this.cartService.calcTotalPrice()
    }
      
    
  }
}
