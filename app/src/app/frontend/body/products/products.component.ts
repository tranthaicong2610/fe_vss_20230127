import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  cart:any;
  products:any;
  imgPath: string = environment.image_path;

  constructor(
    private router: Router
  ){

  }
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){

  }

  add2cart(qty:any,product:any){

  }

  buynow(){
    this.router.navigate(["cart"]);
  }
  recentClick(slug:any){

  }

}
