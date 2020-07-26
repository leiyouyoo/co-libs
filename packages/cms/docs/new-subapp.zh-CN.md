---
order: 2
title: 新增子应用
type: Documents
---

## 生成

通过脚手架生成子应用

> 注意:菜单配置管理功能暂时为实现，需要手动配置。

```bash
ng g co-cli:app --name xxx
```


## 配置

### 子应用注册配置

进入src/platform.config.js文件添加子应用配置项

```bash
(function () { 
...
    window.CO_PLATFORM={
    ...
    "apps":[
        {
        "name":"{模块代码}",
        "hostParent": "#app-host-container",
        "hostClass": "{模块代码}-layout",
        "routerPathPrefix": "/{模块代码}",
        "selector": "{模块代码}-root",
        "resourcePathPrefix": "/apps/{模块代码}/",
        "manifest":"/apps/{模块代码}/manifest.json",
        "preload": true,
        "scripts": [
            "main.js"
        ],
        "styles": [
            "styles.css"
        ]
        }
    ]
    }
} ());

```

### 菜单导航配置

进入平台管理 [http://localhost:3000](http://localhost:3000)进行菜单配置。

> 注意:菜单配置管理功能暂时为实现，需要手动配置。


## 目录结构

co-xxx 是一个标准的 Angular CLI 构建的微服务子应用项目，下面是整子应用目录结构。

```

├── app
│   ├── core                                # 核心模块
│   │   ├── i18n                            # 本地化目录
│   │   ├── startup                         # 启动相关服务目录
│   │   │   └── startup.service.ts          # 初始化项目配置
│   │   └── core.module.ts                  # 核心模块文件
│   ├── layout                              # 通用布局
│   ├── routes                              # 路由目录
│   │   ├── 业务功能模块1                    # 业务功能模块1
│   │   ├── 业务功能模块2                    # 业务功能模块2
│   │   ├── routes.module.ts                # 业务路由模块
│   │   └── routes-routing.module.ts        # 业务路由注册口
│   ├── services                            # 路由目录
│   │   ├── 业务功能模块1服务                # 业务功能模块1服务
│   │   ├── 业务功能模块2服务                # 业务功能模块2服务
│   ├── shared                              # 共享模块
│   │   ├── components                      # 当前项目所用的公共组件目录
│   │   ├── types                           # 当前项目所用的公共类型目录
│   │   ├── utils                           # 当前项目所用的公共工具目录
│   ├── ├── shared-co.module.ts             # @co次级共享模块导入
│   │   ├── shared-zorro.module.ts          # NG-ZORRO 次级共享模块导入
│   │   └── shared.module.ts                # 共享模块文件
│   ├── app.component.ts                    # 根组件
│   └── app.module.ts                       # 根模块
│   └── global-config.module.ts             # @cong-zorro 全局配置项
├── assets                                  # 本地静态资源
├── environments                            # 环境变量配置
├── styles                                  # 样式目录
└── style.less                              # 样式引导入口
```
