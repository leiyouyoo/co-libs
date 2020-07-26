import { Component } from '@angular/core';

@Component({
  selector: 'default-layout',
  templateUrl: './default-layout.component.html',
  host: {
    '[class.default-layout]': 'true',
  },
})
export class DefaultLayoutComponent { }
