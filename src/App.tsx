// import { Button, Profile, ProductCard, ProductCatalog } from "@/components";
// import { CatalogPage } from "@/pages/index";
import React from "react";
import { CatalogPage } from "./pages";
import { default as ThemeChanger } from "@/components/ThemeChanger/ThemeChanger";

const App = () => {
  return (
    <React.Fragment>
      <ThemeChanger />
      <CatalogPage />
    </React.Fragment>
  );
};

export default App;
