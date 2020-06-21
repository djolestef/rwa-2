import Medicine from 'src/app/models/medicine.model';
import { createReducer, on, State, Action } from '@ngrx/store';
import { addToCart } from '../actions/cart.action';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

const adapter: EntityAdapter<Medicine> = createEntityAdapter<Medicine>();

export interface CartState extends EntityState<Medicine> {}

export const initialState: CartState = adapter.getInitialState({});

const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { medicine }) => {
    return adapter.addOne(medicine, state);
  })
);

export function reducer(state: CartState, action: Action) {
  return cartReducer(state, action);
}
