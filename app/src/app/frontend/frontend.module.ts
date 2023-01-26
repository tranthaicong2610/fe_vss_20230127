import { NewsletterComponent } from './body/newsletter/newsletter.component';
import { FooterBottomComponent } from './bottom/footer-bottom/footer-bottom.component';
import { MainFooterComponent } from './bottom/main-footer/main-footer.component';
import { SidebarTagComponent } from '../frontend/body/sidebar-tag/sidebar-tag.component';
import { NewArrivalsComponent } from '../frontend/body/new-arrivals/new-arrivals.component';
import { MaterialModule } from './../shared/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontEndRoutingModule } from './frontend.routing.module';
import { BannerComponent } from './body/banner/banner.component';
import { BestsellingComponent } from './body/bestselling/bestselling.component';
import { BrandComponent } from './body/brand/brand.component';
import { BreadcrumbComponent } from './body/breadcrumb/breadcrumb.component';
import { CartComponent } from './body/cart/cart.component';
import { CategoryComponent } from './body/category/category.component';
import { CheckOutComponent } from './body/check-out/check-out.component';
import { ContactComponent } from './body/contact/contact.component';
import { FeatureComponent } from './body/feature/feature.component';
import { FeaturedProductComponent } from './body/featured-product/featured-product.component';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './body/login/login.component';
import { MainBannerComponent } from './body/main-banner/main-banner.component';
import { MainBodyComponent } from './body/main-body/main-body.component';
import { MyAccountComponent } from './body/my-account/my-account.component';
import { PagenotfoundComponent } from '../frontend/body/pagenotfound/pagenotfound.component';
import { ProductDetailComponent } from '../frontend/body/product-detail/product-detail.component';
import { ProductsComponent } from '../frontend/body/products/products.component';
import { RecentProductComponent } from '../frontend/body/recent-product/recent-product.component';
import { RegisterComponent } from '../frontend/body/register/register.component';
import { ReviewComponent } from '../frontend/body/review/review.component';
import { SearchComponent } from '../frontend/body/search/search.component';
import { SidebarBrandsComponent } from '../frontend/body/sidebar-brands/sidebar-brands.component';
import { SidebarCatComponent } from '../frontend/body/sidebar-cat/sidebar-cat.component';
import { SidebarSliderComponent } from '../frontend/body/sidebar-slider/sidebar-slider.component';
import { WishListComponent } from '../frontend/body/wish-list/wish-list.component';
import { TopBarComponent } from './top/top-bar/top-bar.component';
import { NavbarComponent } from './top/navbar/navbar.component';
import { BottomBarComponent } from './top/bottom-bar/bottom-bar.component';
import { SidebarComponent } from './body/sidebar/sidebar.component';
import { MainTopComponent } from './top/main-top/main-top.component';
import { FooterComponent } from './bottom/footer/footer.component';
import { NavComponent } from './top/nav/nav.component';
@NgModule({
  declarations: [
    TopBarComponent,
    NavbarComponent,
    BottomBarComponent,
    MainBannerComponent,
    NavComponent,
    BannerComponent,
    BrandComponent,
    FeatureComponent,
    CategoryComponent,
    //CallToActionComponent,
    FeaturedProductComponent,
    NewsletterComponent,
    RecentProductComponent,
    ReviewComponent,
    FooterComponent,
    FooterBottomComponent,
    BestsellingComponent,
    NewArrivalsComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    WishListComponent,
    MyAccountComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    MainTopComponent,
    MainBodyComponent,
    MainFooterComponent,
    HomeComponent,
    CheckOutComponent,
    BreadcrumbComponent,
    SidebarComponent,
    SidebarCatComponent,
    SidebarSliderComponent,
    SidebarBrandsComponent,
    SidebarTagComponent,
    ContactComponent,
    PagenotfoundComponent,
    //DialogComponent,

  ],
  imports: [
    CommonModule,
    FrontEndRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ]
})
export class FrontModule { }
