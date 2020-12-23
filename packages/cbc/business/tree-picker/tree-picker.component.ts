import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LifeCycleComponent } from '@co/core';
import {
  InputBoolean,
  isNotNil,
  NgStyleInterface,
  NzFormatEmitEvent,
  NzSizeLDSType,
  NzTreeNode,
  NzTreeNodeOptions,
  NzTreeSelectComponent,
  OnChangeType,
  OnTouchedType,
} from 'ng-zorro-antd';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

/**
 * 客户选择器控件
 */
@Component({
  selector: 'co-tree-picker',
  exportAs: 'coTreePicker',
  templateUrl: './tree-picker.component.html',
  host: { '[class.co-tree-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TreePickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TreePickerComponent extends LifeCycleComponent implements ControlValueAccessor {

  @Input() @InputBoolean() coAllowClear: boolean = true;
  @Input() @InputBoolean() coShowExpand: boolean = true;
  @Input() @InputBoolean() coShowLine: boolean = false;
  @Input() @InputBoolean() coDropdownMatchSelectWidth: boolean = true;
  @Input() @InputBoolean() coCheckable: boolean = false;
  @Input() @InputBoolean() coHideUnMatched: boolean = false;
  @Input() @InputBoolean() coShowIcon: boolean = false;
  @Input() @InputBoolean() coShowSearch: boolean = false;
  @Input() @InputBoolean() coServerSearch: boolean = false;
  @Input() @InputBoolean() coDisabled = false;
  @Input() @InputBoolean() coAsyncData = false;
  @Input() @InputBoolean() coMultiple = false;
  @Input() @InputBoolean() coDefaultExpandAll = false;
  @Input() @InputBoolean() coCheckStrictly = false;
  @Input() coVirtualHeight: string | null = null;
  @Input() coExpandedIcon?: TemplateRef<{ $implicit: NzTreeNode; origin: NzTreeNodeOptions }>;
  @Input() coNotFoundContent?: string;
  @Input() coOpen = false;
  @Input() coSize: NzSizeLDSType = 'default';
  @Input() coPlaceHolder = '';
  @Input() coDropdownStyle: NgStyleInterface | null = null;
  @Input() coDropdownClassName?: string;
  @Input() coExpandedKeys: string[] = [];
  @Input() coNodes: Array<NzTreeNode | NzTreeNodeOptions> = [];
  @Input() coDisplayWith: (node: NzTreeNode) => string | undefined = (node: NzTreeNode) => node.title;
  @Input() coMaxTagCount: number = 3;
  @Input() coMaxTagPlaceholder: TemplateRef<{ $implicit: NzTreeNode[] }> | null = null;
  @Output() readonly coOpenChange = new EventEmitter<boolean>();
  @Output() readonly coCleared = new EventEmitter<void>();
  @Output() readonly coRemoved = new EventEmitter<NzTreeNode>();
  @Output() readonly coExpandChange = new EventEmitter<NzFormatEmitEvent>();
  @Output() readonly coTreeClick = new EventEmitter<NzFormatEmitEvent>();
  @Output() readonly coTreeCheckBoxChange = new EventEmitter<NzFormatEmitEvent>();
  @Input() coTreeTemplate!: TemplateRef<{ $implicit: NzTreeNode; origin: NzTreeNodeOptions }>;
  @Input() btnText: { checkAll: string, checkNothing: string, inverse: string }
    = { checkAll: 'Check All', checkNothing: 'Check Nothing', inverse: 'Inverse' };

  value: string[] | string;
  private flattenNodes: Array<NzTreeNodeOptions> = [];
  // private tips: string; TODO 鼠标提示文字

  private onSearchSubject = new Subject<string>();
  @Output() readonly coOnSearch = new EventEmitter<string>();

  @ViewChild(NzTreeSelectComponent, { static: false }) treeSelectRef!: NzTreeSelectComponent;
  @ViewChild('btns', { static: false }) btns!: ElementRef<HTMLElement>;

  get isMultiple(): boolean {
    return this.coMultiple || this.coCheckable;
  }

  constructor(private cdr: ChangeDetectorRef,
              private renderer: Renderer2) {
    super();
  }

  ngOnInit(): void {
    this.flattenNodes = this.getFlattenNodes();
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    let that = this;
    this.treeSelectRef.cdkConnectedOverlay.attach.subscribe(() => {
      let overlayElement = this.treeSelectRef.cdkConnectedOverlay.overlayRef.overlayElement as HTMLElement;
      let dropdown = overlayElement.firstChild as HTMLElement;
      this.renderer.insertBefore(dropdown, this.btns.nativeElement, dropdown.firstChild);
    });
    // 改变原组件本地数据匹配的规则
    if (this.coShowSearch && this.coServerSearch) {
      this.treeSelectRef.setSearchValues = function(): void {
        Promise.resolve().then(() => {
          this.isNotFound = false; // 原组件在搜索空字符串时，isNotFound为true，直接将树隐藏了，这里锁定值为false
        });
      };
      const setInputValueFun = this.treeSelectRef.setInputValue;
      this.treeSelectRef.setInputValue = function(value: string) {
        if (this.treeRef && !this.treeRef['fixed']) {
          this.treeRef.nzSearchFunc = () => true; // 锁定为全部匹配
          this.treeRef['fixed'] = true;
        }
        that.onSearchSubject.next(value);
        setInputValueFun.apply(this, [value]);
      };
    }
    this.onSearchSubject.asObservable().pipe(
      filter(v => v !== '' && v !== null && v !== undefined),
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe(searchText => {
      this.coOnSearch.emit(searchText);
    });
    super.ngAfterViewInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { coNodes } = changes;
    if (coNodes) {
      const savedNodes: NzTreeNode[] = [];
      const lastFlattenNodes = [...this.flattenNodes];
      const flattenNodes = this.getFlattenNodes();
      let value = Array.isArray(this.value) ? this.value : [this.value];
      value.forEach(key => {
        if (flattenNodes.every(node => node.key !== key)) {
          const node = this.getNodeByKey(lastFlattenNodes, key);
          if (node) {
            console.log(node);
            savedNodes.push(node);
          }
        }
      });
      this.coNodes = [...savedNodes, ...this.coNodes];
      // 重新赋值，因为nz-tree-select组件在设置新的nodes之后，内部会将节点状态全部重置为未勾选状态，导致下次勾选时，丢失原来已选值
      if (this.isMultiple && Array.isArray(this.value)) {
        this.value = [...this.value];
      }
      this.flattenNodes = this.getFlattenNodes();
    }
    super.ngOnChanges(changes);
  }

  getFlattenNodes(nodes: Array<NzTreeNode | NzTreeNodeOptions> = this.coNodes, flattenNodes: any[] = []) {
    nodes.forEach(node => {
      flattenNodes.push(node);
      if (!node.isLeaf && node.children && node.children.length > 0) {
        this.getFlattenNodes(node.children, flattenNodes);
      }
    });
    return flattenNodes;
  }

  private getNodeByKey(nodes: Array<NzTreeNode | NzTreeNodeOptions>, nodeKey: string) {
    let result: any = null;
    nodes.some(node => {
      if (node.key === nodeKey) {
        result = node;
        return true;
      }
      return false;
    });
    return result;
  }

  checkAll() {
    this.value = this.flattenNodes.filter(node => !node.disableCheckbox).map(node => node.value);
    this.updateView();
  }

  checkNothing() {
    this.value = [];
    this.updateView();
  }

  checkInverted() {
    this.value = this.flattenNodes.filter(node => !node.disableCheckbox && !node.checked).map(node => node.value);
    this.updateView();
  }

  updateView() {
    this.coNodes = [...this.coNodes];
    this.onChange(this.value);
    this.cdr.markForCheck();
  }

  onChange: OnChangeType = _value => {
  };
  onTouched: OnTouchedType = () => {
  };

  registerOnChange(fn: (_: string[] | string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: string[] | string): void {
    this.value = value;
    this.cdr.markForCheck();
  }

}
