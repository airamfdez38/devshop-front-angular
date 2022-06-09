import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactDto } from '../../../core/models/contact-dto.model'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @Output() contactCredentialsEmitter: EventEmitter<ContactDto> = new EventEmitter<ContactDto>();

  contactForm = new  FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    msg: new FormControl('', Validators.required),

  })

  isPasswordVisible: boolean;

  constructor(private route: Router, private fb: FormBuilder) {
    this.isPasswordVisible = false;
  }

  get name() {
    return this.contactForm.get('name');
  }

  get surname() {
    return this.contactForm.get('surname');
  }
  
  get email() {
    return this.contactForm.get('email');
  }

  get msg() {
    return this.contactForm.get('msg');
  }

  

  ngOnInit(): void {
    this.initForm();
  }
  navigateTo(path: string) {
    this.route.navigate([path])
  }



  public submit(): void {
    if(this.contactForm.valid){

      const contactDto = this.contactDtoBuilder(
        this.name?.value, 
        this.surname?.value,
        this.email?.value,
        this.msg?.value);

      this.contactCredentialsEmitter.emit(contactDto)
    }
  }

  private initForm():void {
    this.contactForm = this.fb.group({
      name: ['', Validators.pattern('^[a-zA-Z \-\']+')],
      surname: ['', Validators.pattern('^[a-zA-Z \-\']+')],
      email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      msg: ['', Validators.pattern('^[a-zA-Z \-\']+')],
    })
  }

  private contactDtoBuilder(name: string, surname: string, email: string, msg: string): ContactDto {
    const contactDto: ContactDto = new ContactDto();
    contactDto.name = name;
    contactDto.surname = surname;
    contactDto.email = email;
    contactDto.msg = msg;
    return contactDto; 
  }
  

}
