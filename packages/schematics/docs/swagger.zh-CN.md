---
order: 40
title: 生成CO服务插件
type: Documents
---

## 写在前面

```bash
ng g co-cli:swagger --name platform --url http://192.168.1.5:8002/swagger/Platform/swagger.json
```

又或者希望项目应该有一个统一风格时：

```bash
ng g ng-alain:plugin codeStyle
```

## 命令格式

```bash
ng g co-cli:swagger --name platform --url http://192.168.1.5:8002/swagger/Platform/swagger.json
```

## 额外参数

| 参数名              | 默认值  | 描述                                                  |
| ------------------- | ------- | ----------------------------------------------------- |
| `--name`            | `true`  | swagger名称                                      |
| `--url`            | `true`  |  swagger地址                                    |
