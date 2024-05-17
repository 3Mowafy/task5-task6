import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  taskClass: string[] = ['w-25', 'h-25', 'rounded', 'text-center', 'text-white', 'bg-primary', 'd-flex', 'justify-content-center', 'align-items-center']

  ngOnInit() {
    AOS.init()
  }
}
