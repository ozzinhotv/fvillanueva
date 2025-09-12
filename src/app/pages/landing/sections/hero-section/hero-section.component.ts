import { Component } from '@angular/core';
import { TitleComponent } from './components/title/title.component';

@Component({
  selector: 'app-hero-section',
  imports: [ TitleComponent ],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent { }
