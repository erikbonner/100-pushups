import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './material.module';
import {TimerDialogComponent} from './timer-dialog/timer-dialog.component';
import {TimerComponent} from './timer/timer.component';
import { WeekTableComponent } from './week-table/week-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WeekTableComponent,
    TimerComponent,
    TimerDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  entryComponents: [TimerDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
