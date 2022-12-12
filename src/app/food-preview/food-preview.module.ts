import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodPreviewComponent } from './components/food-preview/food-preview.component';
import { CouponModule } from '../coupen/coupon.module';



@NgModule({
  declarations: [FoodPreviewComponent],
  exports: [
    FoodPreviewComponent,
  ],
  imports: [
    CommonModule,
    CouponModule
  ]
})
export class FoodPreviewModule { }
