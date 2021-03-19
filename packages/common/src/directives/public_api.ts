import { Provider } from '@angular/core';
import { CoLimitInputDirective } from './co-limit-input.directive';
import { CoPluralCaseDirective } from './plural-case.directive';
import { WholeDayRangeDirective } from './whole-day-range';

export { CoPluralCaseDirective, WholeDayRangeDirective, CoLimitInputDirective };

export const COMMON_DIRECTIVES: Provider[] = [CoPluralCaseDirective, WholeDayRangeDirective, CoLimitInputDirective];
