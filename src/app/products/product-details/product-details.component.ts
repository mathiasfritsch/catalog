import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadProducts } from '../store/product.actions';
import { selectProduct } from '../store/product.selectors';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'bm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private store: Store, private route: ActivatedRoute) {}

  productId: number = 0;
  product$: Observable<Product> = new Observable<Product>();

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productId = id;

    //this.store.dispatch(new heroActions.SelectHero(id));
    const retValue = this.store.select(selectProduct);

    //if (retValue != null) this.product$ = retValue!;
  }
}
