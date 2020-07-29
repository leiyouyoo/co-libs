---
type: Business
title: report-viewer
order: 15
subtitle: 报表组件
cols: 2
module: import { ReportViewerModule } from '@co/cbc';
---

报表选择器。

## API

### co-report-viewer

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[coParam]` | 需要传入的值 | object |`'type','height','ids' ,'getReportUrl'` 
| `coParam.height` | 报表高度 | string |`'600'` 
| `coParam.width` | 报表宽度 | string |`'600'` 
| `coParam.ids` | 获取报表组件的id | [] | -
| `coParam.getReportUrl` | 报表组件接口地址 | string | - 
