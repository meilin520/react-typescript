import * as constants from '@/redux/constants';
import { ArticlesResponseType } from '@/types';

export interface GetArticles {
    type: constants.GET_ARTICLES;
    articles: ArticlesResponseType;
}

export type ArticleAction = GetArticles;

export const getArticlesDataAction = (articles: ArticlesResponseType): GetArticles => {
    return {
        type: constants.GET_ARTICLES,
        articles,
    };
}