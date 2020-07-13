---
type: CURD
title: co-nz-select-extra
subtitle: nz-select 选择器增强指令
cols: 1
order: 3
module: import { CoNzSelectExtraModule } from '@co/cbc';
---

nz-select `(modelChange)` 返回值不满足现有场景
@required 必须同时使用ngModel 或者formControlName

## API

### co-se-container

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[gutter]` | 间距，当 `nzLayout:horizontal` 时有效 | `number` | `32` | ✅ |
| `[co-se-container]` | 指定表单元素最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/theme/responsive)决定 | `'1','2','3','4','5','6'` | - |  |
| `[col]` | 指定表单元素最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/theme/responsive)决定 | `'1','2','3','4','5','6'` | - | ✅ |
| `[labelWidth]` | 表单元素默认标签文本宽度，单位：`px` | `number` | `150` | ✅ |
| `[nzLayout]` | 表单布局，当 `inline` 时强制大小为 `compact` | `'horizontal','vertical','inline'` | `'horizontal'` | ✅ |
| `[size]` | 大小 `compact` 紧凑型，强制忽略 `error`、`extra` 展示 | `'default','compact'` | `'default'` | ✅ |
| `[firstVisual]` | 是否立即呈现错误视觉 | `boolean` | `false` | ✅ |
| `[ingoreDirty]` | 是否忽略 `dirty` 校验 | `boolean` | `false` | ✅ |
| `[line]` | 分隔线 | `boolean` | `false` |  |
| `[title]` | 标题 | `string,TemplateRef<void>` | - |  |
| `[errors]` | 批量修改 `co-se` 错误消息描述 | `SEErrorRefresh[]` | - |  |

