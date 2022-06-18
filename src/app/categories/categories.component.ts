import {Component} from '@angular/core';
import {of} from "rxjs";
import {ProductsService} from "../services/products.service";
import {Store} from "@ngrx/store";
import {getAllProducts} from "../store/products/product.actions";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  categories$;

  constructor(public productService: ProductsService,
              private store$: Store) {
    this.categories$ = this.getCategories();
  }

  getCategories(){
    return of(['all', 'shoes', 't-shirts', 'hats', 'jackets', 'jeans', 'dresses', 'others']);
  }

  selectCategory(category: string){
    this.productService.activeCategory = category;
    this.store$.dispatch(getAllProducts());
  }

}
