import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourRange'
})
export class HourRangePipe implements PipeTransform {
  /**
   *
   * @param value
   * @param isToZeroZone
   */
  transform(value: string, isToZeroZone = false): any {
    const [date, hourRange] = value.split(' ');
    let [hour1, hour2] = hourRange.split('-');
    if (hour1.length < 5) {
      hour1 = '0' + hour1
    }
    if (hour2.length < 5) {
      hour2 = '0' + hour2
    }
    let result = '';
    if (isToZeroZone) {
      result += new Date(date + ' ' + hour1).toISOString().slice(0, 16).replace('T', ' ');
      result += '-' + new Date(date + ' ' + hour2).toISOString().slice(11, 16);
    } else {
      const date1 = new Date(date + 'T' + hour1 + 'Z');
      const month = ('00' + (date1.getMonth() + 1)).slice(-2);
      const dateStr = `${date1.getFullYear()}-${month}-${date1.getDate()}`
      result += dateStr + ' ' + date1.toTimeString().slice(0, 5)
      result += '-' + new Date(date + 'T' + hour2 + 'Z').toTimeString().slice(0, 5)
    }
    return result;
  }
}
