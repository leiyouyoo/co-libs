import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CdkPortalOutlet, ComponentPortal, DomPortal, Portal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
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
export class PageSideDrawerComponent<T = any, R = any, D = any> extends PageSideComponent implements OnInit, OnDestroy {

  @Input() @InputBoolean() coClosable: boolean = true;
  @Input() coTitle?: string | TemplateRef<{}>;
  @Input() coFooter?: string | TemplateRef<{}>;
  @Input() coContent!: TemplateRef<{ $implicit: D; }> | Type<T>;
  @Input() coContentParams?: D;

  @Input() @InputBoolean() isOpen = false;
  @Output() readonly isOpenChange = new EventEmitter<boolean>();

  @Output() readonly coOnClose = new EventEmitter<PageSideDrawerComponent>();

  @ViewChild(CdkPortalOutlet, { static: false }) bodyPortalOutlet?: CdkPortalOutlet;

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
              private cdr: ChangeDetectorRef,
              private viewContainerRef: ViewContainerRef,
              private injector: Injector) {
    super(elementRef);
  }

  ngAfterViewInit(): void {
    if (this.coContent) {
      this.attachPortal(this.coContent, this.coContentParams);
      this.cdr.detectChanges();
    }
    super.ngAfterViewInit();
  }

  ngOnDestroy(): void {
    this.destroy();
    super.ngOnDestroy();
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

  destroy(): void {
    this.close();
    this.dispose();
    this.portal = null;
    this.componentInstance = null;
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
      this.portal = new TemplatePortal(portalContent, this.viewContainerRef, templateContext);
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
