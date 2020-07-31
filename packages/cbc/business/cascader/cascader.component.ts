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
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { OrganizationUnitService } from '@co/cds';
import { NzCascaderOption } from 'ng-zorro-antd';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CoCascaderComponent implements OnInit {
  coOption: any[] | null = null;
  @Input() values: any[] | null = null;
  @Input() coAllowClear: boolean = true;
  @Input() coShowSearch: boolean = false;
  @Input() coShowInput: boolean = true;

  @Output() coSelectionChange = new EventEmitter<any>();
  @Output() coModelChange = new EventEmitter<any>();

  constructor(private organizationUnitService: OrganizationUnitService) {} // private organizationUnitService: OrganizationUnitService

  ngOnInit(): void {
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
      const option: any = [];
      res.items.forEach(data => {
        option.push(this.getChildData(data));
      });
      this.coOption = option;
    });
  }

  getChildData(data) {
    const newList: any = {};
    newList.value = data.id;
    newList.label = data.displayNameLocalization;
    if (data.childrenDto && data.childrenDto.length > 0) {
      newList.children = [];
      data.childrenDto.forEach(dto => {
        newList.children.push(this.getChildData(dto));
      });
    } else {
      newList.isLeaf = true;
    }
    return newList;
  }
}
