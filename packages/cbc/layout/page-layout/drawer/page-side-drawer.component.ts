import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  OnDestroy, Optional,
  Output,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CdkPortalOutlet, ComponentPortal, Portal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { DomSanitizer } from '@angular/platform-browser';
import { InputBoolean } from 'ng-zorro-antd';
import { PageSideComponent } from '../page-side.component';


@Component({
  selector: 'co-page-side-drawer',
  templateUrl: './page-side-drawer.component.html',
  host: {
    '[class.co-page-side]': 'true',
    '[class.co-page-side-drawer]': 'true',
    '[class.co-page-side-drawer__show]': 'isOpen',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  viewProviders: [{ provide: PageSideComponent, useExisting: forwardRef(() => PageSideDrawerComponent) }],
})
export class PageSideDrawerComponent<T = any, R = any, D = any> extends PageSideComponent implements AfterViewInit, OnDestroy {

  @Input() @InputBoolean() coClosable: boolean = true;
  @Input() coTitle?: string | TemplateRef<{}>;
  @Input() coFooter?: string | TemplateRef<{}>;
  @Input() coContent!: TemplateRef<{ $implicit: D; }> | Type<T>;
  @Input() coContentParams?: D;

  @Input() @InputBoolean() isOpen = false;
  @Output() readonly isOpenChange = new EventEmitter<boolean>();

  @Output() readonly coOnClose = new EventEmitter<PageSideDrawerComponent>();

  @ViewChild(CdkPortalOutlet, { static: false }) bodyPortalOutlet!: CdkPortalOutlet;
  @ViewChild('drawerBody', { static: false }) drawerBody!: ElementRef<HTMLElement>;

  coFooterDiTpl: TemplateRef<{}>;
  coTitleDiTpl: TemplateRef<{}>;

  get footer(): string | TemplateRef<{}> {
    return this.coFooterDiTpl ?? this.coFooter;
  }

  get title(): string | TemplateRef<{}> {
    return this.coTitleDiTpl ?? this.coTitle;
  }

  get afterOpen(): Observable<void> {
    return this.coAfterOpen.asObservable();
  }

  get afterClose(): Observable<R> {
    return this.coAfterClose.asObservable();
  }

  private readonly coAfterOpen = new Subject<void>();
  private readonly coAfterClose = new Subject<R>();
  private portal: Portal<any> | null = null;
  private componentInstance: T | null = null;

  constructor(public elementRef: ElementRef<HTMLElement>,
              private _sanitizer: DomSanitizer,
              private cdr: ChangeDetectorRef,
              private viewContainerRef: ViewContainerRef,
              private injector: Injector) {
    super(elementRef, _sanitizer);
  }

  ngAfterViewInit(): void {
    if (this.coContent) {
      this.attachPortal(this.coContent, this.coContentParams);
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  open(portalContent?: TemplateRef<{ $implicit: D }> | Type<T>, templateContext?: D): void {
    portalContent && this.attachPortal(portalContent, templateContext);
    this.isOpen = true;
    this.isOpenChange.emit(this.isOpen);
    this.cdr.detectChanges();
    setTimeout(() => {
      this.coAfterOpen.next();
    });
  }

  close(result?: R): void {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
    this.cdr.detectChanges();
    this.coAfterClose.next(result);
    this.coAfterClose.complete();
  }

  destroy(clearHtml = false): void {
    this.close();
    this.dispose();
    this.portal = null;
    this.componentInstance = null;
    if (clearHtml) {
      this.drawerBody.nativeElement.innerHTML = '';
    }
  }

  closeClick(): void {
    this.coOnClose.emit(this);
  }

  getContentComponent(): T | null {
    return this.componentInstance;
  }

  private attachPortal(portalContent, templateContext?): void {
    this.dispose();
    if (portalContent instanceof TemplateRef) { // 模板
      this.portal = new TemplatePortal(portalContent, this.viewContainerRef, { $implicit: templateContext, drawerRef: this });
      this.bodyPortalOutlet!.attachTemplatePortal(this.portal as TemplatePortal);
    } else if (portalContent instanceof Type) { // 组件
      const childInjector = new PortalInjector(this.injector, new WeakMap([[PageSideDrawerComponent, this]]));
      this.portal = new ComponentPortal<T>(portalContent, null, childInjector);
      const componentRef = this.bodyPortalOutlet!.attachComponentPortal(this.portal as ComponentPortal<T>);
      this.componentInstance = componentRef.instance;
      Object.assign(componentRef.instance, templateContext);
      componentRef.changeDetectorRef.detectChanges();
    }
  }

  private dispose() {
    this.bodyPortalOutlet!.dispose();
    this.componentInstance = null;
  }


}


@Directive({
  selector: '[coDrawerFooter]',
  exportAs: 'coDrawerFooter',
})
export class CoDrawerFooterDirective {
  constructor(@Optional() private drawer: PageSideDrawerComponent, public templateRef: TemplateRef<{}>) {
    if (this.drawer) {
      this.drawer.coFooterDiTpl = this.templateRef;
    }
  }
}


@Directive({
  selector: '[coDrawerTitle]',
  exportAs: 'coDrawerTitle',
})
export class CoDrawerTitleDirective {
  constructor(@Optional() private drawer: PageSideDrawerComponent, public templateRef: TemplateRef<{}>) {
    if (this.drawer) {
      this.drawer.coTitleDiTpl = this.templateRef;
    }
  }
}
