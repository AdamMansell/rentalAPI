import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'mobile-event-tiles',
  templateUrl: './mobile-event-tiles.component.html',
  styleUrls: ['./mobile-event-tiles.component.css']
})
export class MobileEventTilesComponent implements OnChanges {

  @Input() public tiles: Array<{}> = [];
  @Input() public colors: {} = null;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.colors.currentValue) {
      this.changeLobbyTextColors(changes.colors.currentValue);
    }
  }

  /**
   * Overwrites general style variables for the main colors of the app in case they are assigned on the vent
   * config file
   * @returns void
   * 
   * @param eventColors<Array> the colors of the theme (currently just dark theme) if they are set they are overwrriten here
   */
  public changeLobbyTextColors(eventColors: { [propName: string]: string }): void {
    if (eventColors)
      for (const propertyName in eventColors) {
        if (Object.prototype.hasOwnProperty.call(eventColors, propertyName))
          document.documentElement.style.setProperty(`--${propertyName}-color`, eventColors[propertyName]);
      }
  }

}
