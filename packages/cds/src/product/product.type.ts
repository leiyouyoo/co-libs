
export class ProductDto {
  name: string;
  sku: string;
  url: string;
  properties: Array<PropertiesDto>;
  classifications: Array<ClassificationsDto>;
  unitsInTransit: number;
  activeShipments: number;
  imageId: string;
  id: string;
}

export class PropertiesDto {
  type: string;
  value: string;
}

export class ClassificationsDto {
  regionId: string;
  regionName: string;
  codes: Array<string>;
  justification: string;
  id: string;
}

