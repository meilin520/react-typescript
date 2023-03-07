import { ArticlesRequestType, ArticlesResponseType, ArticlesType, ArticlesStoreState } from "./articlesType";
import { HelloStoreState } from "./helloType";

export type IntersectionStateType = {
    articles: ArticlesStoreState,
    enthusiasm: HelloStoreState,
}

export type {
    ArticlesRequestType,
    ArticlesResponseType,
    ArticlesType,
    ArticlesStoreState
}

export type {
    HelloStoreState
}