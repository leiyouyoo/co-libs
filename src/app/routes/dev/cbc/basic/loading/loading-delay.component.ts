import { Component } from '@angular/core';
import { LoadingService } from '@co/cbc/basic/loading';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="onShow()">Display after 1 seconds</button>
    <button nz-button (click)="onClose()">Close</button>
  `,
})
export class LoadingDelayComponent {
  constructor(private loadingSrv: LoadingService) {}

  onShow(): void {
    this.loadingSrv.open({ delay: 1000 });

    setTimeout(() => this.loadingSrv.close(), 1000 * 5);
  }

  onClose() {
    this.loadingSrv.close();
  }
}
