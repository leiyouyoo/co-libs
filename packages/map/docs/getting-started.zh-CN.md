---
order: 1
title: 开始使用
type: Documents
---

@co/map 地图组件及相关服务。

## 如何使用

安装 `@co/map` 依赖包：

```bash
yarn add @co/map
```

导入 `DelonMapModule` 模块：

```typescript
import { DelonMapModule } from '@co/map';

@NgModule({
  imports: [
    DelonMapModule
  ]
})
export class AppModule { }
```

## 参数

可以通过[全局配置](/docs/global-config)覆盖 `ArrayService` 设置映射名称。
