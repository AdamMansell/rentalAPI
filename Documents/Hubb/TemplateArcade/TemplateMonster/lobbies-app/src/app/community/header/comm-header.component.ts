import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comm-header',
  // host: {
  //   "[class.dark]": "( theme === 'dark')",
  //   "[class.gradient]":" (theme === 'gradient')",
  //   "[class.photo]":" (theme === 'photo')",
  //   "[class.corporate]":" (theme === 'corporate')",
  //   "[class.avantGarde]":" (theme === 'avantGarde')"
  // },
  templateUrl: './comm-header.component.html',
  styleUrls: ['./comm-header.component.css']
})
export class CommHeaderComponent implements OnInit {

  @Input() event;
  @Input() theme;

  constructor() { }

  ngOnInit(): void {}

}
