---
order: 97
title: 日志
type: Documents
---

日志组件用于在co-libs和业务子应用中控制在调试模式下打印日志到控制台，生产模式下禁用控制打印。

### co-libs 日志记录


```ts

import { log } from '@co/core';

export class DemoComponent  {
constructor() {
    log('构造函数');
  }
}

```



### 业务子应用日志记录

> 注: 后面重写该日志记录器上报错误信息

```ts

import { CoPageBase } from '@co/core';

export class CmsDemoDetailComponent extends CoPageBase {
constructor(
    protected injector: Injector
  ) {
    super(injector);
  }
}

coOnClosing():Promise<any>{
    this.$logger.info('即将关闭页面');
    Promise.resolve(true);
}
```