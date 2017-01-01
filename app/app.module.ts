//imports from baremodule name
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//imports from relative file path
import {AppComponent} from './app.component';

@NgModule({
  imports: [
      BrowserModule
  ],
  declarations: [
      AppComponent
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule {}