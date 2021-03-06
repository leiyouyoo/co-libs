---
type: Layout
title: search-area-layout
order: 6
subtitle: 搜索栏布局
cols: 1
module: import { SearchAreaLayoutModule } from '@co/cbc/layout';
---

页面中搜索栏布局组件

## API

### search-area-layout

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[coAlign]` | 内容对齐方式方式，默认靠左 | `'left' | 'center' | 'right'` | `left` | - |
| `[coCols]` | 指定一行几列，默认自动换行 | `number` | - | - |
| `[coMarginRight]` | 右间距 | `number` | 12 | - |
| `[coMarginBottom]` | 下间距 | `number` | 8 | - |
| `[coWidth]` | 宽度 | `number | 'auto'` | 200 | - |

### search-area-item

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[coWidth]` | 单独指定宽度 | `number` | - | - |
| `[coMarginRight]` | 单独指定间距 | `number` | - | - |

### search-area-extra

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[coAlign]` | 默认继承`<search-area-layout>`，可单独指定 | `'left' | 'center' | 'right'` | - | - |
| `[coCols]` | 默认继承`<search-area-layout>`，可单独指定 | `number` | - | - |
| `[coMarginRight]` | 默认继承`<search-area-layout>`，可单独指定 | `number` | - | - |
| `[coMarginBottom]` | 默认继承`<search-area-layout>`，可单独指定 | `number` | - | - |
| `[coWidth]` | 默认继承`<search-area-layout>`，可单独指定 | `number | 'auto'` | - | - |
