import { Component, Injector, SimpleChanges } from '@angular/core';
import { CoPageBase } from '@co/core';
import { NzMessageService } from 'ng-zorro-antd';
/**
 * 样例明细页
 */
@Component({
  selector: 'app-<%= name %>',
  templateUrl: './<%= name %>.component.html',
  styleUrls: ['./<%= name %>.component.less'],
})
export class <%= classify(name) %>Component extends CoPageBase {
  //#region 私有变量

  isEnglish: boolean = true;
  isSubmit: boolean = false;

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

  //#endregion

}
