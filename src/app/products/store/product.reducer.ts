import { Action, createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { Product } from 'src/app/shared/product';
import { state } from '@angular/animations';
export const productFeatureKey = 'product';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({});

export interface State extends EntityState<Product> {
  products: Product[];
  loading: boolean;
}

export const initialState: State = adapter.getInitialState({
  products: [],
  loading: false,
});

export const reducer = createReducer(
  initialState,

  on(ProductActions.loadProducts, (state) => {
    return { ...state, loading: true };
  }),
  on(ProductActions.loadProductsSuccess, (state, action) => {
    return {
      ...adapter.setAll(action.data, state),
      products: action.data,
      loading: false,
    };
  }),
  on(ProductActions.loadProductsFailure, (state, action) => {
    return { ...state, loading: false };
  })
);
const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
export const selectAllProductsE = selectAll;
export const selectProductsTotal = selectTotal;
