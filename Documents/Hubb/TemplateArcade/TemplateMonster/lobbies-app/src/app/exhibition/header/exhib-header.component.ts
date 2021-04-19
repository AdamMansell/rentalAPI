import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'exhib-header',
  templateUrl: './exhib-header.component.html',
  styleUrls: ['./exhib-header.component.css']
})
export class ExhibHeaderComponent implements OnInit {

  @Input() event;

  constructor() { }

  ngOnInit(): void {
  }

}
