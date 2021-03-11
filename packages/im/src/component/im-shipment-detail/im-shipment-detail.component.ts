import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { FreightMethodType, ShipmentService, ShipmentStatusEnum, ShipmentDetail } from '../../bussiness/shipment/shipment-library.module';
import { ImShipmentService } from './shipment.service';
import { Router } from '@angular/router';

interface LineItem {
  imo: string;
  mmsiNumber: string;
  vesselName: string;
  vesselCallNumber: string;
  countryOfDestination: string;
  navistatus: string;
  estimatedArrivalDateTime: string;
  latitudeDegree: string;
  longitudeDegree: string;
  postTime: string;
  id: number;
}

@Component({
  selector: 'lib-im-shipment-detail',
  templateUrl: './im-shipment-detail.component.html',
  styleUrls: ['./im-shipment-detail.component.less'],
})
export class ImShipmentDetailComponent implements OnInit {
  @Input() isShare = false;
  @Input() id: string;
  @Input() sample = false;

  @Input() set _RouteData(item: any) {
    this.__RouteData = item;
    this.ngOnInit();
  }

  @ViewChild('map') mapDivElement: ElementRef<HTMLDivElement>;

  private __RouteData;
  public transportType = 'ship'; //'ship' 'air'
  public agreement = 'door-cy'; //'cy-cy' 'door-door' 'cy-door' 'door-cy'
  public state: number;

  public ExpectedDeliveryDate: any;
  public route: any;
  readonly ShipmentStatusEnum = ShipmentStatusEnum;
  mapHeight: number;
  readonly FreightMethodType = FreightMethodType;

  constructor(public shipmentService: ImShipmentService,
              private router: Router,
              ) {
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.ngOnInit();
  }

  ngOnInit() {
    /* this.shipmentService.getShipmentTrackByRes({ routeDetails: {
      carrier: `MAERSK SEVILLE`,
        estDepatureOrginPortDate: `2019-12-11T00:00:00.000Z`,
        estArrivalDestinationPortDate: `2020-01-10T00:00:00.000Z`
      } })
      .subscribe(lineData => {
        this.line = lineData.map(point => {
          return [point.longitudeDegree, point.latitudeDegree];
        });
        if (this.line.length) {
          this.icon = {
            point: this.line[this.line.length - 1],
            icon: 'icon-ship-round',
          }
        }
      })*/
    const fillData = (data) => {
      this.ExpectedDeliveryDate = data.mainESTTruckDeliveryDate;
      this.agreement = data.agreement;
      this.transportType =
        data.freightMethodType == FreightMethodType.Ocean
          ? 'ship'
          : data.freightMethodType == FreightMethodType.Air
          ? 'air'
          : '';
      this.agreement = data.agreement = (data.transportClausesString || '').toLowerCase();

      this.state = data.status;
      this.route = data;
      this.draw(this.route);
      /* ���Ե�ͼ */
      /*this.shipmentService.getShipTrack({
        vesselName: 'SEASPAN RIODEJANEIRO',
        // startTime: this.route.routeDetails.estTruckDeliveryOrignDate,
        // endTime: this.route.mainESTTruckDeliveryDate,
        startTime: `2019-12-01T00:00:00Z`,
        endTime: `2019-12-10T00:00:00Z`,
        needCount: 100,
      }).subscribe((lineData: LineItem[]) => {
        this.line = lineData.map(point => {
          return [point.longitudeDegree, point.latitudeDegree];
        });
        if (this.line.length) {
          this.icon = {
            point: this.line[this.line.length - 1],
            icon: 'icon-ship-round',
          }
        }
      })*/
    };

    if (this.__RouteData) {
      fillData(this.__RouteData);
      return;
    }

    if (this.id) {
      this.shipmentService.getCspShipmentList(this.id).subscribe((res: any) => {
        fillData(res.items[0]);
      });
    }
  }

  ngAfterViewInit(): void {
    if (this.mapDivElement && this.mapDivElement.nativeElement) {
      setTimeout(() => {
        this.mapHeight = this.mapDivElement.nativeElement.clientWidth * (9 / 16);
      });
    }
  }

  draw(s: any) {
    if (!s) return;
    let location: any[] = [];
    let name = '';
    switch (s.state) {
      case 1:
        name = s.originLocation || '';
        break;
      case 3:
        name = s.originPort || '';
        break;
      case 5:
        name = s.destinationPort || '';
        break;
      case 7:
        name = s.destinationLocation || '';
        break;
    }
    if (name != '')
      location.push({
        name: name.toLowerCase(),
        id: s.id,
        isDanger: s.exceptionMessage ? true : false,
        transportType: s.transportType,
      });

    if (!location) return;
  }

  getContainerType(data) {
    let str = '';
    try {
      if (data.containerType) {
        const containerType = JSON.parse(data.containerType);
        containerType.forEach(element => {
          if (element.value) {
            str += ' ' + element.value + 'X' + element.name;
          }
        });
      }
    } catch (error) {
      // console.log(error);
    }
    return str;
  }

  goDetail() {
    this.router.navigate(['/csp/shipments/detail', this.id]);
  }
}
