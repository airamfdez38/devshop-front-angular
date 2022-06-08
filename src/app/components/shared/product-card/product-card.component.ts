import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product
  @Output() viewProductEmitter: EventEmitter<Product> = new EventEmitter<Product>()
  @Output() addCartProductEmitter: EventEmitter<Product> = new EventEmitter<Product>()

  public showMyMessage = false


  /**
   * @description
   * This method emit the selected product to add it to cart
   * @param {Product} product
   * @memberof ProductCardComponent
   */
  addToCart(product: Product) {
    this.addCartProductEmitter.emit(product)
  }

  /**
  * @description
  * This method emit the selected product to navigate to product item page
  * @param {Product} product
  * @memberof ProductCardComponent
  */
  viewProduct(product: Product) {
    this.viewProductEmitter.emit(product)
  }
  /**
  * @description
  * This method emit a message when a product is added to cart
  * @memberof ProductCardComponent
  */
  showMessageSoon() {
    setInterval(() => {
      this.showMyMessage = false
    }, 1000)
   
  }
   /**
  * @description
  * This method hide the message after a interval of time
  * @memberof ProductCardComponent
  */
  hideMessage(){
    this.showMessageSoon();
    setTimeout(() => {this.showMyMessage = true}, 200)
    
  }
  
  
  
}
