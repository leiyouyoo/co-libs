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
