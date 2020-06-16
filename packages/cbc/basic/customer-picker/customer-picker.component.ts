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
  @Input() @InputBoolean() disabled = false;

  @Input() customerList: any[] = [];
  @Input() optionLabel: (item: any) => string = item => item.name;
  @Input() optionValue: (item: any) => string = item => item.id;
  @Input() compareWith: (o1: any, o2: any) => boolean = (o1: any, o2: any) => o1 === o2;
  @Input() placeHolder: string | TemplateRef<any> | null = null;
  @Input() dropdownClassName: string | null = null;
  @Input() maxTagCount = Infinity;
  @Input() nzMaxMultipleCount = Infinity;
  @Input() mode: 'default' | 'multiple' | 'tags' = 'default';

  @Input() customTemplate: TemplateRef<{ $implicit: NzSelectItemInterface }> | null = null;
  @Input() customOption: TemplateRef<{ $implicit: any }> | null = null;
  @Input() maxTagPlaceholder: TemplateRef<{ $implicit: any[] }> | null = null;
  @Input() notFoundContent: string | TemplateRef<any> | undefined = undefined;

  @Output() readonly search = new EventEmitter<string>();
  @Output() readonly scrollToBottom = new EventEmitter<void>();
  @Output() readonly openChange = new EventEmitter<boolean>();
  @Output() readonly blur = new EventEmitter<void>();
  @Output() readonly focus = new EventEmitter<void>();

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
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  writeValue(value: any): void {
    this.nzSelectComponent.writeValue(value);
    this.cdr.markForCheck();
  }
}
