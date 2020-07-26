---
order: 1
title: 开始使用
type: Documents
---

@co/cms 微服务


## 安装

### 克隆门户代码

```bash
git clone http://comail:8888/tfs/Cityocean/CO.Platform/_git/co-portal-ms co-portal
cd co-portal
```

### 克隆子应用代码

```bash
cd apps
git clone http://comail:8888/tfs/Cityocean/CO.Platform/_git/co-app-platform platform
```

## 目录结构

co-portal 是一个标准的 Angular CLI 构建的微服务项目，并提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```
├── _mock                                       # Mock 数据规则
├── apps                                        # 微服务子应用目录
│   ├── 子应用1                                  # 微服务子应用
│   ├── 子应用2                                  # 微服务子应用
├── src                                         # 门户源码目录
│   ├── app
│   │   ├── core                                # 核心模块
│   │   │   ├── i18n                            # 本地化目录
│   │   │   ├── startup                         # 启动相关服务目录
│   │   │   │   └── startup.service.ts          # 初始化项目配置
│   │   │   └── core.module.ts                  # 核心模块文件
│   │   ├── layout                              # 通用布局
│   │   ├── routes                              # 路由目录
│   │   │   ├── 功能模块1                        # 业务功能模块1
│   │   │   ├── 功能模块2                        # 业务功能模块2
│   │   │   ├── routes.module.ts                # 业务路由模块
│   │   │   └── routes-routing.module.ts        # 业务路由注册口
│   │   ├── services                            # 路由目录
│   │   │   ├── 业务功能模块1服务                # 业务功能模块1服务
│   │   │   ├── 业务功能模块2服务                # 业务功能模块2服务
│   │   ├── shared                              # 共享模块
│   │   │   ├── components                      # 当前项目所用的公共组件目录
│   │   │   ├── types                           # 当前项目所用的公共类型目录
│   │   │   ├── utils                           # 当前项目所用的公共工具目录
│   │   │   ├── shared-co.module.ts             # @co次级共享模块导入
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
npm i
npm run start:ms
```

启动完成后会打开浏览器访问 [http://localhost:3000](http://localhost:3000)，若你看到如下页面则代表成功了。

![](./assets/screenshot/desktop.png | width=700)