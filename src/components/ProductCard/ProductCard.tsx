import classes from "./Product.module.scss";
import { Product } from "@/types/product";
import { Button } from "@/components";
import { default as ChangeCount } from "./components/ChangeCount";
import {
  CardActionType,
  CardAction,
} from "@/pages/components/CatalogPage/types";

type ProductProps = {
  product: Product;
  type?: "default" | "sale";
  onChangeCard: React.Dispatch<CardAction>;
};

const ProductCard = ({ product, onChangeCard }: ProductProps) => {
  const { price, isFavorite, rating, discount, count } = product;
  const handleAddCard = () => {
    onChangeCard({ type: CardActionType.ADD_ITEM, payload: product });
  };
  const handleDecrementCard = () => {
    onChangeCard({ type: CardActionType.REMOVE_ITEM, payload: product });
  };
  const handleFavoriteClick = () => {
    console.log("doesnt work");
  };
  const imgHeartRed =
    "https://i.pinimg.com/736x/c6/ad/36/c6ad365e4e02ded1e1ec801a3ec03fad.jpg";
  const imgHeartNone =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Heart_empty_font_awesome.svg/2048px-Heart_empty_font_awesome.svg.png";
  return (
    <>
      <table className={classes.productCard}>
        <thead>
          <tr>
            <th>Название</th>
            <th>Цена</th>
            <th>Скидка</th>
            <th>Рейтинг</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={classes.align}>
                <img
                  src={product.imageUrl}
                  alt="наручные часы"
                  className={classes.iconProduct}
                />
                {product.name}
              </div>
            </td>
            <td>{price}</td>
            <td>{discount}</td>
            <td>{rating}</td>
            <td className={classes.hidden}>
              {isFavorite ? (
                <Button onClick={handleFavoriteClick}>
                  <img
                    src={imgHeartRed}
                    alt="нравится"
                    className={classes.favoriteProduct}
                  />
                </Button>
              ) : (
                <Button onClick={handleFavoriteClick}>
                  <img
                    src={imgHeartNone}
                    alt="не нравится"
                    className={classes.favoriteProduct}
                  />
                </Button>
              )}
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <Button onClick={handleAddCard}>Добавить в корзину</Button>
              {count && count > 0 ? (
                <ChangeCount
                  count={count}
                  onAdd={handleAddCard}
                  onDecrement={handleDecrementCard}
                />
              ) : null}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ProductCard;
