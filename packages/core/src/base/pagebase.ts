import { Injector, Optional, OnDestroy, OnInit } from '@angular/core';

import { CoComponentBase } from './componentbase';

/**
 * 页面基类
 */
export abstract class CoPageBase extends CoComponentBase implements OnInit, OnDestroy {
  constructor(@Optional() protected injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    // 页面初始化埋点
  }

  ngOnDestroy(): void {
    // 页面关闭埋点
  }
}
