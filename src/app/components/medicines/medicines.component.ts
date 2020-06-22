import { MedicineService } from 'src/app/services/medicine.service';
import { CartState } from './../../store/reducers/cart.reducer';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Medicine from 'src/app/models/medicine.model';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { addToCart } from 'src/app/store/actions/cart.action';
import { getMedicines } from 'src/app/store/reducers';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css'],
})
export class MedicinesComponent implements OnInit {
  public medicines: Medicine[];
  @Input('parentData') public pharmacyMessage: string;

  constructor(
    private _router: Router,
    private _store: Store<{ cart: CartState }>,
    private _medicineService: MedicineService
  ) {}

  ngOnInit(): void {
    this._store.pipe(select(getMedicines)).subscribe((data) => {
      this.medicines = [];
      for (let value in data) {
        this.medicines.push(data[value]);
      }
    });
  }

  public onClick(medicineButton: HTMLButtonElement) {
    this._medicineService
      .fetchMedicineByIdNumber(parseInt(medicineButton.value))
      .subscribe((medicine: Medicine) => {
        this._store.dispatch(addToCart({ medicine }));
      });
  }

  public onClickMedicine(medicine: Medicine) {
    this._router.navigate(['/medicine', medicine.id]);
  }
}
