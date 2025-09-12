import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { LegacySectionComponent } from './sections/legacy-section/legacy-section.component';
import { ImgDisplaySectionComponent } from './sections/img-display-section/img-display-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { FVillanuevaComponent } from './sections/fVillanueva/fVillanueva.component';

@Component({
  selector: 'app-landing-page',
  imports: [HeroSectionComponent,
    LegacySectionComponent,
    FVillanuevaComponent,
    ImgDisplaySectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent { }
