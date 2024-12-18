import { ProductCatalog } from "@/components";
import PublicLayout from "@/layout/PublicLayout";
const products = [
  {
    id: 1,
    name: "Наручные часы мужские SKMEI 1251",
    imageUrl:
      " https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
    price: 8165,
    discount: 90,
    rating: 4.7,
    isFavorite: false,
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
  },
];

const CatalogPage = () => {
  return (
    <>
      <PublicLayout>
        <section>
          <ProductCatalog products={products} />
        </section>
      </PublicLayout>
    </>
  );
};
export default CatalogPage;
