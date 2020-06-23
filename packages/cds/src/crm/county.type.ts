/**
 * 客户信息
 */

export class CountyDto {
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
  description: string;
  address?: string;
  country?: string;
  localizationCountry?: string;
  province?: string;
  city?: string;
}
