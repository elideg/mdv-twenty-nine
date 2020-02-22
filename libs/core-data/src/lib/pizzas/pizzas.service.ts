import { Pizza } from './pizzas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { of } from 'rxjs';
import * as uuid from 'uuid/v1';

const BASE_URL = 'https://level-up-api-snfwxrkzok.now.sh'

@Injectable({
  providedIn: 'root'
})
export class PizzasService {
model = 'pizzas'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(pizza: Pizza) {
    return of({ id: uuid(), ...pizza })
  }

  delete(pizza: Pizza) {
    return this.httpClient.delete(this.getUrlForId(pizza.id));
  }

  update(pizza: Pizza) {
    return this.httpClient.put(this.getUrlForId(pizza.id), pizza);
  }
}
