import { MockRequest } from '@co/mock';
// import * as Mock from 'mockjs';

function setupData(num: number): any[] {
  const items: any[] = [];
  for (let i = 0; i < num; i++) {
    items.push({
      code: `EUR-${i + 1}`,
      creationTime: "2012-06-30T15:51:28.39Z",
      creatorUserName: `think-${i + 1}`,
      id: i + 1,
      isValid: true,
      name: `EUR-${i + 1}`,
      nameLocalization: `EUR-${i + 1}`,
      regionId: "b074b530-e888-4d71-8833-ee78005ac229",
      regionName: "Germany",
    });
  }

  return items;
}

const CURRENCY_DATA = setupData(100);

export const CURRENCY = {
  // 支持值为 Object 和 Array
  'GET /crm/Currency/GetAll': (req: MockRequest) => {

    const res: any = {
      items: [],
      total: 0,
    };
    const items: any[] = CURRENCY_DATA;
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
