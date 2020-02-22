import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasDetailsComponent } from './pizzas-details.component';

describe('PizzasDetailsComponent', () => {
  let component: PizzasDetailsComponent;
  let fixture: ComponentFixture<PizzasDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzasDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
