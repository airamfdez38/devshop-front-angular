import { Component, OnInit } from '@angular/core';
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


  constructor() { }

  ngOnInit(): void {
  }

}
