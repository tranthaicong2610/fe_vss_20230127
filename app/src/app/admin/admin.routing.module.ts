import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './ad/admins/admins.component';
import { AdminEditComponent } from './ad/admin-edit/admin-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';
import { UsersComponent } from './users/users/users.component';
import { BannersComponent } from './banners/banners/banners.component';
import { BannersEditComponent } from './banners/banners-edit/banners-edit.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { CategoriesEditComponent } from './categories/categories-edit/categories-edit.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { OrderComponent } from './order/order/order.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // redirect to

  { path: 'dashboard', component: DashboardComponent, },
  { path: 'uploads', component: UploadComponent },

  { path: 'admins', component: AdminsComponent, },
  { path: 'admin-edit', component: AdminEditComponent, },
  { path: 'admin-adedit/:id', component: AdminEditComponent, },

  { path: 'banners', component: BannersComponent, },
  { path: 'banner-adedit', component: BannersEditComponent, }, //--case new
  { path: 'banner-adedit/:id', component: BannersEditComponent, },

  { path: 'categories', component: CategoriesComponent, },
  { path: 'category-adedit', component: CategoriesEditComponent, },
  { path: 'category-adedit/:id', component: CategoriesEditComponent, },

  { path: 'products', component: ProductsComponent, },
  { path: 'product-adedit', component: ProductEditComponent, },
  { path: 'product-adedit/:id', component: ProductEditComponent, },

  { path: 'users', component: UsersComponent, },
  { path: 'user-adedit', component: UserEditComponent, },
  { path: 'user-adedit/:id', component: UserEditComponent, },

  { path: 'orders', component: OrderComponent, },
  { path: 'order-adedit', component: OrderEditComponent, },
  { path: 'order-adedit/:id', component: OrderEditComponent, },

  { path: 'cart', component: CartComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AdminRoutingModule { }
