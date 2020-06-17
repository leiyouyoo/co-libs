---
order: 2
title: swagger 
subtitle: 生成接口服务
type: Documents
---

## 命令格式

```bash
ng g co-libs:swagger --name xxx --url http://192.168.1.5:8002/swagger/XXX/swagger.json
```

## 额外参数

| 参数名              | 默认值  | 描述                                                  |
| ------------------- | ------- | ----------------------------------------------------- |
| `--name`            | `true`  | 创建服务的名称                                      |
| `--url`            | `true`  |  服务swagger对应的地址                                 |