import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { BackgroundComponent } from './components/background/background.component';
import { LogoComponent } from './components/logo/logo.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent,
    MainLayoutComponent,
    BackgroundComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    //carousel
    NgxUsefulSwiperModule,
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
    MainLayoutComponent,
    BackgroundComponent,
    
    LogoComponent
  ]
})
export class SharedModule { }
