import { Injectable } from '@angular/core';

@Injectable()
export class EditorConfigService {
  constructor() {}
  public getConfig() {
    return {
      allowedContent: true,
      customConfig: '/packages/cbc/basic/editor/assets/js/ckeditor/ckeditor-config.js',
    };
  }
}
