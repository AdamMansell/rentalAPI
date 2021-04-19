import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiDimensionalLobbyRoutingModule } from './multi-dimensional-lobby-routing.module';

@NgModule({
    imports: [ 
        CommonModule, 
        MultiDimensionalLobbyRoutingModule
    ],
    declarations: [ MultiDimensionalLobbyRoutingModule.components ]
})
export class MultiDimensionalLobbyModule { }