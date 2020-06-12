import { Attribute, Directive } from '@angular/core';
@Directive({ selector: '[coPluralCase]' })
export class CoPluralCase {
  constructor(@Attribute('ngPluralCase') public value: string) {}
}
