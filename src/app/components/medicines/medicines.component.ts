import { getIds } from './../../store/reducers/index';
import { MedicinesState } from './../../store/reducers/medicines.reducer';
import { MedicineService } from 'src/app/services/medicine.service';
import { CartState } from './../../store/reducers/cart.reducer';
import { Component, OnInit, Input } from '@angular/core';
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
  public medicines: Medicine[] = [];
  public medicinesIds: Number[];

  @Input('parentData') public pharmacyMessage: string;

  constructor(
    private _router: Router,
    private _cartStore: Store<{ cart: CartState }>,
    private _medicinesService: MedicineService,
    private _medicinesStore: Store<{ medicine: MedicinesState }>
  ) {}

  ngOnInit(): void {
    this._medicinesStore.dispatch({
      type: '[medicines component] fetch all medicines',
    });
    this._medicinesStore.pipe(select(getIds)).subscribe((data) => {
      this.medicinesIds = data;
      this.refreshMedicines();
    });
  }

  ngOnChanges(): void {
    this.refreshMedicines();
  }

  public refreshMedicines(): void {
    if (this.medicinesIds) {
      this._medicinesStore.pipe(select(getMedicines)).subscribe((data) => {
        this.medicines = [];
        for (let value in data) {
          if (this.medicinesIds.includes(data[value].id)) {
            this.medicines.push(data[value]);
          }
        }
      });
    }
  }

  public onClick(medicineButton: HTMLButtonElement): void {
    this._medicinesService
      .fetchMedicineById(parseInt(medicineButton.value))
      .subscribe((medicine: Medicine) => {
        this._cartStore.dispatch(addToCart({ medicine }));
      });
  }

  public onClickMedicine(medicine: Medicine): void {
    this._router.navigate(['/medicine', medicine.id]);
  }
}
