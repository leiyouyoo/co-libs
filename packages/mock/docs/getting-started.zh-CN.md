---
order: 1
title: 开始使用
type: Documents
---

## 写在前面

Mock 是指通过生成模拟数据让前端开发人员独立于后端进行开发，有时我们也会运用在测试环境中。

`@co/mock` 是一个简单 Mock 功能，包括以下几个特征：

- 任意 Angular 项目
- 开发无侵入
- 超简单用法
- 支持 [mock.js](http://mockjs.com/)

## 如何使用

安装 `@co/mock` 依赖包：

```bash
yarn add @co/mock -D
```

参考 [global-config.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L26-L30) 导入[Mock 规则数据](/mock/rule)。

### MockOptions 配置

> 可以通过[全局配置](/docs/global-config)覆盖它们。

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[data]` | `any` | - | Mock 数据规则 | ✅ |
| `[delay]` | `number` | `300` | 请求延迟，单位：毫秒 | ✅ |
| `[force]` | `boolean` | `false` | 是否强制所有请求都Mock，`true` 表示当请求的URL不存在时直接返回 404 错误，`false` 表示未命中时发送真实HTTP请求 | ✅ |
| `[log]` | `boolean` | `true` | 是否打印 Mock 请求信息，弥补浏览器无Network信息；当请求经过 Mock 会接收【👽Mock】 | ✅ |
| `[executeOtherInterceptors]` | `boolean` | `true` | 是否拦截命中后继续调用后续拦截器的 `intercept` 方法 | ✅ |
| `[copy]` | `boolean` | `true` | 是否返回副本数据 | ✅ |

> 若**懒模块**还需要导入 `forChild` 确保HTTP拦截器有效，一般可以直接在 SharedModule 直接使用 `forChild`。

### 为什么只对开发环境有效？

Mock 并非是真实数据，大部分场景是针对开发本地或测试环境；所以在生产环境中不应该包括 Mock 模块以及规则数据。因此上述才会根据 `!environment.production` 依据环境来决定是否加载 `DelonMockModule`。

当然，你依然可以在生产环境也使用这种规则，就像 //ng-alain.github.io/ng-alain/ 一样，需要一些模拟请求来保证环境的运行。

```ts
import { DelonMockModule } from '@co/mock';
import * as MOCKDATA from '../../_mock';
@NgModule({
  imports: [
    DelonMockModule.forRoot({ data: MOCKDATA })
  ]
})
```
