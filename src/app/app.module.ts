import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { MainComponent } from './main/main.component';
import {StopWatchComponent} from './stop.watch/stop.watch.component';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    MainComponent,
    StopWatchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
