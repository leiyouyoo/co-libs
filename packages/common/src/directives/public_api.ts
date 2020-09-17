import { Provider } from '@angular/core';
import { CoPluralCaseDirective } from './plural-case.directive';
import { WholeDayRangeDirective } from './whole-day-range';

export { CoPluralCaseDirective, WholeDayRangeDirective };

export const COMMON_DIRECTIVES: Provider[] = [CoPluralCaseDirective, WholeDayRangeDirective];
