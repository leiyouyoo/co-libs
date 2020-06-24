export const SHIPNAME = {
  // 支持值为 Object 和 Array
  'GET /shipname/shipname/GetCustomerByType': () => {
    let data = [
      {
        id: 'abbebcea-11af-41c0-aeb0-61f1c9ad0e4f',
        name: 'COSCO CONTAINER LINES CO., LTD.',
        shortName: 'COSCO',
        localizationName: 'COSCO CONTAINER LINES CO., LTD.',
        localizationShortName: 'COSCO CONTAINER LINES CO., LTD.',
        tel: '1',
        fax: '1',
        keyWord: '中远',
        email: 'email',
        code: 'COSCO',
        customerType: 1,
        isSalesCustomer: false,
      },
      {
        id: '5d083649-ff50-4d27-8b21-1afc9b1d21f9',
        creationTime: '2004-01-17T11:39:24.17Z',
        name: 'NIPPON YUSEN KAISHA LINE',
        shortName: 'NYK',
        localizationName: 'NIPPON YUSEN KAISHA LINE',
        localizationShortName: 'NIPPON YUSEN KAISHA LINE',
        tel: '3',
        fax: '',
        keyWord: 'NYK',
        email: 'email',
        code: 'NYK',
        customerType: 1,
        isSalesCustomer: false,
      },
      {
        id: '872f95c5-0604-4fba-8b8a-db9eac27a228',
        creationTime: '2008-12-29T15:57:56.7633333Z',
        name: 'MATSON NAVIGATION COMPANY ',
        shortName: 'MATSON NAVIGATION',
        localizationName: 'MATSON NAVIGATION COMPANY ',
        localizationShortName: 'MATSON NAVIGATION COMPANY ',
        tel: '53534888',
        fax: '',
        keyWord: '美森轮船',
        email: 'email',
        code: 'MATSON',
        customerType: 1,
        isSalesCustomer: false,
      },
    ];
    const res: any = {
      items: data,
      total: data.length,
    };
    // res.total = res.items.length;
    return res;
  },
};
