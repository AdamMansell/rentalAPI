import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'exhibition-carousel',
  templateUrl: './exhibition-carousel.component.html',
  styleUrls: ['./exhibition-carousel.component.css']
})
export class ExhibitionCarouselComponent implements OnChanges {

  @Input() event: any = null;
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
      990: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1330: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    }

  };
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.event.currentValue) {
      this.event = changes.event.currentValue;
      this.loadCarousel();
    }
  }

  private loadCarousel(): void {
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
