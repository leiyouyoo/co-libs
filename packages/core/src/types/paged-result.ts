export class PagedResultDto<T> {
  items: T[];
  totalCount: number;
}

export class ListResultDto<T> {
  items: T[];
}

export class EntityDto<T> {
  items: T;
}

export class NameValueDto<T> {
  name: T;
  value: T;
}

export class OwnerLessPagedResultDto<T> {
  isSuperior:boolean;
  totalCount:number;
  items:T[]
}
