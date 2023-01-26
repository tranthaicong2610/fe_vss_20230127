import { Component, OnInit } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit  {
  slideIndex = 0;
  images:any=[];
  imgPath: string = environment.image_path;
  constructor() {

  }
  ngOnInit(): void {
    //this.getBanner();
  }
  showSlides(){

  }
  plusSlides(n:any){

  }
  showSlides2(){

  }
}
