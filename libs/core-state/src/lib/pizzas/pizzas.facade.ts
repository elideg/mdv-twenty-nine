import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';
import * as pizzasActions from './pizzas.actions';
import * as pizzasSelectors from './pizzas.selectors';
import { Pizza } from '@mdv-twenty-nine/core-data';

@Injectable({
  providedIn: 'root'
})
export class PizzasFacade {
  allPizzas$ = this.store.pipe(select(pizzasSelectors.selectAllPizzas));
  selectedPizza$ = this.store.pipe(select(pizzasSelectors.selectPizza));
  pizzaLoading$ = this.store.pipe(select(pizzasSelectors.selectPizzasLoading));

  constructor(private store: Store<fromPizzas.PizzasPartialState>) {}

  selectPizza(selectedPizzaId: string) {
    this.dispatch(pizzasActions.pizzaSelected({ selectedPizzaId }));
  }

  loadPizzas() {
    this.dispatch(pizzasActions.loadPizzas());
  }

  createPizza(pizza: Pizza) {
    this.dispatch(pizzasActions.createPizza({ pizza }));
  }

  updatePizza(pizza: Pizza) {
    this.dispatch(pizzasActions.updatePizza({ pizza }));
  }

  deletePizza(pizza: Pizza) {
    this.dispatch(pizzasActions.deletePizza({ pizza }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
