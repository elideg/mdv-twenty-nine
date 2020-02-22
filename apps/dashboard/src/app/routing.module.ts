import { PizzasItemComponent } from './pizzas/pizzas-item/pizzas-item.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { LoginComponent } from '@mdv-twenty-nine/ui-lib';
import { WildComponent } from '@mdv-twenty-nine/ui-lib';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pizzas', children: [
    { path: '', component: PizzasComponent },
    { path: ':id', component: PizzasItemComponent }
  ] },
  { path: '404', component: WildComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
