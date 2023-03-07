export interface ArticlesRequestType {
    author?: string,
    categoryId?: string,
    pageNo: number;
    pageSize: number;
    tagId?: string;
    title?: string;
}

export interface ArticlesType {
    author: string;
    categoryId: string|number;
    categoryName: string;
    content: string;
    createDate: string;
    id: string|number;
    introduction: string;
    tagIds: string;
    tags: string;
    thumbnail: string;
    title: string;
    updateDate: string|null;
    views: number|null;
}

export interface ArticlesStoreState {
    articles: ArticlesType[];
}