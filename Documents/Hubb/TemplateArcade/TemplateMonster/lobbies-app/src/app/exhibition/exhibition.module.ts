import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SharedModule } from '../shared/shared.module';

import { ExhibitionRoutingModule } from './exhibition-routing.module';

@NgModule({
    imports: [ 
        CommonModule, 
        ExhibitionRoutingModule, 
        NgxUsefulSwiperModule,
        SharedModule
    ],
    declarations: [ ExhibitionRoutingModule.components ]
})
export class ExhibitionModule { }