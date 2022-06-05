import {ProductState, selectAll} from "./product.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectFeature = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectFeature, selectAll
);
