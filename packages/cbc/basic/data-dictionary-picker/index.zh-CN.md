---
type: Business
title: data-dictionary-picker
subtitle: 数据字典选择器
cols: 1
module: import { DataDictionaryPickerComponent } from '@co/cbc/data-dictionary-picker';
---

箱选择器。
基于ng-zorro的select封装

## API

### data-dictionary-picker

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[ngModel]` | 当前选中的 option 的 value 值，可双向绑定，当 coMode 为 multiple 或 tags 时，ngModel 为数组 | `any | any[]` | - |
| `[data]` | 选项数据 | `any | any[]` | `[]` |
| `[optionLabel]` | select 中显示的文字 | `string` | `name` |
| `[optionValue]` | select 中 ngModel 的值 | `string` | `id` |
| `[coPlaceHolder]` | 选择框默认文字 | `string` | - |
| `[coNotFoundContent]` | 当下拉列表为空时显示的内容	 | `string | TemplateRef<void>` | - |
| `[coMaxTagPlaceholder]` | 隐藏 tag 时显示的内容 | `TemplateRef<{ $implicit: any[] }>` | - |
| `[coDropdownClassName]` | 下拉菜单的 className 属性 | `string` | - |
| `(coOnSearch)` | 文本框值变化时回调 | `EventEmitter<string>` | - |
| `(coScrollToBottom)` | 下拉列表滚动到底部的回调 | `EventEmitter<any>` | - |
| `(coOpenChange)` | 下拉菜单打开状态变化回调 | `EventEmitter<boolean>` | - |
| `(coBlur)` | blur时回调 | `EventEmitter<any>` | - |
| `(coFocus)` | focus时回调 | `EventEmitter<any>` | - |
| `[coMode]` | 设置模式 | `boolean` | `false` |
| `[coDisabled]` | 是否禁用 | `'multiple' | 'tags' | 'default'` | `default` |
| `[coMaxTagCount]` | 最多显示多少个 tag | `number` | `Infinity` |
| `[coMaxMultipleCount]` | 最多选中多少个标签 | `number` | `Infinity` |
| `[coCustomTemplate]` | 自定义选择框的Template内容 | `TemplateRef<{ $implicit: NzOptionComponent }>` | - |
| `[coCustomOption]` | 自定义在下拉菜单中的Template内容 | `TemplateRef<{ $implicit: any }>` | - |
| `[compareWith]` | 与 SelectControlValueAccessor 相同 | `(o1: any, o2: any) => boolean` | `(o1: any, o2: any) => o1===o2` |

