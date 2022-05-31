import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginDto } from '../models/login-dto.model';
import { environment } from '../../../environments/environment.prod';
import { UserCredentials } from '../models/user-credentials.model';
import { format, getUnixTime, isAfter } from 'date-fns';
import { RegisterDto } from '../models/register-dto.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.apiUrl;

  public $isLogged: BehaviorSubject<UserCredentials | undefined> = new BehaviorSubject<UserCredentials | undefined>(undefined)

  constructor(private http: HttpClient) { }

  loginUser(loginDto: LoginDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/authentication/login`, loginDto)
  }

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

  checkExpiration(userCredentials: UserCredentials | undefined): boolean {
    if(userCredentials){
      const now = new Date();
      const userLoggedTime =parseInt(userCredentials.expiration,10);
      return isAfter(now, new Date(userLoggedTime))
    }
     return true;
  }

  registerUser(registerDto: RegisterDto): Observable<RegisterDto> {
    return this.http.post<RegisterDto>(`${this.apiUrl}/users`, registerDto)
  }
}
