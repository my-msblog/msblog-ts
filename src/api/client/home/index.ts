import { ArticleCardVO } from '../../model/client/home';
import { BaseDTO, PageInfo } from '@/api/model/core';
import requset from '@/utils/axios/request';

enum Api {
  articlePages = '/client/article/page',
}

export function getArticlePage(dto : BaseDTO){
  return requset.post<PageInfo<ArticleCardVO>>({
    url: Api.articlePages,
    data: dto,
  });
}
