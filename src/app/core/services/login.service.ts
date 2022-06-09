import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginDto } from '../models/login-dto.model';
import { environment } from '../../../environments/environment.prod';
import { UserCredentials } from '../models/user-credentials.model';
import { format, getUnixTime, isAfter } from 'date-fns';
import { RegisterDto } from '../models/register-dto.model';
import { Router } from '@angular/router';
import { ContactDto } from '../models/contact-dto.model';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.apiUrl;

  public $isLogged: BehaviorSubject<UserCredentials | undefined> = new BehaviorSubject<UserCredentials | undefined>(undefined)

  constructor(private cartService: CartService, private http: HttpClient, private route: Router) { }


  /**
   *@description
   * This method make the request to api with user credentials
   * @param {LoginDto} loginDto
   * @return {*}  {Observable<any>}
   * @memberof LoginService
   */
  loginUser(loginDto: LoginDto): Observable<any> {
    return this.http.post(`${this.apiUrl}authentication/login`, loginDto)
  }


  /**
   * @description
   * This method decode JWT accestoken, get the user data and set the credentials into $isLogged observable
   * @param {string} token
   * @memberof LoginService
   */
  userCredentialsBuilder(token: string): void {
    const payloadBase64 = token.split('.')[1];
    const payload: UserCredentials = JSON.parse(atob(payloadBase64));
    const userCred: UserCredentials = new UserCredentials();
    userCred.user ={
      name: payload.user.name,
      surname: payload.user.surname,
      phone: payload.user.phone,
      email: payload.user.email,
      dni: payload.user.dni,
      image: payload.user.image,
      uuid: payload.user.uuid,
    } 
    userCred.expiration = payload.expiration;
    this.$isLogged.next(userCred);
    console.log(this.$isLogged.value)
    localStorage.setItem('accessToken', token)
  }


  /**
   * @description
   * this method check the if access token is valid
   * @param {(UserCredentials | undefined)} userCredentials
   * @return {*}  {boolean}
   * @memberof LoginService
   */
  checkExpiration(userCredentials: UserCredentials | undefined): boolean {
    if (userCredentials) {
      const now = new Date();
      const userLoggedTime = parseInt(userCredentials.expiration, 10);
      return isAfter(now, new Date(userLoggedTime))
    }
    return true;
  }


  /**
   * @description
   * This method make the request to register a new user
   * @param {RegisterDto} registerDto
   * @return {*}  {Observable<RegisterDto>}
   * @memberof LoginService
   */
  registerUser(registerDto: RegisterDto): Observable<RegisterDto> {
    return this.http.post<RegisterDto>(`${this.apiUrl}users`, registerDto)
  }

   /**
   * @description
   * This method make the request to register a new user
   * @param {ContactDto} contactDto
   * @return {*}  {Observable<RegisterDto>}
   * @memberof LoginService
   */
    contactUser(contactDto: ContactDto): Observable<ContactDto> {
      return this.http.post<ContactDto>(`${this.apiUrl}users`, contactDto)
    }
  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userCart");
    this.$isLogged.next(undefined)
    this.cartService.$cart.next([])
    this.cartService.$cartTotal.next(0)
    this.route.navigate([''])
  }
}
