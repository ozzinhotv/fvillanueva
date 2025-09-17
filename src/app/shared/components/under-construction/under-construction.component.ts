import { Component, Input } from '@angular/core';
import { SingleImgCarouselComponent } from '../../ui/single-img-carousel/single-img-carousel.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-under-construction',
  imports: [ SingleImgCarouselComponent, RouterLink],
  templateUrl: './under-construction.component.html',
})
export class UnderConstructionComponent { 
  @Input() title = 'Vista en desarrollo';
  @Input() email = 'fcmvillanueva@gmail.com';
}

