import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Pizza } from '@mdv-twenty-nine/core-data';

@Component({
  selector: 'mdv-twenty-nine-pizzas-details',
  templateUrl: './pizzas-details.component.html',
  styleUrls: ['./pizzas-details.component.scss']
})
export class PizzasDetailsComponent implements OnInit {
  originalName;
  currentPizza: Pizza

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() form: FormGroup;
  @Input() set pizza(value) {
    if (value) this.originalName = value.name;
      this.currentPizza = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(pizza: Pizza) {
    this.saved.emit(pizza);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective)
    formDirective.resetForm()
  }
}
