import * as constants from '@/redux/constants';
import { ArticlesType } from '@/types';

export interface GetArticles {
    type: constants.GET_ARTICLES;
    articles: ArticlesType[]
}

export type ArticleAction = GetArticles;

export const getArticlesDataAction = (articles: ArticlesType[]): GetArticles => {
    return {
        type: constants.GET_ARTICLES,
        articles
    };
}

export default {
    getArticlesDataAction
}