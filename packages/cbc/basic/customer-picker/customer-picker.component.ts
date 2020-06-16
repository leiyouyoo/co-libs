import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from '@co/core';
import { NzSelectComponent, NzSelectItemInterface } from 'ng-zorro-antd';

@Component({
  selector: 'customer-picker',
  exportAs: 'customerPicker',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomerPickerComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customer-picker.component.html',
})
export class CustomerPickerComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() data: any[] = [];
  @Input() @InputBoolean() coDisabled = false;
  @Input() optionLabel: (item: any) => string = item => item.name;
  @Input() optionValue: (item: any) => string = item => item.id;
  @Input() compareWith: (o1: any, o2: any) => boolean = (o1: any, o2: any) => o1 === o2;
  @Input() coPlaceHolder: string | TemplateRef<any> | null = null;
  @Input() coDropdownClassName: string | null = null;
  @Input() coMaxTagCount = Infinity;
  @Input() coMaxMultipleCount = Infinity;
  @Input() coMode: 'default' | 'multiple' | 'tags' = 'default';

  @Input() coCustomTemplate: TemplateRef<{ $implicit: NzSelectItemInterface }> | null = null;
  @Input() coCustomOption: TemplateRef<{ $implicit: any }> | null = null;
  @Input() coMaxTagPlaceholder: TemplateRef<{ $implicit: any[] }> | null = null;
  @Input() coNotFoundContent: string | TemplateRef<any> | undefined = undefined;

  @Output() readonly coOnSearch = new EventEmitter<string>();
  @Output() readonly coScrollToBottom = new EventEmitter<void>();
  @Output() readonly coOpenChange = new EventEmitter<boolean>();
  @Output() readonly coBlur = new EventEmitter<void>();
  @Output() readonly coFocus = new EventEmitter<void>();

  @ViewChild(NzSelectComponent, { static: true }) nzSelectComponent!: NzSelectComponent;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    // const { customerList } = changes;
    console.log(changes);
  }

  // ControlValueAccessor
  onChange: (value: any) => void = () => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.coDisabled = isDisabled;
    this.cdr.markForCheck();
  }

  writeValue(value: any): void {
    this.nzSelectComponent.writeValue(value);
    this.cdr.markForCheck();
  }
}
