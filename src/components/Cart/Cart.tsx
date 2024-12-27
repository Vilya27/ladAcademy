import classes from "./Cart.module.scss";
import { Product } from "@/types/product";
import { default as CartCard } from "./components/CartCard";
import { CardAction } from "@/pages/components/CatalogPage/types";
import { Button } from "../Button/Button";
import { CardActionType } from "@/pages/components/CatalogPage/types";

type CartProps = {
  products: Array<Product>;
  dispatch: React.Dispatch<CardAction>;
};

const Cart = ({ products, dispatch }: CartProps) => {
  const productsCart = new Array<Product>();
  products.forEach((product) => {
    if (product.count && product.count > 0) {
      productsCart.push(product);
    }
  });

  return (
    <>
      <div className={classes.containerCart}>
        <div className={classes.headerCart}>
          Корзина
          <div className={classes.resetCart}>
            <Button
              onClick={() => {
                dispatch({
                  type: CardActionType.CLEAR_CART,
                  payload: products,
                });
              }}
            >
              Очистить корзину
            </Button>
          </div>
        </div>
        <table className={classes.tableCart}>
          <thead>
            <tr>
              <th>id</th>
              <th>Название</th>
              <th>Цена</th>
              <th>Количество</th>
            </tr>
          </thead>

          <tbody>
            {productsCart.map((product) => (
              <CartCard
                product={product}
                dispatch={dispatch}
                key={product.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Cart;
