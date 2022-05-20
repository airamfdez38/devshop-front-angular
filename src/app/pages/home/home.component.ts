import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title: string;

  public strCollection = ['a', 'b', 'c'];

  public isVisible = true;

  constructor() { 
    this.title = 'DevShop';

  }

  ngOnInit(): void {
    
  }

  userClicked(str: string){
   this.isVisible = !this.isVisible;
  }

}
