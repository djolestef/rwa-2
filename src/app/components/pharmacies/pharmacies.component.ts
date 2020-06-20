import { MedicineService } from './../../services/medicine.service';
import { PharmaciesService } from './../../services/pharmacies.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Pharmacy from 'src/app/models/pharmacies.model';
import Medicine from 'src/app/models/medicine.model';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.css'],
})
export class PharmaciesComponent implements OnInit {
  public pharmacies: Pharmacy[];
  @Output() public medicines = new EventEmitter();
  @Output() public flag = new EventEmitter();

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

  public onClick(pharmacyButton: HTMLButtonElement) {
    let pharmacyIndex: number = parseInt(pharmacyButton.value) - 1;
    this.medicines.emit(this.pharmacies[pharmacyIndex].medicines);
    this.flag.emit(true);
  }
}
