import { ImmerReducer } from "use-immer";
import { Product } from "@/types/product";
import { CardAction, CardActionType } from "./types";
export const catalogReducer: ImmerReducer<Array<Product>, CardAction> = (
  draftState,
  action
) => {
  switch (action.type) {
    case CardActionType.ADD_ITEM:
      draftState.forEach((item, idx) => {
        if (item.id === action.payload.id) {
          draftState[idx] = {
            ...item,
            count: item.count ? item.count + 1 : 1,
          };
        }
      });
      break;
    case CardActionType.REMOVE_ITEM:
      draftState.forEach((item, idx) => {
        if (item.id === action.payload.id) {
          draftState[idx] = {
            ...item,
            count: item.count ? item.count - 1 : 0,
          };
        }
      });
      break;
    case CardActionType.CLEAR_CART:
      draftState.forEach((item, idx) => {
        if (action.payload.constructor.name === "Array") {
          if (item.id === action.payload[idx].id) {
            draftState[idx] = {
              ...item,
              count: 0,
            };
          }
        } else {
          if (item.id === action.payload.id) {
            draftState[idx] = {
              ...item,
              count: 0,
            };
          }
        }
      });
      break;
  }
};
