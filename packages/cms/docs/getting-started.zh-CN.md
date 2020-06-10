---
order: 1
title: 开始使用
type: Documents
---

@co/cms 微服务

## 如何使用

安装 `@co/cms` 依赖包：

```bash
yarn add @co/cms
```

导入 `CmsModule` 模块：

```typescript
import { CmsModule } from '@co/cms';

@NgModule({
  imports: [
    CmsModule
  ]
})
export class AppModule { }
```

## 参数

可以通过[全局配置](/docs/global-config)覆盖 `ArrayService` 设置映射名称。
