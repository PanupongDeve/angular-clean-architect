import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriesInjector } from '../RepositoriesInjector';
import { combineReducers } from '../Store';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyCounterComponent } from './pages/my-counter/my-counter.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(combineReducers)
  ],
  providers: [RepositoriesInjector],
  bootstrap: [AppComponent]
})
export class AppModule { }
