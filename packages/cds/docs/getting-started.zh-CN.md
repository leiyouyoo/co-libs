---
order: 1
title: 开始使用
type: Documents
---

@co/cds(Common Data Service) 基础数据服务库，包括通用数据服务

## 如何使用

安装 `@co/cds` 依赖包：

```bash
yarn add @co/cds
```

导入 `CoCdsModule` 模块：

```typescript
import { CoCdsModule } from '@co/cds';

@NgModule({
  imports: [
    CoCdsModule
  ]
})
export class AppModule { }
```

## 参数

可以通过[全局配置](/docs/global-config)覆盖 `ArrayService` 设置映射名称。
