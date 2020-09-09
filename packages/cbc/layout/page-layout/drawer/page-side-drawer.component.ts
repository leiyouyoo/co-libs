import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef, EventEmitter,
  forwardRef,
  Injector,
  Input,
  OnDestroy,
  OnInit, Output,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { Subject } from 'rxjs';
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

  @Output() readonly coOnClose = new EventEmitter<PageSideDrawerComponent>();

  @ViewChild(CdkPortalOutlet, { static: false }) bodyPortalOutlet?: CdkPortalOutlet;

  portal: Portal<any> | null = null;

  coAfterOpen = new Subject<void>();
  coAfterClose = new Subject<R>();

  isOpen = false;

  private componentInstance: T | null = null;

  constructor(public elementRef: ElementRef<HTMLElement>,
              private cdr: ChangeDetectorRef,
              private viewContainerRef: ViewContainerRef,
              private injector: Injector) {
    super(elementRef);
  }

  ngOnInit(): void {
    if (this.coContent instanceof TemplateRef) {
      this.attachPortal(this.coContent, this.coContentParams);
      this.cdr.detectChanges();
    }
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    this.destroy();
    super.ngOnDestroy();
  }

  open(portalContent?: HTMLElement | ElementRef<HTMLElement> | TemplateRef<{ $implicit: D }> | Type<T>, templateContext?: D): void {
    portalContent && this.attachPortal(portalContent, templateContext);
    this.isOpen = true;
    this.cdr.detectChanges();
    this.coAfterOpen.next();
  }

  close(result?: R): void {
    this.isOpen = false;
    this.cdr.detectChanges();
    this.coAfterClose.next(result);
    this.coAfterClose.complete();
  }

  destroy() {
    this.close();
    this.bodyPortalOutlet!.dispose();
    this.portal?.detach();
    this.portal = null;
    this.componentInstance = null;
  }

  closeClick(): void {
    this.coOnClose.emit(this);
  }

  private attachPortal(portalContent, templateContext?): void {
    this.bodyPortalOutlet!.dispose();
    if (portalContent instanceof ElementRef || portalContent instanceof HTMLElement) { // html
      this.portal = new DomPortal(portalContent);
      this.bodyPortalOutlet!.attach(this.portal);
    } else if (portalContent instanceof TemplateRef) { // 模板
      this.portal = new TemplatePortal(portalContent, this.viewContainerRef, templateContext);
      this.bodyPortalOutlet!.attach(this.portal);
    } else if (portalContent instanceof Type) { // 组件
      const childInjector = new PortalInjector(this.injector, new WeakMap([[PageSideDrawerComponent, this]]));
      this.portal = new ComponentPortal<T>(portalContent, null, childInjector);
      const componentRef = this.bodyPortalOutlet!.attachComponentPortal(this.portal as ComponentPortal<T>);
      this.componentInstance = componentRef.instance;
      Object.assign(componentRef.instance, templateContext);
      componentRef.changeDetectorRef.detectChanges();
    }
  }


}
