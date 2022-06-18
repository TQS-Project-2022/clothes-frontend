import { Injectable } from '@angular/core';
import {Product} from "../../model/Product";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CreateProductDto} from "../../model/CreateProductDto";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _activeCategory = "shoes";
  private _searchFilter = "";

  constructor(private http: HttpClient) { }

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

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8080/products")
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>("http://localhost:8080/products/" + id);
  }

  addProduct(product: CreateProductDto): Observable<Product>{
    return this.http.post<Product>("http://localhost:8080/products/create", product);
  }
}
