import { Injectable } from '@angular/core';
import { CounterStore } from './CounterStore';
import { CatsStore } from './CatsStore';

export class RxStore {
  counterStore: CounterStore;
  catsStore: CatsStore;
  
  constructor() {
    this.counterStore = new CounterStore();
    this.catsStore = new CatsStore();
  }


}