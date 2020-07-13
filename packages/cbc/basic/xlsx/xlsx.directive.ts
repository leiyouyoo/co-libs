import { Directive, Input } from '@angular/core';
import { CoXlsxService } from './xlsx.service';
import { XlsxExportOptions } from './xlsx.types';

@Directive({
  selector: '[co-xlsx]',
  exportAs: 'coXlsx',
  host: {
    '(click)': '_click()',
  },
})
export class CoXlsxDirective {
  @Input('co-xlsx') data: XlsxExportOptions;

  constructor(private srv: CoXlsxService) { }

  _click() {
    this.srv.export(this.data);
  }
}
