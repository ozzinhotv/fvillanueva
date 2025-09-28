import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
})
export class CardsComponent { 
  @Input() year!: string;
  @Input() text!: string;
  @Input() index = 0;
}
