import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import AppRoutingModule from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// TODO: Remove after adding feature modules.
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import AppComponent from './app.component';

import { LobbyModule } from './lobby/lobby.module';
import { CommunityModule } from './community/community.module';
import { ExhibitionModule } from './exhibition/exhibition.module';
import { MeetingsModule } from './meetings/meetings.module';
import { MultiDimensionalLobbyModule } from './multi-dimensional-lobby/multi-dimensional-lobby.module';

//Session
import { SessionModule } from './session/session.module';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

// SERVICES
import { ApiService } from './services/api.service';
import EventInfoService from './services/event-info.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    //Session
    SharedModule,
    SessionModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    // Features
    LobbyModule,
    CommunityModule,
    ExhibitionModule,
    MeetingsModule,
    AdminModule,
    MultiDimensionalLobbyModule,

    //Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule
  ],
  providers: [
    ApiService,
    EventInfoService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
