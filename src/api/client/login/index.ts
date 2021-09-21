import request from '@/utils/axios/request';
import { CaptchaVO } from '@/api/model/login-model';
import { UserVO } from '@/api/model/custom';

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
