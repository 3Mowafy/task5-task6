import { Component } from '@angular/core';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-task-5',
  templateUrl: './task-5.component.html',
  styleUrl: './task-5.component.scss'
})
export class Task5Component {
  numbers !: number[];

  constructor(public game: GameService) { }
}
