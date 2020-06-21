import { CartState } from './cart.reducer';
import { createFeatureSelector, createSelector, State } from '@ngrx/store';

export const getState = createFeatureSelector('cart');
