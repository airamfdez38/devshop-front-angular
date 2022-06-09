import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDto } from 'src/app/core/models/register-dto.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Output() registerCredentialsEmitter: EventEmitter<RegisterDto> = new EventEmitter<RegisterDto>();

  registerForm = new  FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),

  })

  isPasswordVisible: boolean;

  constructor(private route: Router, private fb: FormBuilder) {
    this.isPasswordVisible = false;
  }

  get name() {
    return this.registerForm.get('name');
  }

  get surname() {
    return this.registerForm.get('surname');
  }
  
  get phone() {
    return this.registerForm.get('phone');
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
  navigateTo(path: string) {
    this.route.navigate([path])
  }


  public tooglePassword(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  public submit(): void {
    if(this.registerForm.valid){

      const registerDto = this.registerDtoBuilder(
        this.name?.value, 
        this.surname?.value,
        this.phone?.value,
        this.email?.value,
        this.password?.value);

      this.registerCredentialsEmitter.emit(registerDto)
    }
  }

  private initForm():void {
    this.registerForm = this.fb.group({
      name: ['', Validators.pattern('^[a-zA-Z \-\']+')],
      surname: ['', Validators.pattern('^[a-zA-Z \-\']+')],
      phone: ['', Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      password: ['', Validators.pattern("/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/")]
    })
  }

  private registerDtoBuilder(name: string, surname: string, phone:string, email: string, password: string): RegisterDto {
    const registerDto: RegisterDto = new RegisterDto();
    registerDto.name = name;
    registerDto.surname = surname;
    registerDto.phone = phone;
    registerDto.email = email;
    registerDto.password = password;
    return registerDto; 
  }
  

}
