import { UiLibModule } from '@mdv-twenty-nine/ui-lib';
import { CoreStateModule } from './../../../../libs/core-state/src/lib/core-state.module';
import { PizzasDetailsComponent } from './pizzas/pizzas-details/pizzas-details.component';
import { PizzasListComponent } from './pizzas/pizzas-list/pizzas-list.component';
import { PizzasItemComponent } from './pizzas/pizzas-item/pizzas-item.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { RoutingModule } from './routing.module';
import { CoreDataModule } from '@mdv-twenty-nine/core-data';
import { MaterialModule } from '@mdv-twenty-nine/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PizzasComponent, PizzasItemComponent, PizzasListComponent, PizzasDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
