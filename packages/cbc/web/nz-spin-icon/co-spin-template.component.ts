import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'co-spin-template',
  template: `
    <ng-template #coIcon>
      <img src="https://www.cityocean.com/images/loadding.gif" class="co-spin-icon" alt="CityOcean">
    </ng-template>
  `,
  styles: [`
    .co-spin-icon {
      height:80px;width:80px;    position: absolute;top: 50%;left: 50%;margin: -40px;
    }
  `]
})
export class CoSpinTemplateComponent implements OnInit {
  @ViewChild('coIcon') template: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
