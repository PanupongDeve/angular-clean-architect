import { Component, OnInit } from '@angular/core';
import { ServiceInjector } from '../../../ServiceInjector';


@Component({
  selector: 'app-rx-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyRxCounterComponent implements OnInit {
  count: number;
  cats: Array<any>;


  constructor(private serviceInjector: ServiceInjector) {
    const { rxStore } = this.serviceInjector;
    const { counterStore, catsStore } = rxStore;
    counterStore.getCount().subscribe((count) => {
      this.count = count;
    });

    catsStore.getCats().subscribe((cats) => {
      this.cats = cats;
    });
  }

  async ngOnInit() {
    const { rxStore } = this.serviceInjector;
    const { catsStore } = rxStore;
    catsStore.setHandleError(this.handleError);
    await catsStore.fetchCats();
    
  }

  handleError(error) {
    window.alert(error);
  }

  increment() {
    const { rxStore } = this.serviceInjector;
    const { counterStore } = rxStore;
    counterStore.increment();
  }

  decrement() {
    const { rxStore } = this.serviceInjector;
    const { counterStore } = rxStore;
    counterStore.decrement();
  }

}
