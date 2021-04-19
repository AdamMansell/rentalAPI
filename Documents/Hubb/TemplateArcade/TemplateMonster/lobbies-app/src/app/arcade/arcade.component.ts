import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import EventInfoService from '../services/event-info.service';
import { environment } from './../../environments/environment';
import { callGame } from './game/game';

@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.css']
})

export class ArcadeComponent implements OnInit {

  public event: any = null;
  public scope: string = '';
  public mediaUrl: string = environment.MEDIA_BLOB_URL;
  public score: number = 0;
  
  
  
  constructor(
    private eventInfoService: EventInfoService,
    private _Activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.storeEventScope();
    this.grabScope();    

    this.eventInfoService.isEventInfoLoaded.subscribe(isLoaded => {
      if (isLoaded)
        this.eventInfoService.eventInfoData().subscribe(eventInfo => {
          this.event = eventInfo;                   
          callGame(this.event.arcade, this.grabScore)
        });
    });
  };

  private grabScope(): void {
    this.eventInfoService.eventScope.subscribe(eventScope => {
      if (eventScope) {
        this.scope = eventScope.toLowerCase();
      }
    });
  }

  private storeEventScope(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      if (params.get('eventScope').toLowerCase()) {
        this.eventInfoService.eventScope.next(params.get('eventScope').toLowerCase());
      } else {
        this.eventInfoService.eventScope.next('EVENT_SCOPE_NOT_FOUND');
      }
    });
  }

  private grabScore = (gameScore): void => {
    this.score = gameScore;
    console.log('FINAL SCORE: ' + this.score)
  }
};