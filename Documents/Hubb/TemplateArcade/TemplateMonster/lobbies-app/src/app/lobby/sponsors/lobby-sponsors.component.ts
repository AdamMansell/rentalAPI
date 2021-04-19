import { Component, Input } from '@angular/core';

@Component({
  selector: 'lobby-sponsors',
  templateUrl: './lobby-sponsors.component.html',
  styleUrls: ['./lobby-sponsors.component.css']
})
export class LobbySponsorsComponent {

  @Input() public eventScope: string;
  @Input() public eventSponsors: any = null;
  @Input() public mediaUrl: string = '';

  constructor() { }

  
}
