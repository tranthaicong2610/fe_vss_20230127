import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material-module';
import { AdminRoutingModule } from './admin.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannersComponent } from './banners/banners/banners.component';
import { BannersEditComponent } from './banners/banners-edit/banners-edit.component';
import { TopLeftComponent } from './top-left/top-left.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { CategoriesEditComponent } from './categories/categories-edit/categories-edit.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { UsersComponent } from './users/users/users.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { AdminsComponent } from './ad/admins/admins.component';
import { AdminEditComponent } from './ad/admin-edit/admin-edit.component';
import { OrderComponent } from './order/order/order.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { SalerRatioComponent } from './saler-ratio/saler-ratio.component';
import * as CanvasJSAngularChart from '../../assets/canvasjs/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BannersComponent,
    BannersEditComponent,
    ProductsComponent,
    ProductEditComponent,
    UsersComponent,
    UserEditComponent,
    AdminsComponent,
    AdminEditComponent,
    TopLeftComponent,
    CategoriesComponent,
    CategoriesEditComponent,
    OrderComponent,
    OrderEditComponent,
    SalerRatioComponent,
    CartComponent,
    CanvasJSChart
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
