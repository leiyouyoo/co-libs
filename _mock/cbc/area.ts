import { MockRequest } from '@co/mock';
// import * as Mock from 'mockjs';

function setupData(num: number): any[] {
  const items: any[] = [];
  for (let i = 0; i < num; i++) {
    items.push({
      countryIds: ["c063ded5-8428-46cb-904a-c4cd4326c7aa", "37f06c2d-e5f6-4a6f-bb55-9da3ec3b42a4"] ,
      id:  i + 1,
      name: `北美区-${i + 1}`,
      nameLocalization:  `北美区-${i + 1}`,
      regionIds: ["c063ded5-8428-46cb-904a-c4cd4326c7aa", "37f06c2d-e5f6-4a6f-bb55-9da3ec3b42a4"],
      regionNames: ["加拿大 ", "美国 "],
    });
  }

  return items;
}

const AREA_DATA = setupData(100);

export const AREA = {
  // 支持值为 Object 和 Array
  'GET /crm/Area/GetAll': (req: MockRequest) => {
    const res: any = {
      items: [],
      total: 0,
    };
    const items: any[] = AREA_DATA;
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
