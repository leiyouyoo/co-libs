import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { FreightMethodType, ShipmentStatusEnum } from '../types';

@Component({
  selector: 'shipment-step',
  templateUrl: './shipment-step.component.html',
  styleUrls: ['./shipment-step.component.less'],
})
export class ShipmentStepComponent implements OnInit, OnChanges {
  @Input() shipment: any = {} as any;
  @Input() @InputBoolean() statusHighlight = false;
  @Input() isShowExpired: boolean = false;
  nzCurrent = 0;
  current;
  readonly ShipmentStatusEnum = ShipmentStatusEnum;
  readonly freightMethodType = FreightMethodType;

  activeOne = true;
  exceptionEvent;
  constructor(private translate: TranslateService) {}

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.ngOnInit();
  }

  ngOnInit() {
    this.setNzCurrent();
    this.exceptionEvent = this.shipment._exceptionEvent;
  }

  setNzCurrent() {
    switch (this.shipment.currentLocation) {
      case 0:
        this.nzCurrent = 0;
        break;
      case 10:
        this.nzCurrent = 1;
        break;
      case 20:
        this.nzCurrent = 2;
        break;
      case 40:
        this.nzCurrent = 3;
        break;
      case ShipmentStatusEnum.SellerLocation:
      case ShipmentStatusEnum.OriginStopOff:
      case ShipmentStatusEnum.InTransitToDeparturePort:
        this.nzCurrent = 0;
        break;
      case ShipmentStatusEnum.DeparturePort:
      case ShipmentStatusEnum.InTransitToArrivalPort:
        this.nzCurrent = 1;
        break;
      case ShipmentStatusEnum.ArrivalPort:
      case ShipmentStatusEnum.InTransitToFinalDestination:
        this.nzCurrent = 2;
        break;
      case ShipmentStatusEnum.DestinationStopOff:
      case ShipmentStatusEnum.FinalDestination:
      case ShipmentStatusEnum.Completed:
        this.nzCurrent = 3;
        break;
      default:
    }
    switch (this.nzCurrent) {
      case 0:
    }
  }
  getCompanyName(key: string) {
    let resultArr = [];

    try {
      return this.shipment.routeDetails[key].map((o) => o.customerName).join(', ');
    } catch (e) {}
  }
}
