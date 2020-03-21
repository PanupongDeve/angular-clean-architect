import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyCounterComponent } from './pages/my-counter/my-counter.component';
import { MyRxCounterComponent } from './pages/my-rx-counter/my-counter.component';
import { VendorModule } from 'src/vendor/vendor.module';


const routes: Routes = [
  { path: '', component: MyCounterComponent },
  { path: 'test', component: MyCounterComponent },
  { path: 'rx-store', component: MyRxCounterComponent },
  { path: 'doc', component: HomePageComponent },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  declarations: [
    HomePageComponent,
    MyCounterComponent,
    MyRxCounterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    VendorModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
