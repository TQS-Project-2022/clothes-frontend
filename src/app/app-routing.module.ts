import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'create-account', component: RegisterPageComponent},
  { path: 'product/:id', component: ProductDetailsComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: 'order/:id', component: OrderDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
