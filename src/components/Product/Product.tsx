import classes from "./Product.module.scss";

const Product = () => {
  const product = {
    id: 1,
    name: "Наручные часы мужские SKMEI 1251",
    imageUrl:
      " https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
    price: 8165,
    discount: 90,
    rating: 4.7,
    isFavorite: false,
  };
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

export default Product;
