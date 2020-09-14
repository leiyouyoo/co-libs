import { AfterViewInit, Injector, OnChanges, OnDestroy, OnInit, Optional, SimpleChanges } from '@angular/core';
import { NavigationExtras } from '@angular/router';

import { CoComponentBase } from './component-base';

declare var window: any;

/**
 * 页面基类
 */
export abstract class CoPageBase extends CoComponentBase implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  constructor(@Optional() protected injector: Injector) {
    super(injector);

    if (window.planet && window.planet.mainTab) {
      window.planet.mainTab.activate(this);
    }
  }

  coOnInit(): void {}

  coOnActived(): void {}

  coOnDeactived(): void {}

  coOnClosing(): Promise<any> {
    return Promise.resolve(true);
  }

  coOnChanges(changes: SimpleChanges): void {}

  coAfterViewInit(): void {}

  coOnDestroy(): void {}

  ngOnInit(): void {
    // 页面初始化埋点
    this.coOnInit();
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.coOnChanges(changes);
    super.ngOnChanges(changes);
  }

  ngOnDestroy(): void {
    // 页面关闭埋点
    this.coOnDestroy();
    super.ngOnDestroy();
  }

  ngAfterViewInit(): void {
    this.coAfterViewInit();
    super.ngAfterViewInit();
  }

  /**
   * 导航
   */
  public $navigate(commands: any[], extras?: NavigationExtras): void {
    if (window.planet) {
      window.planet.portalApplication.navigate(commands, extras);
    } else {
      this.$logger.warn('Planet 未实例化');
    }
  }

  /**
   * 关闭当前页面
   */
  public $close() {
    // TODO: 需要处理抽屉，模态弹框，标签页面关闭
    if (window.planet && window.planet.mainTab) {
      window.planet.mainTab.closeCurrent();
    } else {
      this.$logger.warn('Planet 未实例化');
    }
  }
}
