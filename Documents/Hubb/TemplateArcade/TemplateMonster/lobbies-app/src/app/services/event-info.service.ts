import { Renderer2, RendererFactory2, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

/**
 * Use a Service to automate creation of event config json data.
 */
export default class EventInfoService {

    private _renderer2: Renderer2;
    private _eventInfoData: {} = null;
    private counter = 0;

    public eventScope: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public isEventInfoLoaded: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
    public eventInfoError: BehaviorSubject<string> = new BehaviorSubject<string>('');

    constructor(
      private rendererFactory: RendererFactory2,
        @Inject(DOCUMENT) private _document: Document
    ) { 
          this._renderer2 = rendererFactory.createRenderer(null, null);
    }

    
  /**
   * Writes a new script tag into the body of the document.
   * Ex, 5eafef04-966a-438d-86d0-935d390d9538
   *
   * @returns void
   */
   public buildScript(eventScope: string): void {
      let script = this._renderer2.createElement('script');
      script.src = `${environment.MEDIA_BLOB_URL}/${eventScope}-public/resources/event-config.js`;
      // script.src = '../../assets/event-config.js';
      this._renderer2.appendChild(this._document.body, script);
      this.emmitScriptAlreadyLoaded();
   }
   /**
    * Sets the BehaviorSubject to true after attempting to create the script (optimistic approach)
    * Then we set the event info data from the DOM and assign it to the _eventInfoData.
    * 
    * @returns void
    */
   private emmitScriptAlreadyLoaded(): void {
        setTimeout(() => {
            if (this.getEventInfoFromDom() !== 'EVENT_INFO_NOT_AVAILABLE') {
              this._eventInfoData = this.getEventInfoFromDom();
              this.isEventInfoLoaded.next(true);
              this.counter = 0;
            } else {
              this.counter++;
              if (this.counter === 10) {
                console.log('script was not loaded  retry again later....');
                this.isEventInfoLoaded.next(false);
                this.eventInfoError.next('EVENT_FILE_NOT_LOADED_ERROR');
              } else {
                this.emmitScriptAlreadyLoaded();
              }
              
            }
        }, 200);
   }

  /**
   * This returns the event info data directly from the dom.
   * @returns the parsed json data from the 'eventInfo' div.
   */
   public getEventInfoFromDom() {
     let eventInfo = '';
     try {
       eventInfo = (document.getElementById("eventInfo") as HTMLInputElement).value;
       eventInfo = JSON.parse(eventInfo).event;
     } catch (e) {
        eventInfo = 'EVENT_INFO_NOT_AVAILABLE';
     }
     return eventInfo;
   }

    /**
    * Returns the evnetInfo as an observable stream of data so we can run transformations on the differents part of the data. 
    */
    public eventInfoData(): Observable<{}> {
      return of(this._eventInfoData);
    }

}