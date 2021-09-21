import request from '@/utils/axios/request';
import { IdDTO } from '@/api/model/custom';
import { BaseDTO } from '@/api/model/core';
enum Api {
  page = '/account/user/page',
  delete = '/user/remove',
  deleteList = '/user/remove/list',
}

export function adminUserPage(params: BaseDTO) {
  return request.post({
    url: Api.page,
    params,
  });
}

export function deletedUser(params: IdDTO) {
  return request.post({
    url: Api.delete,
    params,
  });
}

export function deleteList(idList: IdDTO) {
  return request.post({
    url: Api.deleteList,
    params: idList,
  });
}
