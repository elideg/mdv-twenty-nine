import { PizzasFacade } from '@mdv-twenty-nine/core-state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '@mdv-twenty-nine/core-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdv-twenty-nine-pizzas-item',
  templateUrl: './pizzas-item.component.html',
  styleUrls: ['./pizzas-item.component.scss']
})
export class PizzasItemComponent implements OnInit {
  pizzas$: Observable<Pizza>;

  constructor(
    private route: ActivatedRoute,
    private pizzasFacade: PizzasFacade
  ) { }

  ngOnInit() {
    this.pizzasFacade.loadPizzas();
    this.route.params.subscribe((param) => this.pizzasFacade.selectPizza(param['id']));
    this.pizzas$ = this.pizzasFacade.selectedPizza$
  }

}
