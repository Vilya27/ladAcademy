// import { Button, Profile, ProductCard, ProductCatalog } from "@/components";
// import { CatalogPage } from "@/pages/index";
import React, { useState } from "react";
import { Button, ProductCard } from "./components";
import PostsList from "./components/PostsList/PostsList";
import PublicLayout from "./layout/PublicLayout";

const App = () => {
  const [isVisibleTimer1, setIsVisibleTimer1] = useState(false);
  const [isVisibleTimer2, setIsVisibleTimer2] = useState(false);
  return (
    <React.Fragment>
      <PublicLayout>
        {isVisibleTimer1 && <PostsList />}
        <Button
          onClick={() => {
            setIsVisibleTimer1((prevState) => !prevState);
          }}
        >
          Показать
        </Button>
      </PublicLayout>
      <PublicLayout>
        {isVisibleTimer2 && <PostsList />}
        <Button
          onClick={() => {
            setIsVisibleTimer2((prevState) => !prevState);
          }}
        >
          Показать
        </Button>
      </PublicLayout>
    </React.Fragment>
  );
};

export default App;
