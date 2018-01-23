import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FirstComponent } from './first.component';


@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [FirstComponent]
})
export class AppModule { }
