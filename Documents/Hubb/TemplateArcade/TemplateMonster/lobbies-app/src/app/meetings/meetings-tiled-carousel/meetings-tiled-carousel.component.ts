import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'meetings-tiled-carousel',
  templateUrl: './meetings-tiled-carousel.component.html',
  styleUrls: ['./meetings-tiled-carousel.component.css']
})
export class MeetingsTiledCarouselComponent implements OnChanges {

  @Input() event;
  @Input() public scope: string;
  @Input() public mediaUrl: string;
  slides = [];

  constructor() { }

  //filter carousel for expired slides
  private loadTiledCarousel() {
    if (this.event && (this.event.meetings.carousel.items && this.event.meetings.carousel.items)) {
      for (let i=0; i < this.event?.meetings?.carousel?.items?.length; i++) {
        if (this.event.meetings.carousel.items.length == null || this.event.meetings.carousel.items.length == 0 || this.slides.length == 8) {
          break;
        }
        const expirationDate = new Date(this.event.meetings.carousel.items[i].expiration);
        const currentDate = new Date()
        if ( expirationDate > currentDate) {
          this.slides.push(this.event.meetings.carousel.items[i]);
        }
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.event.currentValue) {
      this.loadTiledCarousel();
    }
  }
}
