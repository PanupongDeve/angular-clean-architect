import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceInjector } from '../ServiceInjector';
import { VendorModule } from '../vendor/vendor.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    VendorModule
  ],
  providers: [ServiceInjector],
  bootstrap: [AppComponent]
})
export class AppModule { }
