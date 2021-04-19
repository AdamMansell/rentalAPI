import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {

  @Input()
  public bgimage: string = '';
  @Input()
  public bgshape: string = '';
  @Input()
  public scope: string = '';
  @Input()
  public mediaUrl: string = '';

  constructor() { }

  /**
   * Getter function to obtain the bgimage after being passed by the lobby.component
   */
  public get backgroudImage() {
    return this.bgimage;
  }

}
