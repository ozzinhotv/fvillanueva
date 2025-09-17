import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'single-img-carousel',
  imports: [CommonModule],
  templateUrl: './single-img-carousel.component.html',
})
export class SingleImgCarouselComponent {
  @Input() colors: string[] = ['#e5e7eb', '#fecaca', '#fde68a', '#bbf7d0', '#bfdbfe'];
  @Input() heightClass = 'h-64 md:h-80'; // cambia la altura si quieres

  index = 0;

  next() {
    this.index = (this.index + 1) % this.colors.length;
  }

  prev() {
    this.index = (this.index - 1 + this.colors.length) % this.colors.length;
  }

  goTo(i: number) {
    this.index = i;
  }
}