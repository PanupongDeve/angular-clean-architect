import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {


  constructor(
    
  ) {
   
  }

  ngAfterContentInit() {
    const appRoot = document.querySelector('body > app-root');
    appRoot.removeAttribute('ng-version')
  }

}
