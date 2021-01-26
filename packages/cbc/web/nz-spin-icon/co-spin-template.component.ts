import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'co-spin-template',
  template: `
    <ng-template #coIcon>
      <img src="https://www.cityocean.com/images/loadding.gif" style="height:80px;width:80px;" alt="CityOcean">
    </ng-template>
  `,
  styles: [
  ]
})
export class CoSpinTemplateComponent implements OnInit {
  @ViewChild('coIcon') template: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
