export class CoEvent<T = any> {
  readonly type: coEventType;
  readonly value?: T;

  constructor(type: coEventType, value?: T) {
    this.type = type;
    this.value = value;
  }
}

enum SimpleEventType {
}

export type coEventType = SimpleEventType | string;
