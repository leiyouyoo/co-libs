import { Injectable, TemplateRef } from '@angular/core';
import { NzMessageDataOptions, NzMessageRef, NzMessageService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class I18nMessageService {

  constructor(private nzMessageService: NzMessageService,
              private translateService: TranslateService,
  ) { }

  success(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageRef {
    let _content = content;
    if ('string' === typeof _content) {
      _content = this.translateService.instant(_content);
    }
    return this.nzMessageService.success(_content, options);
  }

  error(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageRef {
    let _content = content;
    if ('string' === typeof _content) {
      _content = this.translateService.instant(_content);
    }
    return this.nzMessageService.error(_content, options);
  }

  info(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageRef {
    let _content = content;
    if ('string' === typeof _content) {
      _content = this.translateService.instant(_content);
    }
    return this.nzMessageService.info(_content, options);
  }

  warning(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageRef {
    let _content = content;
    if ('string' === typeof _content) {
      _content = this.translateService.instant(_content);
    }
    return this.nzMessageService.warning(_content, options);
  }

  loading(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageRef {
    let _content = content;
    if ('string' === typeof _content) {
      _content = this.translateService.instant(_content);
    }
    return this.nzMessageService.loading(_content, options);
  }
}
