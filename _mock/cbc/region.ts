// import * as Mock from 'mockjs';

function setupData(num: number): any[] {
  const items: any[] = [];
  for (let i = 0; i < num; i++) {
    items.push({
      children: [] ,
      code: "FL" ,
      creationTime: "2007-10-27T23:18:27.4666667Z" ,
      creatorUserName: "Florida" ,
      id: i + 1,
      isValid: true ,
      name: `Florida-${i + 1}` ,
      nameLocalization: `Florida-${i + 1}`,
      parentId: "37f06c2d-e5f6-4a6f-bb55-9da3ec3b42a4",
    });
  }

  return items;
}

const REGION_DATA = setupData(100);

export const REGION = {
  // 支持值为 Object 和 Array
  'POST /crm/Region/GetByAreaIds': () => {

    const res: any = {
      items: [],
      total: 0,
    };
    const items: any[] = REGION_DATA;

    res.items = items;
    res.total = res.items.length;

    return res;
  },
};
