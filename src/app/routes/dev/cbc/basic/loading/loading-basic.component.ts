import { Component } from '@angular/core';
import { LoadingService, LoadingType } from '@co/cbc/basic/loading';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="onShow('icon')">Icon</button>
    <button nz-button (click)="onShow('spin')">Spin</button>
    <button nz-button (click)="onShow('text')">Only Text</button>
  `,
})
export class LoaddingBasicComponent {
  constructor(private loadingSrv: LoadingService) {}

  onShow(type: LoadingType): void {
    this.loadingSrv.open({ type });

    setTimeout(() => this.loadingSrv.close(), 1000 * 3);
  }
}
