import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

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
  findAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}products`)
  }

  /**
   * @description
   * This method make the request to get one product by id
   * @return {*}  {Observable<Product[]>}
   * @memberof ProductService
   */
  findProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}products/${id}`)
  }

}
