import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PickerComponentBase } from '@co/cbc/core';

import { VesselService } from '@co/cds';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
@Component({
  selector: 'co-shipname-picker',
  exportAs: 'coShipnamePicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ShipnamePickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ShipnamePickerComponent extends PickerComponentBase {
  @Input() No: string;

  constructor(cdr: ChangeDetectorRef, private vesselService: VesselService) {
    super(cdr);
    this.coLabelMember = 'name';
  }

  fetchRemoteData(_condition: any): Observable<any> {
    _.defaults(_condition, { No: this.No });
    return this.vesselService.getAll(_condition);
  }
}
