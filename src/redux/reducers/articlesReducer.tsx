import { ArticleAction } from "../actions";
import { ArticlesStoreState } from "@/types";
import { GET_ARTICLES } from "@/redux/constants";

const initialState: ArticlesStoreState = {
    articles: {
        list: [],
        total: 0,
    },
}

export const articles = (state: ArticlesStoreState = initialState, action: ArticleAction): ArticlesStoreState => {
    switch (action.type) {
        case GET_ARTICLES:
            return { ...state, articles: action.articles };   
        default:
            return state;
    }
}
