import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'meet-links',
  templateUrl: './meet-links.component.html',
  styleUrls: ['./meet-links.component.css']
})
export class MeetLinksComponent implements OnChanges {

  @Input() public event: any;
  public meetings = null;
  @Input() public scope: string;
  @Input() public mediaUrl: string;

  constructor() { }

  private loadMeetings(): void {
    const eventMeetings = this.event.meetings.meetings
    if (eventMeetings.length > 0) {
      this.meetings = eventMeetings;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.event.currentValue) {
      this.loadMeetings();
    }
  }

  public get eventScope() {
    return this.scope;
  }

}
