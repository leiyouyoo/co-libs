import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import moment from 'moment';
import { bookingStatus, BookingStatusType, ImBookingLibraryService } from '../../bussiness/booking/index';
import { BookingOrderStatus, SoStatus, QuoteStatus } from './enums';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-im-booking-detail',
  templateUrl: './im-booking-detail.component.html',
  styleUrls: ['./im-booking-detail.component.less'],
})
export class ImBookingDetailComponent implements OnInit, OnChanges {
  requestProcess = [
    {
      name: 'Booking is received by City Ocean Staff.',
      status: 'received',
      checked: false,
    },
    {
      name: 'Shipping order is requested with the carrier.',
      status: 'requested',
      checked: false,
    },
    {
      name: 'Notified SO successfully with the customer.',
      status: 'Notified',
      checked: false,
    },
    {
      name: 'Shipping order is done.',
      status: 'done',
      checked: false,
    },
  ];
  @Output() showBussinessNo: EventEmitter<any> = new EventEmitter<any>();

  baseShow = true;
  instructionsShow = true;
  statusType: typeof BookingStatusType = BookingStatusType;
  bookingDetail: any;
  @Input() id = '';
  statusStep: number;
  readonly BookingOrderStatus = BookingOrderStatus;
  readonly SoStatus = SoStatus;
  readonly QuoteStatus = QuoteStatus;
  constructor(private bookingLibraryService: ImBookingLibraryService,
              private router: Router,
  ) {}

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.bookingLibraryService.getIMBookingDetail(this.id)
      .subscribe(data => {
        console.log(data);
        data.specialGoodsTypesArr = (() => {
          try {
            return JSON.parse(data.specialGoodsTypesJson)
          } catch (e) {
            console.error(e)
          }
        })();
        this.bookingDetail = data;
      })
  }
  setRequestProcess() {
    if (this.bookingDetail.status != 4 && this.bookingDetail.status != 5 && this.bookingDetail.status != 6) {
      this.requestProcess = [
        {
          name: 'Booking is received by City Ocean Staff.',
          status: 'received',
          checked: false,
        },
        {
          name: 'Shipping order is requested with the carrier.',
          status: 'requested',
          checked: false,
        },
        {
          name: 'Notified SO successfully with the customer.',
          status: 'Notified',
          checked: false,
        },
        {
          name: 'Shipping order is done.',
          status: 'done',
          checked: false,
        },
      ];
    } else if (this.bookingDetail.status == 4) {
      this.requestProcess = [
        {
          name: 'Booking is received by City Ocean Staff.',
          status: 'received',
          checked: false,
        },
        {
          name: 'Freight quote is sended to the customer.',
          status: 'requested',
          checked: false,
        },
        {
          name: 'Shipping order is requested with the carrier.',
          status: 'requested',
          checked: false,
        },
        {
          name: 'Notified SO successfully with the customer.',
          status: 'Notified',
          checked: false,
        },
        {
          name: 'Shipping order is done.',
          status: 'done',
          checked: false,
        },
      ];
    } else if (this.bookingDetail.status == 5 || this.bookingDetail.status == 6) {
      this.requestProcess = [
        {
          name: 'Booking is received by City Ocean Staff.',
          status: 'received',
          checked: false,
        },
        {
          name: 'Freight quote is sended to the customer.',
          status: 'requested',
          checked: false,
        },
        {
          name: 'Quote is comfirmed by the customer.',
          status: 'requested',
          checked: false,
        },
        {
          name: 'Shipping order is requested with the carrier.',
          status: 'requested',
          checked: false,
        },
        {
          name: 'Notified SO successfully with the customer.',
          status: 'Notified',
          checked: false,
        },
        {
          name: 'Shipping order is done.',
          status: 'done',
          checked: false,
        },
      ];
    }
    for (let index = 0; index <= this.statusStep && this.requestProcess[index]; index++) {
      this.requestProcess[index].checked = true;
    }
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
  getSpecialGoodsName(): Array<any> {
    if (this.bookingDetail && this.bookingDetail.containsSpecialGoodsTypes) {
      return JSON.parse(this.bookingDetail.containsSpecialGoodsTypes);
    }
    return [];
  }
  getTime(time) {
    if (!time) {
      return '';
    }
    return moment(time).format('MMM D YYYY');
  }
  goDetail() {
    this.router.navigate(['/csp/bookings/detail/', this.id], { queryParams: { id: this.id } });
  }
}
