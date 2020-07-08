---
type: Business
title: commodity-picker
order: 1
subtitle: 品名选择器
cols: 2
module: import { CommodityPickerModule } from '@co/cbc';
---

品名选择器。

## API

### commodity-picker 

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[coSize]` | 头像大小 | `'large','small','default'` | `'default'` |
| `[coPlaceHolder]` | 占位符 | `string` | - |
| `[coMaxMultipleCount]` | 多选模式最大显示项数，其它以更多方式呈现. | `number` | `2` |
| `[coMode]` | 模式 | `'default' | 'multiple' | 'tags'` | `'default'` |
| `[coDropdownMode]` | 下拉框模式 | `'default' | 'table' | 'custom'` | `'default'` |
| `[coDropdownStyle]` | 下拉框样式 | `{ [key: string]: string }` | - |
| `[coDropdownColumns]` | 下拉框是表格模式时，针对表格的列定义 | `DropdownColumn[] | null` | - |
| `[coAllowClear]` | 是否允许清除 | `boolean` | `true`|
| `[coAutoFocus]` | 是否自动聚焦 | `boolean` | `false` |
| `[coAutoClearSearchValue]` | 是否自动清除搜索值 | `boolean` | `true` |
| `[coDisabled]` | 是否禁用 | `boolean` | `false` |
| `[coOpen]` | 是否打开下拉框 | `boolean` | `false` |
| `[coLabelMember]` | 显示成员 | `string` | `name` |
| `[coValueMember]` | 值成员 | `string` | `id` |
| `[coNotFoundContent]` | 没匹配内容提示模板板定义 | `TemplateRef<NzSafeAny> ` | - |
| `[coItemRender]` | 项模板定义 | `TemplateRef<NzSafeAny> ` | - |
| `[coDebounceInputCharCount]` | 防抖输入字符数 | `number` | `3` |
| `[coDebounceTime]` | 防抖时间(毫秒) | `number` | `500` |
| `[coPageSize]` | 服务请求页大小 | `number` | `20` |
| `[coFilter]` | 服务请求默认规律条件 | `CustomerFilter` | - |


## 方法

### commodity-picker

| 名称 | 说明 |
| --- | --- |
| blur() | 取消焦点 |
| focus() | 获取焦点 |
| clear() | 清除值 |


## 事件

### commodity-picker

| 名称 | 说明 |
| --- | --- |
| coOpenChange | 打开下拉框时触发 |
| coBlur | 失去焦点时触发 |
| coFocus | 获取焦点时触发 |