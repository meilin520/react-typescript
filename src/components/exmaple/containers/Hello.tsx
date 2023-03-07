import Hello from "../Hello";
import { HelloStoreState } from "@/types";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { EnthusiasmAction, incrementEnthusiasm, decrementEnthusiasm } from '@/redux/actions/helloAction';

const mapStateToProps = ({ enthusiasmLevel, languageName }: HelloStoreState) => {
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