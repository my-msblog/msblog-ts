import request from '@/utils/axios/request';
import { PhoneDTO } from '@/api/sys/model';

enum Api {
  sms = '/code/sms',
  authentication = 'api/authentication',
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
