import { Component, OnInit } from '@angular/core';
import { RegisterDto } from '../../core/models/register-dto.model';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(registerData: RegisterDto): void {
    this.loginService.registerUser(registerData).subscribe((res:any) => {
      this.router.navigate([''])
    })
  }

}
