import { Component, Input } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrl: './even.component.scss'
})
export class EvenComponent {
  @Input() evenNumber!: number;

  bgColors: string[] = ['#034159', '#025951', '#02735E', '#038C3E', '#0CF25D', '#D97C2B'];
  random: number = Math.floor(Math.random() * this.bgColors.length);

  ngOnInit() {
    AOS.init()
  }
}
