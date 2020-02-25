import { Injectable } from '@angular/core';
import { Repositories } from './Repositories'
import { RxStore } from './RxStore';

@Injectable({
  providedIn: 'root'
})
export class ServiceInjector {
  public repositories: Repositories;
  public rxStore: RxStore;

  constructor() {
    this.repositories = new Repositories();
    this.rxStore = new RxStore();
  }

}