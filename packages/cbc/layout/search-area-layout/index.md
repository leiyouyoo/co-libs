---
type: Layout
title: search-area-layout
order: 6
subtitle: 搜索栏布局
cols: 1
module: import { SearchAreaLayoutModule } from '@co/cbc/search-area-layout';
---

页面中搜索栏布局组件

## API

### search-area-layout

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[coAlign]` | 内容对齐方式方式，默认靠左 | `'left' | 'center' | 'right'` | `left` |
| `[coCols]` | 指定一行几列，默认自动换行 | `number` | - |
| `[coMarginRight]` | 右间距 | `number` | 12 |
| `[coMarginBottom]` | 下间距 | `number` | 8 |
| `[coWidth]` | 宽度 | `number` | 200 |

### search-area-item

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[coWidth]` | 单独指定宽度 | `number` | - |
| `[coMarginRight]` | 单独指定间距 | `number` | - |
| `[coLabel]` | 为输入控件增加label标示 | `string | TemplateRef<void> | null` | - |
| `[coFor]` | label 标签的 for 属性，`coLabel`为`TemplateRef`时无效 | `string` | - |
| `[coNoColon]` | 是否不显示 label 后面的冒号，`coLabel`为`TemplateRef`时无效 | `boolean` | `false` |
| `[coRequired]` | 是否显示 label 的星号，`coLabel`为`TemplateRef`时无效 | `boolean` | `false` |

