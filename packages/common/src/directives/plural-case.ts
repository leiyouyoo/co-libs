import { Attribute, Directive } from '@angular/core';
@Directive({ selector: '[coPluralCase]' })
export class CoPluralCase {
  constructor(@Attribute('coPluralCase') public value: string) { }
}
