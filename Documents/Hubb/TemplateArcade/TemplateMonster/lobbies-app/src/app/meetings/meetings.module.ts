import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SharedModule } from '../shared/shared.module';

import { MeetingsRoutingModule } from './meetings-routing.module';

@NgModule({
    imports: [ 
        CommonModule, 
        MeetingsRoutingModule, 
        NgxUsefulSwiperModule,
        SharedModule
    ],
    declarations: [ MeetingsRoutingModule.components ]
})
export class MeetingsModule { }