import { ChangeDetectorRef, ChangeDetectionStrategy, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import * as _ from 'lodash';

import { Observable } from 'rxjs';

import { ProductService } from '@co/cds';
import { PickerComponentBase } from '@co/cbc/core';

/**
 * 客户选择器控件
 */
@Component({
  selector: 'co-product-picker',
  exportAs: 'coProductPicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductPickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ProductPickerComponent extends PickerComponentBase {
  //#region  构造函数

  constructor(cdr: ChangeDetectorRef, private productService: ProductService) {
    super(cdr);

    this.coLabelMember = 'name';
  }

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    return this.productService.GetAll(_condition);
  }
}
