import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook, faInstagram, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faUser, faCartShopping, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/core/services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public faFacebook = faFacebook;
  public faInstagram = faInstagram;
  public faTwitter = faTwitter;
  public faMagnifyingGlass = faMagnifyingGlass;
  public faUser = faUser;
  public faCartShopping = faCartShopping;
  public faRightFromBracket = faRightFromBracket;







  constructor(private route: Router, public loginService: LoginService) { }

  ngOnInit(): void {
  }
  goToCart() {
    this.route.navigate(['cart'])
  }
  goToLogin() {
    this.route.navigate(['login'])
   
  }
  navigateTo(path: string) {
    this.route.navigate([path])
  }
  logOut() {
    this.loginService.logout()
    this.route.navigate([''])
  }
}
