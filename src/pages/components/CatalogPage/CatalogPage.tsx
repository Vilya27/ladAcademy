import { ProductCatalog, Cart } from "@/components";
import PublicLayout from "@/layout/PublicLayout";
import { useState } from "react";
import { Product } from "@/types/product";

const CatalogPage = () => {
  const [products, setProducts] = useState<Array<Product>>([
    {
      id: 1,
      name: "Наручные часы мужские SKMEI 1251",
      imageUrl:
        " https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
      price: 8165,
      discount: 90,
      rating: 4.7,
      isFavorite: false,
      count: 0,
    },
    {
      id: 2,
      name: "Наручные часы мужские SKMEI 1251",
      imageUrl:
        " https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
      price: 8165,
      discount: 90,
      rating: 4.7,
      isFavorite: true,
      count: 1,
    },
  ]);
  const handleChangeCard = (product: Product) => {
    setProducts(
      products.map((item) => {
        if (item.id === product.id) {
          return product;
        }
        return { ...item };
      })
    );
  };
  return (
    <>
      <PublicLayout>
        <section>
          <ProductCatalog
            products={products}
            handleChangeCard={handleChangeCard}
          />
        </section>
        <section>
          <Cart
            products={products}
            onChangeCard={handleChangeCard}
            setProducts={setProducts}
          />
        </section>
      </PublicLayout>
    </>
  );
};
export default CatalogPage;
