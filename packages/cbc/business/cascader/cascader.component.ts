import {
  ChangeDetectionStrategy,
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
  selector: 'co-cascader',
  exportAs: 'coCascader',
  templateUrl: './cascader.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CoCascaderComponent),
    },
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CoCascaderComponent implements OnInit, ControlValueAccessor {

  @Input() coValue: any[] | null = null;
  @Input() coAllowClear: boolean = true;
  @Input() coShowSearch: boolean = false;
  @Input() coShowInput: boolean = true;

  @Output() coSelectionChange = new EventEmitter<any>();
  @Output() coModelChange = new EventEmitter<any>();

  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  coOption: NzCascaderOption[] | null = null;
  value: any[] | null = null;
  optionList;
  valueList:any[] =[];

  constructor(private organizationUnitService: PlatformOrganizationUnitService) {} // private organizationUnitService: OrganizationUnitService

  ngOnInit(): void {
    //console.log(this.values);
    this.getData();
  }

  onChanges(values: any): void {
    this.coModelChange.emit(values);
  }

  onSelectionChange(selectedOptions: NzCascaderOption[]): void {
    this.coSelectionChange.emit(selectedOptions);
    // this.text = selectedOptions.map(o => o.label).join(', ');
  }

  getData(reqID?) {
    const req: any = reqID ? { ParentId: reqID } : {};
    this.organizationUnitService.getGroupOrganizationUnits(req).subscribe(res => {
      // console.log(res);
      const option: any = [];
      res.items.forEach(data => {
        option.push(this.getChildData(data));
      });
      this.optionList =  option;
      //this.coOption = option;

      if( this.coValue ){
        this.getAllParentID( option , this.coValue );
        this.coOption = this.optionList;
        this.value = this.valueList.reverse();
      }else {
        this.coOption = option;
      }
      //console.log(this.valueList);

    });
  }

  getChildData(data , parentId?) {
    const newList: any = {};
    newList.value = data.id;
    newList.label = data.displayNameLocalization;
    parentId ? newList.parentId = parentId : "";
    if (data.childrenDto && data.childrenDto.length > 0) {
      newList.children = [];
      data.childrenDto.forEach(dto => {
        newList.children.push(this.getChildData(dto , newList.value ));
      });
    }else {
      newList["isLeaf"] = true;
    }
    return newList;
  }
  //如果有传入的value值 需要重新更改option 初始化
  getAllParentID ( option , childrenID ) {
    option.forEach( item =>{
      if( item.value == childrenID){
        this.valueList.push(item.value);
        //如果有父级  需要传入完整的option
        if( item.parentId ){
          this.getAllParentID( this.optionList , item.parentId);
        }
      }else{
        if (item.children && item.children.length > 0) {
          this.getAllParentID(item.children, childrenID);
        }
      }
    })
  }

  //#region ngModel实现

  writeValue(modelValue: NzSafeAny | NzSafeAny[]): void {
    this.value = modelValue;
  }

  registerOnChange(fn: OnChangeType): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedType): void {
    this.onTouched = fn;
  }
}
