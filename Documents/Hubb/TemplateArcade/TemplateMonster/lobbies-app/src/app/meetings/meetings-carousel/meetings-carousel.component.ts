import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'meetings-carousel',
  templateUrl: './meetings-carousel.component.html',
  styleUrls: ['./meetings-carousel.component.css']
})
export class MeetingsCarouselComponent implements OnChanges {

  @Input()event;
  @Input() public scope: string;
  @Input() mediaUrl: string = '';
  slides = [];

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
        slidesPerView: 2,
        spaceBetween: 2,
      },
      990: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1082: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1350: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    }

  };
  constructor() { }

  private loadCarousel() {
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
      //filter carousel for expired slides
      this.loadCarousel();
    }
  }

}

