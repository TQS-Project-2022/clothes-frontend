import {Product} from "../../../model/Product";
import {createReducer, on} from "@ngrx/store";
import {addProductSuccess, getAllProductsSuccess, getProductByIdSuccess, selectProduct} from "./product.actions";
import {createEntityAdapter, EntityState} from "@ngrx/entity";

export interface ProductState extends EntityState<Product>{
  selectedProductId: number,
}

export const promotionAdapter = createEntityAdapter<Product>();

export const initialState: ProductState = promotionAdapter.getInitialState({
  selectedProductId: 1
});

export const productReducer = createReducer(
  initialState,
  on(getAllProductsSuccess, (state, result) => promotionAdapter.setAll(result.products, initialState)),
  on(getProductByIdSuccess, (state, result) => promotionAdapter.setOne(result.product, state)),
  on(selectProduct, (state, result) => ({...state, selectedProductId: result.id})),
  on(addProductSuccess, (state, result) => promotionAdapter.addOne(result.product, state))
);

export const {
  selectAll,
  selectEntities
} = promotionAdapter.getSelectors();
