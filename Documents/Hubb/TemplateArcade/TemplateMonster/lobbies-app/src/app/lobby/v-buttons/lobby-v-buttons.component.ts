import { Component, Input } from '@angular/core';

@Component({
  selector: 'lobby-v-buttons',
  templateUrl: './lobby-v-buttons.component.html',
  styleUrls: ['./lobby-v-buttons.component.css']
})
export class LobbyVButtonsComponent {

  @Input()
  // TODO: Add correct type to this variable.
  public verticalButtons = [];

  constructor() { }

}
