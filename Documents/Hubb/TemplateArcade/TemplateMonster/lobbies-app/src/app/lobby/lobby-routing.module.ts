import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LobbyComponent } from './lobby.component';
import { LobbyTiledCarouselComponent } from './tiled-carousel/lobby-tiled-carousel.component';
import { LobbyVButtonsComponent } from './v-buttons/lobby-v-buttons.component';
import { LobbyHeaderComponent } from './header/lobby-header.component';
import { LobbyCarouselMainComponent } from './carousel-main/lobby-carousel-main.component';
import { LobbySponsorsComponent } from './sponsors/lobby-sponsors.component';
import { LobbyVideoComponent } from './video/lobby-video.component';

const routes: Routes = [
    { path: '', component: LobbyComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class LobbyRoutingModule {
    static components = [ 
        LobbyComponent,
        LobbyTiledCarouselComponent,
        LobbyVButtonsComponent,
        LobbyHeaderComponent,
        LobbyCarouselMainComponent,
        LobbySponsorsComponent,
        LobbyVideoComponent
    ];
}