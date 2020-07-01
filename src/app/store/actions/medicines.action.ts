import Medicine from 'src/app/models/medicine.model';
import { createAction, props } from '@ngrx/store';

export const saveMedicines = createAction(
  '[pharmacies component] save medicines in store',
  props<{ medicines: Medicine[] }>()
);

export const fetchMedicines = createAction(
  '[medicines component] fetch medicines',
  props<{ medicines: Medicine[] }>()
);

export const fetchAllMedicines = createAction(
  '[medicines component] fetch all medicines'
);

export const saveIds = createAction(
  '[medicines component] save ids',
  props<{ medicinesIds: Number[] }>()
);
