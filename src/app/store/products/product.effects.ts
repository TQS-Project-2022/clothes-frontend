import {ProductsService} from "../../services/products.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {getAllProducts, getAllProductsError, getAllProductsSuccess} from "./product.actions";
import {catchError, exhaustMap, map, of, switchMap} from "rxjs";

export class ProductEffects {

  constructor(private productService: ProductsService,
              private actions$: Actions) {
  }

  getAllProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getAllProducts),
    switchMap(() =>
    this.productService.getProducts().pipe(
      map(response => getAllProductsSuccess({products: response})),
      catchError(error => of(getAllProductsError()))
    ))
  ));

}
