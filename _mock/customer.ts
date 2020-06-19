import { MockRequest } from '@co/mock';

const r = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
const totalCount = 200;
const list: any[] = [];
for (let i = 0; i < totalCount; i++) {
  const contacts: any[] = [];
  const length = r(1, 12);
  while (contacts.length < length) {
    contacts.push(r(1, 99));
  }
  list.push({
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
export const CUSTOMERS = {
  // 支持值为 Object 和 Array
  'GET /customers': () => {
    const res: any = {
      items: list,
      totalCount,
    };
    return res;
  },
  'GET /GetAllBySearch': (req: MockRequest) => {
    const count = +(req.queryString.maxResultCount || 10);
    const skipCount = +(req.queryString.skipCount || 0);
    const res: any = {
      items: list.filter(item => item.name.includes('name') || item.id.includes('name')).slice(skipCount, count),
      totalCount,
    };
    return res;
  },
};
