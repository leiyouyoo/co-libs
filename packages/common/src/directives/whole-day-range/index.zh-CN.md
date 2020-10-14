---
order: 3
title: whole-day-range
subtitle: 抽屉辅助类
type: Directive
---

`nz-range-picker` 选择全天时间

## API

| 名称 | 类型 | 默认值 | 功能 |
| --- | --- | --- | --- |
| `size` | 指定抽屉大小，响应式只支持非数字值，若值为数值类型，则根据 `nzPlacement` 自动转化为 `nzHeight` 或 `nzWidth` | `sm,md,lg,xl,number` | `md` |
| `footer` | 是否需要工具条 | `boolean` | `true` |
| `footerHeight` | 工具条高度 | `number` | `55` |
| `exact` | 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 | `boolean` | `true` |
| `drawerOptions` | 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数 | `NzDrawerOptions` | - |
