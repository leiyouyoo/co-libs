import { Component, forwardRef, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PickerComponentBase } from '@co/cbc/core';
import { ShipnameService } from '@co/cds';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
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

  constructor(cdr: ChangeDetectorRef, private shipnameService: ShipnameService) {
    super(cdr);
    this.coLabelMember = 'name';
  }

  fetchRemoteData(_condition: any): Observable<any> {
    _.defaults(_condition, { No: this.No });
    return this.shipnameService.GetAllVessel(_condition);
  }
}
