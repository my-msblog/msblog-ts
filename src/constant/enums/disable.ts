

export enum Status{
  true = 0,
  fales = 1,
}
export function getStatus(status: number | string | boolean | Status): boolean{
  if(typeof status === 'number'){
    return !!status;
  }
  return false;
}
