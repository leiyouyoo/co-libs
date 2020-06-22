import { Component } from '@angular/core';

@Component({
  selector: 'components-image-error',
  template: `
    <button nz-button (click)="src = '//a.com/1.png'">Load an error image</button>
    <div style="margin-top: 8px;">
      <img [co_image]="src" error="./assets/img/logo-color.svg" />
    </div>
  `,
})
export class ImageErrorComponent {
  src = './assets/img/avatar.jpg';
}
