import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PharmaciesComponent } from './pharmacies/pharmacies.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicinesComponent } from './medicines/medicines.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, PharmaciesComponent, MedicinesComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
