import { combineReducers } from "redux";
import { articles } from './articlesReducer';
import { enthusiasm } from './helloReducer';

export default combineReducers({
    articles,
    enthusiasm,
});