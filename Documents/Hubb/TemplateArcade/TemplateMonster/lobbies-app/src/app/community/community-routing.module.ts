import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunityComponent } from './community.component';
import { CommunityCarouselComponent } from './community-carousel/community-carousel.component';
import { CommHeaderComponent } from './header/comm-header.component';
import { CommunityTiledCarouselComponent } from './community-tiled-carousel/community-tiled-carousel.component';
import { CommLinksComponent } from './links/comm-links.component';

const routes: Routes = [
    { path: '', component: CommunityComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class CommunityRoutingModule {
    static components = [ 
        CommunityComponent,
        CommunityCarouselComponent,
        CommHeaderComponent,
        CommunityTiledCarouselComponent,
        CommLinksComponent
    ];
}