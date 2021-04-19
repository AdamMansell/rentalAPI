import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'lobby-header',
  templateUrl: './lobby-header.component.html',
  styleUrls: ['./lobby-header.component.css']
})
export class LobbyHeaderComponent implements OnInit {

  @Input() event;

  constructor() { 

  }

  ngOnInit(): void { }

}
