import { Injectable } from '@angular/core';
import { PlatformSettingService } from '@co/cds';
import { STColumnSetting } from './st.interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class StUserSettingService {
  configName: string;
  get disabledColumnIndexListConfigName(): string {
    return `${this.configName}-disabled_columns`;
  }
  columnSetting: STColumnSetting;
  disabledColumnIndexList;

  constructor(private platformSettingService: PlatformSettingService,
              ) { }

  setConfigName(key: string) {
    if (!key) return;
    this.configName = key;
    this.getDisabledColumns();
  }

  getDisabledColumns() {
    this.platformSettingService.getCurrentUserSetting({ key: this.disabledColumnIndexListConfigName })
      .subscribe(data => {
        try {
          this.disabledColumnIndexList = JSON.parse(data);
        } catch (e) {
          console.error(e);
        }
      });
  }
  setDisabledColumns(keyList: string[]) {
    return new Observable(ob => {
      let value: string;
      try {
        value = JSON.stringify(keyList);
      } catch (e) {
        return ob.error(e);
      }
      this.platformSettingService
        .setCurrentUserSetting({ name: this.disabledColumnIndexListConfigName, value })
        .pipe()
        .subscribe(ob);
    })
  }
}
