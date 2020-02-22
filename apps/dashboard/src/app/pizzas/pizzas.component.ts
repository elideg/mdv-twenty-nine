import { PizzasFacade } from '@mdv-twenty-nine/core-state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pizza } from '@mdv-twenty-nine/core-data';
import { FormGroup, FormGroupDirective, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdv-twenty-nine-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  form: FormGroup;
  selectedPizza$: Observable<Pizza> = this.pizzasFacade.selectedPizza$;
  pizzas$: Observable<Pizza[]> = this.pizzasFacade.allPizzas$;

  constructor(
      private fb: FormBuilder,
      private pizzasFacade: PizzasFacade
  ) { }

  ngOnInit() {
      this.initForm();
      this.pizzasFacade.loadPizzas();
      this.selectPizza({ id: null } as Pizza);
  }

  selectPizza(pizza: Pizza) {
      this.form.patchValue(pizza);
      this.pizzasFacade.selectPizza(pizza.id);
  }

  cancel() {
      this.selectPizza({ id: null } as Pizza);
      this.form.reset();
  }

  savePizza(formDirective: FormGroupDirective) {
      if (this.form.invalid) return;
      if (this.form.value.id) {
          this.pizzasFacade.updatePizza(this.form.value);
          this.selectPizza({ id: null } as Pizza);
      } else {
          this.pizzasFacade.createPizza(this.form.value);
          this.selectPizza({ id: null } as Pizza);
      }
  }

  deletePizza(pizza: Pizza) {
      this.pizzasFacade.deletePizza(pizza);
  }

  initForm() {
      this.form = this.fb.group({
          id: [''],
          name: ['', Validators.compose([Validators.required])],
          calories: ['', Validators.compose([Validators.required])],
          mainTopping: [''],
          secondaryTopping: ['']
      })
  }

}
