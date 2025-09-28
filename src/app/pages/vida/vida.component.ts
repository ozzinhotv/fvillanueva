import { Component, OnInit } from '@angular/core';
import { CardsComponent } from "./components/cards/cards.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vida',
  templateUrl: './vida.component.html',
  imports: [CardsComponent, CommonModule],
})
export class VidaComponent implements OnInit {
  entries: [string, string][] = [];

  async ngOnInit() {
    const { TIMELINE } = await import('./data/vida.data');
    this.entries = Object.entries(TIMELINE);
    console.log('entries', this.entries.length);
  }

  trackByIndex = (i: number) => i; // estabiliza el *ngFor
}
