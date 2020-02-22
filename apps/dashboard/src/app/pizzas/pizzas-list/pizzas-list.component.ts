import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Pizza } from '@mdv-twenty-nine/core-data';

@Component({
  selector: 'mdv-twenty-nine-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.scss']
})
export class PizzasListComponent implements OnInit {
  @Input() pizzas: Pizza[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  select(pizza: Pizza) {
    this.selected.emit(pizza);
  }

  delete(pizza: Pizza) {
    this.deleted.emit(pizza);
  }
}
