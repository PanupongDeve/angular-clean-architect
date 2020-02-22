import { Injectable } from '@angular/core';
import { repositories, Repositories } from './Repositories'

@Injectable({
  providedIn: 'root'
})
export class RepositoriesInjector {
  private repositories: Repositories;

  constructor() {
    this.repositories = repositories;
  }

  getRepositories(): Repositories {
    return this.repositories;
  }

  getHelpers() {
    
  }

}