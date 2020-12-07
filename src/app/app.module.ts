import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductsearchComponent } from './productsearch/productsearch.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './service/product.service';
import { HttpClientModule } from '@angular/common/http';

import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsshowComponent } from './productsshow/productsshow.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProducthomeComponent } from './producthome/producthome.component';
import { ProductmodificationComponent } from './productmodification/productmodification.component';
import { ProductdataComponent } from './productdata/productdata.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';
import { BuyComponent } from './buy/buy.component';
import { CategoryComponent } from './category/category.component';
import { OrderComponent } from './order/order.component';





@NgModule({
  declarations: [
    AppComponent,
    
    // ProductsearchComponent,

    ProductsComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    LayoutComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ProductsshowComponent,
    CheckoutComponent,
    ProducthomeComponent,
    ProductmodificationComponent,
    ProductdataComponent,
    ProductaddComponent,
    ProductupdateComponent,
    BuyComponent,
    CategoryComponent,
    OrderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
    
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
