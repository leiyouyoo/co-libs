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
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PlatformOrganizationUnitService } from '@co/cds';
import { NzCascaderOption, NzSafeAny, OnChangeType, OnTouchedType } from 'ng-zorro-antd';

/**
 *  级联选择
 */
@Component({
  selector: 'co-organization-cascader',
  exportAs: 'coOrganizationCascader',
  templateUrl: './cascader.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CoCascaderComponent),
    },
  ],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})
export class CoCascaderComponent implements OnInit, ControlValueAccessor {
  @Input() coAllowClear: boolean = true;
  @Input() coShowSearch: boolean = false;
  @Input() coShowInput: boolean = true;
  @Output() coSelectionChange = new EventEmitter<any>();

  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  coOptionList: NzCascaderOption[] | null = null;
  value: any[] | null = null;
  cascaderValue: any[] | null = null;
  valueList: any[] = [];

  constructor(private organizationUnitService: PlatformOrganizationUnitService, private cdr: ChangeDetectorRef) {} // private organizationUnitService: OrganizationUnitService

  ngOnInit(): void {
    //console.log(this.values);
    this.getData();
  }

  onCascaderChange(values: any[]): void {
    this.onChange(values?.length ? values[values.length - 1] : null);
  }

  onSelectionChange(selectedOptions: NzCascaderOption[]): void {
    this.coSelectionChange.emit(selectedOptions);
    // this.text = selectedOptions.map(o => o.label).join(', ');
  }

  getData(reqID?) {
    const req: any = reqID ? { ParentId: reqID } : {};
    this.organizationUnitService.getGroupOrganizationUnits(req).subscribe((res: any) => {
      // console.log(res);
      const option: any = [];
      res.items.forEach(data => {
        option.push(this.getChildData(data));
      });
      this.coOptionList = option;

      this.bindCascaderValue();
      //console.log(this.valueList);
    });
  }

  getChildData(data, parentId?) {
    const newList: any = {};
    newList.value = data.id;
    newList.label = data.displayNameLocalization;
    parentId ? (newList.parentId = parentId) : '';
    if (data.childrenDto?.length) {
      newList.children = [];
      data.childrenDto.forEach(dto => {
        newList.children.push(this.getChildData(dto, newList.value));
      });
    } else {
      newList.isLeaf = true;
    }
    return newList;
  }
  //如果有传入的value值 需要重新更改option 初始化
  getAllParentID(option, childrenID) {
    option.forEach(item => {
      if (item.value == childrenID) {
        this.valueList.push(item.value);
        //如果有父级  需要传入完整的option
        if (item.parentId) {
          this.getAllParentID(this.coOptionList, item.parentId);
        }
      } else {
        if (item.children && item.children.length > 0) {
          this.getAllParentID(item.children, childrenID);
        }
      }
    });
  }

  //#region ngModel实现

  bindCascaderValue() {
    if (this.value) {
      this.getAllParentID(this.coOptionList, this.value);
      this.cascaderValue = this.valueList.reverse();
    } else {
      this.cascaderValue = [];
    }
  }

  writeValue(modelValue: NzSafeAny | NzSafeAny[]): void {
    console.log(modelValue);
    this.value = modelValue;
    this.bindCascaderValue();
  }

  registerOnChange(fn: OnChangeType): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedType): void {
    this.onTouched = fn;
  }
}
