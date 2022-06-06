import { Component, OnInit } from '@angular/core';
import {faFacebook, faInstagram, faTwitter,} from '@fortawesome/free-brands-svg-icons';
import {faMagnifyingGlass, faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons';
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






  constructor() { }

  ngOnInit(): void {
  }

}
