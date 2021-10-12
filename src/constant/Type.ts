export function nullArray<T> (): Array<T>{
  return [];
}
interface obj{
  [key: string]: any;
}
export function nullData ( t: obj ): obj{
  return t;
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
