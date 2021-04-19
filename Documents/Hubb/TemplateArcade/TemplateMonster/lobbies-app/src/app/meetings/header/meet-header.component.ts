import { Component, Input } from '@angular/core';

@Component({
  selector: 'meet-header',
  templateUrl: './meet-header.component.html',
  styleUrls: ['./meet-header.component.css']
})
export class MeetHeaderComponent {

  @Input() event;

  constructor() { }

}
