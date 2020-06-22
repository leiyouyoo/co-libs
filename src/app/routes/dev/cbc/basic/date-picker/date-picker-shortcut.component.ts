import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    result: {{ i | json }}<br />
    <co-range-picker [(ngModel)]="i.start" [(ngModelEnd)]="i.end" [shortcut]="true"></co-range-picker>
  `,
})
export class DatePickerShortcutComponent {
  i: any = {};
}
