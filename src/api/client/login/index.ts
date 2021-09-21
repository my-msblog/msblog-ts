import request from '@/utils/axios/request';
import { UserVO, CaptchaVO } from '@/api/client/login/model';

enum Api {
  login = '/login',
  spec = '/code/captcha/spec',
  arithmetic = '/code/captcha/arithmetic',
}

export function loginByPwd(params: any) {
  return request.get<UserVO>({
    url: Api.login,
    params,
  });
}
export function getSpecCode() {
  return request.get<CaptchaVO>({
    url: Api.spec
  });
}
export function getArithmeticCode() {
  return request.get<CaptchaVO>({
    url: Api.arithmetic
  });
}
