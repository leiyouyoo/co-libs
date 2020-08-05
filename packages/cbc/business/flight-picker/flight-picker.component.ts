import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, ViewEncapsulation, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PickerComponentBase } from '@co/cbc/core';
import { PUBFlightService } from '@co/cds';
import { Observable } from 'rxjs';

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
export class FlightPickerComponent extends PickerComponentBase implements OnInit {
  constructor(cdr: ChangeDetectorRef, private flightService: PUBFlightService) {
    super(cdr);
    this.coLabelMember = 'no';
  }

  fetchRemoteData(_condition: any): Observable<any> {
    return this.flightService.getAllForUiPicker(_condition);
  }
}
