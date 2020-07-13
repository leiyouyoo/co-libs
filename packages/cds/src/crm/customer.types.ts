/**  * 客户信息  */ export class CustomerDto {
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
/**  * 客户类型  */ export enum CustomerType {}
