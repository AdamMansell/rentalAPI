import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SharedModule } from '../shared/shared.module';

import { CommunityRoutingModule } from './community-routing.module';

@NgModule({
    imports: [ 
        CommonModule, 
        CommunityRoutingModule, 
        NgxUsefulSwiperModule,
        SharedModule
    ],
    declarations: [ CommunityRoutingModule.components ]
})
export class CommunityModule { }