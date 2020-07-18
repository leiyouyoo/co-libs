import { Injector, Optional, OnDestroy, OnInit, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';

import { CoComponentBase } from './component-base';

/**
 * 页面基类
 */
export abstract class CoPageBase extends CoComponentBase implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  constructor(@Optional() protected injector: Injector) {
    super(injector);
  }

  coOnInit(): void {
  }

  coOnActived(): void {
  }

  coOnDeactived(): void {
  }

  coOnChanges(changes: SimpleChanges): void {
  }

  coAfterViewInit(): void {
  }

  coOnDestroy(): void {
  }

  ngOnInit(): void {
    // 页面初始化埋点
    this.coOnInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.coOnChanges(changes);
  }

  ngOnDestroy(): void {
    // 页面关闭埋点
    this.coOnDestroy();
  }

  ngAfterViewInit(): void {
    this.coAfterViewInit();
  }
}
