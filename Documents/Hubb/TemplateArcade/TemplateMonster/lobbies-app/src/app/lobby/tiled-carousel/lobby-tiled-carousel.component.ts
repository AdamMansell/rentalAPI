import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lobby-tiled-carousel',
  templateUrl: './lobby-tiled-carousel.component.html',
  styleUrls: ['./lobby-tiled-carousel.component.css']
})


export class LobbyTiledCarouselComponent implements OnChanges {
  @Input() public event: any;
  @Input() public scope: string;
  public slides: any = [];
  @Input() public mediaUrl: string;
  

  constructor() {}

  /**
   * Loads the carousel tiles by using the event object.
   * @returns void
   */
  private loadTiledCarousel(): void {
    if (
      this.event && 
      (this.event.featuredSessionsCarousel.items && this.event.featuredSessionsCarousel.items.length)
      ) {
        for (let i=0; i < this.event?.featuredSessionsCarousel?.items?.length; i++) {
        const expirationDate = new Date(this.event?.featuredSessionsCarousel?.items[i].expiration);
        const currentDate = new Date()
        if ( expirationDate > currentDate) {
          this.slides.push(this.event?.featuredSessionsCarousel?.items[i]);
        }
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.event?.currentValue) {
      this.event = changes.event.currentValue;
      this.loadTiledCarousel();
    }
  }

}
