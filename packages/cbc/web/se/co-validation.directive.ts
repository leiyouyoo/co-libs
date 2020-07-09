import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ContentChild,
  ElementRef,
  Host,
  Input,
  OnInit,
  Optional,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { FormControlName, NgControl, NgModel } from '@angular/forms';
import { NzNoAnimationDirective, NzPopoverDirective } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';

const _coValidationPrefix = `co-validation`

interface ErrorInfo {
  required?: string;
  [key: string]: string | undefined;
}

@Component({
  selector: '[coValidation]',
  template: `
    <ng-content></ng-content>
    <ng-template #templateRef>
      <div class="${_coValidationPrefix}-red" *ngFor="let o of getDisplayErrors()">{{o.message | translate}}</div>
    </ng-template>
  `,
  styles: [
    `
      .${_coValidationPrefix}-red {
        color: red;
      }
    `
  ],
  host: {
    // [`[class.${_coValidationPrefix}--invalid]`]: 'hasDisplayErrors',
    '[class.ant-form-item-has-error]': 'hasDisplayErrors',
  },
  encapsulation: ViewEncapsulation.None,
})
export class CoValidationDirective extends NzPopoverDirective implements OnInit, AfterViewInit {
  private _specificContent;
  get specificContent() {
    return this._specificContent ?? (this.hasDisplayErrors ? this.errorTemplateRef : null);
  }
  set specificContent(value) {
    this._specificContent = value;
  }
  @ContentChild(NgModel) ngModel: NgModel;
  @ContentChild(NgModel, { read: ElementRef, }) ngModelElementRef: ElementRef<HTMLElement>;
  @ContentChild(FormControlName) formControlName: FormControlName;
  @ContentChild(FormControlName, { read: ElementRef, }) formControlNameElementRef: ElementRef<HTMLElement>;
  @ViewChild('templateRef') errorTemplateRef: TemplateRef<any>;
  @Input() error: { [key: string]: string };
  @Input() coLabel: string;

  specificPlacement = 'bottomLeft'

  constructor(
    elementRef: ElementRef,
    hostView: ViewContainerRef,
    resolver: ComponentFactoryResolver,
    renderer: Renderer2,
    @Host() @Optional() noAnimation: NzNoAnimationDirective,
    private translateService: TranslateService,
    private cdr: ChangeDetectorRef,
  ) {
    super(elementRef, hostView, resolver, renderer, noAnimation);
  }

  ngOnInit() {
  }

  get ngControl(): NgControl {
    return this.ngModel ?? this.formControlName;
  }

  get ngControlElement(): HTMLElement {
    return this.ngModelElementRef.nativeElement ?? this.formControlNameElementRef.nativeElement;
  }


  getErrors(): { type: string, message: string }[] {
    const errors = this.ngControl.errors;
    if (!errors ) return [];

    return Object.keys(errors)
      .map(type => {
        const data = { type, message: this.error?.[type], };
        switch (data.type) {
          case 'required':
            if (this.coLabel) {
              data.message = `${this.coLabel} is required`
            }
            break;
          default:
        }
        return data;
      })
    .filter(o => o.message);
  }

  getDisplayErrors() {
    return this.ngControl.dirty ? this.getErrors() : [];
  }
  get hasDisplayErrors(): boolean {
    return !!this.getDisplayErrors()?.length;
  }

  ngAfterViewInit() {
    // console.log(this.ngModel);
    // console.log(this.ngModelElementRef);
    // console.log(this.formControlName);
    // console.log(this.formControlNameElementRef);
    this.ngControl.statusChanges!
      .pipe(
        filter(o => o === 'INVALID' || this.hasDisplayErrors),
        // distinctUntilChanged(),
        takeUntil(this.destroy$),
      )
      .subscribe((e) => {
        this.updateChangedProperties(['nzContent'])
      });
    this.specificOrigin = this.ngModelElementRef ?? this.formControlNameElementRef;
    this.nzOverlayStyle = { color: 'red' }
    super.ngAfterViewInit();
  }


}
