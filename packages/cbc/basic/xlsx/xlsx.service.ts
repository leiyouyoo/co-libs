import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoConfigService, CoXlsxConfig, LazyResult, LazyService } from '@co/core';
import { saveAs } from 'file-saver';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { XlsxExportOptions, XlsxExportSheet } from './xlsx.types';

declare var XLSX: any;

@Injectable({ providedIn: 'root' })
export class CoXlsxService {
  private cog: CoXlsxConfig;
  constructor(private http: HttpClient, private lazy: LazyService, configSrv: CoConfigService) {
    this.cog = configSrv.merge('xlsx', {
      url: '//cdn.bootcss.com/xlsx/0.15.6/xlsx.full.min.js',
      modules: [],
    })!;
  }

  private init(): Promise<LazyResult[]> {
    return typeof XLSX !== 'undefined' ? Promise.resolve([]) : this.lazy.load([this.cog.url!].concat(this.cog.modules!));
  }

  private read(wb: NzSafeAny): { [key: string]: NzSafeAny[][] } {
    const ret: NzSafeAny = {};
    wb.SheetNames.forEach((name: string) => {
      const sheet: NzSafeAny = wb.Sheets[name];
      ret[name] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    });
    return ret;
  }

  /**
   * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
   * @param rABS 加载数据方式 `readAsBinaryString` （默认） 或 `readAsArrayBuffer`，[更多细节](http://t.cn/R3n63A0)
   */
  import(
    fileOrUrl: File | string,
    rABS: 'readAsBinaryString' | 'readAsArrayBuffer' = 'readAsBinaryString',
  ): Promise<{ [key: string]: any[][] }> {
    return new Promise<{ [key: string]: any[][] }>((resolve, reject) => {
      this.init()
        .then(() => {
          // from url
          if (typeof fileOrUrl === 'string') {
            this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe(
              (res: ArrayBuffer) => {
                const wb = XLSX.read(new Uint8Array(res), { type: 'array' });
                resolve(this.read(wb));
              },
              (err: any) => {
                reject(err);
              },
            );
            return;
          }
          // from file
          const reader: FileReader = new FileReader();
          reader.onload = (e: any) => {
            const wb: any = XLSX.read(e.target.result, { type: 'binary' });
            resolve(this.read(wb));
          };
          reader[rABS](fileOrUrl);
        })
        .catch(() => reject(`Unable to load xlsx.js`));
    });
  }

  /** 导出 */
  export(options: XlsxExportOptions): Promise<void> {
    return this.init().then(() => {
      const wb: any = XLSX.utils.book_new();
      if (Array.isArray(options.sheets)) {
        (options.sheets as XlsxExportSheet[]).forEach((value: XlsxExportSheet, index: number) => {
          const ws: any = XLSX.utils.aoa_to_sheet(value.data);
          XLSX.utils.book_append_sheet(wb, ws, value.name || `Sheet${index + 1}`);
        });
      } else {
        wb.SheetNames = Object.keys(options.sheets);
        wb.Sheets = options.sheets;
      }

      if (options.callback) options.callback(wb);

      const wbout: ArrayBuffer = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: false,
        type: 'array',
        ...options.opts,
      });
      saveAs(new Blob([wbout], { type: 'application/octet-stream' }), options.filename || 'export.xlsx');
    });
  }
}
