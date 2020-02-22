import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as pizzasActions from './pizzas.actions';
import { Pizza, PizzasService, NotifyService } from '@mdv-twenty-nine/core-data';
import { PizzasPartialState } from './pizzas.reducer';

@Injectable()
export class PizzasEffects {
  loadPizzas$ = createEffect(() =>
    this.dataPersistence.fetch(pizzasActions.loadPizzas, {
      run: (
        action: ReturnType<typeof pizzasActions.loadPizzas>,
        state: PizzasPartialState
      ) => {
        return this.pizzasService.all().pipe(
          map((pizzas: Pizza[]) => pizzasActions.pizzasLoaded({ pizzas }))
        );
      },
      onError: (action: ReturnType<typeof pizzasActions.loadPizzas>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addPizza$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(pizzasActions.createPizza, {
      run: (
        action: ReturnType<typeof pizzasActions.createPizza>,
        state: PizzasPartialState
      ) => {
        return this.pizzasService.create(action.pizza).pipe(
          map((pizza: Pizza) => pizzasActions.pizzaCreated({ pizza })),
          tap(() => this.notify.notify('Successfully Added a Pizza'))
        );
      },
      onError: (action: ReturnType<typeof pizzasActions.createPizza>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updatePizza$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(pizzasActions.updatePizza, {
      run: (
        action: ReturnType<typeof pizzasActions.updatePizza>,
        state: PizzasPartialState
      ) => {
        return this.pizzasService.update(action.pizza).pipe(
          map((pizza: Pizza) => pizzasActions.pizzaUpdated({ pizza })),
          tap(() => this.notify.notify('Successfully Updated a Pizza'))
        );
      },
      onError: (action: ReturnType<typeof pizzasActions.updatePizza>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deletePizza$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(pizzasActions.deletePizza, {
      run: (
        action: ReturnType<typeof pizzasActions.deletePizza>,
        state: PizzasPartialState
      ) => {
        return of(action.pizza).pipe(
          map((pizza: Pizza) => pizzasActions.pizzaDeleted({ pizza })),
          tap(() => this.notify.notify('Successfully Deleted a Pizza'))
        );
      },
      onError: (action: ReturnType<typeof pizzasActions.deletePizza>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PizzasPartialState>,
    private pizzasService: PizzasService,
    private notify: NotifyService
  ) {}
}
