import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'multi-dimensional-nine-sessions-lobby',
  templateUrl: './multi-dimensional-nine-sessions-lobby.component.html',
  styleUrls: ['./multi-dimensional-nine-sessions-lobby.component.css']
})
export class MultiDimensionalNineSessionsLobbyComponent implements OnChanges {

  @Input() public sessionsData: any = null;
  @Input() public scope: string = '';
  @Input() public mediaUrl: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sessionsData.currentValue) {
      this.changeLobbyTextColors({ 
        "mobile-background": changes.sessionsData.currentValue.mobileTileColor,
        "mobile-text": changes.sessionsData.currentValue.mobileTextColor
      });
    }
  }

  public getOverlayClassName(elementNumber: string): string {
    return `overlay-button_${elementNumber}`;
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
