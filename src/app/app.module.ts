import { PharmaciesService } from './services/pharmacies.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { PharmaciesComponent } from './components/pharmacies/pharmacies.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { MedicineService } from './services/medicine.service';
import { DetailsComponent } from './components/details/details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PharmaciesComponent,
    MedicinesComponent,
    CartComponent,
    HomeComponent,
    DetailsComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [MedicineService, PharmaciesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
