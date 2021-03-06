---
type: Basic
title: range-picker
subtitle: 日期范围
cols: 1
module: import { CoDataRangeModule } from '@co/cbc/date-picker';
---

基于 `nz-range-picker` 进一步优化，更好的服务于开始与结束日期。

## API

### range-picker

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[(ngModel)]` | 开始日期，开始与结束同时有值才会生效 | `Date` | - |  |
| `[(ngModelEnd)]` | 结束日期，开始与结束同时有值才会生效 | `Date` | - |  |
| `[shortcut]` | 设置快捷键 | `boolean, DateRangePickerShortcut` | `false` | ✅ |
| `[coAllowClear]` | 是否显示清除按钮 | `boolean` | `true` | ✅ |
| `[coAutoFocus]` | 自动获取焦点 | `boolean` | `false` | ✅ |
| `[coClassName]` | 选择器 className | `string` | `''` | ✅ |
| `[coDateRender]` | 自定义日期单元格的内容（month-picker/year-picker不支持） | `TemplateRef<Date>\|string|\((d: Date) => TemplateRef<Date>｜string)` | - |  |
| `[coDisabled]` | 禁用 | `boolean` | `false` |  |
| `[coDisabledDate]` | 不可选择的日期（year-picker不支持） | `(current: Date) => boolean` | - | ✅ |
| `[coLocale]` | 国际化配置 | `object` | [默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |  |
| `[coOpen]` | 控制弹层是否展开 | `boolean` | - |  |
| `[coPopupStyle]` | 额外的弹出日历样式 | `object` | `{}` | ✅ |
| `[coDropdownClassName]` | 额外的弹出日历 className | `string` | - | ✅ |
| `[coSize]` | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | `'large'｜'small'` | - | ✅ |
| `[coStyle]` | 自定义输入框样式 | `object` | `{}` | ✅ |
| `[coDisabledTime]` | 不可选择的时间 | `(current: Date, partial: 'start'｜'end') => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }` | - | ✅ |
| `[coFormat]` | 展示的日期格式 | `string` | `"yyyy-MM-dd"` | ✅ |
| `[coRanges]` | 预设时间范围快捷选择 | `{ [ key: string ]: Date[] }` | - | ✅ |
| `[coRenderExtraFooter]` | 在面板中添加额外的页脚 | `TemplateRef｜string｜(() => TemplateRef｜string)` | - |  |
| `[coShowTime]` | 增加时间选择功能 | `object｜boolean` | [TimePicker Options](/components/time-picker/zh#api) | ✅ |
| `[coPlaceHolder]` | 输入框提示文字 | `string[]` | - |  |
| `(coOnOk)` | 点击确定按钮的回调 | `EventEmitter<Date[]>` | - |  |
| `(coOnOpenChange)` | 弹出和关闭的回调 | `EventEmitter<boolean>` | - |  |

> 支持 [nz-range-picker](https://ng.ant.design/components/date-picker/zh#nz-range-picker) 的所有属性。

### DateRangePickerShortcut

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[enabled]` | 是否启用 | `boolean` | `false` |
| `[closed]` | 是否点击后立即关闭面板 | `boolean` | `true` |
| `[enabled]` | 快捷列表 | `DateRangePickerShortcutItem[]` | `今天,昨天,近3天,近7天,本周,本月,全年` |
