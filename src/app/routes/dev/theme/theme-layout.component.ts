import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'theme-layout',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;

        display: block;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class ThemeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
