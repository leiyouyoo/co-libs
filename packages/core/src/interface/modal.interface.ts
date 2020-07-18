import { Injectable, InjectionToken } from '@angular/core';
import { ModalOptions, NzModalService } from 'ng-zorro-antd/modal';
import { Observable, Observer, BehaviorSubject } from 'rxjs';

export interface ModalHelperOptions {
  /** 大小；例如：lg、600，默认：`lg` */
  size?: any;
  /** 对话框 [ModalOptions](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts) 参数 */
  modalOptions?: ModalOptions;
  /** 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 */
  exact?: boolean;
  /** 是否包裹标签页，修复模态包含标签间距问题 */
  includeTabs?: boolean;
}

/**
 * 对话框辅助类
 */

export interface IModalHelper {
  /**
   * 构建一个对话框
   *
   * @param comp 组件
   * @param params 组件参数
   * @param options 额外参数
   *
   * @example
   * this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());
   * // 对于组件的成功&关闭的处理说明
   * // 成功
   * this.NzModalRef.close(data);
   * this.NzModalRef.close();
   * // 关闭
   * this.NzModalRef.destroy();
   */
  create(comp: any, params?: any, options?: ModalHelperOptions): Observable<any>;

  /**
   * 构建静态框，点击蒙层不允许关闭
   *
   * @param comp 组件
   * @param params 组件参数
   * @param options 额外参数
   *
   * @example
   * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
   * // 对于组件的成功&关闭的处理说明
   * // 成功
   * this.NzModalRef.close(data);
   * this.NzModalRef.close();
   * // 关闭
   * this.NzModalRef.destroy();
   */
  createStatic(comp: any, params?: any, options?: ModalHelperOptions): Observable<any>;

  /**
   * 打开对话框
   * @param comp 组件
   * @param params 组件参数
   * @param size 大小；例如：lg、600，默认：lg
   *
   * @example
   * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
   * // 对于组件的成功&关闭的处理说明
   * // 成功
   * this.NzModalRef.close(data);
   * this.NzModalRef.close();
   * // 关闭
   * this.NzModalRef.destroy();
   */
  open(comp: any, params?: any, size?: any, options?: ModalOptions): Observable<any>;

  /**
   * 静态框，点击蒙层不允许关闭
   * @param comp 组件
   * @param params 组件参数
   * @param size 大小；例如：lg、600，默认：lg
   *
   * @example
   * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
   * // 对于组件的成功&关闭的处理说明
   * // 成功
   * this.NzModalRef.close(data);
   * this.NzModalRef.close();
   * // 关闭
   * this.NzModalRef.destroy();
   */
  static(comp: any, params?: any, size?: any, options?: ModalOptions): Observable<any>;
}

export const CO_MODALHELPER_TOKEN = new InjectionToken<IModalHelper>('coModalHelperToken', {
  providedIn: 'root',
  factory: CO_MODALHELPER_TOKEN_FACTORY,
});

export function CO_MODALHELPER_TOKEN_FACTORY() {
  return new CoModalHelperServiceFake();
}

@Injectable({ providedIn: 'root' })
export class CoModalHelperServiceFake implements IModalHelper {
  private change$ = new BehaviorSubject<string | null>(null);

  /**
   * 构建一个对话框
   *
   * @param comp 组件
   * @param params 组件参数
   * @param options 额外参数
   *
   * @example
   * this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());
   * // 对于组件的成功&关闭的处理说明
   * // 成功
   * this.NzModalRef.close(data);
   * this.NzModalRef.close();
   * // 关闭
   * this.NzModalRef.destroy();
   */
  create(comp: any, params?: any, options?: ModalHelperOptions): Observable<any> {
    return this.change$.asObservable() as Observable<any>;
  }

  /**
   * 构建静态框，点击蒙层不允许关闭
   *
   * @param comp 组件
   * @param params 组件参数
   * @param options 额外参数
   *
   * @example
   * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
   * // 对于组件的成功&关闭的处理说明
   * // 成功
   * this.NzModalRef.close(data);
   * this.NzModalRef.close();
   * // 关闭
   * this.NzModalRef.destroy();
   */
  createStatic(comp: any, params?: any, options?: ModalHelperOptions): Observable<any> {
    return this.change$.asObservable() as Observable<any>;
  }

  /**
   * 打开对话框
   * @param comp 组件
   * @param params 组件参数
   * @param size 大小；例如：lg、600，默认：lg
   *
   * @example
   * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
   * // 对于组件的成功&关闭的处理说明
   * // 成功
   * this.NzModalRef.close(data);
   * this.NzModalRef.close();
   * // 关闭
   * this.NzModalRef.destroy();
   */
  open(comp: any, params?: any, size?: any, options?: ModalOptions): Observable<any> {
    return this.change$.asObservable() as Observable<any>;
  }

  /**
   * 静态框，点击蒙层不允许关闭
   * @param comp 组件
   * @param params 组件参数
   * @param size 大小；例如：lg、600，默认：lg
   *
   * @example
   * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
   * // 对于组件的成功&关闭的处理说明
   * // 成功
   * this.NzModalRef.close(data);
   * this.NzModalRef.close();
   * // 关闭
   * this.NzModalRef.destroy();
   */
  static(comp: any, params?: any, size?: any, options?: ModalOptions): Observable<any> {
    return this.change$.asObservable() as Observable<any>;
  }
}
