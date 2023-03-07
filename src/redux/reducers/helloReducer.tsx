import { EnthusiasmAction } from "../actions/helloAction";
import { HelloStoreState } from "@/types";
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from "@/redux/constants";

const initialState: HelloStoreState = {
    enthusiasmLevel: 1,
    languageName: 'Typescript'
}

export const enthusiasm = (state: HelloStoreState = initialState, action: EnthusiasmAction): HelloStoreState => {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel - 1 };
        default:
            return state;
    }
}