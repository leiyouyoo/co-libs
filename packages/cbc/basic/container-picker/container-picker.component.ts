import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { InputBoolean } from '@co/core';
import { NzSelectItemInterface } from 'ng-zorro-antd';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'container-picker',
  exportAs: 'containerPicker',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContainerPickerComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './container-picker.component.html',
  host: {
    '[class.co-container-picker]': 'true',
  },
})
export class ContainerPickerComponent implements OnInit, ControlValueAccessor {
  data: any[];
  value: any | any[];

  @Input() @InputBoolean() coDisabled = false;
  @Input() optionLabel: (item: any) => string = item => item.name;
  @Input() optionValue: (item: any) => string = item => item.id;
  @Input() compareWith: (o1: any, o2: any) => boolean = (o1: any, o2: any) => o1 === o2;
  @Input() coPlaceHolder: string | TemplateRef<any> | null = null;
  @Input() coDropdownClassName: string | null = null;
  @Input() coMaxTagCount = Infinity;
  @Input() coMaxMultipleCount = Infinity;
  @Input() coMode: 'default' | 'multiple' | 'tags' = 'multiple';

  @Input() coCustomTemplate: TemplateRef<{ $implicit: NzSelectItemInterface }> | null = null;
  @Input() coCustomOption: TemplateRef<{ $implicit: any }> | null = null;
  @Input() coMaxTagPlaceholder: TemplateRef<{ $implicit: any[] }> | null = null;
  @Input() coNotFoundContent: string | TemplateRef<any> | undefined = undefined;

  @Output() readonly coOnSearch = new EventEmitter<string>();
  @Output() readonly coScrollToBottom = new EventEmitter<void>();
  @Output() readonly coOpenChange = new EventEmitter<boolean>();
  @Output() readonly coBlur = new EventEmitter<void>();
  @Output() readonly coFocus = new EventEmitter<void>();

  constructor(private cdr: ChangeDetectorRef, private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(name: string = ''): void {
    this.http
      .get<any>('/customers', { params: { name: name } })
      .pipe(map(value => value.items))
      .subscribe(items => {
        this.data = items;
        this.cdr.markForCheck();
      });
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
    if (this.value !== value) {
      this.value = value;
    }
    this.cdr.markForCheck();
  }
}
