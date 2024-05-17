import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task5Component } from './task-5/task-5.component';
import { Task6Component } from './task-6/task-6.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'task-5',
    component: Task5Component
  },
  {
    path: 'task-6',
    component: Task6Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
