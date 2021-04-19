import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() heading;
  @Input() overline = '';
  @Input() name;
  @Input() year;
  @Input() descriptions;

  constructor() { }

  ngOnInit(): void {
  }

}
