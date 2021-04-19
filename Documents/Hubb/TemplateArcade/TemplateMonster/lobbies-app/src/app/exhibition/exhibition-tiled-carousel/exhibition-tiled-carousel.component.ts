import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'exhibition-tiled-carousel',
  templateUrl: './exhibition-tiled-carousel.component.html',
  styleUrls: ['./exhibition-tiled-carousel.component.css']
})
export class ExhibitionTiledCarouselComponent implements OnChanges {

  @Input() event;
  @Input() public scope: string;
  @Input() public mediaUrl: string = '';
  slides = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.event.currentValue) {
      this.event = changes.event.currentValue;
      this.loadTiledCarousel();
    }
  }

  private loadTiledCarousel() {
    for (let i=0; i < this.event.exhibition.carousel.items.length; i++) {
      if (this.event.exhibition.carousel.items.length == null || this.event.exhibition.carousel.items.length == 0 || this.slides.length == 8) {
        break;
      }
      const expirationDate = new Date(this.event.exhibition.carousel.items[i].expiration);
      const currentDate = new Date()
      if ( expirationDate > currentDate) {
        this.slides.push(this.event.exhibition.carousel.items[i]);
      }
    }
  }

}
