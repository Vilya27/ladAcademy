import { ProductCard } from "@/components";
import { useState } from "react";
import { Product } from "@/types/product";
import { default as ChangeCount } from "@/components/ProductCard/components";
type ProductCatalogProps = {
  products: Array<Product>;
  handleChangeCard: (product: Product) => void;
};
const ProductCatalog = ({
  products,
  handleChangeCard,
}: ProductCatalogProps) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          onChangeCard={handleChangeCard}
        />
      ))}
    </>
  );
};
export default ProductCatalog;
