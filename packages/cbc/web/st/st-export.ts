import { Injectable, Optional } from '@angular/core';
import { CoXlsxService } from '@co/cbc/basic/xlsx';
import { deepGet } from '@co/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { STColumn, STExportOptions } from './st.interfaces';

@Injectable()
export class STExport {
  constructor(@Optional() private xlsxSrv: CoXlsxService) { }

  private _stGet(item: any, col: STColumn, index: number): any {
    const ret: { [key: string]: any } = { t: 's', v: '' };

    if (col.format) {
      ret.v = col.format(item, col, index);
    } else {
      const val = deepGet(item, col.index as string[], '');
      ret.v = val;
      switch (col.type) {
        case 'currency':
          ret.t = 'n';
          break;
        case 'date':
          ret.t = 'd';
          break;
        case 'yn':
          ret.v = ret.v === col.ynTruth ? col.ynYes || '是' : col.ynNo || '否';
          break;
      }
    }

    ret.v = ret.v || '';

    return ret;
  }

  private genSheet(opt: STExportOptions): { [sheet: string]: {} } {
    const sheets: { [sheet: string]: { [key: string]: NzSafeAny } } = {};
    const sheet: { [key: string]: NzSafeAny } = (sheets[opt.sheetname || 'Sheet1'] = {});
    const colData = opt._c!.filter(w => w.exported !== false && w.index && (!w.buttons || w.buttons.length === 0));
    const cc = colData.length;
    const dc = opt._d!.length;

    // column
    for (let i = 0; i < cc; i++) {
      const tit = colData[i].title;
      sheet[`${String.fromCharCode(i + 65)}1`] = {
        t: 's',
        v: typeof tit === 'object' ? tit.text : tit,
      };
    }

    // content
    for (let i = 0; i < dc; i++) {
      for (let j = 0; j < cc; j++) {
        sheet[`${String.fromCharCode(j + 65)}${i + 2}`] = this._stGet(opt._d![i], colData[j], i);
      }
    }

    if (cc > 0 && dc > 0) {
      sheet['!ref'] = `A1:${String.fromCharCode(cc + 65 - 1)}${dc + 1}`;
    }

    return sheets;
  }

  export(opt: STExportOptions) {
    const sheets = this.genSheet(opt);
    return this.xlsxSrv.export({
      sheets,
      filename: opt.filename,
      callback: opt.callback,
    });
  }
}
