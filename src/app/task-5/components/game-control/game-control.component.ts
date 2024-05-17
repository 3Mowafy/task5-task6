import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.scss'
})
export class GameControlComponent {
  constructor(private _game: GameService) { }

  startGame() {
    this._game.increseCount();
  }

  stopGame() {
    this._game.stopCount();
  }

  clearData() {
    this._game.stopCount();
    this._game.storeNumbers = [];
  }
}
