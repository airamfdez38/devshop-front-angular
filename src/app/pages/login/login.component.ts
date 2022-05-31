import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../../core/models/login-dto.model';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  public submittedLogin(loginDto: LoginDto): void {
      this.loginService.loginUser(loginDto).subscribe((res: any) => {
        if(res){
          this.loginService.userCredentialsBuilder(res)
        }
      })
  }

}
