import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveInactiveService {
  Users = [
    { name: 'Mohamed', active: true },
    { name: 'Ahmed', active: true },
    { name: 'Hamdy', active: false },
    { name: 'Yousef', active: false },
  ]
  constructor() { }

  setActive(index: number) {
    this.Users[index].active = !this.Users[index].active
  }
}
