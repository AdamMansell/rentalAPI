import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnChanges, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'comm-links',
  templateUrl: './comm-links.component.html',
  styleUrls: ['./comm-links.component.css']
})
export class CommLinksComponent implements OnChanges {

  @Input() public event: any = null;
  @Input() public scope: string = '';
  @Input() public mediaUrl: string = '';
  
  public links = [];
  constructor() { }
  
  private loadLinks(): void {
    if (this.event.community.groups.length > 0) {
      this.links =  this.event.community.groups;
    }
  }

  ngOnChanges( changes: SimpleChanges ): void {
    if (changes.event.currentValue) {
      this.loadLinks();
    }
  }

}
