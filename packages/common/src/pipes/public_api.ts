import { Provider } from '@angular/core';
// pipes
import { CNCurrencyPipe } from './currency/cn-currency.pipe';
import { DatePipe } from './date/date.pipe';
import { KeysPipe } from './/keys/keys.pipe';
import { HTMLPipe } from './safe/html.pipe';
import { URLPipe } from './safe/url.pipe';
import { YNPipe, YNMode } from './yn/yn.pipe';
import { HourRangePipe } from './hour-range/hour-range.pipe'

export { CNCurrencyPipe, DatePipe, KeysPipe, HTMLPipe, URLPipe, YNPipe, YNMode, HourRangePipe };

export const COMMON_PIPES: Provider[]
  = [CNCurrencyPipe, DatePipe, KeysPipe, HTMLPipe, URLPipe, YNPipe, HourRangePipe];
