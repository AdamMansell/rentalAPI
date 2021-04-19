import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import moment from 'moment';

@Component({
  selector: 'lobby-video',
  templateUrl: './lobby-video.component.html',
  styleUrls: ['./lobby-video.component.css']
})
export class LobbyVideoComponent {

  @Input() public eventLobbyVideo = null;

  constructor() {}

}
