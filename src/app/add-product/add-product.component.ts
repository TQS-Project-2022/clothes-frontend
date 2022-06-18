import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CreateProductDto} from "../../model/CreateProductDto";
import {Store} from "@ngrx/store";
import {addProduct} from "../store/products/product.actions";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addProductForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: [0, Validators.required],
    category: ['', Validators.required],
  });

  categories$: Observable<string[]>;

  constructor(private formBuilder: FormBuilder,
              private store$: Store,
              private router: Router,
              private productService: ProductsService) {
    this.categories$ = this.productService.getCategories();
  }

  ngOnInit(): void {
  }

  addProduct(){
    let createProductDto: CreateProductDto = {
      name: this.addProductForm.value.name || "",
      price: this.addProductForm.value.price || 0,
      category: this.addProductForm.value.category || "other",
    }

    this.store$.dispatch(addProduct({product: createProductDto}));
    this.router.navigate(['']);

  }

}
