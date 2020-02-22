import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasItemComponent } from './pizzas-item.component';

describe('PizzasItemComponent', () => {
  let component: PizzasItemComponent;
  let fixture: ComponentFixture<PizzasItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzasItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
