export interface UserVO {
  id: number;
  username: string;
  phone: string;
  email: string;
  token: string;
  introduction: string;
  sex: number;
  createTime: string;
}

export interface CaptchaVO{
  key: string;
  img: string;
}
