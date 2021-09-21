import request from '@/utils/axios/request';
import { PageInfo } from '@/constant/PageInfo';

interface FileSimpleVO{
  fileName: string;
  time: string;
}
export function text(){
  return request.post<PageInfo<FileSimpleVO>>('/log/page');
}
