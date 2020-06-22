import Medicine from 'src/app/models/medicine.model';
import { createAction, props } from '@ngrx/store';

export const saveMedicines = createAction(
  '[pharmacies component] save medicines in store',
  props<{ medicines: Medicine[] }>()
);
