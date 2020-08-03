---
order: 1
title: 开始使用
type: Documents
---

## 写在前面

使用 co-libs 脚手架应尽可能的使用 Angular CLI 所提供的 `ng` 命令组，来构建、升级等，co-libs 也实现了一些比较酷的事：

- 使用 [ng g co-cli:swagger](/cli/swagger) 生成HTTP服务
- 使用 [ng g co-cli:co-application](/cli/co-application) 来构建微服务子应用

## 如何使用

我们不建议直接克隆 Github 源代码，而应该使用 `ng add` 来构建 co-libs 项目，而构建一个应用模块只需要简单几个动作：

1、创建一个空 angular 项目

```bash
# 确保使用的是最新版本 Angular cli
ng new demo --style less
```

2、添加 co-libs 脚手架

```bash
ng add co-cli
```

> 遇到问题请阅读 [常见问题](/docs/faq)

3、运行项目

```bash
ng serve
```

## 提示

除DEMO示例页以外，会有一些影响外，对于大版本会提供 `ng update` 来解决破坏性变更，对于其他情况的升级请参考 [升级脚手架](/docs/upgrade)。
