---
type: Business
title: tree-picker
order: 1
subtitle: 树选择器
cols: 2
module: import { TreePickerComponent } from '@co/cbc';
---

树选择器。

## API

### tree-picker

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[text]` | 按钮文字 | `{ checkAll: string, checkNothing: string, inverse: string }` | `{ checkAll: 'Check All', checkNothing: 'Check Nothing', inverse: 'Inverse' }` |
| `[coShowSearch]` | 服务端搜索，本地数据匹配不再适用 | `boolean` | `false` |
| `(coOnSearch)` | 搜索框内容时改变时的回调函数 | `EventEmitter<string>` | - |
其余API与NG-ZORRO的TreeSelect组件相同


## 方法

### tree-picker

| 名称 | 说明 |
| --- | --- |
与NG-ZORRO的TreeSelect组件相同


## 事件

### tree-picker

| 名称 | 说明 |
| --- | --- |
与NG-ZORRO的TreeSelect组件相同