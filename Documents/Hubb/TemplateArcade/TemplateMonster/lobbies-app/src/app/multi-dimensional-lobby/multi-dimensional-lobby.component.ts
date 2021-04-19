import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import EventInfoService from '../services/event-info.service';
import MdLobbyConstants from './constants/md-lobby-constants';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-multi-dimensional-lobby',
  templateUrl: './multi-dimensional-lobby.component.html',
  styleUrls: ['./multi-dimensional-lobby.component.css']
})
export class MultiDimensionalLobbyComponent implements OnInit {

  public lobbyData: {
    mobileTextColor?: '',
    mobileTileColor?: '',
    wallLinks?: Array<{}>, 
    columnLinks?: Array<{}>
  } = null;
  public scope: string = '';
  public lobbyType: string = '';
  public lobbySubType: string = '';
  public mediaUrl: string = environment.MEDIA_BLOB_URL;

  constructor(
    private eventInfoService: EventInfoService, 
    private _Activatedroute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initEventLobbyByRouteParams();
    this.grabScope();
  }

   /**
  * Subscribes to the eventInfoService.isEventInfoLoaded and awaits info from the event to 
  * be sent to the presentation components of this section, here is the plce to add any initialization
  * of data.
  *
  * @returns void  
  */
 private initEventLobbyByRouteParams() {
  
  this._Activatedroute.paramMap.subscribe(params => {
    if (params.get('lobbyType') && params.get('subType')) {
        const lobbyTypeExists = this.elementExists(MdLobbyConstants.lobbyTypes, params.get('lobbyType').toLowerCase());
        const lobbySubTypeExists = this.elementExists(MdLobbyConstants.lobbySubTypes, params.get('subType'));
        if (lobbyTypeExists && lobbySubTypeExists) {
          this.lobbyType = params.get('lobbyType');
          this.lobbySubType = params.get('subType');
          this.initEventInfo();
        }
    } else {
      this.router.navigate(['/']);
    }
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
    this.eventInfoService.eventInfoData().subscribe((eventInfo: { mdSessions: {}, mdExpo: {}, mdSponsor: {} }) => {
      if (this.lobbyType.toLowerCase() === MdLobbyConstants.lobbyTypes.SESSIONS) {
        this.lobbyData = eventInfo.mdSessions;
      }
      if (this.lobbyType.toLowerCase() === MdLobbyConstants.lobbyTypes.EXPO) {
        this.lobbyData = eventInfo.mdExpo;
      }
      if (this.lobbyType.toLowerCase() === MdLobbyConstants.lobbyTypes.SPONSOR) {
        this.lobbyData = eventInfo.mdSponsor;
      }
    });
});
}


/**
 * Subscribes to the eventInfoService "eventScope" prop to grab the scope.
 * 
 * @returns void
 */
private grabScope(): void {
  this.eventInfoService.eventScope.subscribe(eventScope => {
    if (eventScope) {
      this.scope = eventScope.toLowerCase();
    }
  });
} 

/**
 * Feeds the mobile-tiles-event component with the right structure of data that the 
 * component needs.
 * 
 * @returns Array<{}>
 */
public getMobileTiles(): Array<{}> {
  let tiles = [];
  if (
    (this.lobbyData?.wallLinks && this.lobbyData?.wallLinks.length) &&
    (this.lobbyData?.columnLinks && this.lobbyData?.columnLinks.length)
    ) {
    tiles =  [...this.lobbyData?.wallLinks, ...this.lobbyData.columnLinks]
  }
  return tiles;
}

/**
 * Returns an object that haves the right structure for the mobile tiles component colors.
 */
public getMobileViewColors(): {} {
  let colors = {};
  if (this.lobbyData?.mobileTextColor && this.lobbyData?.mobileTileColor) {
    colors = { 
      'mobile-background': this.lobbyData?.mobileTileColor,
      'mobile-text': this.lobbyData?.mobileTextColor
    }
  }
  return colors;
}

/**
 * 
 * @param collection object containing the constants to search for the keyword (used for lobby types and subtypes)
 * @param keyword string to search in the object properties to see if it exists as a value in some property.
 * 
 * @returns boolean 
 */
public elementExists(collection: {}, keyword: string): boolean {
  let elementExists: boolean = false;
  for (const key in collection) {
    if (Object.prototype.hasOwnProperty.call(collection, key) &&
        collection[key].toLowerCase() === keyword.toLowerCase()) {
      elementExists = true;
    }
  }
  return elementExists;
}

}
