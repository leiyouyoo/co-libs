---
order: 1
title: 开始使用
type: Documents
---

@co/apm 前端应用性能监控。

## 如何使用

安装 `@co/apm` 依赖包：

```bash
yarn add @co/apm
```

导入 `DelonApmModule` 模块：

```typescript
import { DelonApmModule } from '@co/core';

@NgModule({
  imports: [
    DelonApmModule
  ]
})
export class AppModule { }
```

## 参数

可以通过[全局配置](/docs/global-config)覆盖 `ArrayService` 设置映射名称。
