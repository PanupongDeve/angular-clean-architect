import { Component, OnInit } from '@angular/core';
import { ServiceInjector } from '../../../ServiceInjector';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'ang-clean-arc';
  cats = [];

  constructor(
    private serviceInjector: ServiceInjector
  ) {

  }

  async ngOnInit(){
    const { repositories } = this.serviceInjector;
    const { catsRepository } = repositories;
    this.cats = await catsRepository.getCats();
    console.log(this.cats);
  }

}
