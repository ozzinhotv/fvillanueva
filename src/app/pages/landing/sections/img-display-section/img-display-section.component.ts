import { Component, Input } from '@angular/core';
import { ImgDisplaySectionInterface } from './interface/img-display-section.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img-display-section',
  imports: [ CommonModule],
  templateUrl: './img-display-section.component.html',
})
export class ImgDisplaySectionComponent {
  @Input() images: ImgDisplaySectionInterface[] | null = null;

  imgDisplaySectionInterface : ImgDisplaySectionInterface[] = [
    {
      id: 1,
      title: 'Main Entrance',
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Living Spaces',
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Studio Workshop',
      src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Garden Courtyard',
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop',
    },
  ]
   get displayed(): ImgDisplaySectionInterface[] {
    return this.images && this.images.length ? this.images : this.imgDisplaySectionInterface;
  }
 }
