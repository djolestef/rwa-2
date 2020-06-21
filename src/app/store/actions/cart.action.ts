import Medicine from 'src/app/models/medicine.model';
import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[medicines component] add medicine to cart',
  props<{ medicine: Medicine }>()
);
