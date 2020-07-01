import { removeAllFromCart } from './../../store/actions/cart.action';
import { CartState } from './../../store/reducers/cart.reducer';
import {
  saveMedicines,
  fetchAllMedicines,
} from './../../store/actions/medicines.action';
import { MedicineService } from './../../services/medicine.service';
import { PharmaciesService } from './../../services/pharmacies.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Pharmacy from 'src/app/models/pharmacies.model';
import Medicine from 'src/app/models/medicine.model';
import { Store } from '@ngrx/store';
import { MedicinesState } from 'src/app/store/reducers/medicines.reducer';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.css'],
})
export class PharmaciesComponent implements OnInit {
  public pharmacies: Pharmacy[];
  @Output() public pharmacyMessage = new EventEmitter();
  @Output() public medicinesIds = new EventEmitter();

  constructor(
    private _pharmaciesService: PharmaciesService,
    private _medicineService: MedicineService,
    private _medicinesStore: Store<{ medicines: MedicinesState }>,
    private _cartStore: Store<{ cart: CartState }>
  ) {}

  ngOnInit(): void {
    this._pharmaciesService.fetchPharmacies().subscribe((pharmacies) => {
      this.pharmacies = pharmacies;
    });
  }

  public onClick(pharmacyButton: HTMLButtonElement) {
    let pharmacyIndex: number = parseInt(pharmacyButton.value) - 1;

    this._cartStore.dispatch(removeAllFromCart());
    this.pharmacyMessage.emit(this.pharmacies[pharmacyIndex].message);
    this.medicinesIds.emit(this.pharmacies[pharmacyIndex].medicines);
  }
}
