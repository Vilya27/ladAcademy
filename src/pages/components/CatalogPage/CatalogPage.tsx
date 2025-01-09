import { ProductCatalog, Cart } from "@/components";
import PublicLayout from "@/layout/PublicLayout";
import { initialState } from "./initialState";
import { useImmerReducer } from "use-immer";
import { catalogReducer } from "./reducer";
import { clsx } from "clsx";
import { useContext } from "react";
import { useThemeContext } from "@/hooks/useThemeContext";
import classes from "./CatalogPage.module.scss";
import { CartContext } from "@/context/CartContext/CartContext";
import { CartChanger } from "@/components/CartChanger/CartChanger";

const CatalogPage = () => {
  const [state, dispatch] = useImmerReducer(catalogReducer, initialState);
  const { theme } = useThemeContext();
  const { cart } = useContext(CartContext);
  return (
    <>
      Текущая тема: {theme}
      <PublicLayout>
        <section className={clsx(classes[`theme__${theme}`])}>
          <ProductCatalog products={state} dispatch={dispatch} />
        </section>
        <section className={clsx(classes[`theme__${theme}`])}>
          <CartChanger />
          {cart == "on" && <Cart products={state} dispatch={dispatch} />}
        </section>
      </PublicLayout>
    </>
  );
};
export default CatalogPage;
