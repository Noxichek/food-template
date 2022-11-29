import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPreviewComponent } from './food-preview/food-preview.component';

const routes: Routes = [
  { path: 'products', component: FoodPreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
