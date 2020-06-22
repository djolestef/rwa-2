import {
  removeAllFromCart,
  removeMedicineFromCart,
} from './../actions/cart.action';
import Medicine from 'src/app/models/medicine.model';
import { createReducer, on, Action } from '@ngrx/store';
import { addToCart } from '../actions/cart.action';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

const adapter: EntityAdapter<Medicine> = createEntityAdapter<Medicine>();

export interface CartState extends EntityState<Medicine> {
  ids: number[];
  entities: { [id: number]: Medicine };
}

export const initialState: CartState = adapter.getInitialState({
  ids: [],
  entities: [],
});

const reducer = createReducer(
  initialState,
  on(addToCart, (state, { medicine }) => {
    return adapter.addOne(medicine, state);
  }),
  on(removeAllFromCart, (state) => {
    return adapter.removeAll(state);
  }),
  on(removeMedicineFromCart, (state, { id }) => {
    return adapter.removeOne(id, state);
  })
);

export function cartReducer(state: CartState, action: Action) {
  return reducer(state, action);
}
