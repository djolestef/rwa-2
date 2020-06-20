import { MedicineService } from './../../services/medicine.service';
import { PharmaciesService } from './../../services/pharmacies.service';
import { Component, OnInit } from '@angular/core';
import Pharmacy from 'src/app/models/pharmacies.model';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.css'],
})
export class PharmaciesComponent implements OnInit {
  public pharmacies: Pharmacy[];

  constructor(
    private _pharmaciesService: PharmaciesService,
    private _medicineService: MedicineService
  ) {}

  ngOnInit(): void {
    this._pharmaciesService.fetchPharmacies().subscribe((pharmacies) => {
      this.pharmacies = pharmacies;
      this.intializeMedicines();
    });
  }

  private intializeMedicines(): void {
    this.pharmacies.forEach((pharmacy) => {
      pharmacy.medicines.map((medicineId, index) => {
        this._medicineService
          .fetchMedicineById(medicineId)
          .subscribe((medicine) => {
            pharmacy.medicines[index] = medicine;
          });
      });
    });
  }
}
