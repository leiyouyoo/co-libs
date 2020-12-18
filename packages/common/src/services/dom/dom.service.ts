import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CoDomService {

  MONKEY_PATCH_KEY_NAME = '__ngContext__';

  /**
   * 根据dom对象获取组件实例，这个dom是组件下面的子元素，不是组件自身节点
   * 比如：<app-compA><div #div></div></app-compA>，可以通过div获取CompA组件实例
   * @param element dom对象
   * @returns 组件实例，注意判断是否为空
   */
  findAngularComponent(element: any): any {
    let comp;
    let process = true;
    while (process) {
      if (element[this.MONKEY_PATCH_KEY_NAME]) {
        if (element[this.MONKEY_PATCH_KEY_NAME][0]) {
          comp = element[this.MONKEY_PATCH_KEY_NAME][8];
        } else {
          // app-root component
          comp = null;
        }
        process = false;
      } else {
        element = element.parentNode as HTMLElement;
      }
    }
    return comp;
  }

}
