import { Component, OnInit } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  cart:any;
  products:any;
  product:any;
  slug:any;
  qtyDefault=1;
  pImageDefault:any;
  pImages=[];
  ImagesAll = [];
  imgPath: string = environment.image_path;
  constructor(){

  }
  ngOnInit(): void {

  }
  minus(){

  }
  plus(){

  }

  add2cart(qtyDefault:any, product:any){

  }

  buynow(){

  }


}
