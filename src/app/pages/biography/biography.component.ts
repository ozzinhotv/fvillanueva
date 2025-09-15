import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BioSection } from './interface/bio.interface';
import { BioUIComponent } from './components/ui/bioUI/bioUI.component';
import { HeroBioComponent } from "./components/ui/hero-bio/hero-bio.component";

import { BioPart1 } from './components/content/bio-part1/bio-part1';
import { BioPart2 } from './components/content/bio-part2/bio-part2';
import { BioPart3 } from './components/content/bio-part3/bio-part3';
import { BioPart4 } from './components/content/bio-part4/bio-part4';



@Component({
  selector: 'app-biography',
  imports: [CommonModule, BioUIComponent, HeroBioComponent],
  templateUrl: './biography.component.html',
})
export class BiographyComponent {
  sections: BioSection[] = [
    { id: 'bio-1', title: 'Orígenes y formación (1900–1928)', component: BioPart1 },
    { id: 'bio-2', title: 'Primeras obras y gestión pública',   component: BioPart2, bandClass: 'bg-gray-200' },
    { id: 'bio-3', title: 'Vivienda, ciudad y CUC',            component: BioPart3, bandClass: 'bg-gray-300' },
    { id: 'bio-4', title: 'Docencia, instituciones y legado',  component: BioPart4, bandClass: 'bg-red-600' },
  ];
}
