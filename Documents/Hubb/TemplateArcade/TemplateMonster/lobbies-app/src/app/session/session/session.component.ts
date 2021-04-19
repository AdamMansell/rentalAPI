import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import EventInfoService from 'src/app/services/event-info.service';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit, OnDestroy {

  // TODO: Add interface for event.
  public event = null; 
  public scope: string = '';
  public mediaUrl: string = environment.MEDIA_BLOB_URL;
  
  constructor(private eventInfoService: EventInfoService, private _Activatedroute:ActivatedRoute) { }

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
      this.scope = params.get('eventScope').toLowerCase();
    });
  }

 /**
  * Subscribes to the eventInfoService.isEventInfoLoaded and awaits info from the event to 
  * be sent to the presentation components of this section
  *
  * @returns void  
  */
  private getEventInfo(): void {
    this.eventInfoService.isEventInfoLoaded.subscribe(isLoaded => {
      if (isLoaded)
        this.eventInfoService.eventInfoData().subscribe(eventInfo => {
          this.event = eventInfo
        });
    });
  }


  ngOnInit() {
    this.storeEventScope();
    this.getEventInfo();
  }

  ngOnDestroy() {
    this.eventInfoService.isEventInfoLoaded.unsubscribe();
  }

}
