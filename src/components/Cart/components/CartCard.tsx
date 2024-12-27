import { Button } from "@/components";
import { Product } from "@/types/product";
import classes from "../Cart.module.scss";
import {
  CardAction,
  CardActionType,
} from "../../../pages/components/CatalogPage/types";
type CartCardProps = {
  product: Product;
  dispatch: React.Dispatch<CardAction>;
};
const CartCard = ({ product, dispatch }: CartCardProps) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price * product.count}</td>
      <td>
        <Button
          onClick={() => {
            dispatch({ type: CardActionType.REMOVE_ITEM, payload: product });
          }}
        >
          -
        </Button>
        {product.count}

        <Button
          onClick={() => {
            dispatch({ type: CardActionType.ADD_ITEM, payload: product });
          }}
        >
          +
        </Button>
      </td>
      <td>
        <Button
          onClick={() => {
            dispatch({ type: CardActionType.CLEAR_CART, payload: product });
          }}
        >
          <img
            src="https://avatars.mds.yandex.net/i?id=3b1703fd84e3538cc9ac7a39900ce73112c429e4-12310327-images-thumbs&n=13"
            alt="удалить товар"
            className={classes.trashCart}
          />
        </Button>
      </td>
    </tr>
  );
};
export default CartCard;
