import { ProductsComponent } from './body/products/products.component';
import { MyAccountComponent } from './body/my-account/my-account.component';
import { LoginComponent } from './body/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { ContactComponent } from './body/contact/contact.component';
import { CartComponent } from './body/cart/cart.component';
import { CheckOutComponent } from './body/check-out/check-out.component';
import { ProductDetailComponent } from './body/product-detail/product-detail.component';
import { WishListComponent } from './body/wish-list/wish-list.component';
import { ReviewComponent } from './body/review/review.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'checkout', component: CheckOutComponent },
  { path: 'wishlist', component: WishListComponent },
  { path: 'product-detail/:slug', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contactus', component: ContactComponent },
  { path: 'review', component: ReviewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontEndRoutingModule {}
