import { CounterAction, CounterActionType } from "./types";
export const incrementCounter = (value: number): CounterAction => ({
  type: CounterActionType.INCREMENT,
  payload: value,
});
export const decrementCounter = (value: number): CounterAction => ({
  type: CounterActionType.DECREMENT,
  payload: value,
});
export const resetCounter = (): CounterAction => ({
  type: CounterActionType.RESET,
});
