import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MultiDimensionalLobbyComponent } from './multi-dimensional-lobby.component';
import { MultiDimensionalNineSessionsLobbyComponent } from './lobbies/sessions/nine/multi-dimensional-nine-sessions-lobby.component';
import { MultiDimensionalFiveExpoComponent } from './lobbies/expo/five/multi-dimensional-five-expo.component';
import { MultiDimensionalThirtySponsorLobbyComponent } from './lobbies/sponsor/multi-dimensional-thirty-sponsor-lobby/multi-dimensional-thirty-sponsor-lobby.component';
import { MobileEventTilesComponent } from './components/mobile-event-tiles/mobile-event-tiles.component';

const routes: Routes = [
    { path: ':lobbyType/:subType', component: MultiDimensionalLobbyComponent },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class MultiDimensionalLobbyRoutingModule {
    static components = [ 
        MultiDimensionalLobbyComponent,
        
        // sessions 3d lobby types
        MultiDimensionalNineSessionsLobbyComponent,
        
        // expo 3D lobby types
        MultiDimensionalFiveExpoComponent,

        // sponsor 3d lobby types
        MultiDimensionalThirtySponsorLobbyComponent,
        
        //shared
        MobileEventTilesComponent
    ];
}
