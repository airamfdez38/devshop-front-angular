import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faUser, faCartShopping,  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public faHouse = faHouse;
  public faUser = faUser;
  public faCartShopping = faCartShopping;
  public faFacebook = faFacebook;
  public faInstagram = faInstagram;
  public faTwitter = faTwitter;


  constructor(private route: Router) { }


  ngOnInit(): void {
  }
  navigateTo(path: string) {
    this.route.navigate([path])
  }
  
}
