import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArcadeComponent } from './arcade.component';

import { ArcadeRoutingModule } from './arcade-routing.module'

@NgModule({
  declarations: [ArcadeComponent],
  imports: [
    CommonModule,
    ArcadeRoutingModule
  ]
})
export class ArcadeModule { }
