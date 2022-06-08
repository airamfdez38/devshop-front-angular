import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imgCollection: string[] = [];

  constructor() { 
    const img1 = 'https://itxitpro.com/front/img/web-development-services.jpg';
    const img2 = 'https://miro.medium.com/max/1400/0*Bz7Q4ik7cUerhvOD.jpg';
    const img3 = 'https://cdn6.f-cdn.com/files/download/82615852/web-dev-ty.jpg';
    this.imgCollection.push(img1,img2,img3)
    
  }

  ngOnInit(): void {
  }

}
