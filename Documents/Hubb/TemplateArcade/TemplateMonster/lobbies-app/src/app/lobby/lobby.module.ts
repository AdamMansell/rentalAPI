import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SharedModule } from '../shared/shared.module';

import { LobbyRoutingModule } from './lobby-routing.module';

@NgModule({
    imports: [ 
        CommonModule, 
        LobbyRoutingModule,
         NgxUsefulSwiperModule,
         SharedModule
     ],
    declarations: [ LobbyRoutingModule.components ]
})
export class LobbyModule { }