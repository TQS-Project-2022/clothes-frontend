import {ProductState, selectAll, selectEntities} from "./product.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectFeature = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectFeature, selectAll
);

export const selectProductEntities = createSelector(selectFeature, selectEntities);

export const selectSelectedProductId = createSelector(selectFeature, state => state.selectedProductId);

export const selectSelectedProduct = createSelector(
  selectProductEntities,
  selectSelectedProductId,
  (entities, prodId) => entities[prodId]
);
