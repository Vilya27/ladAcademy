import { useReducer, useState } from "react";
import { useImmerReducer } from "use-immer";
import { initialState } from "./initialState";
import { counterReducer } from "./reducer";
import { incrementCounter, decrementCounter, resetCounter } from "./actions";
const Counter = () => {
  const [state, dispatch] = useImmerReducer(counterReducer, initialState);
  const [value, setValue] = useState<number>(0);
  return (
    <div>
      {state.counter}
      <input
        type="number"
        value={value}
        onChange={(event) => {
          setValue(Number(event.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(incrementCounter(value));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrementCounter(value));
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(resetCounter());
        }}
      >
        Clear
      </button>
    </div>
  );
};
export default Counter;
