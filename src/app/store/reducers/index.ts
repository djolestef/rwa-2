import { CartState } from './cart.reducer';
import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { MedicinesState } from './medicines.reducer';

export const getCartState = createFeatureSelector('cart');
export const getMedicinesState = createFeatureSelector('medicines');

export const getCartMedicines = createSelector(
  getCartState,
  (cartState: CartState) => cartState.entities
);

export const getMedicines = createSelector(
  getMedicinesState,
  (medicinesState: MedicinesState) => medicinesState.entities
);


