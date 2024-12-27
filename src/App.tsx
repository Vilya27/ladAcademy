// import { Button, Profile, ProductCard, ProductCatalog } from "@/components";
// import { CatalogPage } from "@/pages/index";
import React from "react";
import { CatalogPage } from "./pages";
import { default as Counter } from "@/components/Counter/Counter";

const App = () => {
  return (
    <React.Fragment>
      <CatalogPage />
      {/* <Counter /> */}
    </React.Fragment>
  );
};

export default App;
