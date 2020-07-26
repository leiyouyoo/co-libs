import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector } from '@angular/core';
import { CoPageBase } from '@co/core';
import { STColumn } from '@co/cbc';
import { NzDrawerService } from 'ng-zorro-antd';
import { CreatePositionDto } from '@co/cds';
import { NzDrawerOptions } from 'ng-zorro-antd/drawer/drawer-options';
import { ViewBehavior } from '@platform-shared';
import { STChange, STData } from '@co/cbc/web/st/st.interfaces';
import { STComponent } from '@co/cbc/web/st/st.component';
import { DemoNewComponent } from './demo-new/demo-new.component';
import { DemoService } from 'apps/<%= name %>/app/service';

@Component({
  selector: '<%= name %>-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoListComponent extends CoPageBase {

  users: any[] = [];
  total: number;
  loading = false;
  searchParams = {
    searchText: '',
    pageNo: 1,
    pageSize: 15,
  };
  columns: STColumn[] = [
    {
      title: '编号',
      index: 'no',
      sort: true,
      width: 80,
    },
    {
      title: '职位名称(本地语音)',
      index: 'nameLocalization',
      sort: true,
    },
    {
      title: '职位名称(英文)',
      index: 'name',
      sort: true,
    },
    {
      title: '状态',
      index: 'isValid',
      type: 'enum',
      sort: true,
      enum: { 'true': '启用', 'false': '作废' },
    },
    {
      title: '职务',
      index: 'jobName',
      sort: true,
    },
    {
      title: '描述',
      index: 'desc',
      sort: true,
    },
    {
      title: '创建人',
      index: 'creatorUserName',
      sort: true,
    },
    {
      title: '创建时间',
      type: 'date',
      index: 'creationTime',
      sort: true,
    },
    {
      title: '操作',
      className: 'no-line-through',
      buttons: [
        {
          text: '恢复',
          click: (item, _modal, comp) => this.recover(item, comp),
          iif: item => !item.isValid,
        },
        {
          text: '作废',
          className: 'dangerous',
          pop: {
            title: '确定作废吗?',
            okType: 'danger',
            icon: 'star',
          },
          click: (item, _modal, comp) => this.cancel(item, comp),
          iif: item => item.isValid,
        },
        // {
        //   text: '编辑',
        //   click: (record) => this.showDetailDrawer('edit', record.id),
        // },
        {
          text: '删除',
          className: 'dangerous',
          pop: {
            title: '确定删除吗?',
            okType: 'danger',
            icon: 'star',
          },
          click: (item, _modal, comp) => {
            this.delete(item, comp);
          },
        },
      ],
    },
  ];
  rowClassName = (item: STData, index: number) => {
    if (!item.isValid) {
      return `st-row-line-through`;
    }
  };

  constructor(injector: Injector, private cdr: ChangeDetectorRef,
              private demoService: DemoService, private drawerService: NzDrawerService) {
    super(injector);
  }

  coOnInit() {
    this.getListData();
  }

  showDetailDrawer(viewBehavior: ViewBehavior = 'create', id?) {
    const titleMap = {
      create: '添加职位',
      edit: '编辑职位',
      readonly: '职位信息',
    };
    const options: NzDrawerOptions = {
      nzTitle: titleMap[viewBehavior],
      nzContent: DemoNewComponent,
      nzBodyStyle: { 'padding': '0 16px' },
      nzWidth: 600,
      nzMaskClosable: false,
    };
    if (viewBehavior !== 'create') {
      options.nzContentParams = {
        viewBehavior,
        id,
      };
    }
    const drawerRef = this.drawerService.create<DemoNewComponent, any, CreatePositionDto>(options);
    drawerRef.afterOpen.subscribe(() => {
      drawerRef.getContentComponent().onSubmitted.subscribe(() => {
        this.getListData();
        drawerRef.close();
      });
    });
  }

  getListData() {
    this.loading = true;
    const { pageNo, pageSize, searchText } = this.searchParams;
    const skipCount = (pageNo - 1) * pageSize;
    const data = { searchText: searchText, maxResultCount: pageSize, skipCount };
    this.demoService.getAll(data).subscribe(
      v => {
        this.users = v.items;
        this.total = v.totalCount;
        this.loading = false;
        this.markDirty();
      },
      e => this.loading = false,
    );
  }

  markDirty() {
    this.cdr.markForCheck();
  }

  onTableChange(e: STChange) {
    switch (e.type) {
      case 'pi': {
        this.searchParams.pageNo = e.pi;
        this.getListData();
        break;
      }
      case 'ps': {
        this.searchParams.pageSize = e.ps;
        this.getListData();
        break;
      }
      case 'dblClick': {
        this.showDetailDrawer('edit', e.dblClick.item?.id);
        break;
      }
    }
  }


  cancel(item: STData, comp: STComponent) {
    this.loading = true;
    this.demoService.cancel(item.id).subscribe(
      res => {
        item.isValid = false;
        comp.setRow(item.no - 1, item);
        this.loading = false;
        this.markDirty();
      },
      e => {
        this.loading = false;
        this.markDirty();
      },
    );
  }

  recover(item: STData, comp: STComponent) {
    this.loading = true;
    this.demoService.recover(item.id).subscribe(
      res => {
        item.isValid = true;
        comp.setRow(item.no - 1, item);
        this.loading = false;
        this.markDirty();
      },
      e => {
        this.loading = false;
        this.markDirty();
      },
    );
  }

  delete(item: STData, comp: STComponent) {
    this.loading = true;
    this.demoService.delete(item.id).subscribe(
      res => {
        this.loading = false;
        comp.reload();
      },
      e => {
        this.loading = false;
        this.markDirty();
      },
    );
  }

  search() {
    this.loading = true;
    this.searchParams.pageNo = 1;
    this.getListData();
  }

}
