import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartItem } from 'src/app/core/models/cart-item.model';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  public product: Product;
  public qty: number = 1;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProductByUrlParam()
  }


  /**
   * @description
   * This method get the product id from url and call the methos to make request by id
   * @memberof ProductViewComponent
   */
  getProductByUrlParam(): void {
    this.route.params.subscribe((param: Params) => {
      const productId: string = param['id'];
      this.findProductById(productId);
    })
  }


  /**
   * @description
   * This method make the request to get product data
   * @param {string} id
   * @memberof ProductViewComponent
   */
  findProductById(id: string): void {
    this.productService.findProductById(id).subscribe((res: Product) => {
      this.product = res
    })
  }

  addToCart(product: Product): void {
    const newCartItem: CartItem = new CartItem()
    newCartItem.product = product;
    newCartItem.qty = this.qty;
    this.cartService.addToCart(newCartItem)
  }

}
