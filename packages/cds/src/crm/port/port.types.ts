export class PortDto {
  placeId: string;
  name: string;
  regionIds: any[];
  isOcean: boolean;
  isAir: boolean;
  isAirOrOcean:  boolean;
  isOther:  boolean;
  isCity:  boolean;
  isValid:  boolean;
  isPaged:  boolean;
  sorting: string;
  maxResultCount: number;
  skipCount:  number;
}
