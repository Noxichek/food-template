import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DashboardComponent],
  exports: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashboardModule { }