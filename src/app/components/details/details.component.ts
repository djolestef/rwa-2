import Medicine from 'src/app/models/medicine.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  public medicineId: number;
  public medicine: Medicine;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _medicineService: MedicineService
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.medicineId = parseInt(params.get('id'));
      this._medicineService
        .fetchMedicineById(this.medicineId)
        .subscribe((medicine: Medicine) => {
          this.medicine = medicine;
        });
    });
  }

  public back(): void {
    this._router.navigate(['']);
  }
}
