import { createStore } from "redux";
import {enthusiasm} from './reducers/helloReducer';

const store = createStore(enthusiasm);

export default store;