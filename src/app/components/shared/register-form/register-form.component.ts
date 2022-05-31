import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginDto } from 'src/app/core/models/login-dto.model';
import { RegisterDto } from 'src/app/core/models/register-dto.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Output() registerCredentialsEmitter: EventEmitter<RegisterDto> = new EventEmitter<RegisterDto>();

  registerForm: FormGroup

  isPasswordVisible: boolean;

  constructor( private fb: FormBuilder) {
    this.isPasswordVisible = false;
  }

  get name() {
    return this.registerForm.get('name');
  }

  get surname() {
    return this.registerForm.get('surname');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  ngOnInit(): void {
    this.initForm();
  }


  public tooglePassword(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  public submit(): void {
    if(this.registerForm.valid){

      const registerDto = this.registerDtoBuilder(
        this.name?.value, 
        this.surname?.value,
        this.email?.value,
        this.password?.value);

      this.registerCredentialsEmitter.emit(registerDto)
    }
  }

  private initForm():void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  private registerDtoBuilder(name: string, surname: string, email: string, password: string): RegisterDto {
    const registerDto: RegisterDto = new RegisterDto();
    registerDto.name = name;
    registerDto.surname = surname;
    registerDto.email = email;
    registerDto.password = password;
    return registerDto; 
  }
  

}
