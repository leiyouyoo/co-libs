import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      <nz-radio-group [(ngModel)]="size">
        <label nz-radio-button nzValue="large"><span>大尺寸</span></label>
        <label nz-radio-button nzValue="default"><span>默认</span></label>
        <label nz-radio-button nzValue="small"><span>小尺寸</span></label>
      </nz-radio-group>

      <br /><br />

      <co-customer-picker [coSize]="size" coMode="tags" [coValueMember]="valueMember" [coAutoClearSearchValue]="autoClearSearchValue" [(ngModel)]="selectedValue"> </co-customer-picker>

      <p>{{ selectedValue }}</p>
    </div>
  `,
})
export class CustomerPickerSizeComponent {
  size = 'default';
  valueMember = "name";
  autoClearSearchValue = false;
  selectedValue: string;
}
