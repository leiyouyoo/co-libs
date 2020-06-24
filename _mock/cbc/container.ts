import { MockRequest } from '@co/mock';
// import * as Mock from 'mockjs';

function setupData(num: number): any[] {
  const items: any[] = [];
  for (let i = 0; i < num; i++) {
    for (let i = 0; i < num; i++) {
      items.push({
        id: i + 1,
        creatorUserName: `creatorUserName-${i + 1}`,
        creationTime: `creationTime-${i + 1}`,
        code: `code-${i + 1}`,
        isoCode: `isoCode-${i + 1}`,
        desc: `desc-${i + 1}`,
        teu: `teu-${i + 1}`,
        isValid: true,
        iso: `iso-${i + 1}`,
      });
    }
  }
  return items;
}

const MOCK_DATA = setupData(100);

export const CONTAINERS = {
  // 支持值为 Object 和 Array
  'GET /PUB/Container/GetAll': (req: MockRequest) => {
    const res: any = {
      items: [],
      total: 0,
    };

    const items: any[] = MOCK_DATA;
    if (req.queryString.ids) {
      res.items = items.filter(item => {
        return req.queryString.ids.includes(item.id);
      });
    } else {
      res.items = items
        .filter(item => {
          return !req.queryString.searchText || item.code.includes(req.queryString.searchText);
        })
        .slice(req.queryString.skipCount, req.queryString.skipCount + req.queryString.maxResultCount);
    }

    res.total = res.items.length;

    return res;
  },
};
