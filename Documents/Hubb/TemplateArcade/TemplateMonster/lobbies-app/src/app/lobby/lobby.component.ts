import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import EventInfoService from '../services/event-info.service';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
})

export class LobbyComponent implements OnInit, OnDestroy {

  // TODO: Add interface for event.
  public event = null; 
  public scope: string = '';
  public eventLobbyVideo: object = null;
  public mediaUrl: string = environment.MEDIA_BLOB_URL;
  
  constructor(
    private eventInfoService: EventInfoService, 
    private _Activatedroute:ActivatedRoute,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    this.storeEventScope();
    this.grabScope();
    this.initEventInfo();
  }

  ngOnDesroy(): void {
    this.eventInfoService.isEventInfoLoaded.unsubscribe();
  }

 /**
  * it pushes the next value of the event scope so the app.component is aware of the change and get the right petition if necessary.
  * 
  * @returns void
  */
  private storeEventScope() {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.eventInfoService.eventScope.next(params.get('eventScope').toLowerCase());
    });
  }

/**
  * Subscribes to the eventInfoService.isEventInfoLoaded and awaits info from the event to 
  * be sent to the presentation components of this section, here is the plce to add any initialization
  * of data.
  *
  * @returns void  
  */
  private initEventInfo(): void {
    this.eventInfoService.isEventInfoLoaded.subscribe(isLoaded => {
      if (isLoaded)
        this.eventInfoService.eventInfoData().subscribe(eventInfo => {
          this.event = eventInfo;
          this.setLatestEventLobbyVideo();
        });
    });
  }

  private grabScope(): void {
    this.eventInfoService.eventScope.subscribe(eventScope => {
      if (eventScope) {
        this.scope = eventScope.toLowerCase();
      }
    });
  }

  
  public setLatestEventLobbyVideo(): void {
    console.log('evet lobby video is | ', this.eventLobbyVideo);
    const today = new Date();
    if (this.event.lobby.video && this.event.lobby.video.length) {
      this.eventLobbyVideo = this.event.lobby.video
        .map(video => this.convertVideoUrl(video))
        .sort((videoA, videoB) => {
        const dateA = new Date(videoA.date);
        const dateB = new Date(videoB.date);
        return dateA.getTime() - dateB.getTime();
      }).find((video) => {
        const currentVideoDate = moment(video.date);
        const todayTime = moment(today, 'yyyy-MM-DD t HH:mm');
        const isBefore = currentVideoDate.isAfter(todayTime);
        return isBefore;
      });
    }
    console.log('lobby component | ', this.eventLobbyVideo);
  }

  /**
   * Attaches the video url sanitized and ready to be added to the iframe on the video lobby component.
   * 
   * @param object video 
   * @return object
   */
  public convertVideoUrl(video): object {
    if (video.type === 'vimeo') {
      video.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${video.code}?autoplay=0`);
    } else if (video.type === 'youtube') {
      video.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.code}?autoplay=0`);
    }

    return video;
  }

  ngOnDestroy() {
    this.eventInfoService.isEventInfoLoaded.unsubscribe();
  }

}