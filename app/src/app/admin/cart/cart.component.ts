import {Component, OnInit} from '@angular/core';
import { CartAdminService } from 'src/app/service/cartAdmin.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  ngOnInit(): void {
    this.getCart();
  }
  constructor(private http: CartAdminService) { }



  carts: any;
  getCart(): void {
    this.http.getCartItems().subscribe((data: any) => {
      this.carts = data;
      console.log(this.carts);
    });
  }
  increamentQTY(id: any, quantity: any): void {
    const payload = {
      productId: id,
      quantity,
    };
    this.http.increaseQty(payload).subscribe(() => {
      this.getCart();
    });
  }
  emptyCart(): void {
    this.http.emptyCart().subscribe(() => {
      this.getCart();

    });
  }
  deleteCart(id: any, quantity: any){
    this.http.deleteCart({productId: id,quantity,}).subscribe(() => {
      this.getCart();

    });
  }
}
