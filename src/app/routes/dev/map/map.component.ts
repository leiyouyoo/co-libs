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
          (markerClick)="onMapIconClick($event)"
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
        "point": [120.44681, 36.00114],
        "icon": "amap-shipment-icon icon-vessel-freight"
      }, {
        "point": [103.75610, 1.27666],
        "icon": "amap-shipment-icon icon-vessel-freight"
      }];
  
      this.paths= [
        [
          [120.44681, 36.00114],
          [111.10032, 1.27446],
          [105.10032, 1.27446],
          [104.10032, 1.27446],
          [103.97080, 1.24679],
          [103.75613, 1.27665],
          [103.75610, 1.27666],
        ]
      ];
  
      this.currentPoints=[
        [110.75613, 1.24679]
      ];
    });
  }

  onMapIconClick(e: any) {
    alert(JSON.stringify(e));
  }
}
