---
order: 10
title: 开始使用
type: Basic
---

## 写在前面

co-libs 是一个企业级中后台前端/设计解决方案脚手架，我们秉承 [Ant Design](https://ant.design/) 的设计价值观，目标也非常简单，希望在Angular上面开发企业后台更简单、更快速。随着『设计者』的不断反馈，将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。

**如何阅读文档**

在开始之前有一些文档描述约定说明，这有助于更好的阅读：

- API相关
  - `[]` 表示属性
  - `()` 表示事件
  - `[()]` 表示双向绑定
  - `ng-content` 表示组件内容占位符
  - `#tpl` 开头表示 `〈ng-template #tpl〉`

## 前序准备

你的本地环境需要安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。我们的技术栈基于 [Typescript](https://www.tslang.cn/)、[Angular](https://angular.cn/)、[g2](http://g2.alipay.com/)、[@cottps://github.com/co-libs/delon) 和 [ng-zorro-antd](https://ng.ant.design/)，提前了解和学习这些知识会非常有帮助。

## 安装

### CLI（推荐）

请先通过 `ng version` 命令确认全局 Angular Cli 版本为最新版本号（当前最新版本号：<img src="https://img.shields.io/npm/v/@angular/cli.svg?style=flat-square" alt="npm">），有关如何升级请参考[CLI 命令参考手册](https://angular.cn/cli)。

> 注意：Angular Cli 默认会使用 npm install 来安装依赖，可能会比较慢，请参考 [如何正确使用淘宝源？](/docs/faq/zh#%E5%A6%82%E4%BD%95%E6%AD%A3%E7%A1%AE%E4%BD%BF%E7%94%A8%E6%B7%98%E5%AE%9D%E6%BA%90%EF%BC%9F) 解决安装依赖慢的问题。

```bash
ng new my-project --style less --routing
cd my-project
ng add co-libs
npm start
```

> 请参考[命令行工具](/cli)了解更多细节。

### 克隆代码

```bash
git clone --depth=1 https://github.com/co-libs/co-libs.git my-project
cd my-project
yarn
npm start
```

> 注：使用CLI安装，是一个干净的脚手架；使用克隆代码会包含所有示例。

## 目录结构

co-libs 是一个标准的 Angular CLI 构建的项目，并提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```
├── _mock                                       # Mock 数据规则
├── src
│   ├── app
│   │   ├── core                                # 核心模块
│   │   │   ├── i18n
│   │   │   ├── net
│   │   │   │   └── default.interceptor.ts      # 默认HTTP拦截器
│   │   │   ├── services
│   │   │   │   └── startup.service.ts          # 初始化项目配置
│   │   │   └── core.module.ts                  # 核心模块文件
│   │   ├── layout                              # 通用布局
│   │   ├── routes
│   │   │   ├── **                              # 业务目录
│   │   │   ├── routes.module.ts                # 业务路由模块
│   │   │   └── routes-routing.module.ts        # 业务路由注册口
│   │   ├── shared                              # 共享模块
│   │   │   ├── shared-delon.module.ts          # @co次级共享模块导入
│   │   │   ├── shared-zorro.module.ts          # NG-ZORRO 次级共享模块导入
│   │   │   └── shared.module.ts                # 共享模块文件
│   │   ├── app.component.ts                    # 根组件
│   │   └── app.module.ts                       # 根模块
│   │   └── global-config.module.ts             # @cong-zorro 全局配置项
│   ├── assets                                  # 本地静态资源
│   ├── environments                            # 环境变量配置
│   ├── styles                                  # 样式目录
└── └── style.less                              # 样式引导入口
```

## 本地开发

```bash
npm start
```

启动完成后会打开浏览器访问 [http://localhost:4200](http://localhost:4200)，若你看到如下页面则代表成功了。

![](./assets/screenshot/desktop.png | width=700)


如果您使用方法一安装，则右边只有部分菜单。

