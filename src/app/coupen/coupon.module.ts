import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoupenComponent } from './components/coupon/coupen.component';



@NgModule({
  declarations: [CoupenComponent],
  exports: [
    CoupenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CouponModule { }
