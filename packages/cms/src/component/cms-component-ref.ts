import { ComponentRef } from '@angular/core';

export class CmsComponentRef<TData = any> {
  wrapperElement: HTMLElement;
  componentInstance: TData;
  componentRef: ComponentRef<TData>;
  dispose: () => void;
}
