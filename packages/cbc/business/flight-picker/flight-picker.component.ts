import { Component, forwardRef, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PickerComponentBase } from '@co/cbc/core';
import { Observable } from 'rxjs';
import { FlightService } from '@co/cds';

/**
 * 航班选择器控件
 */
@Component({
  selector: 'co-flight-picker',
  exportAs: 'coFlightPicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FlightPickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FlightPickerComponent extends PickerComponentBase {
  constructor(cdr: ChangeDetectorRef, private flightService: FlightService) {
    super(cdr);
  }
  fetchRemoteData(_condition: any): Observable<any> {
    return this.flightService.GetAll(_condition);
  }
}
