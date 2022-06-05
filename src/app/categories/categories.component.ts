import {Component} from '@angular/core';
import {of} from "rxjs";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  categories$;

  constructor(public productService: ProductsService) {
    this.categories$ = this.getCategories();
  }

  getCategories(){
    return of(['all', 'shoes', 't-shirts', 'hats', 'jackets', 'jeans', 'dresses', 'others']);
  }

  selectCategory(category: string){
    this.productService.activeCategory = category;
  }

}
