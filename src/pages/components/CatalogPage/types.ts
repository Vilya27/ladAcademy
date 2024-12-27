import { Product } from "@/types/product";
export enum CardActionType {
  ADD_ITEM = "ADD_ITEM ",
  REMOVE_ITEM = "REMOVE_ITEM ",
  CLEAR_CART = "CLEAR_CART",
}
export type CardAction =
  | { type: CardActionType.ADD_ITEM; payload: Product }
  | { type: CardActionType.REMOVE_ITEM; payload: Product }
  | { type: CardActionType.CLEAR_CART; payload: Array<Product> }
  | { type: CardActionType.CLEAR_CART; payload: Product };
