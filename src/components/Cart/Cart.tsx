import classes from "./Cart.module.scss";
import { Product } from "@/types/product";
import { default as CartCard } from "./components/CartCard";
import { Button } from "../Button/Button";

type CartProps = {
  products: Array<Product>;
  onChangeCard: (product: Product) => void;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const Cart = ({ products, onChangeCard, setProducts }: CartProps) => {
  const productsCart = new Array<Product>();
  products.forEach((product) => {
    if (product.count && product.count > 0) productsCart.push(product);
  });
  const handleResetCart = () => {
    setProducts((prev) => {
      return prev.map((item) => ({ ...item, count: 0 }));
    });
  };
  return (
    <>
      <div className={classes.containerCart}>
        <div className={classes.headerCart}>
          Корзина
          <div className={classes.resetCart}>
            <Button onClick={handleResetCart}>Очистить корзину</Button>
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
                handleChangeCard={onChangeCard}
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
