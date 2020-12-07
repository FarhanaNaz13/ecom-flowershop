import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginguardGuard } from './guard/loginguard.guard';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LayoutComponent } from './layout/layout.component';

import { LoginComponent } from './login/login.component';
import { ProductaddComponent } from './productadd/productadd.component';

import { ProducthomeComponent } from './producthome/producthome.component';
import { ProductsComponent } from './products/products.component';

import { ProductsshowComponent } from './productsshow/productsshow.component';
import { SignupComponent } from './signup/signup.component';
import { ProductdataComponent } from './productdata/productdata.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';
import { ProductsearchComponent } from './productsearch/productsearch.component';
import { CategoryComponent } from './category/category.component';
import { OrderComponent } from './order/order.component';
// import { ProductsearchComponent } from './productsearch/productsearch.component';

const routes: Routes = [

   {path: '', component : HomepageComponent},
   {path: 'checkout', component : CheckoutComponent},
  
   {path: 'products', component : ProductsComponent},
    {path: 'productsearch', component : ProductsearchComponent},
  
   {path: 'cart', component : CartComponent},

  
  {path: 'signup', component : SignupComponent},
   {path: 'slider', component : ProductsshowComponent},
 {
    path: 'productsshow', component: ProductsshowComponent
  },
   {
     path: 'producthome', component: ProducthomeComponent
   },
   {
    path: 'category/:cname', component: CategoryComponent
  },
  
  {
    path: '', component: ProductupdateComponent
    
  },

  { path: 'login', component: LoginComponent },
  
 
  {
    path: '',
    component: LayoutComponent,
    canActivate: [LoginguardGuard],

   children: [
     
     {
      path: 'dashboard',
       component: DashboardComponent},
        {
          path: '', component: ProductsComponent
          
      },
      {
        path: 'order', component: OrderComponent
        
      },
       {
         path: 'productdata', component: ProductdataComponent
          
         },
         {
           path: 'productadd', component: ProductaddComponent
          
         },
          {
            path: 'productupdate', component: ProductupdateComponent
          
          },
       ]
    },
  
  {
    path: '**',
    redirectTo: 'login',
  },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
