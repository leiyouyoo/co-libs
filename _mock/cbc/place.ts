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
    const data = [
      {
        code: 'ARPCO',
        creationTime: '2007-10-27T23:19:20.9033333Z',
        creatorUserName: 'quincy',
        id: '2dcfe90e-c3d0-49f7-a1bb-ffea868beb19',
        isAir: false,
        isOcean: true,
        isOther: false,
        isValid: true,
        name: 'PUNTA COLORADA',
        nameLocalization: 'PUNTA COLORADA',
        regionId: '1c3b42f5-aae2-4c80-832d-4346a722a72d',
        regionName: 'Rio Negro',
      },
    ];
    const res: any = {
      items: data,
      total: data.length,
    };
    return res;
  },
};
