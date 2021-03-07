import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'port-template',
  template: `
    <ng-template let-item #tpl>
      <div class="port-info">
        <div class="port-name">
          <span>{{ item.name }}</span>
          <i nz-icon [nzIconfont]="'icon-vessel'" *ngIf="item.isOcean == true"></i>
          <i nz-icon [nzIconfont]="'icon-airplane'" *ngIf="item.isAir == true"></i>
        </div>
        <div class="port-code"><span class="port-code-UN">UN:</span>
          {{ item.code }}</div>
        <div class="port-region">{{ item.regionName }}</div>
      </div>
    </ng-template>
  `,
  styleUrls: [`./port-template.component.less`]
})
export class PortTemplateComponent implements OnInit {
  @ViewChild('tpl') template: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
