import { ProductCard } from "@/components";
import { Product } from "@/types/product";
type ProductCatalogProps = {
  products: Array<Product>;
};
const ProductCatalog = ({ products }: ProductCatalogProps) => {
  const handleAddCard = () => {
    // alert("Добавлено в корзину");
  };
  return (
    <>
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          onAddCard={handleAddCard}
        />
      ))}
    </>
  );
};
export default ProductCatalog;
