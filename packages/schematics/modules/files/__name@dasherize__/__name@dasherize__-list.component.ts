import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector } from '@angular/core';
import { CoPageBase } from '@co/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * 样例列表页
 */
@Component({
  selector: 'app-<%= name %>-list',
  templateUrl: './<%= name %>-list.component.html',
  styleUrls: ['./<%= name %>-list.component.less'],
})

export class <%= classify(name) %>ListComponent extends CoPageBase {
  //#region  私有变量

  //#region  生命周期

  constructor(
    injector: Injector,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
  ) {
    super(injector);
  }

  coOnInit() {

  }

  //#endregion

  //#region 事件处理

  //#endregion
}
