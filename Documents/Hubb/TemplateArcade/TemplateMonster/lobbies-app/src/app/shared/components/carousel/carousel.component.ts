import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnChanges {
  @Input() buttonText;
  @Input() carouselType = 'lobby'
  @Input() heading = '';
  @Input() items = [];
  @Input() scope;
  @Input() custom;
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
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      990: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
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
      1500: {
        slidesPerView: 4,
        spaceBetween: 10,
      }
    }

  };
  constructor() { }

  private loadCarousel() {
    if (this.items) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items.length == 0 || this.slides.length == 8) {
          break;
        }
        const expirationDate = new Date(this.items[i].expiration);
        const currentDate = new Date()
        if (expirationDate > currentDate) {
          this.slides.push(this.items[i]);
        }
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadCarousel();
  }

}
