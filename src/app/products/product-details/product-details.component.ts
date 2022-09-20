import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadProducts } from '../store/product.actions';
import {
  selectProductState,
  selectAllProducts,
  selectSelectorsLoading,
} from '../store/product.selectors';

import * as fromReducer from '../store/product.reducer';

@Component({
  selector: 'bm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  products$ = this.store.pipe(select(fromReducer.selectAllProductsE));
  loading$ = this.store.pipe(select(selectProductState));

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }
}
