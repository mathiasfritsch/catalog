import { Action, createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { Product } from 'src/app/shared/product';
import { state } from '@angular/animations';
export const productFeatureKey = 'product';

export interface State {
  products: Product[];
  loading: boolean;
}

export const initialState: State = {
  products: [],
  loading: false,
};

export const reducer = createReducer(
  initialState,

  on(ProductActions.loadProducts, (state) => {
    return { ...state, loading: true };
  }),
  on(ProductActions.loadProductsSuccess, (state, action) => {
    return {
      ...state,
      products: action.data,
      loading: false,
    };
  }),
  on(ProductActions.loadProductsFailure, (state, action) => {
    return { ...state, loading: false };
  })
);
