import { CoSTConfig } from '@co/core';

export const ST_DEFULAT_CONFIG: CoSTConfig = {
  pi: 1,
  ps: 10,
  size: 'default',
  responsive: true,
  responsiveHideHeaderFooter: false,
  req: {
    type: 'skip',
    method: 'POST',
    allInBody: true,
    lazyLoad: false,
    reName: { pi: 'pi', ps: 'ps', skip: 'skipCount', limit: 'maxResultCount' },
  },
  res: {
    reName: { list: ['items'], total: ['totalCount'] },
  },
  page: {
    front: true,
    zeroIndexed: false,
    position: 'bottom',
    placement: 'right',
    show: true,
    showSize: true,
    pageSizes: [10, 20, 30, 40, 50],
    showQuickJumper: false,
    total: true,
    toTop: true,
    toTopOffset: 100,
  },
  modal: {
    paramsName: 'record',
    size: 'lg',
    exact: true,
  },
  drawer: {
    paramsName: 'record',
    size: 'md',
    footer: true,
    footerHeight: 55,
  },
  pop: {
    title: '确认删除吗？',
    trigger: 'click',
    placement: 'top',
  },
  rowClickTime: 200,
  btnIcon: {
    type: '',
    theme: 'outline',
    spin: false,
  },
  noIndex: 1,
  expandRowByClick: false,
  expandAccordion: false,
  widthMode: {
    type: 'default',
    strictBehavior: 'truncate',
  },
  virtualItemSize: 54,
  virtualMaxBufferPx: 200,
  virtualMinBufferPx: 100,
  iifBehavior: 'hide',
  showFilters: true,
};
