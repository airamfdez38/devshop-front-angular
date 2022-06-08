import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginDto } from '../models/login-dto.model';
import { environment } from '../../../environments/environment.prod';
import { UserCredentials } from '../models/user-credentials.model';
import { format, getUnixTime, isAfter } from 'date-fns';
import { RegisterDto } from '../models/register-dto.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.apiUrl;

  public $isLogged: BehaviorSubject<UserCredentials | undefined> = new BehaviorSubject<UserCredentials | undefined>(undefined)

  constructor(private http: HttpClient, private route: Router) { }


  /**
   *@description
   * This method make the request to api with user credentials
   * @param {LoginDto} loginDto
   * @return {*}  {Observable<any>}
   * @memberof LoginService
   */
  loginUser(loginDto: LoginDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/authentication/login`, loginDto)
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
    userCred.name = payload.name;
    userCred.surname = payload.surname
    userCred.phone = payload.phone;
    userCred.email = payload.email;
    userCred.dni = payload.dni;
    userCred.image = payload.image;
    userCred.uuid = payload.uuid;
    userCred.expiration = payload.expiration;
    this.$isLogged.next(userCred);
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
    return this.http.post<RegisterDto>(`${this.apiUrl}/users`, registerDto)
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.$isLogged.next(undefined)
    this.route.navigate(['login'])
  }
}
