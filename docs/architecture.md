---
order: 20
title:
  en-US: Architecture
  zh-CN: 体系结构
type: Basic
---

co-libs是基于 Angular 和 NG-ZORRO（Ant Design 的 Angular 版本） 基础组件库的中后台前端解决方案。脚手架包含着一套通用的功能和业务组件库，它们可以极大地减少一些基础建设开发工作。

## 结构图

![](./assets/img/architecture.png | width=1000)


**@co/core**

核心库包含了一些抽象类，全局配置，及常用工具方法。


**@co/common**

公共库包含了公用的管道，指令及服务。


**@co/theme**

主题系统包含基础框架所需要的样式（包含CSS工具集，一套类似bootstrap）。


**@co/cbc**

脚手架内提供了一套默认[组件](/components/)，这些组件抽象了控制台业务中的一些常见区块。我们将持续维护和迭代这些组件，为中后台业务提供比 Ant Design 基础组件更高级别的抽象。


**@co/im**

[即时消息](/im)包含了即时消息相关服务和组件。


**@co/map**

[地图](/map)包含了地图相关服务和组件。


**@co/chart**

[@co/chart](/chart) 图表是基于 G2 的基础上二次封装，提供了业务中常用的图表套件，可以单独使用，也可以组合起来实现复杂的展示效果。

**@co/form**

[@co/form](/form) 是一个基于 [JSON Schema](http://json-schema.org/) 标准的动态构建表单。

**@co/auth**

[用户认证](/auth)模块，用于解决如何获取、存取、使用这三个步骤的用户认证环节。

**@co/acl**

[ACL](/acl)访问控制列表，是一种非常简单的基于角色权限控制，甚至达到控制某个按钮显隐的粒度。

**@co/cache**

将字典、城市数据等[缓存](/cache)至内存或持久化当中，有效减少 Http 请求。

**@co/mock**

[Mock](/mock)会拦截 Angular Http 请求并返回测试数据。


**@co/cds**

[基础数据服务集](/cds)包含了一些通用的基础数据服务。

**@co/cms**

[微服务库](/cms)包含了前端微服务化相关逻辑。

**@co/testing**

常用测试套件。

**CLI Schematics**

[命令行工具](/cli)。

