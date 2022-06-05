import {createAction, props} from "@ngrx/store";
import {Product} from "../../../model/Product";

export enum ProductActionTypes {
  GET_ALL_PRODUCTS = "[Products] Get all products",
  GET_ALL_PRODUCTS_SUCCESS = "[Products] Get all products success",
  GET_ALL_PRODUCTS_ERROR = "[Products] Get all products error",
}

export const getAllProducts = createAction(
  ProductActionTypes.GET_ALL_PRODUCTS
);

export const getAllProductsSuccess = createAction(
  ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS,
  props<{products:Product[]}>()
);

export const getAllProductsError = createAction(
  ProductActionTypes.GET_ALL_PRODUCTS_ERROR
)

