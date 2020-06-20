import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './components/app-routing.module';
import { AppComponent } from './components/app.component';
import { PharmaciesComponent } from './components/pharmacies/pharmacies.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, PharmaciesComponent, MedicinesComponent, CartComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
