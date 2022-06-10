import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

/** Services or data or logic that isn't associated with a specific view,
 *  and that you want to share across components, you create a service class.
 *  A service class definition is immediately preceded by the @Injectable() decorator. 
 * The decorator provides the metadata that allows other providers to be injected as dependencies into your class. */

/** @Injectable is a decorator that marks a class as available to be provided and injected as a dependency */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  /**
   * @description
   * This method make the request to get all products
   * @return {*}  {Observable<Product[]>}
   * @memberof ProductService
   */
  /**@Observables provide support for passing messages between parts of your application */

  findAllProducts(): Observable<any> {

    return this.http.get<Product[]>(`${this.apiUrl}products`)
  }
  /**
   * @descriptionThis method makes the request to get products by its category
   * @returns 
   */
  findAllProductsByCategory(cat: string): Observable<any> {

    return this.http.get<Product[]>(`${this.apiUrl}products/category/${cat}`)
  }


  /**
   * @description
   * This method make the request to get one product by id
   * @return {*}  {Observable<Product[]>}
   * @memberof ProductService
   */
  findProductById(id: string): Observable<any> {

    return this.http.get<Product>(`${this.apiUrl}products/${id}`)
  }

}
