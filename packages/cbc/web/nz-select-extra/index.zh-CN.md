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

### nz-select(coNzOptionExtraChange)

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `(coNzOptionExtraChange)` | $event 为 coNzOptionExtra 绑定的值 | | | |

### nz-select[coSearchByExtraKey]

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[coSearchByExtraKey]` | nz-select 本地过滤时从coNzOptionExtra 相应的key 中搜索  | string[]  | | |

### nz-option[coNzOptionExtra]

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[coNzOptionExtra]` | 绑定自定义对象 | { [key: string]: any } | | |


