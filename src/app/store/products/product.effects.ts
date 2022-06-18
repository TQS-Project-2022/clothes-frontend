import {ProductsService} from "../../services/products.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  addProductError,
  addProductSuccess,
  getAllProductsError,
  getAllProductsSuccess,
  getProductById,
  getProductByIdError,
  getProductByIdSuccess,
  ProductActionTypes
} from "./product.actions";
import {catchError, map, of, switchMap, tap, withLatestFrom} from "rxjs";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectSelectedProduct} from "./product.selectors";
import {CreateProductDto} from "../../../model/CreateProductDto";

@Injectable({providedIn: 'root'})
export class ProductEffects {

  constructor(private productService: ProductsService,
              private actions$: Actions,
              private store$: Store) {
  }

  getAllProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActionTypes.GET_ALL_PRODUCTS),
    switchMap(() =>
    this.productService.getProducts().pipe(
      map(response => getAllProductsSuccess({products: response})),
      catchError(error => of(getAllProductsError()))
    ))
  ));

  getProductById$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActionTypes.GET_PRODUCT_BY_ID),
    switchMap( (res: {id: number}) =>
      this.productService.getProductById(res.id).pipe(
        map(response => getProductByIdSuccess({product: response})),
        catchError(error => of(getProductByIdError()))
      )
    )
  ));

  selectProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActionTypes.SELECT_PRODUCT),
    withLatestFrom(this.store$.select(selectSelectedProduct)),
    tap(([{id}, selectedProduct]) => {
      if(!selectedProduct){
        this.store$.dispatch(getProductById({id}))
      }
    })
  ),{dispatch: false}
  );

  addProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActionTypes.ADD_PRODUCT),
    switchMap((res: {product: CreateProductDto}) => this.productService.addProduct(res.product).pipe(
      map(response => addProductSuccess({product: response})),
      catchError(error => of(addProductError()))
    ))
  ));

}
