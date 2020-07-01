import {
  saveMedicines,
  fetchMedicines,
  fetchAllMedicines,
  saveIds,
} from './../actions/medicines.action';
import Medicine from 'src/app/models/medicine.model';
import { createReducer, on, Action } from '@ngrx/store';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

const adapter: EntityAdapter<Medicine> = createEntityAdapter<Medicine>();

export interface MedicinesState extends EntityState<Medicine> {
  ids: number[];
  entities: { [id: number]: Medicine };
  medicinesIds: number[];
}

export const initialState: MedicinesState = adapter.getInitialState({
  ids: [],
  entities: [],
  medicinesIds: [],
});

const reducer = createReducer(
  initialState,
  on(saveMedicines, (state, { medicines }) => {
    return adapter.addAll(medicines, state);
  }),
  on(saveIds, (state, { medicinesIds }) => {
    const newIds = medicinesIds;
    return { ...state, medicinesIds: newIds };
  })
);

export function medicinesReducer(state: MedicinesState, action: Action) {
  return reducer(state, action);
}
