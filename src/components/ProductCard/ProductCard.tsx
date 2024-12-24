import classes from "./Product.module.scss";
import { FC, useState } from "react";
import { Product } from "@/types/product";
import { Button } from "@/components";
import { default as ChangeCount } from "./components/ChangeCount";

type ProductProps = {
  product: Product;
  type?: "default" | "sale";
  onChangeCard: (product: Product) => void;
};

const ProductCard = ({ product, onChangeCard }: ProductProps) => {
  const { price, isFavorite, rating, discount, count } = product;
  const handleAddCard = () => {
    onChangeCard({
      ...product,
      count: product.count ? product.count + 1 : 1,
    });
  };
  const handleDecrementCard = () => {
    onChangeCard({
      ...product,
      count: product.count && product.count > 0 ? product.count - 1 : 0,
    });
  };
  const handleFavoriteClick = () => {
    onChangeCard({
      ...product,
      isFavorite: !product.isFavorite,
    });
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
