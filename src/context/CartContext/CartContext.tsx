import { createContext } from "react";
export type CartType = "on" | "off";
export type ThemeContextType = {
  cart: CartType;
  setCart: React.Dispatch<React.SetStateAction<CartType>>;
};

export const CartContext = createContext<ThemeContextType>({
  cart: "on",
  setCart: () => {},
});
