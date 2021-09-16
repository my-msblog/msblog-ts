
const sexEnum = {
  0: '女',
  1: '男',
};

export enum sex {
  FEMALE = 0,
  MALE = 1,
}

export function getSex(id: number):string{
  return sexEnum[id];
}
