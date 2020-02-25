import { Injectable } from '@angular/core';
import { CounterStore } from './CounterStore';

@Injectable({
  providedIn: 'root'
})
export class RxStore {
  counterStore: CounterStore;

  constructor() {
    this.counterStore = new CounterStore();
  }


}