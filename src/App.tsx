import { Button, Profile, ProductCard, ProductCatalog } from "@/components";
import React from "react";

const App = () => {
  const isLoggedIn = true;
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
  return (
    <React.Fragment>
      {/* {isLoggedIn && <Profile />}
      {isLoggedIn ? <Button /> : "no"} */}
      <Button
        onClick={() => {
          alert("Кнопка1");
        }}
        message="Этт новое сообщение"
      >
        Кнопка
      </Button>
      <Button
        onClick={() => {
          alert("Кнопка2");
        }}
      >
        Кнопка
      </Button>
      <ProductCatalog products={products} />
    </React.Fragment>
  );
};

export default App;
