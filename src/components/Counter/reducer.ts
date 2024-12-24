import { Reducer } from "react";
import { CounterAction, CounterActionType, CounterType } from "./types";
import { ImmerReducer } from "use-immer";
import { initialState } from "./initialState";

export const counterReducer: ImmerReducer<CounterType, CounterAction> = (
  draftState,
  action
) => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      draftState.counter += action.payload;
      break;
    case CounterActionType.DECREMENT:
      draftState.counter -= action.payload;
      break;
    case CounterActionType.RESET:
      return initialState;
  }
};
