import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'component-style',
  templateUrl: './component-style.component.html',
  styleUrls: ['./component-style.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ComponentStyleComponent implements OnInit {
  radioValue;

  constructor() { }

  ngOnInit(): void {
  }

}
