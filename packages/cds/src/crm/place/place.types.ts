/**
 * 客户信息
 */

export class PlaceDto {
  code: string;
  creationTime: string;
  creatorUserName: string;
  id: string;
  isAir: boolean;
  isOcean: boolean;
  isOther: boolean;
  isValid: boolean;
  name: string;
  nameLocalization: string;
  regionId: string;
  regionName: string;
}

/**
 * 地址类型
 */
export enum PlaceType {}
