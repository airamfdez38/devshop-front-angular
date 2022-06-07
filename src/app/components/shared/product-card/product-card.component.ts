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
}
