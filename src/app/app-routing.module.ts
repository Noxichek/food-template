import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPreviewComponent } from './food-preview/components/food-preview/food-preview.component';

const routes: Routes = [
  { path: 'products', component: FoodPreviewComponent },
  { path: 'auth', loadChildren: () => import('./authorization/authorization.module').then((x) => x.AuthorizationModule) },
  { path: '', pathMatch: 'full', redirectTo: 'products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
