---
order: 90
title: 常见问题
type: Documents
---

## 基础

### 按F5刷新时标签页丢失

> 原因:多路由复用是基于页面快照内存缓存实现，但页面快照不能序列化，所以Document刷新时不能根据快照还原到以前状态。

> 方案: 在生产模式下禁用F5刷新整个Document,只刷新当前页面的数据。

