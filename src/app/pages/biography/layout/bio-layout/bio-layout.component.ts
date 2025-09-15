import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bio-layout',
  imports: [CommonModule],
  templateUrl: './bio-layout.component.html',
})
export class BioLayoutComponent {
  @Input() paras: string[] = [];

  aspect(i: number) {
    return i % 2 === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]';
  }
}
