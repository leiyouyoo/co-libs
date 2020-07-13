import {
  Component,
  OnInit,
  Inject,
  LOCALE_ID, forwardRef, ChangeDetectorRef,
} from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { formatDate } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isToday, differenceInCalendarDays } from 'date-fns';
import { HourRangePipe } from '@co/common';

@Component({
  selector: 'co-datetime-range-picker',
  templateUrl: './datetime-range-picker.component.html',
  styleUrls: ['./datetime-range-picker.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CoDatetimeRangePickerComponent),
      multi: true,
    },
  ],
})
export class CoDatetimeRangePickerComponent implements OnInit, ControlValueAccessor {

  private onChange;
  private onTouched;

  _outTimeStr: string;
  set outTimeStr(val: string) {
    this._outTimeStr = val ? new HourRangePipe().transform(val) : val;
  }
  get outTimeStr(): string {
    return this._outTimeStr;
  }
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
  constructor(private overlay: Overlay,
    @Inject(LOCALE_ID) private locale: string,
    public cdr: ChangeDetectorRef,
  ) { }

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

  selTime(event: any) {
    let date;
    if (this.dateList.find((c) => c.select)) {
      date = this.dateList.find((c) => c.select)!.date;
    }
    let time = formatDate(date, 'yyyy-MM-dd', this.locale);
    const outTimeStr = time + ' ' + event.time;
    const zeroZone = new HourRangePipe().transform(outTimeStr, true);
    this.outTimeStr = zeroZone;
    this.onChange(zeroZone);
    this.onTouched();
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

  writeValue(obj: string) {
    this.outTimeStr = obj;
    this.cdr.markForCheck();
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
