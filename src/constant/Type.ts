
export interface functionType{
  (): functionTypeBase<void>;
}
export interface functionTypeOfString{
  (): functionTypeBase<string>;
}
export interface functionTypeOfNumber{
  (): functionTypeBase<number>;
}
export interface functionTypeOfArray<T>{
  (): functionTypeBase<Array<T>>;
}
export interface functionTypeBase<T>{
  (): T;
}
