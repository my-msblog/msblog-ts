import request from '@/utils/axios/request';
import { IdDTO } from '@/api/model/custom';
import { BaseDTO, PageInfo } from '@/api/model/core';
import { UserProfileVO } from '@/api/model/admin/user-profile-model';
enum Api {
  page = '/account/user/page',
  delete = '/user/remove',
  deleteList = '/user/remove/list',
}

export function adminUserPage(params: BaseDTO) {
  return request.post<PageInfo<UserProfileVO>>({
    url: Api.page,
    data: params,
  });
}

export function deletedUser(params: IdDTO) {
  return request.post<string>({
    url: Api.delete,
    data: params,
  });
}

export function deleteList(idList: IdDTO) {
  return request.post<string>({
    url: Api.deleteList,
    data: idList,
  });
}
