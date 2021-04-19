import { Component, OnInit, OnDestroy } from '@angular/core';
import EventInfoService from './services/event-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export default class AppComponent implements OnInit, OnDestroy {

  // TODO: Add an interface to event object to define props.
  public event:any = null;
  public scope: string = '';
  public scopeNotAvailableError: boolean = false;
  public scriptNotLoadedError: boolean = false;

  constructor(
    private eventInfoService: EventInfoService) {}

  ngOnInit() {
    this.buildScript();
    this.awaitEventInfo();
    this.eventErrorsListener();
  }

   public buildScript(): void {
     this.eventInfoService.eventScope.subscribe(eventScope => {
       if (eventScope) {
        // quick set timeout to avoid alreadyChecked error on angular life cycle.
        setTimeout(() => {
          this.scope = eventScope;

          if (this.scope === 'community' ||
              this.scope === 'lobby' ||
              this.scope === 'sessions' ||
              this.scope === 'exhibition' ||
              this.scope === 'meetings' ||
              this.scope === 'arcade') {
            this.scopeNotAvailableError = true;
          } else {
            this.scopeNotAvailableError = false;
          }
         });

        this.eventInfoService.buildScript(eventScope);
       }
     });
   }

   public awaitEventInfo(): void {
     this.eventInfoService.isEventInfoLoaded.subscribe(isLoaded => {
      if (isLoaded) {
        this.eventInfoService.eventInfoData().subscribe(eventInfo => {
          this.event = eventInfo;
        });
       }
    });
   }

   public eventErrorsListener(): void {
    this.eventInfoService.eventInfoError.subscribe(error => {
        if (error === 'EVENT_FILE_NOT_LOADED_ERROR') {
          this.scriptNotLoadedError = true;
        }
    });
   }

   ngOnDestroy() {
    this.eventInfoService.isEventInfoLoaded.unsubscribe();
    this.eventInfoService.eventScope.unsubscribe();
    this.eventInfoService.eventInfoError.unsubscribe();
  }

}
