import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'community-tiled-carousel',
  templateUrl: './community-tiled-carousel.component.html',
  styleUrls: ['./community-tiled-carousel.component.css']
})
export class CommunityTiledCarouselComponent implements OnChanges {

  @Input() event;
  @Input() public scope: string;
  @Input() mediaUrl: string = ''
  public slides: Array<any> = [];

  constructor() { }

  //filter carousel for expired slides
  private loadCarousel() {
    if (this.event && (this.event.community.carousel.items && this.event.community.carousel.items)) {
      for (let i=0; i < this.event?.community?.carousel?.items?.length; i++) {
        if (this.event.community.carousel.items.length == null || this.event.community.carousel.items.length == 0 || this.slides.length == 8) {
          break;
        }
        const expirationDate = new Date(this.event.community.carousel.items[i].expiration);
        const currentDate = new Date()
        if ( expirationDate > currentDate) {
          this.slides.push(this.event.community.carousel.items[i]);
        }
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.event.currentValue) {
      this.loadCarousel();
    }
  }

}
