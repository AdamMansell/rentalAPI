import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'community-carousel',
  templateUrl: './community-carousel.component.html',
  styleUrls: ['./community-carousel.component.css']
})
export class CommunityCarouselComponent implements OnChanges {

  @Input() event;
  @Input() public scope: string;
  slides = [];
  @Input() 
  public mediaUrl: string = '';


  config: SwiperOptions = {

    navigation: {
      nextEl: '.swiper-button-next'
    },
    loop: true,
    spaceBetween: 15,
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 2,
      },
      990: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1500: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
    }

  };
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
