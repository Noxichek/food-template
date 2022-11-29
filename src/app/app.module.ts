import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodPreviewComponent } from './food-preview/food-preview.component';
import { CoupenComponent } from './coupen/coupen.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FoodPreviewComponent,
    CoupenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
