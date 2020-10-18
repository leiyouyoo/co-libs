---
type: Basic
title: co-map
subtitle: 地图
cols: 1
module: import { CoMapModule } from '@co/map';
---

基于 `mapbox` 封装的地图组件。

## API

### co-map

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[height]` |  高度 | `Number` | 300 |  |
| `[width]` | 宽度 | `Number` | - |  |
| `[mode]` | 模式(ocean:海运地图，air：空运地图)| `Mode` | `ocean` | ✅ |
| `[pathRectMargin]` | 路线区域保留外边距 | `{ left?: number; right?: number; top?: number; bottom?: number } ` | ` { left: 0 }` | ✅ |
| `[paths]` | 路线 | ` Path[]` | - | ✅ |
| `[currentPositions]` | 当前位置 | `Array<[number, number]>` | - | ✅ |
| `[center]` | 地图中心点 | `[number, number]` | - |  |
| `[markers]` | 标注 | ` Marker[]` | `[]` |  |
| `[markerClick]` | 点击标注时触发该回调 | `EventEmitter` | - | ✅ |
|