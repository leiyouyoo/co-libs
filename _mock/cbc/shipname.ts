export const SHIPNAME = {
  // 支持值为 Object 和 Array
  'GET /shipname/shipname/GetAllVessel': () => {
    let data = [
      {
        id: 'abbebcea-11af-41c0-aeb0-61f1c9ad0e4f',
        name: 'COSCO CONTAINER LINES CO., LTD.',
        code: 'COSCO',
        creationTime: '2020-06-24',
        carrierId: 'xxxxxxxxxxxxxxxxxxxx',
        registration: 0,
        imoNumber: 'hhhh',
        unCode: 'unCode',
        isValid: true,
      },
      {
        id: 'abbebcea-11af-41c0-aeb0-61f1c9ad0e4g',
        name: 'COSCO CONTAINER LINES CO., LTD.',
        code: 'COSCO',
        creationTime: '2020-06-24',
        carrierId: 'xxxxxxxxxxxxxxxxxxxx',
        registration: 0,
        imoNumber: 'hhhh',
        unCode: 'unCode',
        isValid: true,
      },
      {
        id: 'abbebcea-11af-41c0-aeb0-61f1c9ad0e4h',
        name: 'COSCO CONTAINER LINES CO., LTD.',
        code: 'COSCO',
        creationTime: '2020-06-24',
        carrierId: 'xxxxxxxxxxxxxxxxxxxx',
        registration: 0,
        imoNumber: 'hhhh',
        unCode: 'unCode',
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
