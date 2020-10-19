// tslint:disable

import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import * as _ from 'lodash';

declare var mapboxgl;


interface Iconfonts {
  coor: [number, number];
  iconClass: string;
  theme: 'normal' | 'error';
}

@Component({
  selector: 'co-map',
  templateUrl: 'map.component.html'
})
export class CoMapComponent implements OnInit, OnChanges, OnDestroy {
  /**
  * 高度
  */
  @Input() height: number = 300;

  /**
   * 宽度
   */
  @Input() width?: number;

  /**
   * 语言
   */
  @Input() lang?: string;

  /**
   * 模式(ocean:海运地图，air：空运地图)
   */
  @Input() mode?: Mode = 'ocean';

  /**
   * 路线区域保留外边距
   */
  @Input() pathRectMargin?: { left?: number; right?: number; top?: number; bottom?: number } = { left: 0 };

  /**
   * 路线
   */
  @Input() paths: Path[] = [];

  /**
   *  当前位置
   */
  @Input() currentPositions?: Array<[number, number]>;

  /**
   *  地图中心点
   */
  @Input() center?: [number, number];

  /**
   * markers
   */
  @Input() markers: Marker[] = [];

  /**
   * marker单击事件
   */
  @Output() markerClick = new EventEmitter();

  @ViewChild('mapContainer', { static: true }) mapContainer: ElementRef;

  private map: any;
  private cacheMarkers: any[] = [];
  private cacheLayers: any[] = [];

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private zone: NgZone,
  ) {
  }

  ngOnInit() {
    this.init();
  }


  /**
   * 组件输入参数变化时处理钩子
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.init().then(()=>{

      const { paths, markers, currentPositions, center, pathRectMargin } = changes;
      let ps: Path[] = [];
  
      // 绘制路线
      let pathsOptions: any = new Map<Path, { options: any; currentPosition: [number, number] }>();
      if (paths && paths.currentValue) {
        pathsOptions = this.calcPathsOptions(
          paths.currentValue,
          currentPositions && currentPositions.currentValue
        );
        this.drawPaths(this.map, pathsOptions);
  
        ps = ps.concat(paths.currentValue);
      }
  
      // 绘制地点标记
      if (markers && markers.currentValue) {
        // const optionsMap = this.calcMarkersOptions(markers.currentValue, pathsOptions);
        if (markers && markers.currentValue) {
          ps = ps.concat([_.map(markers.currentValue, (m) => m.point)]);
        }
  
        this.addMarkers(this.map, markers.currentValue);
      }
  
      // 设置边距
      const padding = { left: 100, right: 100, top: 100, bottom: 100 };
      if (pathRectMargin && pathRectMargin.currentValue) {
        padding.left = pathRectMargin.currentValue.left || 100;
      }
  
  
      // // 设置当前语言
      // if (lang && lang.currentValue) {
      //   this.changeLang(this.map, lang.currentValue);
      // }
  
      if (center && center.currentValue) {
        this.setCenter(this.map, center.currentValue);
      }
  
  
      // 根据路线和标记调整缩放层级和中心位置
      if (!_.isEmpty(ps) && ps.length > 1) {
        const bounds = this.calcBounds(this.map, ps);
        this.adjustZoomAndCenter(this.map, bounds, padding);
      } else {
        this.map.setZoom(1)
      }
    });
  }

  /**
   * 组件销毁前释放相关资源
   */
  ngOnDestroy(): void {
    this.map && this.map.destroy();
  }

  /**
   * 地图初始逻辑
   */
  private init(): Promise<any> {
    const self=this;
    return new Promise(function _p(resolve) {
      if (self.map) {
       if(self.map.loaded()){
         resolve(true);
       }else{
         return;
       }
      }

      const div = self.mapContainer.nativeElement;
      self.renderer.setStyle(div, 'height', self.height + 'px');
      self.renderer.setStyle(div, 'width', '100%');
  
      self.zone.runOutsideAngular(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibHljY2NjeCIsImEiOiJjanprb3czMHYwNGZhM2RxcDBxaDdzdXRjIn0.Nq84rnE4jyGaDciJ8j73lw';
        // mapboxgl.baseApiUrl = 'https://api.mapbox.cn';
        self.map = new mapboxgl.Map({
          container: div,
          style: 'mapbox://styles/mapbox/streets-v11',
          zone: 1.5
        });
  
        self.map.on('load', ()=> {
          self.map.resize();
  
          resolve(true);
        });
  
        // this.map.setRenderWorldCopies(false);
        // setTimeout(() => {
        //   this.map.resize();
        // });
      });
  });

  
  }

  /**
  * 切换语言
  *
  * @param map 地图
  * @param lang 语言
  */
  private changeLang(map: any, lang: string) {
    map.setLang(lang);
  }

  /**
 * 重置
 */
  public reset(): void {
    if (this.cacheMarkers.length) {
      this.cacheMarkers.forEach(c => {
        c.remove();
      })
      this.cacheMarkers = [];
    }

    if (this.cacheLayers.length) {
      this.cacheLayers.forEach(c => {
        this.map.removeLayer(c);
      })
      this.cacheLayers = [];
    }
  }

  /**
   * 设置中心点
   *
   * @param map 地图
   * @param lang 模式
   */
  private setCenter(map: any, center: [number, number]) {
    map.setCenter(center);
  }

  /**
   * 快速根据路线点计算地图显示层级
   *
   * @param routes 路线点集合
   */
  private calcInitZoom(routes: Path[]): number {
    return 1.5;
  }

  /**
   * 调整地图缩放比例并调整中心位置
   *
   * @param map 地图
   * @param lnglats 线路GPS坐标集合
   */
  private calcBounds(map: any, paths: Path[]): any {
    if (!paths) return;

    let lnglats: Array<any> = [];
    paths.forEach((p) => {
      lnglats = _.concat(lnglats, this.convertPathToLngLats(p));
    });

    const bounds = lnglats.reduce(function (bounds, coord) {
      return bounds.extend(coord);
    }, new mapboxgl.LngLatBounds(lnglats[0], lnglats[0]));

    return bounds;
  }

  /**
   * 调整地图缩放比例并调整中心位置
   *
   * @param map 地图
   * @param lnglats 线路GPS坐标集合
   */
  private adjustZoomAndCenter(
    map: any,
    bounds: any,
    padding: any
  ) {
    map.fitBounds(bounds, {
      padding
    });
  }

  /**
  *  转换路径集合到一维经纬度集合
  *
  * @param paths 路径集合
  */
  private convertPathToLngLats(path: Path) {
    if (!path) return null;

    return _.map(path, (p) => {
      let lng: any = p[0];
      if (lng < 0) {
        lng = 360 + lng;
      }

      const lat: any = p[1];

      return [lng, lat];
    });
  }


  /**
   * 绘制Markers
   *
   * @param map 地图
   * @param optionsMap 标记选项映射
   * @param mapOptions 地图选项
   */
  private addMarkers(
    map: any,
    markerOptions: Map<Marker, { status: Status }>,
  ) {

    for (const [key, value] of markerOptions.entries()) {
      const animation: boolean = value.status === Status.current || key.animation || true;
      const marker = this.addMarker(map, { ...key, ...value, animation });
      this.cacheMarkers.push(marker);
    }
  }

  /**
   * 绘制Marker
   *
   * @param options 标记选项
   * @param mapOptions 地图选项
   */
  private addMarker(map: any, markerOptions: any) {
    const position = markerOptions.point;
    const icon = markerOptions.icon;
    const template = markerOptions.template;
    let iconSpan = "";

    if (markerOptions.animation) {
      iconSpan = `<div class="custom-marker_wrap animation ${markerOptions.status || 'passed'}" style="width:64px;height:64px">  
      <div class=" lightring lightring-10"></div>
       <div class=" lightring lightring-40"></div>
      <i class="iconfont amapicon custom-marker ${icon}"></i>
      </div>`;
    } else {
      iconSpan = `<span class="custom-marker_wrap ${markerOptions.status || 'passed'}" >  
      <i class="iconfont amapicon custom-marker ${icon}"></i>
      </span>`;
    }

    const markerContainer = document.createElement("div");
    markerContainer.innerHTML = iconSpan;

    // 邦事件
    const self = this;
    markerContainer.addEventListener('click', function () {
      self.markerClick && self.markerClick.emit(markerOptions.data);
    });


    const marker = new mapboxgl.Marker(markerContainer)
      .setLngLat(position)
      .addTo(map);

    if (template) {
      const popup = new mapboxgl.Popup({ offset: 4, closeOnMove: false })
        .setHTML(template.body);
      marker.setPopup(popup);
      marker.togglePopup();
      
      markerContainer.onmouseover = function () {
        popup.addClassName('custom-popup__show')
      }
      markerContainer.onmouseleave = function () {
        popup.removeClassName('custom-popup__show')
      }
    }
    return marker;
  }


  /**
   * 绘制多段路径
   *
   * @param map 地图
   * @param optionsMap 路径选项映射集合
   * @param currentPosition 当前位置
   * @param mapOptions 地图选项
   */
  private drawPaths(
    map: any,
    optionsMap: Map<Path, { options: any; currentPosition: [number, number] }>,
  ) {
    // 根据途径点找到档次运输的主干线
    const oceanPortType = 'chuanyun';
    const airPortType = 'kongyun';

    const paths: any = [...optionsMap.keys()];
    let mainPaths: any[] = _.filter(paths, (p) => {
      const startPos = _.find(this.markers, (m) => m.point[0] === p[0][0] && m.point[1] === p[0][1]);
      const endPos = _.find(
        this.markers,
        (m) => m.point[0] === p[p.length - 1][0] && m.point[1] === p[p.length - 1][1],
      );
      return (
        (startPos && startPos?.icon?.includes(oceanPortType) && endPos && endPos?.icon?.includes(oceanPortType)) ||
        (startPos && startPos?.icon?.includes(airPortType) && endPos && endPos?.icon?.includes(airPortType))
      );
    });

    // 查找最大路段
    if (_.isEmpty(mainPaths)) {
      mainPaths = [this.findMaxPath(paths)];
    }

    // 根据当前位置计算已通过路线，在途路线及未通过路线并绘制
    for (const [key, value] of optionsMap.entries()) {
      if (mainPaths.includes(key)) {
        if (this.mode === 'air') {
          this.drawBezierPath(map, key, value.currentPosition, { transport: 'feiji', ...value.options });
        } else {
          this.drawFixedPath(map, key, value.currentPosition, { transport: 'chuan', ...value.options });
        }
      } else {
        this.drawBezierPath(map, key, value.currentPosition, { transport: 'huoyun', ...value.options });
      }
    }
  }

  /**
   * 批量计算路线集合的经纬度和路线样式
   *
   * @param paths 路线集合
   * @param currentPositions 当前位置
   * @param mapOptions 地图选项
   */
  private calcPathsOptions(
    paths: Path[],
    currentPositions: Array<[number, number]>
  ): Map<Path, { options: any; currentPosition?: [number, number] }> {

    const pathsOptions: Map<Path, { options: any; currentPosition?: [number, number] }> = new Map<
      Path,
      { options: any; currentPosition: [number, number] }
    >();

    currentPositions = this.convertPathToLngLats(currentPositions) as any[];

    // 如果有当前位置，则计算当前位置到开始位置路线及样式
    if (currentPositions) {
      for (const cp of currentPositions) {
        const closestPoint: any = cp;
        const pathIndex = _.findLastIndex(paths, (path) => {
          const pathLngLats:any = this.convertPathToLngLats(path);
          const beginP = pathLngLats[0];
          const endP = pathLngLats[pathLngLats.length - 1];

          const llb = new mapboxgl.LngLatBounds(
            new mapboxgl.LngLat(beginP[0], beginP[1]),
            new mapboxgl.LngLat(endP[0], endP[1])
          );

          const ll = new mapboxgl.LngLat(cp[0], cp[1]);

          return llb.contains(ll);
        });

        // 如果在路线中途，则此段路线拆分成已通过和未通过两段。
        if (pathIndex > -1) {
          const curPath: any = this.convertPathToLngLats(paths[pathIndex]);

          // 已经过路线
          for (let i = 0; i < pathIndex; i++) {
            const p = paths[i];

            // 起点相同或终点相同则认为是子分支
            if (
              (p[0][0] === curPath[0][0] && p[0][1] === curPath[0][1]) ||
              (p[p.length - 1][0] === curPath[curPath.length - 1][0] &&
                p[p.length - 1][1] === curPath[curPath.length - 1][1])
            ) {
              continue;
            }

            pathsOptions.set(paths[i], {
              options: {
                status: Status.passed,
                strokeStyle: 'solid'
              },
            });
          }

          // 设置当前路线样式
          pathsOptions.set(curPath, {
            currentPosition: curPath[1],
            options: {
              status: Status.current,
            },
          });
        }
      }

      // 未通过路线样式
      for (let i = 0; i < paths.length; i++) {
        const p: any = this.convertPathToLngLats(paths[i]);
        pathsOptions.set(p, {
          options: {
            status: Status.unpassed,
            strokeStyle: 'dashed',
          }
        });
      }
    } else {
      // 如果无当前位置则设置默认Path样式
      for (let i = 0; i < paths.length; i++) {
        const p: any = this.convertPathToLngLats(paths[i]);
        pathsOptions.set(p, {
          options: {
            strokeStyle: 'dashed',
          },
        });
      }
    }

    return pathsOptions;
  }

  /**
   * 批量计算路线集合的经纬度和路线样式
   *
   * @param paths 路线集合
   * @param currentPosition 当前位置
   * @param times 倍数
   */
  private calcMarkersOptions(
    markers: Marker[],
    pathOptions: Map<Path, { options: any; currentPosition: [number, number]; status: Status }>,
  ): Map<Marker, { status: Status }> {
    const markerOptions: Map<Marker, { status: Status }> = new Map<
      Marker,
      { status: Status }
    >();

    markers.forEach((marker) => {
      for (const [key, value] of pathOptions.entries()) {
        const pathOption = value;
        const path = key;
        if (
          pathOption.options.status === Status.passed &&
          marker.point[0] === path[0][0] &&
          marker.point[1] === path[0][1]
        ) {
          markerOptions.set(marker, {
            status: pathOption.options.status,
          });

          break;
        }

        if (pathOption.options.status === Status.current) {
          if (marker.point[0] === path[0][0] && marker.point[1] === path[0][1]) {
            let status = pathOption.options.status;
            if (pathOption.currentPosition[0] === path[0][0] && pathOption.currentPosition[1] === path[0][1]) {
              status = pathOption.options.status;
            } else {
              status = Status.passed;
            }

            markerOptions.set(marker, {
              status,
            });

            break;
          }

          // 当前位置在最后节点
          if(marker.point[0] === path[path.length - 1][0] &&
            marker.point[1] === path[path.length - 1][1] &&
            marker.point[0] === pathOption.currentPosition[0] &&
            marker.point[1] === pathOption.currentPosition[1]){
            markerOptions.set(marker, {
              status: Status.passed,
            });
          }
        }
      }

      if (!markerOptions.has(marker)) {
        markerOptions.set(marker, {
          status: pathOptions && pathOptions.size > 0 ? Status.unpassed : Status.passed,
        });
      }
    });

    return markerOptions;
  }

  /**
   * 计算路径集合中最大长度那段路径
   *
   * @param paths
   */
  private findMaxPath(paths: any[]) {
    if (_.isEmpty(paths)) return null;

    const sortedPaths = _.sortBy(paths, (path) => {
      const length = path.length;
      return Math.abs((path[0][0] - path[length - 1][0]) * (path[0][1] - path[length - 1][1])) * -1;
    });

    return sortedPaths[0];
  }


  /**
   * 绘制贝塞尔曲线
   *
   * @param map 地图
   * @param path 路线信息
   * @param currentPos  当前位置
   * @param pathOptions 路线选项
   * @param mapOptions 地图选项
   */
  private drawBezierPath(map: any, path: Path, currentPos: [number, number], pathOptions: any) {
    if (!path || path.length < 2) return;

    const dir = this.calcPathDir(path[0], path[1]);
    const points = Bezier.getPoints(100, path[0], path[1], 0.05);
    let centerIndex = Math.ceil(points.length / 2);

    if (pathOptions.status === 'current') {
      if (currentPos[0] === path[0][0] && currentPos[1] === path[0][1]) {
        // 在起点
        centerIndex = 0;
      } else if (currentPos[0] === path[1][0] && currentPos[1] === path[1][1]) {
        // 在终点
        centerIndex = points.length - 1;
      } else {
        // 在中途
        centerIndex = Math.ceil(points.length / 2);
      }
    } else if (pathOptions.status === 'passed') {
      centerIndex = points.length - 1;
    } else {
      centerIndex = 0;
    }

    // 绘制已通过路线
    if (centerIndex > 0) {
      const passedPath = this.convertPathToLngLats(points.slice(0, centerIndex + 1));
      const layerId = _.uniqueId();
      map.addLayer({
        "id": layerId,
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": passedPath
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#1890FF",
          "line-width": 2
        }
      });

      this.cacheLayers.push(layerId);
    }

    // 绘制未通过路段
    if (centerIndex < points.length - 1) {
      const layerId = _.uniqueId();

      map.addLayer({
        "id": layerId,
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": points.slice(centerIndex)
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          'line-color': '#999999',
          'line-width': {
            base: 2,
            'stops': [
              [14, 3],
              [18, 5],
            ],
          },
          'line-dasharray': [.1, 1.8],
        }
      });
      this.cacheLayers.push(layerId);
    }

    // 添加当前点信息
    if (centerIndex > 0 && centerIndex < points.length - 1) {
      const status = Status.current;
      const animation = true;
      const centerPoint = points[centerIndex];

      const marker = this.addMarker(
        map,
        {
          icon: `custom-marker icon-${pathOptions.transport} transport dir-${dir}`,
          status,
          point: centerPoint,
          animation,
        }
      );

      this.cacheMarkers.push(marker);
    }
  }

  /**
   * 绘制特定经纬度集合路线
   *
   * @param map 地图
   * @param path 路线
   * @param currentPos 当前位置
   * @param options 选项
   */
  private drawFixedPath(map: any, path: Path, currentPos: [number, number], pathOptions: any) {
    if (!path || path.length < 2) return;

    const dir = this.calcPathDir(path[0], path[path.length - 1]);
    let points = path;
    if (path.length === 2) {
      points = Bezier.getPoints(100, path[0], path[1], 0.05);
    }
    let centerIndex = Math.ceil(points.length / 2);

    if (pathOptions.status === Status.current) {
      if (currentPos[0] === path[0][0] && currentPos[1] === path[0][1]) {
        // 在起点
        centerIndex = 0;
      } else if (currentPos[0] === points[points.length - 1][0] && currentPos[1] === points[points.length - 1][1]) {
        // 在终点
        centerIndex = points.length - 1;
      } else {
        // 在中途
        centerIndex = _.findIndex(points, (p) => p[0] === currentPos[0] && p[1] === currentPos[1]);
        if (centerIndex > -1) {
          centerIndex = Math.ceil(points.length / 2);
        }
      }
    } else if (pathOptions.status === Status.passed) {
      centerIndex = points.length - 1;
    } else {
      centerIndex = 0;
    }

    // 绘制已通过路线
    if (centerIndex > 0) {
      const passedPath = points.slice(0, centerIndex + 1);
      const layerId = _.uniqueId();
      map.addLayer({
        "id": layerId,
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": passedPath
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#1890FF",
          "line-width": 2
        }
      });
      this.cacheLayers.push(layerId);
    }

    // 绘制未通过路段
    if (centerIndex < points.length - 1) {
      const layerId = _.uniqueId();
      map.addLayer({
        "id": layerId,
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": points.slice(centerIndex)
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          'line-color': '#999999',
          'line-width': {
            base: 2,
            'stops': [
              [14, 3],
              [18, 5],
            ],
          },
          'line-dasharray': [.1, 1.8],
        }
      });
      this.cacheLayers.push(layerId);
    }

    // 添加当前点信息
    if (centerIndex > 0 && centerIndex < points.length - 1) {
      const status = Status.current;
      const animation = true;
      const centerPoint = points[centerIndex];
      const marker = this.addMarker(
        map,
        {
          icon: `custom-marker icon-${pathOptions.transport} transport dir-${dir}`,
          status,
          point: centerPoint,
          animation
        },
      );

      this.cacheMarkers.push(marker);
    }
  }

  /**
   * 根据源点，目标点计算路线方向
   *
   * @param src 源点
   * @param dest 目标点
   */
  private calcPathDir(src: [number, number], dest: [number, number]): Direction {
    const xdistance = Math.abs(src[0] - dest[0]);
    const ydistance = Math.abs(src[1] - dest[1]);

    let adjustSrcLng = src[0];
    if (adjustSrcLng < 0) {
      adjustSrcLng += 360;
    }

    let adjustDestLng = dest[0];
    if (adjustDestLng < 0) {
      adjustDestLng += 360;
    }

    let adjustSrcLat = src[1];
    if (adjustSrcLat < 0) {
      adjustSrcLat += 170;
    }

    let adjustDestLat = dest[1];
    if (adjustDestLat < 0) {
      adjustDestLat += 170;
    }

    if (xdistance > ydistance) {
      return adjustSrcLng < adjustDestLng ? Direction.right : Direction.left;
    } else {
      return adjustSrcLat > adjustDestLat ? Direction.up : Direction.down;
    }
  }
}


export type Path = [number, number][];

/**
 * 地图模式
 */
export type Mode = 'ocean' | 'air';



/**
 * 方向
 */
export enum Direction {
  /**
   * 左
   */
  left = 'left',

  /**
   * 右
   */
  right = 'right',

  /**
   * 上
   */
  up = 'up',

  /**
   * 下
   */
  down = 'down'
}


/**
 * 状态
 */
export enum Status {
  /**
   * 当前
   */
  current = 'current',

  /**
   * 通过
   */
  passed = 'passed',

  /**
   * 未通过
   */
  unpassed = 'unpassed'
}

// Marker信息
export interface Marker {
  /**
   * 图标
   */
  icon?: string,

  /**
   * 坐标
   */
  point: Array<any>,

  /**
   * 是否动画
   */
  animation: boolean,

  /**
   * 状态
   */
  status: Status
}

/**
 * 尺寸
 */
export interface Size {
  /**
   * 宽
   */
  width: number,

  /**
   * 高
   */
  height: number
}

/**
 * 图标
 */
export interface Icon {
  img?: string,
  icon?: string,
  point: Array<any>,
  template?: { title?: string, body?: string },
  data?: any,
}

/**
 * 地图选项
 */
export interface MapOptions {
  /**
   * 高度
   */
  height?: number,

  /**
   * 宽度
   */
  width?: number,

  /**
   * 语言
   */
  lang?: string,

  /**
   * 模式(ocean:海运地图，air：空运地图)
   */
  mode?: string,

  /**
   * 路线区域保留外边距
   */
  pathRectMargin?: { left?: number; right?: number; top?: number; bottom?: number },

  /**
   * 路线
   */
  paths?: Path[],

  /**
   *  当前位置
   */
  currentPointList?: [number, number][],

  /**
   *  地图中心点
   */
  center?: [number, number],

  /**
   * markers
   */
  markers?: Marker[],
}

export default class Bezier {
 
  /*
   * @desc 获取点，这里可以设置点的个数
   * @param {number} num 点个数
   * @param {Array} startPoint 点坐标
   * @param {Array} controlPoint 点坐标
   * @param {Array} endPoint 点坐标
   */
  public static getPoints(num = 100, startPoint, endPoint, controlHeight: number) {
    const startAjustPoint = Bezier.getAdjustLngLat(startPoint);
    const endAjustPoint = Bezier.getAdjustLngLat(endPoint);

    const controlPoint = Bezier.getControlPoint(startAjustPoint, endAjustPoint, controlHeight);

    const points:any = [];
    for (let i = 0; i < num; i++) {
      points.push(Bezier.twoBezier(i / num, startAjustPoint, controlPoint, endAjustPoint));
    }
    points.push([...endAjustPoint]);

    return points;
  }

  private static getAdjustLngLat(point: [number, number]): [number, number] {
    let lng: any = point[0];
    if (lng < 0) {
      lng = 360 + lng;
    }

    let lat: any = point[1];
    if (lat < 0) {
      lat = 170 + lat;
    }

    return [lng, lat];
  }

  /*
   * @desc 二阶贝塞尔
   * @param {number} t 当前百分比
   * @param {Array} p1 起点坐标
   * @param {Array} p2 终点坐标
   * @param {Array} cp 控制点
   */
  private static twoBezier(t, p1, cp, p2) {
    const [x1, y1] = p1;
    const [cx, cy] = cp;
    const [x2, y2] = p2;
    const x = (1 - t) * (1 - t) * x1 + 2 * t * (1 - t) * cx + t * t * x2;
    const y = (1 - t) * (1 - t) * y1 + 2 * t * (1 - t) * cy + t * t * y2;
    return [x, y];
  }


  /**
   * 获取两点之间的中间控制点
   * 
   * @param point1 起点
   * @param point2 终点
   * @param distance 抛物弧度高度
   */
  private static getControlPoint(point1: [number, number], point2: [number, number], distance: number) {
    const xdistance = Math.abs(point1[0] - point2[0]);
    const ydistance = Math.abs(point1[1] - point2[1]);
    const l = Math.sqrt(Math.pow(xdistance, 2) + Math.pow(ydistance, 2));
    if (xdistance < ydistance) {
      return [(point1[0] + point2[0]) / 2 + distance * l, (point1[1] + point2[1]) / 2];
    } else {
      return [(point1[0] + point2[0]) / 2, (point1[1] + point2[1]) / 2 + distance * l];
    }
  }
}
