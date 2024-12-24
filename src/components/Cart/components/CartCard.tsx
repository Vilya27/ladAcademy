import { Button } from "@/components";
import { Product } from "@/types/product";
import classes from "../Cart.module.scss";

type CartCardProps = {
  product: Product;
  handleChangeCard: (product: Product) => void;
};
const CartCard = ({ product, handleChangeCard }: CartCardProps) => {
  const handleDecrementCartCard = () => {
    handleChangeCard({
      ...product,
      count: product.count && product.count > 0 ? product.count - 1 : 0,
    });
  };
  const handleAddCartCard = () => {
    handleChangeCard({
      ...product,
      count: product.count && product.count > 0 ? product.count + 1 : 1,
    });
  };
  const handleDeleteCartCard = () => {
    handleChangeCard({
      ...product,
      count: 0,
    });
  };
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price * product.count}</td>
      <td>
        <Button onClick={handleDecrementCartCard}>-</Button>
        {product.count}
        <Button onClick={handleAddCartCard}>+</Button>
      </td>
      <td>
        <Button onClick={handleDeleteCartCard}>
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
