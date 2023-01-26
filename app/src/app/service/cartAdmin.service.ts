import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Product} from "../models/product.model";


@Injectable({
  providedIn: 'root'
})
export class CartAdminService {

  constructor(private http: HttpClient) { }

  products: Array<Product> =[];

  carts: any =
    {
      items: [],
      subTotal: 0,
      totalQuantity: 0
    }

  getAllProducts() {
    return of(this.products);
  }

  addToCart(payload: any) {
    let isFind = false;
    for (let item of this.carts.items) {
      if (item._id == payload.productId) {
        item.quantity += payload.quantity;
        item.total = item.quantity * item.price;
        this.carts.totalQuantity += payload.quantity;
        isFind = true;
      }
    }

    if (!isFind) {
      const product = this.products.find(i => i.id == payload.productId);
      const totalProduct = product?.price;
      const item = {
        ...product,
        quantity: payload.quantity,
        total: totalProduct != undefined ? totalProduct * payload.quantity : undefined,
      }
      this.carts.items.push(item);
      this.carts.totalQuantity += payload.quantity;
    }
    return of({data: payload});
  }

  getCartItems() {
    this.carts.subTotal = this.carts.items.reduce((partialSum: any, a: any) => partialSum + a.total, 0);
    return of(this.carts);
  }

  increaseQty(payload: any) {
    for (let item of this.carts.items) {
      if (item._id == payload.productId) {
        item.quantity += payload.quantity;
        item.total = item.quantity * item.price;
        this.carts.totalQuantity += payload.quantity;
      }
    }
    return of({data: payload});
  }

  emptyCart() {
    this.carts.items = [];
    this.carts.totalQuantity = 0;
    this.carts.subTotal = 0;
    return of({message: "Thành công"});
  }

  deleteCart(payload: any) {
    for (let item of this.carts.items) {
      if (item._id == payload.productId) {
        if (item.quantity >= payload.quantity) {
          item.quantity -= payload.quantity;
          item.total = item.quantity * item.price;
          this.carts.totalQuantity -= payload.quantity;
        } else {
          this.carts.totalQuantity -= item.quantity;
          item.quantity -= payload.quantity;
        }
      }
    }
    this.carts.items = this.carts.items.filter((item: any) => item.quantity > 0);
    return of({data: payload});
  }

  getQuantity(id: any) {
    let quantity = 1;
    return of({data: quantity});
  }

  getProduct(id: any) {
    debugger;
    const product = this.products.find(i => i.id === id);
    return of({data: product});
  }
}
