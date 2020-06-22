import Medicine from 'src/app/models/medicine.model';
import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[medicines component] add medicine to cart',
  props<{ medicine: Medicine }>()
);

export const removeAllFromCart = createAction(
  '[cart component, pharmacies component]'
);

export const removeMedicineFromCart = createAction(
  '[cart component]',
  props<{ id: number }>()
);
