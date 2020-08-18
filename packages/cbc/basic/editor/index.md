---
order: 110
type: Component
title: editor
subtitle: 富文本编辑器
---

用于富文本编辑

## API
| 名称 | 说明 |
| --- | --- |
| getData() | 获取富文本数据 |
| getSelection() | 获取焦点 |
| getText() | 获取富文本编辑器中的文本 |
| print() | 打印功能 |

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[coPDFName]` | 用于导出的PDF名称 | `string` | - |
| `[html]` | 用于生成在文本框的html | `string` | - |

| `(coChange)` | 文本框编辑后返回的内容的回调（返回editor） | `any` | - |

