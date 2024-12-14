import { ProductCard } from "@/components";
import { Product } from "@/types/product";
type ProductCatalogProps = {
  products: Array<Product>;
};
const ProductCatalog = ({ products }: ProductCatalogProps) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  );
};
export default ProductCatalog;
