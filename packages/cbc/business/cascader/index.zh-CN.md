---
type: Business
title: cascader
subtitle: 级联选择
order: 10
cols: 1
module: import { CoCasccderModule } from '@co/cbc/date-picker';
---



## API

### cascader

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[(ngModel)]` | 指定选中项 | `any[]` | - |  
| `[coAllowClear]` | 指定选中项 | `any[]` | - |  
| `[coShowInput]` | 	显示输入框 | `boolean` | true |  
| `[coShowSearch]` | 	是否支持搜索，默认情况下对 label 进行全匹配搜索，不能和 [nzLoadData] 同时使用 | `boolean/NzShowSearchOptions` | false |  
| `(coModelChange)` | 	值发生变化时触发 | `EventEmitter<any[]>` | - |  
| `(coSelectionChange)` | 	值发生变化时触发 | `EventEmitter<any[]>` | - |  

### coShowSearch 为对象时需遵守 NzShowSearchOptions 接口：


| 参数 | 说明 | 类型 | 默认值 | 
|----|----|----|-----|
| `filter` | 可选，选择是否保留选项的过滤函数，每级菜单的选项都会被匹配 | `(inputValue: string, path: NzCascaderOption[]): boolean` | - | 
| `sorter` | 可选，按照到每个最终选项的路径进行排序，默认按照原始数据的顺序 | `(a: NzCascaderOption[], b: NzCascaderOption[], inputValue: string): number` | - | 