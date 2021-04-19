import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnChanges {

  @Input() public eventBackgroundImage: string = '';
  @Input() public eventShapeImage: string = '';
  @Input() public eventLogo: string = '';
  @Input() public scope: string = '';
  @Input() public mediaUrl: string = '';
  @Input() public theme: {
    name?: string,
    client?: string,
    colors?: {
        primary?: string,
        secondary?: string
    }
  } = {};

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnChanges(changes: SimpleChanges): void {
     if (changes.theme.currentValue) {
      if (changes.theme?.currentValue?.client && changes.theme?.currentValue?.client.length) {
        this.setDynamicStyle(`${this.mediaUrl}/${this.scope}-public/resources/${changes.theme?.currentValue?.client}.css`);
      }
      this.changeMainTextColors(changes?.theme?.currentValue?.colors);
     }
  }

  public get getCustomCssPath(): string {
    return `${this.mediaUrl}/${this.scope}-public/resources/custom/${this.theme.client}.css`;
  }

    /**
   * Overwrites general style variabels for the main colors of the app in case they are assigned on the vent
   * config file
   * @returns void
   *
   * @param eventColors the colors of the theme (currently just dark theme) if they are set they are overwrriten here
   */
  public changeMainTextColors(eventColors: { [propName: string]: string }): void {
    if (eventColors)
      for (const propertyName in eventColors) {
        if (Object.prototype.hasOwnProperty.call(eventColors, propertyName))
          document.documentElement.style.setProperty(`--${propertyName}-color`, eventColors[propertyName]);
      }
  }

  private setDynamicStyle(cssURL: string) {
    const head = this.document.getElementsByTagName('head')[0];
    const style = this.document.createElement('link');
    style.id = 'css-styling';
    style.rel = 'stylesheet';
    style.href = `${cssURL}`;
    head.appendChild(style);
}

}
