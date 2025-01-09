import { CartContext, CartType } from "@/context/CartContext/CartContext";
import { useContext } from "react";
import Switch from "@mui/material/Switch";

export const CartChanger = () => {
  const { cart, setCart } = useContext(CartContext);
  const handleCartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCart((e.target.checked ? "on" : "off") as CartType);
  };
  return (
    <>
      Корзина: {cart}
      <Switch
        inputProps={{ "aria-label": "Switch demo" }}
        defaultChecked
        onChange={handleCartChange}
      />
    </>
  );
};
