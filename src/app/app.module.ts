import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameControlComponent } from './task-5/components/game-control/game-control.component';
import { OddComponent } from './task-5/components/odd/odd.component';
import { EvenComponent } from './task-5/components/even/even.component';
import { Task5Component } from './task-5/task-5.component';
import { Task6Component } from './task-6/task-6.component';
import { HomeComponent } from './home/home.component';
import { HomeBtnComponent } from './home-btn/home-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    Task5Component,
    Task6Component,
    HomeComponent,
    HomeBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
