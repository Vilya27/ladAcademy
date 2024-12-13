import { Button, Profile, Product } from "@/components";
import React from "react";

const App = () => {
  const isLoggedIn = true;
  return (
    <React.Fragment>
      <Product />
      {/* {isLoggedIn && <Profile />}
      {isLoggedIn ? <Button /> : "no"} */}
    </React.Fragment>
  );
};

export default App;
