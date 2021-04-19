import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  @Input()
  public eventLogo: string = '';
  @Input()
  public scope: string = '';
  @Input()
  public mediaUrl: string = '';

  constructor() { }

}
