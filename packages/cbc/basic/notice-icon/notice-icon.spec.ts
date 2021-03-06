import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createTestContext } from '@co/testing';
import { CoLocaleModule, CoLocaleService, en_US, zh_CN } from '@co/common';
import { CoNoticeIconComponent } from './notice-icon.component';
import { CoNoticeIconModule } from './notice-icon.module';
import { NoticeItem } from './notice-icon.types';

describe('abc: notice-icon', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, CoNoticeIconModule, HttpClientTestingModule, CoLocaleModule],
      declarations: [TestComponent],
    });
    ({ fixture, dl, context } = createTestContext(TestComponent));
  });

  afterEach(() => {
    context.comp.ngOnDestroy();
    const el = document.querySelector('.cdk-overlay-container');
    if (el) {
      el.innerHTML = ``;
    }
  });

  describe('when not data', () => {
    beforeEach(() => (context.data = []));
    it('should be count', fakeAsync(() => {
      context.count = 5;
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      const cur = dl.query(By.css('.ant-scroll-number-only .current')).nativeElement as HTMLElement;
      expect(+cur.textContent!.trim()).toBe(context.count);
    }));
  });

  describe('when has data', () => {
    beforeEach(() => fixture.detectChanges());

    describe('should be show dropdown', () => {
      it('via popoverVisible property', () => {
        spyOn(context, 'popupVisibleChange');
        expect(context.comp.popoverVisible).toBe(false);
        context.popoverVisible = true;
        fixture.detectChanges();
        expect(context.comp.popoverVisible).toBe(true);
      });
      it('via click', done => {
        expect(context.popoverVisible).toBeUndefined();
        (dl.query(By.css('.ant-badge')).nativeElement as HTMLElement).click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(context.popoverVisible).toBe(true);
          done();
        });
      });
    });
    it('should be control loading in visible popover', done => {
      context.loading = true;
      context.popoverVisible = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const el = document.querySelector('.ant-spin-container') as HTMLElement;
        expect(el.style.display).toBe('');
        done();
      });
    });
    it('should be select item', done => {
      spyOn(context, 'select');
      context.popoverVisible = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(context.select).not.toHaveBeenCalled();
        (document.querySelector('nz-list-item')! as HTMLElement).click();
        fixture.detectChanges();
        expect(context.select).toHaveBeenCalled();
        done();
      });
    });
    it('should be clear', done => {
      spyOn(context, 'clear');
      context.popoverVisible = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(context.clear).not.toHaveBeenCalled();
        (document.querySelector('.co-notice-icon__clear')! as HTMLElement).click();
        fixture.detectChanges();
        expect(context.clear).toHaveBeenCalled();
        done();
      });
    });
  });

  it('#i18n', done => {
    context.popoverVisible = true;
    context.data = [{ title: 'a1', list: [] }];
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const a = document.querySelector('.co-notice-icon__notfound')! as HTMLElement;
      expect(a.innerText).toBe(zh_CN.noticeIcon.emptyText);
      const srv = TestBed.inject<CoLocaleService>(CoLocaleService) as CoLocaleService;
      srv.setLocale(en_US);
      fixture.detectChanges();
      expect(a.innerText).toBe(en_US.noticeIcon.emptyText);
      done();
    });
  });
});

@Component({
  template: `
    <co-notice-icon
      #comp
      [data]="data"
      [count]="count"
      [loading]="loading"
      (select)="select($event)"
      (clear)="clear($event)"
      [(popoverVisible)]="popoverVisible"
      (popoverVisibleChange)="popupVisibleChange($event)"
    ></co-notice-icon>
  `,
})
class TestComponent {
  @ViewChild('comp', { static: true })
  comp: CoNoticeIconComponent;
  data: NoticeItem[] = [
    {
      title: 'test',
      list: [
        {
          id: '000000001',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: '???????????? 14 ????????????',
          datetime: '7 ?????????',
          type: '??????',
        },
        {
          id: '000000002',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
          title: '???????????? ????????? ????????????????????????',
          datetime: '7 ?????????',
          type: '??????',
        },
        {
          id: '000000003',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
          title: '??????????????????????????????????????????',
          datetime: '7 ?????????',
          read: true,
          type: '??????',
        },
        {
          id: '000000004',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
          title: '???????????????????????????????????????',
          datetime: '7 ?????????',
          type: '??????',
        },
        {
          id: '000000005',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: '???????????????????????????????????????????????????',
          datetime: '7 ?????????',
          type: '??????',
        },
      ],
    },
  ];
  count = 10;
  loading = false;
  popoverVisible: boolean;
  select() { }
  clear() { }
  popupVisibleChange() { }
}
