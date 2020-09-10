import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'co-st-number-input',
  template: `
    <div class="d-flex">
      <div class="d-flex flex-1 justify-content-between align-items-center" style="width: calc(100% - 18px);">
        <nz-input-number class="flex-1" [(ngModel)]="value[0]" (ngModelChange)="emitValue()" [nzSize]="'small'"></nz-input-number>
        <ng-container *ngIf="operator === 10">
          <i nz-icon nzType="minus" nzTheme="outline" style="margin: 0 4px;"></i>
          <nz-input-number class="flex-1" [(ngModel)]="value[1]" (ngModelChange)="emitValue()" [nzSize]="'small'"></nz-input-number>
        </ng-container>
      </div>
      <div style="margin-left: 4px;">
        <i nz-icon
           nzType="filter"
           nzTheme="outline"
           nz-popover
           nzPopoverTitle="Operator"
           [nzPopoverContent]="contentTemplate"
           nzPopoverPlacement="bottomLeft"
           class="filter-icon"
        ></i>
        <ng-template #contentTemplate>
          <nz-radio-group [ngModel]="operator" (ngModelChange)="onOperatorChange($event)">
            <label nz-radio [nzValue]="0">{{ 'Equal' | internalI18n }}</label>
            <label nz-radio [nzValue]="1">{{ 'Greater than' | internalI18n }}</label>
            <label nz-radio [nzValue]="-1">{{ 'Less than' | internalI18n }}</label>
            <label nz-radio [nzValue]="10">{{ 'Custom range' | internalI18n }}</label>
          </nz-radio-group>
        </ng-template>
      </div>
    </div>
  `,
  styles: [
    `
      [nz-radio] {
        display: block;
        height: 32px;
        line-height: 32px;
      }

      .filter-icon {
        padding-left: 13px;
        margin-left: -13px;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StNumberInputComponent),
      multi: true
    },
  ]
})
export class StNumberInputComponent implements ControlValueAccessor, OnInit {
  value: [number?, number?] = [];
  operator = 0;
  onChange: any;
  onTouched: any;

  constructor() { }

  ngOnInit(): void {
  }

  onOperatorChange(e: number) {
    const previous = this.operator;
    this.operator = e;
    if (previous === 10) {
      this.value[1] = '' as any;
    }
    this.emitValue();
  }

  emitValue() {
    if (typeof this.value[0] !== 'number' && typeof this.value[1] !== 'number') {
      return this.onChange(null);
    }
    let value = new Array(2);
    const firstValue = this.value[0];
    switch (this.operator) {
      case 0:
        value = value.fill(firstValue)
        break
      case 1:
        value[0] = firstValue;
        break;
      case -1:
        value[1] = firstValue;
        break;
      case 10:
      default:
    }
    this.onChange(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    if (Array.isArray(obj)) {
      this.value = obj as any;
    }
  }
}
