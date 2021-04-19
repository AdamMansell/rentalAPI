import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExhibitionComponent } from './exhibition.component';
import { ExhibHeaderComponent } from './header/exhib-header.component';
import { ExhibitionCarouselComponent } from './exhibition-carousel/exhibition-carousel.component';
import { ExhibitionTiledCarouselComponent } from './exhibition-tiled-carousel/exhibition-tiled-carousel.component';
import { ExhibSponsorsComponent } from './exhib-sponsors/exhib-sponsors.component';


const routes: Routes = [
    { path: '', component: ExhibitionComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ExhibitionRoutingModule {
    static components = [ 
        ExhibitionComponent,
        ExhibHeaderComponent,
        ExhibitionCarouselComponent,
        ExhibitionTiledCarouselComponent,
        ExhibSponsorsComponent
    ];
}
