import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from './product.reducer';

export const selectProductState = createFeatureSelector<fromProduct.State>(
  fromProduct.productFeatureKey
);

export const selectSelectorsLoading = createSelector(
  selectProductState,
  (state) => state.loading
);

export const selectAllProducts = createSelector(
  selectProductState,
  (state) => state.products
);
