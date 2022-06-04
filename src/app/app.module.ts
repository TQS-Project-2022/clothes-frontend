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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    MainPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ProductListComponent,
    ProductMiniatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    //StoreModule.forRoot({products: productReducer}),
    //EffectsModule.forRoot([ProductEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
