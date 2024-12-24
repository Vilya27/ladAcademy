import { Reducer } from "react";
import { CounterAction, CounterActionType, CounterType } from "./types";

export const counterReducer: Reducer<CounterType, CounterAction> = (
  state,
  action
) => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return { ...state, counter: state.counter + action.payload };
    case CounterActionType.DECREMENT:
      return { ...state, counter: state.counter - action.payload };
    case CounterActionType.RESET:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};
