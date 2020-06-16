import { MockRequest } from '@co/mock';

const r = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
export const CUSTOMERS = {
  // 支持值为 Object 和 Array
  'GET /customers': (req: MockRequest) => {
    const total = +(req.queryString.total || 100);
    const res: any = {
      list: [],
      total,
    };
    const onlyList = req.queryString!.field === 'list';
    let num = onlyList ? total : +req.queryString.ps;
    if (isNaN(num) || num <= 0) {
      num = total;
    }
    for (let i = 0; i < num; i++) {
      const contacts: any[] = [];
      const length = r(1, 12);
      while (contacts.length < length) {
        contacts.push(r(1, 99));
      }
      res.list.push({
        id: i + 1,
        picture: {
          thumbnail: `https://randomuser.me/api/portraits/thumb/${r(0, 1) === 0 ? 'men' : 'women'}/${r(1, 50)}.jpg`,
        },
        name: `first-${r(10, 20)}last-${r(1, 10)}`,
        gender: ['male', 'female'][i % 2],
        email: `aaa${r(1, 10)}@qq.com`,
        phone: `phone-${r(1000, 100000)}`,
        price: r(10, 10000000),
        contacts: contacts,
        locations: contacts,
      });
    }
    return onlyList ? res.list : res;
  },
};
