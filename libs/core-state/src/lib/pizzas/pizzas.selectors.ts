import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  PIZZAS_FEATURE_KEY,
  pizzasAdapter,
  PizzasPartialState,
  PizzasState
} from './pizzas.reducer';

// Lookup the 'Pizzas' feature state managed by NgRx
export const selectPizzasState = createFeatureSelector<
  PizzasPartialState,
  PizzasState
>(PIZZAS_FEATURE_KEY);

const { selectAll, selectEntities } = pizzasAdapter.getSelectors();

export const selectPizzasLoading = createSelector(
  selectPizzasState,
  (state: PizzasState) => state.isLoading
);

export const selectAllPizzas = createSelector(
  selectPizzasState,
  (state: PizzasState) => selectAll(state)
);

export const selectPizzasEntities = createSelector(
  selectPizzasState,
  (state: PizzasState) => selectEntities(state)
);

export const selectPizzaId = createSelector(
  selectPizzasState,
  (state: PizzasState) => state.selectedPizzaId
);

export const selectPizza = createSelector(
  selectPizzasEntities,
  selectPizzaId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
