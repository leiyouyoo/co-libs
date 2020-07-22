/**
 * 客户信息
 */

export class CustomerDto {
  id: string;
  name: string;
  shortName: string;
  localizationName: string;
  localizationShortName: string;
  tel: string;
  fax: string;
  keyWord: string;
  email: string;
  code: string;
  customerType: CustomerType;
  description: string;
  address?: string;
  country?: string;
  localizationCountry?: string;
  province?: string;
  city?: string;
}

/**
 * 客户搜索范围
 */
export enum CustomerSearchScope {
  All = 0,
  User = 1,
  Department = 2,
  Company = 3,
}

/**
 * 客户类型
 */
export enum CustomerType {}

/**
 * 用于搜索客户输出(一般用于下拉框)
 */
export class SearchCustomerOutput {


  /* 全称 */
  name?: string;

  /* 代码 */
  code?: string;

  /* 客户类型
1 = Carrier
2 = AirLine
3 = Forwarding
4 = DirectClient
5 = Trucker
6 = CustomsBroker
7 = WareHouse
8 = Storage
9 = RailWay
10 = Express
11 = Terminal
12 = Other */
  customerType?: number;

  /* 是否默认选中 */
  isDefault?: boolean;


  id?: string;


}
