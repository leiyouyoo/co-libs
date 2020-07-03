import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  Output,
  EventEmitter,
  Inject,
  LOCALE_ID,
} from '@angular/core';
import { PositionStrategy, Overlay, ConnectionPositionPair, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { formatDate } from '@angular/common';
import { isToday, differenceInCalendarDays } from 'date-fns';
import { HourRangePipe } from '@co/common';
@Component({
  selector: 'datetime-range-picker',
  templateUrl: './datetime-range-picker.component.html',
  styleUrls: ['./datetime-range-picker.component.less']
})
export class DatetimeRangePickerComponent implements OnInit {

  _outTimeStr: string;
  @Input() set outTimeStr(val: string) {
    this._outTimeStr = val ? new HourRangePipe().transform(val) : val;
  }
  get outTimeStr(): string {
    return this._outTimeStr;
  }
  @Output() outTimeStrChange = new EventEmitter();
  //是否显示日期控件
  isShowTime: boolean = false;
  //是否是当前日期
  isToday: boolean = false;
  //是否是当前日期当前小时
  isTodayHour: number;

  //天数
  dateList: Array<{ date: Date; select: boolean; remark: string }> = new Array<{
    date: Date;
    select: boolean;
    remark: string;
  }>();
  baseDay: number = 0;
  timeList: Array<any> = new Array<any>();
  // overlayRef: OverlayRef;
  constructor(private overlay: Overlay, @Inject(LOCALE_ID) private locale: string) {}

  ngOnInit() {
    this.initDate(this.baseDay);
    for (let index = 0; index < 24; index++) {
      this.timeList.push({ time: `${('0' + index).slice(-2)}:00-${('0' + (index + 1)).slice(-2)}:00`, index: index });
    }
    this.ComparisonTime();
  }
  initDate(day = 0) {
    this.dateList = [];
    let remark = '';
    for (let index = day; index <= 2 + day; index++) {
      let str = differenceInCalendarDays(this.changeTime(new Date(), index), new Date());
      if (str == 0) remark = 'Today';
      if (str == 1) remark = 'Tomorrow';
      if (str > 1) remark = str + 'days later';
      this.dateList.push({
        remark: remark,
        date: this.changeTime(new Date(), index),
        select: index == 0 ? true : false,
      });
    }
  }
  selDate(event: any) {
    this.dateList.forEach((c) => (c.select = false));
    event.select = true;
    this.isToday = isToday(event.date);
  }
  //转化成时间戳在往后加一天
  changeTime(obj: Date, day: number) {
    let time = obj.getTime();
    return new Date(time + 24 * 60 * 60 * 1000 * day);
  }
  lessTime() {
    if (this.baseDay <= 0) return;
    this.baseDay--;
    this.initDate(this.baseDay);
    if (!this.dateList.find((o) => o.select)) {
      this.selDate(this.dateList[this.dateList.length - 1]);
    }
  }
  addTime() {
    this.baseDay++;
    this.initDate(this.baseDay);
    if (!this.dateList.find((o) => o.select)) {
      this.selDate(this.dateList[0]);
    }
  }

  // show() {
  //   this.overlayRef = this.overlay.create(this.getOverlayConfig({ width: '300px', height: '400px', origin: this.origin }))
  //   this.overlayRef.attach(new TemplatePortal(this.tempalteRef, this.container));
  //   this.overlayRef.backdropClick().subscribe(c=>{
  //     this.overlayRef.dispose();
  //   })
  // }

  // private getOverlayConfig({ origin, width, height }): OverlayConfig {
  //   return new OverlayConfig({
  //     width,
  //     // height,
  //     hasBackdrop: true,
  //     backdropClass: 'popover-backdrop',
  //     positionStrategy: this.getOverlayPosition(origin),
  //     scrollStrategy: this.overlay.scrollStrategies.reposition()
  //   });
  // }
  // private getOverlayPosition(origin: HTMLElement): PositionStrategy {
  //   const positionStrategy = this.overlay.position()
  //     .flexibleConnectedTo(origin)
  //     .withPositions(this.getPositions())
  //     .withPush(false);

  //   return positionStrategy;
  // }
  // private getPositions(): ConnectionPositionPair[] {
  //   return [
  //     {
  //       originX: 'start',
  //       originY: 'bottom',
  //       overlayX: 'start',
  //       overlayY: 'top',
  //     },
  //     {
  //       originX: 'start',
  //       originY: 'top',
  //       overlayX: 'start',
  //       overlayY: 'bottom'
  //     }

  //   ]
  // }

  selTime(event: any) {
    let date;
    if (this.dateList.find((c) => c.select)) {
      date = this.dateList.find((c) => c.select)!.date;
    }
    let time = formatDate(date, 'yyyy-MM-dd', this.locale);
    const outTimeStr = time + ' ' + event.time;
    const zeroZone = new HourRangePipe().transform(outTimeStr, true);
    this.outTimeStr = zeroZone;
    this.outTimeStrChange.emit(zeroZone);
    this.isShowTime = false;
  }
  ComparisonTime() {
    let today = new Date();
    this.isTodayHour = today.getHours();
    if (this.dateList.find((c) => c.select)) {
      let date = this.dateList.find((c) => c.select)!.date;
      this.isToday = isToday(date);
    }
  }
}
