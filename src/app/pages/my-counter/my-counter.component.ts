import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  count: number;
  cats: Array<any>;

  constructor(private store: Store<{ count: number, cats: Array<any> }>) {
    store.subscribe(async (data) => {
      this.count = data.count;
      this.cats = await new Promise((resolve) => {
        resolve(data.cats);
      });
    });
  }

  ngOnInit() {
    
  }

  increment(inc) {
    
  }

  decrement() {
    
  }

  reset() {
    
  }

}
