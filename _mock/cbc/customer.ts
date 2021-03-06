import { MockRequest } from '@co/mock';
// import * as Mock from 'mockjs';

function setupData(num: number): any[] {
  const items: any[] = [];
  for (let i = 0; i < num; i++) {
    items.push({
      id: i + 1,
      name: `name-${i + 1}`,
      shortName: `shortName-${i + 1}`,
      localizationName: `localizationName-${i + 1}`,
      localizationShortName: `localizationShortName-${i + 1}`,
      tel: `tel-${i + 1}`,
      fax: `fax-${i + 1}`,
      keyWord: `keyWord-${i + 1}`,
      email: `email-${i + 1}`,
      code: `code-${i + 1}`,
      customerType: `customerType-${i + 1}`,
      description: `description-${i + 1}`,
      address: `address-${i + 1}`,
      country: `country-${i + 1}`,
      localizationCountry: `localizationCountry-${i + 1}`,
      province: `province-${i + 1}`,
      city: `city-${i + 1}`,
    });
  }

  return items;
}

const CUSTOMERS_DATA = setupData(100);

export const CUSTOMERS = {
  // 支持值为 Object 和 Array
  'POST /crm/customer/GetAllForUiPicker': (req: MockRequest) => {
    const res: any = {
      items: [],
      total: 0,
    };

    const items: any[] = CUSTOMERS_DATA;
    if (req.body.ids) {
      res.items = items.filter(item => {
        return req.body.ids.includes(item.id);
      });
    } else {
      res.items = items
        .filter(item => {
          return !req.body.searchText || item.name.includes(req.body.searchText);
        })
        .slice(req.body.skipCount, req.body.skipCount + req.body.maxResultCount);
    }

    res.total = res.items.length;

    return res;
  },
};
