import { createStore } from "redux";
import { enthusiasm } from './reducers';
import { StoreState } from "@/types";


const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'Typescript'
});

export default store;