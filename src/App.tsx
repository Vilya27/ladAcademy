// import { Button, Profile, ProductCard, ProductCatalog } from "@/components";
// import { CatalogPage } from "@/pages/index";
import React from "react";
import { CatalogPage } from "./pages";
import { default as ThemeChanger } from "@/components/ThemeChanger/ThemeChanger";
import { default as MyTest } from "./MyTest/MyTest";

const App = () => {
  return (
    <React.Fragment>
      <MyTest></MyTest>
      <ThemeChanger />
      <CatalogPage />
    </React.Fragment>
  );
};

export default App;
