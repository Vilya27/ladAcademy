import { ProductCard } from "@/components";
import { Product } from "@/types/product";
import { CardAction } from "@/pages/components/CatalogPage/types";

type ProductCatalogProps = {
  products: Array<Product>;
  dispatch: React.Dispatch<CardAction>;
};
const ProductCatalog = ({ products, dispatch }: ProductCatalogProps) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          onChangeCard={dispatch}
        />
      ))}
    </>
  );
};
export default ProductCatalog;
