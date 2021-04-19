import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'multi-dimensional-five-expo',
  templateUrl: './multi-dimensional-five-expo.component.html',
  styleUrls: ['./multi-dimensional-five-expo.component.css']
})
export class MultiDimensionalFiveExpoComponent implements OnChanges {

  @Input() public expoData: any = null;
  @Input() public scope: string = '';
  @Input() public mediaUrl: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.expoData.currentValue) {
      console.log('data on expo...', changes.expoData.currentValue);
    }
  }

}
