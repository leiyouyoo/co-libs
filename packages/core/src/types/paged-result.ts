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
