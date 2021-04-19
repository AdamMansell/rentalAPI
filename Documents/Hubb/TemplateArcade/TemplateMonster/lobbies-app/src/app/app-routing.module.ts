import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'lobby/:eventScope',
    loadChildren: () => import('./lobby/lobby.module').then(m => m.LobbyModule)
  },
  {
    path: 'community/:eventScope',
    loadChildren: () => import('./community/community.module').then(m => m.CommunityModule)
  },
  {
    path: 'exhibition/:eventScope',
    loadChildren: () => import('./exhibition/exhibition.module').then(m => m.ExhibitionModule)
  },
  {
    path: 'meetings/:eventScope',
    loadChildren: () => import('./meetings/meetings.module').then(m => m.MeetingsModule)
  },
  {
    path: 'session',
    loadChildren: () => import('./session/session.module').then(m => m.SessionModule)
  },
  {
    path: 'admin/:eventScope',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '3d/:eventScope',
    loadChildren: () => import('./multi-dimensional-lobby/multi-dimensional-lobby.module').then(m => m.MultiDimensionalLobbyModule)
  },
  {
    path: 'arcade/:eventScope',
    loadChildren: () => import('./arcade/arcade.module').then(m => m.ArcadeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export default class AppRoutingModule { }
