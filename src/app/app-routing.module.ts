import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyCounterComponent } from './pages/my-counter/my-counter.component';

const routes: Routes = [
  { path: '', component: MyCounterComponent },
  { path: 'test', component: MyCounterComponent },
  { path: 'doc', component: HomePageComponent },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
