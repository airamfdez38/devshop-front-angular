import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/core/models/cart-item.model';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-mugs',
  templateUrl: './mugs.component.html',
  styleUrls: ['./mugs.component.scss']
})
export class MugsComponent implements OnInit {

  public productCollection: Product[] = [];
  public catName: string = 'Taza'

  constructor(private productService: ProductService, private router: Router, public cartService: CartService) { }

  ngOnInit(): void {
    this.findAllProductsByCategory(this.catName)
  }


  /**
   * @description
   * This method makes the request to get all available products
   * @memberof CatalogComponent
   */
  findAllProductsByCategory(cat: string): void {
    this.productService.findAllProductsByCategory(cat).subscribe((res: Product[]) => {
      this.productCollection = [...res]
    })
  }

  /**
   * @description 
   * This method navigate to selected product
   * @param {Product} product
   * @memberof CatalogComponent
   */
 
  gotoProduct(product: Product): void {
    this.router.navigate([`product/${product.uuid}`])
  }


  /**
   * @description
   *  This method add to cart a new product
   * @param {Product} product
   * @memberof CatalogComponent
   */
  addToCart(product: Product): void {
    const newCartItem: CartItem = new CartItem();
    newCartItem.product = product;
    newCartItem.qty = 1;
    this.cartService.addToCart(newCartItem)
  }

}
