import { MockRequest } from '@co/mock';

// import * as Mock from 'mockjs';

function setupData(num: number): any[] {
  const items: any[] = [];
  for (let i = 0; i < num; i++) {
    items.push({
      id: i + 1,
      typeId: `typeId-${i + 1}`,
      code: `code-${i + 1}`,
      name: `name-${i + 1}`,
      description: `description-${i + 1}`,
      nameLocalization: `nameLocalization-${i + 1}`,
      creatorUserName: `creatorUserName-${i + 1}`,
      isValid: true,
      creationTime: new Date().toISOString(),
    });
  }

  return items;
}

const MOCK_DATA = setupData(100);

export const DATADICTIONARIES = {
  // 支持值为 Object 和 Array
  'GET /PUB/DataDictionary/GetAll': (req: MockRequest) => {
    const res: any = {
      items: [],
      total: 0,
    };

    res.items = MOCK_DATA
      .slice(req.queryString.skipCount, req.queryString.skipCount + req.queryString.maxResultCount);

    res.total = res.items.length;
    return res;
  },
};
