import { removeAllFromCart } from './../../store/actions/cart.action';
import { CartState } from './../../store/reducers/cart.reducer';
import { PharmaciesService } from './../../services/pharmacies.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Pharmacy from 'src/app/models/pharmacies.model';
import { Store } from '@ngrx/store';
import { MedicinesState } from './../../store/reducers/medicines.reducer';
import { saveIds } from 'src/app/store/actions/medicines.action';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.css'],
})
export class PharmaciesComponent implements OnInit {
  public pharmacies: Pharmacy[];
  @Output() public pharmacyMessage = new EventEmitter();

  constructor(
    private _pharmaciesService: PharmaciesService,
    private _cartStore: Store<{ cart: CartState }>,
    private _medicinesStore: Store<{ medicine: MedicinesState }>
  ) {}

  ngOnInit(): void {
    this._pharmaciesService.fetchPharmacies().subscribe((pharmacies) => {
      this.pharmacies = pharmacies;
    });
  }

  public onClick(pharmacyButton: HTMLButtonElement): void {
    let pharmacyIndex: number = parseInt(pharmacyButton.value) - 1;

    this._cartStore.dispatch(removeAllFromCart());
    this.pharmacyMessage.emit(this.pharmacies[pharmacyIndex].message);
    let medicinesIds = (this.pharmacies[pharmacyIndex]
      .medicines as any) as Number[];
    this._medicinesStore.dispatch(saveIds({ medicinesIds }));
  }
}
