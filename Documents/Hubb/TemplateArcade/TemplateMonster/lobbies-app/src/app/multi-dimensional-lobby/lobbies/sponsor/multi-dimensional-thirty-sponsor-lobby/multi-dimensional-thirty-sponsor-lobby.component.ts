import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'multi-dimensional-thirty-sponsor-lobby',
  templateUrl: './multi-dimensional-thirty-sponsor-lobby.component.html',
  styleUrls: ['./multi-dimensional-thirty-sponsor-lobby.component.css']
})
export class MultiDimensionalThirtySponsorLobbyComponent implements OnChanges {

  @Input() public sponsorData: any = null;
  @Input() public scope: string = '';
  @Input() public mediaUrl: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sponsorData.currentValue) {
      this.changeLobbyTextColors({ 
        "mobile-background": changes.sponsorData.currentValue.mobileTileColor,
        "mobile-text": changes.sponsorData.currentValue.mobileTextColor
      });
    }
}

  /**
   * Overwrites general style variables for the main colors of the app in case they are assigned on the 
   * event config file.
   * 
   * @param eventColors<Array> the colors of the theme (currently just dark theme) if they are set they are overwrriten here
   * @returns void
   */
  public changeLobbyTextColors(eventColors: { [propName: string]: string }): void {
    if (eventColors)
      for (const propertyName in eventColors) {
        if (Object.prototype.hasOwnProperty.call(eventColors, propertyName))
          document.documentElement.style.setProperty(`--${propertyName}-color`, eventColors[propertyName]);
      }
  }

}
