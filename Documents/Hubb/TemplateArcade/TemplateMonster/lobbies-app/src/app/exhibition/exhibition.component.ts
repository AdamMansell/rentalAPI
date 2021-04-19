import { Component, OnInit } from '@angular/core';
import EventInfoService from '../services/event-info.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.css']
})
export class ExhibitionComponent implements OnInit {

  public event: any = null;
  public scope: string = '';
  public mediaUrl: string = environment.MEDIA_BLOB_URL;


  constructor(private eventInfoService: EventInfoService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.storeEventScope();
    this.loadEventInfoData();
    this.grabScope();
  }

  private loadEventInfoData() {

    this.eventInfoService.isEventInfoLoaded.subscribe(isLoaded => {
      if (isLoaded)
        this.eventInfoService.eventInfoData().subscribe(eventInfo => {
          this.event = eventInfo
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
}
