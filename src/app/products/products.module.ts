import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './store/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductsModule { }
