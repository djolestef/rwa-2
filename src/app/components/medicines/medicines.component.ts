import { Component, OnInit, Input } from '@angular/core';
import Medicine from 'src/app/models/medicine.model';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css'],
})
export class MedicinesComponent implements OnInit {
  @Input('parentData') public medicines: Medicine[];

  constructor() {}

  ngOnInit(): void {}

  public onClick(medicineButton: HTMLButtonElement) {
    console.log(medicineButton.value);
  }
}
