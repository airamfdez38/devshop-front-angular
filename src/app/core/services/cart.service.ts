import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public $cart: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([])
  public $cartTotal: BehaviorSubject<number> = new BehaviorSubject<number>(0)


  /**
   * @description
   * This method add new item to cart observable
   * @param {CartItem} cartItem
   * @memberof CartService
   */
  public addToCart(cartItem: CartItem) {
    const cartItemCollection: CartItem[] = this.$cart.value;
    cartItemCollection.push(cartItem);
    const cartString: string = JSON.stringify(cartItemCollection);
    if(localStorage.getItem('userCart')){
      localStorage.removeItem('userCart')
    }
    localStorage.setItem('userCart', cartString)
    this.$cart.next(cartItemCollection)
    console.log(this.$cart.value);
    this.calcTotalPrice();

  }

  /**
 * @description
 * This method remove the item from cart observable
 * @param {CartItem} cartItem
 * @memberof CartService
 */
  public removeItem(cartItem: CartItem) {
    const cartItemCollection: CartItem[] = this.$cart.value;
    const newCartItemCollection = cartItemCollection.filter((item: CartItem) => item.product.uuid !== cartItem.product.uuid);
    const cartString: string = JSON.stringify(newCartItemCollection);
    if(localStorage.getItem('userCart')){
      localStorage.removeItem('userCart')
    }
    localStorage.setItem('userCart', cartString)
    this.$cart.next(newCartItemCollection)
    this.calcTotalPrice();
  }


  /**
   * @description
   * This method calc the total price from $cart to cartTotal observable
   * @return {*}  {number}
   * @memberof CartService
   */
  public calcTotalPrice() {
    let totalPrice = 0;
    this.$cart.value.forEach((cartItem: CartItem) => {
      totalPrice += cartItem.product.price * cartItem.qty;
    })
    this.$cartTotal.next(totalPrice);

  }
}
