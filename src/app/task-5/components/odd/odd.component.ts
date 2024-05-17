import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.scss'
})
export class OddComponent {
  @Input() oddNumber!: number;

  bgColors: string[] = ['#AC43DE', '#DE437E', '#DE43DB', '#7A43DE', '#DE4C43', '#DE8DDC'];
  random: number = Math.floor(Math.random() * this.bgColors.length);

}
