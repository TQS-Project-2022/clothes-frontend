import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {selectProduct} from "../store/products/product.actions";
import {selectSelectedProduct} from "../store/products/product.selectors";
import {Observable} from "rxjs";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  selectedProduct$: Observable<Product | undefined>;

  createOrderDiv = false;

  constructor(private store$: Store,
              private route: ActivatedRoute) {
    this.selectedProduct$ = this.store$.select(selectSelectedProduct);
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.store$.dispatch(selectProduct({id}));
  }

  showOrderDiv(){
    this.createOrderDiv = true;
  }

  closeOrderDiv(){
    this.createOrderDiv = false;
  }

}
