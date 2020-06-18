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
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from '@co/core';
import { NzSelectItemInterface } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';
import { debounceTime, map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
  host: {
    '[class.co-customer-picker]': 'true',
  },
})
export class CustomerPickerComponent implements OnInit, ControlValueAccessor {
  data: any[];
  value: any | any[];
  isLoading = false;

  @Input() @InputBoolean() coDisabled = false;
  @Input() optionLabel: (item: any) => string = item => item.name;
  @Input() optionValue: (item: any) => string = item => item.id;
  @Input() compareWith: (o1: any, o2: any) => boolean = (o1: any, o2: any) => o1 === o2;
  @Input() coPlaceHolder: string | TemplateRef<any> | null = null;
  @Input() coDropdownClassName: string | null = null;
  @Input() coMaxTagCount = 3;
  @Input() coMaxMultipleCount = 3;
  @Input() coMode: 'default' | 'multiple' | 'tags' = 'default';

  @Input() debounceTime: number = 500; // 防抖阀值(毫秒)，当用户输入时，在这个阀值时间内用户不再有输入操作，则触发搜索(coOnSearch)

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
    this.coOnSearch
      .asObservable()
      .pipe(
        tap(() => (this.isLoading = true)),
        debounceTime(this.debounceTime),
        switchMap(this.getCustomerList),
      )
      .subscribe(items => {
        this.data = items;
        this.isLoading = false;
        this.cdr.markForCheck();
      });
  }

  getCustomerList = (name: string = ''): Observable<any> =>
    this.http
      .get<any>('/GetAllBySearch', { params: { name: name } })
      .pipe(map(value => value.items));

  updateData() {
    this.getCustomerList(this.value).subscribe(items => {
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
      this.updateData();
    }
    this.cdr.markForCheck();
  }
}
