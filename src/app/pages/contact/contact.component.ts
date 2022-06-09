import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { ContactDto } from '../../core/models/contact-dto.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  

  constructor(private loginService: LoginService, private router: Router) { }


  ngOnInit(): void {
  }

  contactUser(contactData: ContactDto): void {
    this.loginService.contactUser(contactData).subscribe((res:any) => {
      this.router.navigate([''])
    })
  }
}
