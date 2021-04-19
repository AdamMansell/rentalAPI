import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';

  @Component({
    selector: 'lobby-carousel-main',
    templateUrl: './lobby-carousel-main.component.html',
    styleUrls: ['./lobby-carousel-main.component.css']
  })

export class LobbyCarouselMainComponent implements OnChanges {

  @Input() public event: any = null;
  @Input() public scope: string = '';
  @Input() public mediaUrl: string = '';

  public slides: any = [];

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
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    }

  };
  
  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.event?.currentValue) {
      this.filterCarouselData();
    }
  }

  public filterCarouselData(): void {
    if (
      this.event && 
      (this.event.featuredSessionsCarousel && this.event.featuredSessionsCarousel.items)
    ) {
      for (let i=0; i < this.event?.featuredSessionsCarousel?.items?.length; i++) {
        const expirationDate = new Date(this.event.featuredSessionsCarousel.items[i].expiration);
        const currentDate = new Date()
        if ( expirationDate > currentDate) {
          this.slides.push(this.event.featuredSessionsCarousel.items[i]);
        }
      }
    }
  }

}
