import { MockRequest } from '@co/mock';
// import * as Mock from 'mockjs';

function setupData(num: number): any[] {
  const items: any[] = [];
  for (let i = 0; i < num; i++) {
    items.push({
      code: `VGMSF-${i + 1}`,
      groupId: `fd7fdfd7-ac1c-e011-b1cd-001321cc6d9f-${i + 1}`,
      id: i + 1,
      isCommission: false,
      isValid: true,
      name: `VGM sending fees-${i + 1}`,
      type: 0,
    });
  }

  return items;
}

const CHARGINGCODE_DATA = setupData(100);

export const CHARGINGCODE = {
  // 支持值为 Object 和 Array
  'GET /crm/chargingCode/GetAll': (req: MockRequest) => {

    const res: any = {
      items: [],
      total: 0,
    };
    const items: any[] = CHARGINGCODE_DATA;
    if (req.queryString.ids) {
      res.items = items.filter(item => {
        return req.queryString.ids.includes(item.id);
      });
    } else {
      res.items = items
        .filter(item => {
          return !req.queryString.searchText || item.name.includes(req.queryString.searchText);
        })
        .slice(req.queryString.skipCount, req.queryString.skipCount + req.queryString.maxResultCount);
    }

    res.total = res.items.length;

    return res;
  },
};
