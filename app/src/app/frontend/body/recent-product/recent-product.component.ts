import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-recent-product',
  templateUrl: './recent-product.component.html',
  styleUrls: ['./recent-product.component.scss']
})
export class RecentProductComponent implements OnInit {
  products:any
  cart:any;
  imgPath: string = environment.image_path;
  constructor(private router: Router){

  }
  ngOnInit(): void {
    this.getRecent()
  }
  getRecent(){

  }

  add2cart(qty:any,product:any){

  }
  buynow(){
    this.router.navigate(["cart"]);
  }
  recentClick(slug:any){

  }

}
