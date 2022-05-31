import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from 'src/app/core/models/login-dto.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() loginCredentialsEmitter: EventEmitter<LoginDto> = new EventEmitter<LoginDto>();

  loginForm: FormGroup

  isPasswordVisible: boolean;

  constructor( private fb: FormBuilder) {
    this.isPasswordVisible = false;
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    this.initForm();
  }


  public tooglePassword(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  public submit(): void {
    if(this.loginForm.valid){
      const loginDto = this.loginDtoBuilder(this.email?.value, this.password?.value);
      this.loginCredentialsEmitter.emit(loginDto)
    }
  }

  private initForm():void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  private loginDtoBuilder(email: string, password: string): LoginDto {
    const loginDto: LoginDto = new LoginDto();
    loginDto.email = email;
    loginDto.password = password;
    return loginDto; 
  }
  

}
