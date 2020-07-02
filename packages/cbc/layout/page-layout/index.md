---
type: Layout
title: page-layout
order: 5
subtitle: 页面布局
cols: 1
module: import { PageLayoutModule } from '@co/cbc/page-layout';
---

页面布局组件

## 如何使用

将组件投影到组件内部特定的布局位置：

- `<co-toolbar>` 工具栏区
- `<co-search-area-layout>` 搜索栏区
- `<co-page-main>` 主内容区
- `<co-page-side>` 侧栏内容区

## API

### page-layout

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[coSize]` | 定义页面整体Size | `'small' | 'default' | 'large'` | `'default'` |

