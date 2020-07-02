export const FLIGHT = {
  // 支持值为 Object 和 Array
  'GET /PUB/Flight/GetAll': () => {
    let data = [
      {
        id: 'abbebcea-11af-41c0-aeb0-61f1c9ad0e4f',
        name: 'COSCO CONTAINER LINES CO., LTD.',
        no: 'no',
        airlineId: 'dddddddddddddddddddddddddddddddddd',
        creationTime: '2020-06-24',
        isValid: true,
      },
      {
        id: '872f95c5-0604-4fba-8b8a-db9eac27a228',
        name: 'CITYOCEAN CO., LTD.',
        no: 'no',
        airlineId: 'dddddddddddddddddddddddddddddddddd',
        creationTime: '2020-06-24',
        isValid: true,
      },
      {
        id: 'abbebcea-11af-41c0-aeb0-61f1c9ad0e4h',
        name: 'COSCO CONTAINER LINES CO., LTD.',
        no: 'no',
        airlineId: 'dddddddddddddddddddddddddddddddddd',
        creationTime: '2020-06-24',
        isValid: true,
      },
    ];
    const res: any = {
      items: data,
      total: data.length,
    };
    return res;
  },
};
