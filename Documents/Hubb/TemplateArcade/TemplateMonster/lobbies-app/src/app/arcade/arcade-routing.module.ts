import { ArcadeComponent } from './arcade.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ArcadeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArcadeRoutingModule {
  static components = [
    ArcadeComponent,
  ]
}
