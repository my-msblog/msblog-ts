import request from '@/utils/axios/request';
import { MenuVO, PhoneDTO } from '@/api/model/sys-model';

enum Api {
  sms = '/code/sms',
  authentication = 'api/authentication',
  menu = '/info/menu',
}

export function getSMS(dto: PhoneDTO) {
  return request.post<string>({
    url: Api.sms,
    params: dto
  });
}
export function authentication() {
  return request.post<string>({
    url: Api.authentication,
  });
}
export function getMenu() {
  return request.post<Array<MenuVO>>({
    url: Api.menu,
  });
}
