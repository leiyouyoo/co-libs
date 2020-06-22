export type BooleanInput = boolean | string | undefined | null;
export type NumberInput = number | string | undefined | null;
export type LoadMode = 'search' | 'more';
export type DropdownMode = 'table' | 'custom' | 'default';

export interface DropdownColumn {
  name: string;
  label: string;
  width: number;
}

export type DropdownPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';