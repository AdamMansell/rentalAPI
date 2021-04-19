import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeetingsComponent } from './meetings.component';
import { MeetHeaderComponent } from './header/meet-header.component';
import { MeetLinksComponent } from './links/meet-links.component';
import { MeetingsCarouselComponent } from './meetings-carousel/meetings-carousel.component';
import { MeetingsTiledCarouselComponent } from './meetings-tiled-carousel/meetings-tiled-carousel.component';

const routes: Routes = [
    { path: '', component: MeetingsComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class MeetingsRoutingModule {
    static components = [ 
        MeetingsComponent,
        MeetHeaderComponent,
        MeetLinksComponent,
        MeetingsCarouselComponent,
        MeetingsTiledCarouselComponent
    ];
}