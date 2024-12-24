import { useReducer } from "react";
const initialState = 0;
enum CounterAction {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    RESET = "RESET",
}
const Counter = () => {
    const [state, dispatch] = useReducer ((prevState, action) => {
        switch(action.type) {
            case CounterAction.INCREMENT: 
            return prevState + 1;
            case CounterAction.DECREMENT: 
            return prevState - 1;
            case: CounterAction.RESET:
            return 0;
            default:
                return prevState;
        } 
    }, initialState);
    return (<>
    <div>
        {state}
        <button onClick=({dispatch({type: CounterAction.INCREMENT})}>-</button>
        <button onClick=({dispatch({type: CounterAction.DECREMENT})})>+</button>
    </div>
    </>)
}