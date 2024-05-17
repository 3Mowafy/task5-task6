import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private countIncrement: any;
  private count: number = 0;
  storeNumbers: number[] = []

  constructor() { }

  increseCount() {
    this.countIncrement = setInterval(() => {
      this.storeNumbers.push(this.count);
      this.count++;
    }, 1000)
  }

  stopCount() {
    clearInterval(this.countIncrement)
  }
}
