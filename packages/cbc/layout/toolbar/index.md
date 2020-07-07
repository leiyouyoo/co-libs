---
type: Layout
title: toolbar
order: 7
subtitle: 工具栏
cols: 1
module: import { ToolbarModule } from '@co/cbc/layout';
---

工具栏组件

## API

### toolbar

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[coAlign]` | 内容是否靠右对齐 | `boolean` | false | - |
| `[coWidth]` | 宽度 | `number | 'auto'` | 'auto' | - |
| `[coMarginRight]` | 右间距 | `number` | 12 | - |

### toolbar-item

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[coAlign]` | 是否单独靠右对齐 | `boolean` | false | - |
| `[coWidth]` | 单独指定宽度 | `number | 'auto'` | - | - |
| `[coMarginRight]` | 单独指定间距 | `number` | - | - |

