export interface ArticleCardVO {
  id: number,
  title: string,
  content: string,
  cover: string,
  typeName: string,
  createTime: string,
  tagVOList: Array<TagVO>,
}

export interface TagVO{
  tagId: number,
  name: string,
  nameZh: string,
}