import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";
import {Store} from "@ngrx/store";
import {getAllProducts} from "../store/products/product.actions";
import {selectAllProducts} from "../store/products/product.selectors";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  products$;

  constructor(private productService: ProductsService,
              private store$: Store
  ) {
    this.products$ = this.store$.select(selectAllProducts);
  }

  ngOnInit() {
    this.store$.dispatch(getAllProducts());
  }

}
