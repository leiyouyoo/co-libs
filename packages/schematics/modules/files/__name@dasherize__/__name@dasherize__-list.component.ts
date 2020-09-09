import {  Component, Injector, SimpleChanges } from '@angular/core';
import { CoPageBase } from '@co/core';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd';

/**
 * 样例列表页
 */
@Component({
  selector: 'app-<%= name %>-list',
  templateUrl: './<%= name %>-list.component.html',
  styleUrls: ['./<%= name %>-list.component.less'],
})

export class <%= classify(name) %>ListComponent extends CoPageBase {
  //#region 私有变量

  //#endregion


  //#region  输入输出参数

  //#endregion


  //#region 页面生命周期

  constructor(injector: Injector,  private message: NzMessageService) {
    super(injector);
  }

  coOnInit(): void {}

  coOnActived(): void{}

  coOnDeactived(): void{}

  coOnChanges(changes: SimpleChanges): void{}

  coAfterViewInit(): void{}

  coOnDestroy(): void{}

  //#endregion


  //#region 事件处理

  
  //#endregion


  //#region 公共方法

  //#endregion


  //#region 私有方法

  //#endregionegion
}
