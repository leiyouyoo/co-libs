import { Component, OnInit, Input, TemplateRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NzSelectComponent, NzSelectItemInterface, InputBoolean } from 'ng-zorro-antd';

@Component({
  selector: 'vessel-picker',
  templateUrl: './vessel-picker.component.html',
  styleUrls: ['./vessel-picker.component.css'],
})
export class VesselPickerComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
