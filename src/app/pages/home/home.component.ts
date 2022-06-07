import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imgCollection: string[] = [];

  constructor() { 
    const img1 = 'https://concepto.de/wp-content/uploads/2015/03/paisaje-800x409.jpg';
    const img2 = 'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg';
    const img3 = 'https://librosostenibilidad.files.wordpress.com/2017/03/paisaje-cultura-sostenibilidad.jpg';
    this.imgCollection.push(img1,img2,img3)
    
  }

  ngOnInit(): void {
  }

}
