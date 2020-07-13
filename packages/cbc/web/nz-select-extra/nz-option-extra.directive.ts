import { Directive, Input, OnInit } from '@angular/core';
import { NzOptionComponent } from 'ng-zorro-antd';

@Directive({
  selector: 'nz-option[coNzOptionExtra]',
})
export class NzOptionExtraDirective implements OnInit {
  @Input() set coNzOptionExtra(val) {
    (this.host.template as any)._appExtra = val;
    this.value = val;
  }
  value: any;

  constructor(public host: NzOptionComponent) {}

  ngOnInit(): void {}
}
