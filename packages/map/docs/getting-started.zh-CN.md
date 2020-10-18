---
order: 1
title: 开始使用
type: Documents
---

@co/map 地图组件。

## 如何使用

安装 `@co/map` 依赖包：

```bash

yarn add @co/map

```

导入 `CoMapModule` 模块：

```ts
import { CoMapModule } from '@co/map';

@NgModule({
  imports: [
    CoMapModule
  ]
})
export class AppModule { }

```

引用 `mapbox` 资源：

```html
<!DOCTYPE html>
<html>
  <head>
    <link href="https://api.mapbox.cn/mapbox-gl-js/v1.11.1/mapbox-gl.css" rel="stylesheet" />
  </head>

  <body>
    <script src="https://api.mapbox.cn/mapbox-gl-js/v1.11.1/mapbox-gl.js"></script>
  </body>
</html>

```

地图组件示例：

```ts

import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div>
    <co-map #map
          [height]="600"
          [mode]="'ocean'"
          (markerClick)="onMarkerClick($event)"
          [markers]="markers"
          [paths]="paths"
          [currentPositions]="currentPoints"
    ></co-map>
    </div>
  `,
})
export class MapComponent implements OnInit {
  markers:any[];
  paths:any[];
  currentPoints:any[];

  @ViewChild('map')
  map: any;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.markers=  [{
        "point": [114.236875, 22.556499],
        "icon": "amap-shipment-icon icon-vessel"
      }, {
        "point": [-118.1937395, 33.7700504],
        "icon": "amap-shipment-icon icon-vessel"
      }];
  
      this.paths= [
        [
          [114.236875, 22.556499],
          [114.28001, 22.57907],
          [114.28245, 22.57798],
          [114.29881, 22.56664],
          [114.30854, 22.5632],
          [114.32772, 22.55708],
          [114.36062, 22.54646],
          [114.38008, 22.54013],
          [114.39782, 22.5292],
          [114.42162, 22.50842],
          [114.43659, 22.495],
          [114.4506, 22.4792],
          [114.4671, 22.45496],
          [114.4832, 22.42812],
          [114.49868, 22.40158],
          [114.51614, 22.37693],
          [-124.60867, 36.22252],
          [-124.46518, 36.15281],
          [-118.1937395, 33.7700504]
        ]
      ];
  
      this.currentPoints=[
        [-76.34983, 36.8775]
      ];
    });
  }

  onMarkerClick(e: any) {
    alert(JSON.stringify(e));
  }
}

```