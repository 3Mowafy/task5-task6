import { Component } from '@angular/core';
import { ActiveInactiveService } from './services/active-inactive.service';

@Component({
  selector: 'app-task-6',
  templateUrl: './task-6.component.html',
  styleUrl: './task-6.component.scss'
})
export class Task6Component {
  constructor(public activeorIn: ActiveInactiveService) { }

  setToActive(index: number) {
    this.activeorIn.setActive(index)
  }
}
