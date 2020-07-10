import { Directive, Input, OnInit } from '@angular/core';
import { NzSelectComponent, NzSelectItemInterface } from 'ng-zorro-antd';

@Directive({
  selector: 'nz-select[coSearchByExtraKey]',
})
export class SearchByExtraKeyDirective implements OnInit {
  @Input() coSearchByExtraKey: string[] = [];

  constructor(private host: NzSelectComponent) {}

  ngOnInit(): void {
    this.host.nzFilterOption = (input: string, option: NzSelectItemInterface): boolean => {
      return this.coSearchByExtraKey.some((key) => {
        const optionValue = (option.template as any)._appExtra[key];
        if (optionValue && optionValue.toString) {
          return optionValue
            .toString()
            .toLowerCase()
            .includes(input.toLowerCase());
        }
        return false;
      });
    };
  }
}
