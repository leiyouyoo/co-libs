---
order: 1
subtitle: 开始使用
type: Documents
---

@co/common 公共库，包括指令，服务，管道等等。

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


