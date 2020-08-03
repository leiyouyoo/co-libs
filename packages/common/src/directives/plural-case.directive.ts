import { Attribute, Directive } from '@angular/core';
@Directive({ selector: '[coPluralCase]' })
export class CoPluralCaseDirective {
  constructor(@Attribute('coPluralCase') public value: string) {}
}
