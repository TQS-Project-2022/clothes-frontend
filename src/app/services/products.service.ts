import { Injectable } from '@angular/core';
import {Product} from "../../model/Product";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _activeCategory = "shoes";
  private _searchFilter = "";

  constructor() { }

  set activeCategory(value: string) {
    this._activeCategory = value;
  }

  get activeCategory(): string {
    return this._activeCategory;
  }

  get searchFilter(): string {
    return this._searchFilter;
  }

  set searchFilter(value: string) {
    this._searchFilter = value;
  }

  getProducts(){
    let p1: Product =  {
      id: 1,
      name: "Stinky Shoes",
      price: 54.99,
      shipPrice: 5,
      category: 'shoes'
    }

    let p2: Product =  {
      id: 2,
      name: "Dirty T-shirt",
      price: 12.99,
      shipPrice: 0,
      category: 't-shirts'
    }

    let p3: Product =  {
      id: 3,
      name: "Stolen Jacket",
      price: 129,
      shipPrice: 2,
      category: 'jackets'
    }
    let p4: Product =  {
      id: 4,
      name: "Dirty T-shirt",
      price: 12.99,
      shipPrice: 0,
      category: 't-shirts'
    }

    let p5: Product =  {
      id: 5,
      name: "Stolen Jacket",
      price: 129,
      shipPrice: 2,
      category: 'jackets'
    }

    let arr = [p1,p2,p3,p4,p5];

    if(this.activeCategory != "all")
      arr = arr.filter(p => p.category == this.activeCategory);

    return of(arr);
  }
}
