import Medicine from 'src/app/models/medicine.model';
import { MedicineService } from 'src/app/services/medicine.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class MedicineEffects {
  loadMedicines$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType('[medicines component] fetch all medicines'),
      mergeMap(() =>
        this._medicineService.fetchAllMedicines().pipe(
          map((medicines) => ({
            type: '[pharmacies component] save medicines in store',
            medicines: medicines,
          }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private _medicineService: MedicineService
  ) {}
}
