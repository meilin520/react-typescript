import Hello from "../Hello";
import { HelloStoreState, IntersectionStateType } from "@/types";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { EnthusiasmAction, incrementEnthusiasm, decrementEnthusiasm } from '@/redux/actions';

const mapStateToProps = (state: IntersectionStateType ) => {
    const { enthusiasmLevel, languageName }: HelloStoreState = state.enthusiasm;
    return {
        enthusiasmLevel,
        name: languageName,
    };
}

const mapDispatchToProps = (dispatch: Dispatch<EnthusiasmAction>) => {
    return {
        onIncrement: () => dispatch(incrementEnthusiasm()),
        onDecrement: () => dispatch(decrementEnthusiasm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);