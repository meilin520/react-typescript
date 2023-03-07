
import { ArticleAction } from "../actions/articlesAction";
import { GET_ARTICLES } from "../constants";
import { ArticlesStoreState } from "@/types/articlesType";

const initialState: ArticlesStoreState = {
    articles: []
}

export const articles = (state: ArticlesStoreState = initialState, action: ArticleAction): ArticlesStoreState => {
    switch (action.type) {
        case GET_ARTICLES:
            return { ...state }
        default:
            return state;
    }
}