---
order: 40
title: 生成服务
type: Documents
---

## 写在前面

```bash
 ng g co-cli:swagger --name CSP --url http://api.dev.com/swagger/CSP/swagger.json
```

## 命令格式

```bash
ng g co-cli:swagger --name xxx --url http://192.168.1.5:8002/swagger/xxx/swagger.json
```

## 额外参数

| 参数名               | 描述                                                   |
| -------------------  | ----------------------------------------------------- |
| `--name`             | 命名文件名称                                           |
| `--url`              | 请求接口地址                                           |
| `--path`             | 指定生成目录                                           |

## 生成路径

```bash
默认生成在当前路径下
```