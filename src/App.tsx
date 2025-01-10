// import { Button, Profile, ProductCard, ProductCatalog } from "@/components";
// import { CatalogPage } from "@/pages/index";
import React, { useState } from "react";
import { CatalogPage } from "./pages";
import { default as ThemeChanger } from "@/components/ThemeChanger/ThemeChanger";
import { default as MyTest } from "./MyTest/MyTest";
import Timer from "./components/Timer/Timer";
import { Button } from "./components";
import PostsList from "./components/PostsList/PostsList";

const App = () => {
  const [isVisibleTimer, setIsVisibleTimer] = useState(false);
  return (
    <React.Fragment>
      {isVisibleTimer && <PostsList />}

      <Button
        onClick={() => {
          setIsVisibleTimer((prevState) => !prevState);
        }}
      >
        Показать
      </Button>
    </React.Fragment>
  );
};

export default App;
