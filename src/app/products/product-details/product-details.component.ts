import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadProducts } from '../store/product.actions';
import { selectProductState } from '../store/product.selectors';
@Component({
  selector: 'bm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }
}
