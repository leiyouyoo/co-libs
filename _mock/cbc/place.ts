import { MockRequest } from '@co/mock';
// import * as Mock from 'mockjs';

function setupData(num: number): any[] {
  const items: any[] = [];
  for (let i = 0; i < num; i++) {
    items.push({
      id: i + 1,

      name: `name-${i + 1}`,
      regionIds: `regionIds-${i + 1}`,
      isOcean: `isOcean-${i + 1}`,
      isAir: `isAir-${i + 1}`,
      isOther: `isOther-${i + 1}`,
      isValid: `isValid-${i + 1}`,
      sorting: `sorting-${i + 1}`,
      isCity: `isCity-${i + 1}`,
      isPaged: `isPaged-${i + 1}`,
      maxResultCount: `maxResultCount-${i + 1}`,
      skipCount: `skipCount-${i + 1}`,
    });
  }

  return items;
}

const PLACE_DATA = setupData(100);

export const PLACE = {
  // 支持值为 Object 和 Array
  'GET /PUB/Place/GetByRegionIds': (req: MockRequest) => {
    const res: any = {
      items: [],
      total: 0,
    };

    const items: any[] = PLACE_DATA;
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
