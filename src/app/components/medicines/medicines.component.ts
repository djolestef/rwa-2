import { CartState } from './../../store/reducers/cart.reducer';
import { Component, OnInit, Input } from '@angular/core';
import Medicine from 'src/app/models/medicine.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addToCart } from 'src/app/store/actions/cart.action';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css'],
})
export class MedicinesComponent implements OnInit {
  @Input('parentData') public medicines: Medicine[];

  constructor(
    private _router: Router,
    private store: Store<{ cart: CartState }>
  ) {}

  ngOnInit(): void {}

  public onClick(medicineButton: HTMLButtonElement) {
    let medicine: Medicine = new Medicine(0, 'djole', false, 250, 'djole car');
    this.store.dispatch(addToCart({ medicine }));
  }

  public onClickMedicine(medicine) {
    this._router.navigate(['/medicine', medicine.id]);
  }
}
