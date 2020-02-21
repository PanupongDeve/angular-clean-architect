import { Component, OnInit } from '@angular/core';
import { RepositoriesInjector } from '../../RepositoriesInjector';
import { CatsRepository } from 'src/RepositoriesInjector/Repositories/CatsRepository';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'ang-clean-arc';
  catsRepository: CatsRepository;
 

  constructor(
    private repositoriesInjector: RepositoriesInjector
  ) {
    const repositories = this.repositoriesInjector.getRepositories();
    this.catsRepository = repositories.catsRepository;
  }

  async ngOnInit(){
    const data = await this.catsRepository.getCats();
    console.log(data);
  }

}
