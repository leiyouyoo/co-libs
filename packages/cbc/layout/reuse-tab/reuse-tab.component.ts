import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoI18NService, CO_I18N_TOKEN, InputBoolean, InputNumber } from '@co/core';
import * as _ from 'lodash';
import { NzTabSetComponent } from 'ng-zorro-antd/tabs';
import { Subject } from 'rxjs';

import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { ReuseTabContextService } from './reuse-tab-context.service';
import {
  ReuseContextCloseEvent,
  ReuseContextI18n,
  ReuseCustomContextMenu,
  ReuseItem,
  ReuseTabCached,
  ReuseTabMatchMode,
  ReuseTabNotify,
  ReuseTitle,
} from './reuse-tab.interfaces';
import { ReuseTabService } from './reuse-tab.service';

declare var window: any;

/**
 * 多标签路由复用组件
 */
@Component({
  selector: 'reuse-tab, [reuse-tab]',
  exportAs: 'reuseTab',
  templateUrl: './reuse-tab.component.html',
  host: {
    '[class.reuse-tab]': 'true',
    '[class.reuse-tab__line]': `tabType === 'line'`,
    '[class.reuse-tab__card]': `tabType === 'card'`,
  },
  providers: [ReuseTabContextService],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ReuseTabComponent implements OnInit, OnChanges, OnDestroy {
  //#region 私有变量

  @ViewChild('tabset') private tabset: NzTabSetComponent;
  private unsubscribe$ = new Subject<void>();
  private updatePos$ = new Subject<void>();
  private _keepingScrollContainer: Element;
  list: ReuseItem[] = [];
  item: ReuseItem;
  pos = 0;

  //#endregion

  // #region 输入输出参数

  @Input() mode: ReuseTabMatchMode = ReuseTabMatchMode.Menu;
  @Input() i18n: ReuseContextI18n;
  @Input() @InputBoolean() debug = false;
  @Input() @InputNumber() max: number;
  @Input() @InputNumber() tabMaxWidth: number;
  @Input() excludes: RegExp[];
  @Input() @InputBoolean() allowClose = true;
  @Input() @InputBoolean() keepingScroll = false;
  @Input()
  set keepingScrollContainer(value: string | Element) {
    this._keepingScrollContainer = typeof value === 'string' ? this.doc.querySelector(value) : value;
  }
  @Input() customContextMenu: ReuseCustomContextMenu[] = [];
  @Input() tabBarExtraContent: TemplateRef<void>;
  @Input() tabBarGutter: number;
  @Input() tabBarStyle: { [key: string]: string };
  @Input() tabType: 'line' | 'card' = 'line';
  // tslint:disable-next-line:no-output-native
  @Output() readonly change = new EventEmitter<ReuseItem>();
  // tslint:disable-next-line:no-output-native
  @Output() readonly close = new EventEmitter<ReuseItem | null>();

  // #endregion

  //#region 页面生命周期

  constructor(
    private srv: ReuseTabService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    @Optional() @Inject(CO_I18N_TOKEN) private i18nSrv: CoI18NService,
    @Inject(DOCUMENT) private doc: any,
  ) {}

  ngOnInit(): void {
    this.updatePos$.pipe(takeUntil(this.unsubscribe$), debounceTime(50)).subscribe(() => {
      const url = this.srv.getUrl(this.route.snapshot);
      const ls = this.list.filter(w => w.url === url || !this.srv.isExclude(w.url));
      if (ls.length === 0) {
        return;
      }

      const last = ls[ls.length - 1];
      const item = ls.find(w => w.url === url);
      last.last = true;
      const pos = item == null ? last.index : item.index;
      ls.forEach((i, idx) => (i.active = pos === idx));
      this.pos = pos;
      // TODO: 目前无法知道为什么 `pos` 无法通过 `nzSelectedIndex` 生效，因此强制使用组件实例的方式来修改，这种方式是安全的
      //  http://comail:8888/tfs/Cityocean/CO.Platform/_git/co-libs/issues/1736
      this.tabset.nzSelectedIndex = pos;
      this.list = ls;
      this.cdr.detectChanges();
    });

    this.srv.change.pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
      switch (res?.active) {
        case 'title':
          this.updateTitle(res);
          return;
        case 'override':
          if (res?.list?.length === this.list.length) {
            this.updatePos$.next();
          }
          return;
      }
      this.genList(res);
    });

    this.i18nSrv.change
      .pipe(
        filter(() => this.srv.inited),
        takeUntil(this.unsubscribe$),
        debounceTime(100),
      )
      .subscribe(() => this.genList({ active: 'title' }));

    this.srv.init();
  }

  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
    if (changes.max) this.srv.max = this.max;
    if (changes.excludes) this.srv.excludes = this.excludes;
    if (changes.mode) this.srv.mode = this.mode;
    if (changes.keepingScroll) {
      this.srv.keepingScroll = this.keepingScroll;
      this.srv.keepingScrollContainer = this._keepingScrollContainer;
    }

    this.srv.debug = this.debug;

    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }

  //#endregion

  // #region 公共方法

  activate(instance: any): void {
    this.srv.componentRef = { instance };
  }

  // #endregion

  //#region 事件处理

  contextMenuChange(res: ReuseContextCloseEvent) {
    let fn: (() => void) | null = null;
    switch (res.type) {
      case 'refresh':
        this.refresh(res.item);
        break;
      case 'close':
        this._close(null, res.item.index, res.includeNonCloseable);
        break;
      case 'closeRight':
        fn = () => {
          this.srv.closeRight(res.item.url, res.includeNonCloseable);
          this.close.emit(null);
        };
        break;
      case 'closeOther':
        fn = () => {
          this.srv.clear(res.includeNonCloseable);
          this.close.emit(null);
        };
        break;
    }
    if (!fn) {
      return;
    }
    if (!res.item.active && res.item.index <= this.list.find(w => w.active)!.index) {
      this._to(res.item.index, fn);
    } else {
      fn();
    }
  }

  //#endregion

  //#region 私有方法

  _to(index: number, cb?: () => void) {
    index = Math.max(0, Math.min(index, this.list.length - 1));
    const item = this.list[index];
    this.router.navigateByUrl(item.url).then(res => {
      if (!res) return;
      this.item = item;
      this.change.emit(item);
      if (cb) {
        cb();
      }
    });
  }

  _close(e: Event | null, idx: number, includeNonCloseable: boolean) {
    if (e != null) {
      e.preventDefault();
      e.stopPropagation();
    }
    const item = this.list[idx];
    if (this.srv.componentRef && this.srv.componentRef.instance.coOnClosing) {
      this.srv.componentRef.instance.coOnClosing().then(v => {
        this.srv.close(item.url, includeNonCloseable);
        this.close.emit(item);
        this.cdr.detectChanges();
      });
    } else {
      this.srv.close(item.url, includeNonCloseable);
      this.close.emit(item);
      this.cdr.detectChanges();
    }

    return false;
  }

  private genTit(title: ReuseTitle): string {
    let i18nName = title.i18n;
    const segs = _.split(i18nName || '', ':');
    const module = window.planet?.apps[segs.length > 0 ? segs[0] : ''];
    let tIl8nSrv = this.i18nSrv;
    if (module) {
      i18nName = segs[1];
      // tIl8nSrv = module.appModuleRef.injector.r.get(CO_I18N_TOKEN);
      // tIl8nSrv = _.find(module.appModuleRef.injector._r3Injector.records,(item)=>{
      //     return item[0].name=='I18NService'
      // });

      // TODO:优化此处代码
      for (const item of module.appModuleRef.injector._r3Injector.records) {
        if (item[0].serviceName === 'I18NService') {
          tIl8nSrv = item[1].value;
          break;
        }
      }
    }

    return i18nName && tIl8nSrv ? tIl8nSrv.fanyi(i18nName) : title.text || i18nName!;
  }

  private get curUrl() {
    return this.srv.getUrl(this.route.snapshot);
  }

  private genCurItem(): ReuseItem {
    const url = this.curUrl;
    const snapshotTrue = this.srv.getTruthRoute(this.route.snapshot);
    return {
      url,
      title: this.genTit(this.srv.getTitle(url, snapshotTrue)),
      closable: this.allowClose && this.srv.count > 0 && this.srv.getClosable(url, snapshotTrue),
      active: false,
      last: false,
      icon: this.srv.getIcon(url, snapshotTrue),
      index: 0,
    };
  }

  private genList(notify: ReuseTabNotify | null): void {
    const ls = this.srv.items.map(
      (item: ReuseTabCached, index: number) =>
        ({
          url: item.url,
          title: this.genTit(item.title),
          closable: this.allowClose && item.closable && this.srv.count > 0,
          icon: item.icon,
          index,
          active: false,
          last: false,
        } as ReuseItem),
    );

    const url = this.curUrl;
    let addCurrent = ls.findIndex(w => w.url === url) === -1;
    if (notify && notify.active === 'close' && notify.url === url) {
      addCurrent = false;
      let toPos = 0;
      const curItem = this.list.find(w => w.url === url)!;
      if (curItem.index === ls.length) {
        // When closed is last
        toPos = ls.length - 1;
      } else if (curItem.index < ls.length) {
        // Should be actived next tab when closed is middle
        toPos = Math.max(0, curItem.index);
      }
      this.router.navigateByUrl(ls[toPos].url);
    }

    if (addCurrent) {
      ls.push(this.genCurItem());
    }

    ls.forEach((item, index) => (item.index = index));
    if (ls.length === 1) {
      ls[0].closable = false;
    }
    this.list = ls;
    this.cdr.detectChanges();
    this.updatePos$.next();
  }

  private updateTitle(res: ReuseTabNotify): void {
    const item = this.list.find(w => w.url === res!.url);
    if (!item) return;
    item.title = this.genTit(res!.title!);
    this.cdr.detectChanges();
  }

  private refresh(item: ReuseItem): void {
    this.srv.runHook('coOnActived', this.pos === item.index ? this.srv.componentRef : item.index);
  }

  //#endregion
}
