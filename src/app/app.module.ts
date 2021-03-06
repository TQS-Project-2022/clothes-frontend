import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductMiniatureComponent } from './product-miniature/product-miniature.component';
import {StoreModule} from "@ngrx/store";
import {productReducer} from "./store/products/product.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ProductEffects} from "./store/products/product.effects";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {HttpClientModule} from "@angular/common/http";
import { AddProductComponent } from './add-product/add-product.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { authInterceptorProviders } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    MainPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ProductListComponent,
    ProductMiniatureComponent,
    ProductDetailsComponent,
    AddProductComponent,
    CreateOrderComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature("products", productReducer),
    EffectsModule.forFeature([ProductEffects])
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
