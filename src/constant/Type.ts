export function nullArray<T> (): Array<T>{
  return [];
}
export function nullData<T> (): Record<string, never>{
  return {};
}
export interface functionType{
  (): void;
}
export interface functionTypeOfString{
  (): string;
}
export interface functionTypeOfNumber{
  (): number;
}
export interface functionTypeOfArray<T>{
  (): Array<T>;
}
export interface functionTypeBase<T>{
  (): T;
}

export interface BaseOptions<T>{
  value?: string | number | T;
  label?: string | number | T;
  [key: string]: any;
}
