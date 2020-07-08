// import * as Mock from 'mockjs';

function setupData(num: number): any[] {
  const items: any[] = [];
  for (let i = 0; i < num; i++) {
    items.push({
      code: "US75103" ,
      creationTime: "2018-08-24T16:17:08.8433333Z",
      creatorUserName: "Frank",
      id:  i + 1,
      isAir: true,
      isOcean: true,
      isOther: true,
      isValid: true,
      name: `CANTON,TX -${i + 1}`,
      nameLocalization: "CANTON,TX",
      regionId: "c8079416-e22d-4d41-8eaa-1c7f9c08f089",
      regionName: "Texas",
    });
  }

  return items;
}

const PORT_DATA = setupData(100);

export const PORT = {
  // 支持值为 Object 和 Array
  'POST /crm/Place/GetByRegionIds': () => {

    const res: any = {
      items: [],
      total: 0,
    };
    const items: any[] = PORT_DATA;

    res.items = items;
    res.total = res.items.length;

    return res;
  },
};
