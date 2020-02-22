import { createAction, props } from '@ngrx/store';

import { Pizza } from '@mdv-twenty-nine/core-data';

export const pizzaSelected = createAction(
  '[PIZZA] Pizza Selected',
  props<{ selectedPizzaId: string }>()
);

// Load Actions
export const loadPizzas = createAction('[PIZZA] Load Pizzas');

export const pizzasLoaded = createAction(
  '[PIZZA] Pizzas Loaded',
  props<{ pizzas: Pizza[] }>()
);

// Create Actions
export const createPizza = createAction(
  '[PIZZA] Create Pizza',
  props<{ pizza: Pizza }>()
);

export const pizzaCreated = createAction(
  '[PIZZA] Pizza Created',
  props<{ pizza: Pizza }>()
);

// Update Actions
export const updatePizza = createAction(
  '[PIZZA] Update Pizza',
  props<{ pizza: Pizza }>()
);

export const pizzaUpdated = createAction(
  '[PIZZA] Pizza Updated',
  props<{ pizza: Pizza }>()
);

// Delete Actions
export const deletePizza = createAction(
  '[PIZZA] Delete Pizza',
  props<{ pizza: Pizza }>()
);

export const pizzaDeleted = createAction(
  '[PIZZA] Pizza Deleted',
  props<{ pizza: Pizza }>()
);
