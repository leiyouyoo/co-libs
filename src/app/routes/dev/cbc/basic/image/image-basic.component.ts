import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
    <img [co_image]="src" size="46" />
    <img [co_image]="src" size="64" />
    <img [co_image]="src" size="96" />
  `,
})
export class ImageBasicComponent {
  src = '//wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLL1byctY955Htv9ztzVlIzY9buI9zRLg5QrkpOynrmObArKicy9icIX7aVgv3UqIbeIEo2xuUtsqYw/0';
}
