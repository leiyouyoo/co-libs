---
order: 5
title: 编辑或详情页
type: Documents
---

## 列表页


### 继承 CoPageBase

```ts

import { CoPageBase } from '@co/core';

export class CmsDemoListComponent extends CoPageBase {
constructor(
    protected injector: Injector
  ) {
    super(injector);
  }
}

```


### 打开编辑或查看详情

> 注:可以根据查询参数 _title 动态设置标签标题。

```ts

  this.$navigate([`fcm/order/detail/${id}`], {
                  queryParams: {
                    _title: `${this.$l('orderNo')}-1234`,
                  },
                });

```

### 

## 详情页

### 继承 CoPageBase


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
    Promise.resolve(true);
}

```



### 路由配置

> 注意:
>   1: 新增，编辑，查看页要做标签页，一定要采用参数配置。
>   2: 新增页必须也要传参数，而且保证每次参数不一致（路由采用URL缓存，url相同会打开同一个标签页）。
>   3: 标签本地化 需要在本地化串前加模块名，以便根据模块找到对应应用的本地化服务。

```ts
const routes: Routes = [
  ...
  { path: 'detail/:id', component: CmsDemoDetailComponent, data: { titleI18n: 'fcm:orderDetail', reuse: true } }
];

```



## 编辑页回刷数据

可以采用事件总线

```ts

// Detail
globalEventDispatcher.dispatch('fcm-order-detail', { data: {} });

// List
globalEventDispatcher.register('fcm-order-detail').subscribe((payload) => {
});

```