import {createAction, props} from "@ngrx/store";
import {Product} from "../../../model/Product";
import {CreateProductDto} from "../../../model/CreateProductDto";

export enum ProductActionTypes {
  GET_ALL_PRODUCTS = "[Products] Get all products",
  GET_ALL_PRODUCTS_SUCCESS = "[Products] Get all products success",
  GET_ALL_PRODUCTS_ERROR = "[Products] Get all products error",
  GET_PRODUCT_BY_ID = "[Products] Get product by id",
  GET_PRODUCT_BY_ID_SUCCESS = "[Products] Get product by id success",
  GET_PRODUCT_BY_ID_ERROR = "[Products] Get product by id error",
  SELECT_PRODUCT = "[Products] Select product",
  ADD_PRODUCT = "[Products] Add product",
  ADD_PRODUCT_SUCCESS = "[Products] Add product success",
  ADD_PRODUCT_ERROR = "[Products] Add product error",
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
);

export const getProductById = createAction(
  ProductActionTypes.GET_PRODUCT_BY_ID,
  props<{id: number}>()
);

export const getProductByIdSuccess = createAction(
  ProductActionTypes.GET_PRODUCT_BY_ID_SUCCESS,
  props<{product: Product}>()
);

export const getProductByIdError = createAction(
  ProductActionTypes.GET_PRODUCT_BY_ID_ERROR
);

export const selectProduct = createAction(
  ProductActionTypes.SELECT_PRODUCT,
  props<{id: number}>()
);

export const addProduct = createAction(
  ProductActionTypes.ADD_PRODUCT,
  props<{product: CreateProductDto}>()
);

export const addProductSuccess = createAction(
  ProductActionTypes.ADD_PRODUCT_SUCCESS,
  props<{product: Product}>()
);

export const addProductError = createAction(
  ProductActionTypes.ADD_PRODUCT_ERROR
)

