import {Product} from "../../../model/Product";
import {createReducer, on} from "@ngrx/store";
import {getAllProductsSuccess} from "./product.actions";
import {createEntityAdapter, EntityState} from "@ngrx/entity";

export interface ProductState extends EntityState<Product>{}

export const promotionAdapter = createEntityAdapter<Product>();

export const initialState: ProductState = promotionAdapter.getInitialState();

export const productReducer = createReducer(
  initialState,
  on(getAllProductsSuccess, (state, result) => promotionAdapter.setAll(result.products, initialState))
);

export const {
  selectAll,
  selectEntities
} = promotionAdapter.getSelectors();
