---
type: Business
title: customer-picker
subtitle: 客户选择器
cols: 1
module: import { CustomerPickerModule } from '@co/cbc/customer-picker';
---

客户选择器。
基于ng-zorro的select封装

## API

### customer-picker

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[ngModel]` | 当前选中的 option 的 value 值，可双向绑定，当 coMode 为 multiple 或 tags 时，ngModel 为数组 | `any | any[]` | - |
| `[customerList]` | 客户列表 | `any | any[]` | `[]` |
| `[optionLabel]` | select 中显示的文字 | `string` | `name` |
| `[optionValue]` | select 中 ngModel 的值 | `string` | `id` |
| `[placeHolder]` | 选择框默认文字 | `string` | - |
| `[notFoundContent]` | 当下拉列表为空时显示的内容	 | `string | TemplateRef<void>` | - |
| `[maxTagPlaceholder]` | 隐藏 tag 时显示的内容 | `TemplateRef<{ $implicit: any[] }>` | - |
| `[dropdownClassName]` | 下拉菜单的 className 属性 | `string` | - |
| `(search)` | 文本框值变化时回调 | `EventEmitter<string>` | - |
| `(scrollToBottom)` | 下拉列表滚动到底部的回调 | `EventEmitter<any>` | - |
| `(openChange)` | 下拉菜单打开状态变化回调 | `EventEmitter<boolean>` | - |
| `(blur)` | blur时回调 | `EventEmitter<any>` | - |
| `(focus)` | focus时回调 | `EventEmitter<any>` | - |
| `[mode]` | 设置模式 | `boolean` | `false` |
| `[disabled]` | 是否禁用 | `'multiple' | 'tags' | 'default'` | `default` |
| `[maxTagCount]` | 最多显示多少个 tag | `number` | `Infinity` |
| `[maxMultipleCount]` | 最多选中多少个标签 | `number` | `Infinity` |
| `[customTemplate]` | 自定义选择框的Template内容 | `TemplateRef<{ $implicit: NzOptionComponent }>` | - |
| `[customOption]` | 自定义在下拉菜单中的Template内容 | `TemplateRef<{ $implicit: any }>` | - |
| `[compareWith]` | 与 SelectControlValueAccessor 相同 | `(o1: any, o2: any) => boolean` | `(o1: any, o2: any) => o1===o2` |
