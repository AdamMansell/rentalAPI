import { Component, Input } from '@angular/core';

@Component({
  selector: 'exhib-sponsors',
  templateUrl: './exhib-sponsors.component.html',
  styleUrls: ['./exhib-sponsors.component.css']
})
export class ExhibSponsorsComponent {

  @Input() public eventScope: string;
  @Input() public eventSponsors: any = null;
  @Input() public mediaUrl: string = '';

  constructor() { }
}
