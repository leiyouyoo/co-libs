---
order: 1
title: hour-range
subtitle: 日期时间段管道
type: Pipe
---

`hour-range` 将 `2020-07-03 15:00-16:00` 时区转换 

```html
<td [innerHTML]="'2020-07-03 15:00-16:00' | dateRange"></td>
Output: (+08:00 时区)
<td>2020-07-03 23:00-24:00</td>
```
