import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as pizzasActions from './pizzas.actions';
import { Pizza } from '@mdv-twenty-nine/core-data';

export const PIZZAS_FEATURE_KEY = 'pizzas';

export interface PizzasState extends EntityState<Pizza> {
  selectedPizzaId?: string | number;
  isLoading: boolean;
}

export interface PizzasPartialState {
  readonly [PIZZAS_FEATURE_KEY]: PizzasState;
}

export const pizzasAdapter: EntityAdapter<Pizza> = createEntityAdapter<Pizza>();

export const initialState: PizzasState = pizzasAdapter.getInitialState({
  // set initial required properties
  selectedPizzaId: null,
  isLoading: false
});

const pizzasReducer = createReducer(
  initialState,
  on(pizzasActions.pizzaSelected, (state, { selectedPizzaId }) =>
    Object.assign({}, state, { selectedPizzaId })
  ),
  on(pizzasActions.pizzasLoaded, (state, { pizzas }) =>
    pizzasAdapter.addAll(pizzas, { ...state, isLoading: false })
  ),
  on(pizzasActions.pizzaCreated, (state, { pizza }) =>
    pizzasAdapter.addOne(pizza, { ...state, isLoading: false })
  ),
  on(pizzasActions.pizzaUpdated, (state, { pizza }) =>
    pizzasAdapter.upsertOne(pizza, { ...state, isLoading: false })
  ),
  on(pizzasActions.pizzaDeleted, (state, { pizza }) =>
    pizzasAdapter.removeOne(pizza.id, { ...state, isLoading: false })
  ),
  on(
    pizzasActions.loadPizzas,
    pizzasActions.createPizza,
    pizzasActions.updatePizza,
    pizzasActions.deletePizza,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
);

export function reducer(state: PizzasState | undefined, action: Action) {
  return pizzasReducer(state, action);
}
