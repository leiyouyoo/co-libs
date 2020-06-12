---
order: 1
title: 开始使用
type: Documents
---

@co/common 核心库，包括组件，页面，服务等抽象实现及拦截器等一些默认实现。

## 如何使用

安装 `@co/common` 依赖包：

```bash
yarn add @co/common
```

导入 `CoCommonModule` 模块：

```typescript
import { CoCommonModule } from '@co/common';

@NgModule({
  imports: [
    CoCommonModule
  ]
})
export class AppModule { }
```

## 参数

可以通过[全局配置](/docs/global-config)覆盖 `ArrayService` 设置映射名称。
