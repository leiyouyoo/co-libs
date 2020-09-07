import { Component, Injector, SimpleChanges } from '@angular/core';
import { CoPageBase } from '@co/core';
import { NzMessageService } from 'ng-zorro-antd';
/**
 * 样例明细页
 */
@Component({
  selector: 'app-<%= name %>-detail',
  templateUrl: './<%= name %>-detail.component.html',
  styleUrls: ['./<%= name %>-detail.component.less'],
})
export class <%= classify(name) %>DetailComponent extends CoPageBase {
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

  coOnClosing(): Promise<any>{}

  coOnChanges(changes: SimpleChanges): void{}

  coAfterViewInit(): void{}

  coOnDestroy(): void{}

  //#endregion


  //#region 事件处理

  
  //#endregion
}

  //#region 公共方法

  //#endregion


  //#region 私有方法

  //#endregionegion
}

