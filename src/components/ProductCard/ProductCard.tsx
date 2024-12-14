import classes from "./Product.module.scss";
import { FC } from "react";
import { Product } from "@/components/types/product";

type ProductProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductProps) => {
  // const { product } = props;
  // if (product.id != 1) {
  //   return "asdfas";
  // }
  const imgHeartRed =
    "https://i.pinimg.com/736x/c6/ad/36/c6ad365e4e02ded1e1ec801a3ec03fad.jpg";
  const imgHeartNone =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Heart_empty_font_awesome.svg/2048px-Heart_empty_font_awesome.svg.png";
  return (
    <>
      <table className={classes.table}>
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
                <img src={product.imageUrl} alt="наручные часы" />
                {product.name}
              </div>
            </td>
            <td>{product.price}</td>
            <td>{product.discount}</td>
            <td>{product.rating}</td>
            <td className={classes.hidden}>
              {product.isFavorite ? (
                <img src={imgHeartRed} alt="нравится" />
              ) : (
                <img src={imgHeartNone} alt="не нравится" />
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ProductCard;
