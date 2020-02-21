import { Injectable } from '@angular/core';
import { Repositories } from './Repositories'

@Injectable({
  providedIn: 'root'
})
export class RepositoriesInjector {
  private repositories: Repositories;

  constructor() {
    this.repositories = new Repositories();
  }

  getRepositories(): Repositories {
    return this.repositories;
  }

}