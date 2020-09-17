import { Directive, Host, OnInit } from '@angular/core';
import { NzDatePickerComponent, OnChangeType } from 'ng-zorro-antd';
import { startOfDay, endOfDay } from 'date-fns';

@Directive({
  selector: 'nz-range-picker[wholeDayRange]'
})
export class WholeDayRangeDirective implements OnInit {
  onChangeFn: OnChangeType;

  constructor(@Host() private nzDatePickerComponent: NzDatePickerComponent,
              ) { }

  ngOnInit() {
    this.onChangeFn = this.nzDatePickerComponent.onChangeFn;

    this.nzDatePickerComponent.onChangeFn =
      (value: [Date, Date]) => {
        value[0] = startOfDay(value[0]);
        value[1] = endOfDay(value[1]);

        this.onChangeFn(value);
      };
  }
}
